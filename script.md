Hello everyone, thanks for tuning in. My name is Jesse, and I’m here to talk about the Visual Regression Test in React Native.

---

Here's our agenda for this session.
First, I'll be giving a little introduction of myself, then I'll be going through what visual regression test is all about, and how it can be performed on a react-native project. Then I will conclude the session by showing an actual demo of the visual regression test using a tool called Reg-suit.

Hopefully that sounds interesting to you. Let's get started.

---

First, let me quickly introduce myself. Again, my name is Jesse Katsumata, and I'm currently living in Japan, working as a front end engineer at a company called CureApp. You can also find me at twitter or github as Naturalclar.

I've been developing with React Native for the past 2 years or so, and I absolutely fell in love with it. I've been keeping up the with latest updates, and I've been sending fixes to the community repos and documents which eventually got me to joining the react-native community, where I maintain some of the lean core modules for react-native.

I also love participating in other open source communities in general. It's a great way to learn the internals of a project and expanding my knowledge while helping others. I've been helping out with stuff like Japanese translations of documents for libraries like React, Gatsby.js, and TypeScript, and I've been making small fixes to several repositories including react-native.

---

The company I work for, CureApp, is a leading medtech startup in Tokyo, Japan. In CureApp, we are building digital therapeucal apps to provide medical treatment, with the power of technology. Our engineers, we write everything in TypeScript. That is, we write our web applications using React, our servers are running on node.js, and even our infrastructures are set up using TypeScript with AWS CDK. And of course, our mobile applications are built using React Native.

---

As our applications deal with human's well being, we take our testing very seriously to make sure our apps work the way we intended to. I've mentioned that everything is written in TypeScript, so all our code bases are Type safe. We also perform unit tests for the business logics, and integration tests for our apis, and we perform UI testing for our pages and components. For today's session, I'll be focusing more on the UI testing, which the Visual Regression Test takes part in.

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

What's displayed on here is an example of test reports generated by the visual regression test.
It is showing a change I made in a button component, in a way that we can actually see it with our own eyes.
You can see that its showing the diffs of two components, letting you know exactly where the changes were made, and they can also be seen side by side for comparison.

---

How visual regression test works, is that first, you take screenshots of all the pages and components that you want to test.
And store it somewhere where you can use as a reference, and everytime there is a change in the component, you take new screenshots to compare it with the reference.

---

Depending on the visual regression tools you use, I think most of them create a report like what's shown here, every time a pull request is made to the repository.

Every report shows the number of components that has changed from the reference, number of new components are added, or number of deleted components if there are any, and number of components that remained unchanged.

If the pull request is approved and merged, it updates the new screenshot to be the new reference.

By having these reports, you will be able to prevent any unexpected change that goes into your application.

---

Let me show you a contrived example of how visual regression test may help.

Here's yet again a sample signup page. For your app. Let’s say you have a button in your signup page that you feel is a little small, so you’d like to make it a little bigger, so the user will have an easier time pressing the button.

---

Since the signup page is using a Primary Button component, which takes in a label and display the button, you go in to the Primary button component, and see that it has the width of 150.

---

So wou change the width of the button to something bigger like 240, and voila, your signup page looks the way you want it to be. You may commit the change, feel good about yourself, and get ready to go home.

---

But you fail to realize that primary button was also used in the login page of the app, which has login button and a register button side by side. Since both of them were using the primary button component that you've changed, now the buttons won't fit on the screen.

When you make pull request the only changed file is the primary button component, so it maybe hard to tell from the first glance that the layout of the login page has change unexpectedly.

If you have a visual regression test set up, it will create a report for the sign up page, as well as the login page, so you would have been able to tell that the layout of the login page has been broken.

---

That past example can be achieved from a snapshot test as well. You make a change in the primary button component, and that will cause snapshots of both sign up page, and the log in page to update, so you can catch that you've accidentally changed the layout of the login page.

But, one thing to note about visual regression test that makes itself different from a snapshot test, is that visual regression test doesn't care about how the component was implemented. That means the visual regression test can prevent false positives created by a snapshot test.

In a snapshot test, if you were to make a refactor in your components, like changing your components from a class component to a function component, it will require you to update the snapshot, as the dom structure of the component has changed, even though the two component may look identical . In another example, if you're using some third-party component library, and you want to upgrade the library to the latest version, all your snapshot tests of components that depended on the third-party library may require updating the snapshot, but you have no way of knowing whether the component has changed visually or not.

Having visual regression test will allow you to confidently upgrade your component library, because it takes a screenshot of how the component actually looks after the upgrade.

Also, by having these tests set up, you can have your apps support dark mode with confidence.

—-

Let me talk a little about supporting dark mode for your application. With the new appearance api that has been available since react native version 0.62, you are able to check the user's general preference of their app's appearance, allowing you to show the users the app in light mode or darkmode, according to their preference.

---

But supporting dark mode means that there are simply twice as many possible screens to verify in your app. You may forget to apply font colors for your dark mode in certain parts of your screen, making that text unreadable in dark mode. By having visual regression test for both light mode and dark mode will allow you to catch those mistakes quickly.

---

So why is it important to perform these visual regression tests?
Well, first, it reduces the amount of checks the QA needs to do, so the QAs can focus on finding other bug in your application.

Also, sometimes the difference you make in the component is so small, that it is very hard to catch with a human eye. There are a few times where I accidentally entered a character in some pages, that was caught by the visual regression test.

---

So how do I perform visual regression test with a react native project?
There are probably many different frameworks that allows you to perform visual regression test.
The one I use for our project is called

---

Reg-suit.

---

[Reg-suit](https://reg-viz.github.io/reg-suit/) is a open source testing framework for visual regression test.
This tool will allow you store a series of screenshots of your components in an external cloud storage like AWS S3 or Google Cloud Storage, and every time there is a new pull request in the repository you integrate with, it will make a comparison of the screenshots of the parent branch and a new branch.

Setting up reg-suit is also very easy, as it provides a cli command to do the work for you.

Once it is set up, it will automatically create a report like the one I showed previously, listing which screenshot has been modified, newly added, and deleted.

And all you need now is a way to take screenshots of all of your pages in your react-native applications.

---

For me, I use storybook to list all my pages and components for my application. Storybook is a framework that provides a playground to list all of your UI components. It can be ran separately from your main application, so you won't have to wait for your native app to be built.

Storybook has support for various front-end web frameworks including react, and it also has support for react-native apps. I actually don't use the react-native version of the storybook, but I use the storybook for web, along with react-native for web.

Using react-native for web with storybook provides other benefits, as it allows me to write new components much faster, and you don't have to wait for your emulator to start up.

But, at the same time, it has its downsides, because what's displayed on the web isn't exactly what will be displayed on the native applications.

If there are other ways to take screenshots of your pages and components in an android or iOS emulators, that would be great, as that can also be integrated with Reg-suit as well.

And that wraps up the explanation of the visual regression test.

Next, I'd like to conclude this session by showing a demo of reg-suit actually running.

--

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
