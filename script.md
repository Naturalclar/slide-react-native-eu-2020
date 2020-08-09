Hello everyone, thanks for tuning in. My name is Jesse, and I’m here to talk about the Visual Regression Test in React Native.

---

Here's our agenda for this session.
First, I'll be giving a little introduction of myself, then I'll be going through what visual regression test is all about, and how it can be performed on a react-native project. Then I will conclude the session by showing an actual demo of the visual regression test using a tool called Reg-suit.

Hopefully that sounds interesting to you. So let's get started.

---

First, let me quickly introduce myself. Again, my name is Jesse Katsumata, and I'm currently living in Japan, working as a front end engineer at a company called CureApp. You can also find me at twitter or github as Naturalclar.

I've been developing with React Native for the past 2 years or so, and I absolutely fell in love with it. I've been keeping up the with latest updates, and I've been sending small pull requests to the community repos and documents which eventually got me to joining the react-native community, where I maintain some of the lean core modules for react-native.

I also love helping out with other open source communities. I've been helping out with stuff like Japanese translations for the React, Gatsby.js, and TypeScript documentations, and I've making bunch of fixes to several repositories including react-native.

---

The company I work for, CureApp, is a leading medtech startup in Tokyo, Japan. In CureApp, we are building digital therapeucal apps to provide medical treatment to people, with the power of technology. In CureApp, we write everything in TypeScript. That is, we write our web applications using React, our servers are running on node.js, and even our infrastructures are set up using TypeScript with AWS CDK. And ofcourse, our mobile applications are built using React Native.

---

As our applications deal with human's well being, we take our testing very seriously to make sure our apps work the way we intended to. I've mentioned that everything is written in TypeScript, so all our code base are Type safe. We also perform unit tests for the business logics, and integration tests for our apis, and we perform UI testing for our pages and components. For today's session, I'll be focusing more on the UI testing, which the Visual Regression Test takes part in.

---

So the UI Testing. When you're working on a big project with multiple people, have you ever felt scared about making a change in a file that already exists? You may think that you've found the right file to solve a particular problem, but you never know if that change will affect something else in your project. Having a test case for your project will let you confidently change any existing file, and not worry too much about the effects, as long as the tests are there to protect your code. UI Testing is part of that, as the name suggest, it aims to test the user interface of an application.
It tests the functionality of parts of application that can be physically seen by the user.

---

Here are some examples of UI Testing, if you were to perform an UI test on a Login Page of an application, you'd want to make sure that the Login Page contains all the aspects for users to be able to Login, no matter what changes you make in the code. You'll probably want an input form for user's email, and another input form for users to enter their password, and a login button for the user to press once they're done entering their login info. You'd probably also want to verify the login button is disabled if user's email or password is empty, and it's also nice to test that the Login Page shows a loading state while the user awaits for their verification. And, since it's test for UI, you'd want to make sure that the Login Page visually looks the way you intended to be.

---

As you can see, there are many different aspects of UI testing. And it can be categorized further to different tests like Snapshot testing, Interaction Testing, and the today's topic, the visual regression testing. Let me briefly go through what each of these tests do.

---

Snapshot test in react or react-native is where you take a component and save the dom structure of it, so that whenever there is a change to the component, the testing framework can report the difference it made in the dom structure. Snapshot tests are very useful, when you want to see that the particular change you're making only affects the specific page you're trying to change, and not affecting other pages unexpectedly.

---

Interaction test takes the page component, and emulate what the user would do in that page to make sure the page performs correctly.
For example, if an user tries to login with an incorrect format of email address, the user should see an error message, and not run the login api. If the user do enter the correct information, you'd want to make sure that the information they entered are properly passed down to the api.
The interaction tests are be useful when making sure that change in your logic doesn't cause the userflow to break.

Both snapshot testing and interaction testing can be performed in react-native projects using a testing framework like jest with tools like react-native-testing-library. react-native-testing-library is an awesome library, and I highly recommend checking it out.

---

And finally, let me talk about the visual regression test.
Unlike the previously mentioned tests which deals with more of a logic part of the code, the visual regression test solely focuses on how the component visually looks.
When a visual regression test is setup for your project, every time there a pull request that contains a change in the component, it takes a screenshot of the component, and compares it to how it looked before the change. Most visual regression testing tools has an option to display the component side by side to see the difference, or it can also stack the two screenshots, and highlight only the part that has been changed, so you can tell exactly where the component has changed.

That's the basic idea of a visual regression test.

---

So what makes the Visual Regression Test, or UI Testing in general, so important?
I mean, if you just made your component, then it obviously looks and works the way you intended to be, so why would you bother adding a tool that checks what you just made?

---

Well, what's true about testings in general, is that these tests exists to make sure that what you've made works, and that it continues to work the way you intended to, even after going through many changes in your code. As your projects gets bigger and bigger, and people working on the code get's switched around, it gets harder and harder to keep track of all the effects that will be caused bt the change in your code. Also, one day, you may feel like your code base is getting a little outdated, and you may want to refactor out your codes. You may also be using some component library from third-parties, you'd like to upgrade it to the latest version, but the library may contain breaking changes to your code, so you'd feel uneasy about blindly making an update. Having test cases set up means that you can make your changes to your code confidently. \*
Also, by having these tests set up, you can have your apps support dark mode with confidence.

—-

Let me talk a little about supporting dark mode for your application. With the new appearance api that has been available since react native version 0.62, you are able to check the user's general preference of their app's appearance, allowing you to show the users the app in light mode or darkmode, according to their preference.

---

But supporting dark mode means that there are simply twice as many possible screens to verify in your app. You may forget to apply font colors for your dark mode in certain parts of your screen, making that text unreadable in dark mode. By having visual regression test for both light mode and dark mode will allow you to catch those mistakes quickly.

---

Here's an example of visual regression test. Let’s say you have a button in your signup page that you feel is a little small, so you’d like to make it a little bigger. So the user will have an easier time pressing the button.

---

Since the signup page is using a Primary Button component, which takes in a label and display the button, you might go in to the Primary button component, and see that it has the width of 150.

---

You change the width of the button to something bigger like 240, and voila, your signup page looks the way you want it to be. You may commit the change, feel good about yourself, and get ready to go home.

---

But you fail to realize that primary button was also used in the login page of the app, which has login button and a register button side by side. Since both of them were using the primary button component that you've changed, now the buttons won't fit on the screen.

Your pull request you've made only contains change in the primary button component, so it maybe hard to tell from the first glance that the layout of the login page has change unexpectedly.

That may have been a simple example that are unlikely to occur in a real life situation, but as the project gets bigger, small changes like that will be more likely to occur.
So that's when having a visual regression test will help, as the CI will automatically catches cases like that.

---

So how do I perform visual regression test with a react native project?

---

Reg-suit.

---

[Reg-suit](https://reg-viz.github.io/reg-suit/) is a testing tool for visual regression test.
This tool will allow you store a series of screenshots of your components in an external cloud storage like AWS S3 or Google Cloud Storage, and every time there is a new pull request in the repository you integrate with, it will make a comparison of the screenshots of the parent branch and a new branch.

It will automatically create a report, listing which screenshot has been modified, which screenshot has been newly added, and which screenshot has been deleted.

In order to take screenshots of all of your components, there are several tools you can use.

---

The tool I use to get all the screenshots of the component, is called Storycap, which is made by the same creator of Reg-suit, and it can be integrated with Storybook, another testing tool that will let you list all the components in your application.

Storybook has support for both react applications and react-native applications, but I use the web version of storybook with my react-native components, using react-native for web.

Using react-native for web with storybook has other benefits, as it allows me to write new components much faster, and you don't have to wait for your emulator to start up.

If there are other ways to take screenshots of your components in an android or iOS emulators, that can also be integrated with Reg-suit as well.

--

Let's get into the Demo.

Here is a storybook for minimal design system repository that I made for my react native projects. It has some base level components that are meant to be used to compose components for a bigger project. For this demo's purpose, I'm going to modify this Round Button Outline component, and create a new pull request to trigger the reg-suit.

So here's the file for the RoundButtonOutline Component. It is a simple button component with set styles that takes in a label for the button to display. I'm going to change the label part to say React Native is Awesome! no matter what label prop it receives. I'm also going change the border radius a little, so that the shape of button will change.

Then I'm going to create a new branch with this change and create a new pull request.

I'll give it a few minutes to get the CI running.
Mean while, let me show you the github action setup.
(Show github action config)

I have a github action setup for this repository, and here I'm run the storycap to take screenshots of all the stories made by the storybook, then it will use the generated screenshot to run the visual regression test.

Let's see how the CI is doing.

It seems like everything except the visual regression has finished running.
Let me look at the visual regression status.

It's taking the screenshots now, and oh, now it's done.

Here is the comment automatically

Here is the whole report provided by reg-suit.
The changed items always comes to the top, so you can immediately tell which component has the change. You can also take a look at all the other components that hasn't changed.

Here is the report for the RoundButtonOutline component for dark mode that I changed. Reg-suit provides few options to compare the before and after of the component. Here you can slide to see the before and after. You can see that label on the button says React Native is awesome, and also the border radius has changed a bit, so it's more of a square button rather than a round button. You can also compare the components side by side. Or Blend the before and after. Or toggle the component to see what has changed. And finally, you can see the diffs highlighted to know exactly which part has changed.

You can go to the next page and see that the same change has been made for the light mode as well.

This was a small example. So it may not feel like much. But if you have a bigger project with storybook setup for both light and dark mode, you can save a lot of review time by integrating reg-suit.

—

And that wraps up demo and my presentation.

The repository for this demo is also written here, incase you'd like to see it in action yourself.

Thank you for listening to my presentation, and I hope some of you enjoyed it. Good bye.
