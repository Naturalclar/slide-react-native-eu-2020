Visual Regression Test in React Native

Hello everyone, my name is Jesse, and I’m here to talk about the Visual Regression Test in React Native.

In this session, I’ll start out by making a little introduction of my self.
Then I will explain what visual regression test is all about. Then I’ll explain how I’m performing the in React Native, and there will be a little demo to along with it.

This presentation will also be available in my github repository along with my demo, in case you’d like to read through my slides.

So let’s get into it.

—

Here’s my introduction.

Again, my name is Jesse.
I’m a front end engineer currently living in Japan, and I’ve been developing in React Native for the past 2 years or so.

I’ve also recently joined as a member of react-native community, and I maintain some of the lean core modules.

I work at a company called CureApp, which is a leading medical tech company in Japan. I’m working as a tech lead for a medical application, which is made with react-native.

—

Before I get into the visual regression test, first, let me talk about UI testing.

UI testing is an important way to make sure your UI does not change unexpectedly.

To show how UI testing can be helpful, let me provide you with an hypothetical example.

Let’s say you have a button in your login page that you feel is a little small, so you’d like to make it a little bigger.

Since the login page is using a Primary Button component, you go in to the Primary button component and change the style of the button, and you voila, you get what you want.
You commit the change, and get ready to go home.

But wait the primary button is also used in my signup page. And since you changed the size of the primary button, now the style is all messed up.

This change is hard to catch just by looking at the diff of the code, because there has not been any change in the Sign up page component, so you have no way of knowing that you changed the layout of the sign up page.

If you’re performing a proper UI testing, then you can prevent that from happening.

There are two types of UI testing, a snapshot testing, and visual regression testing, what I’ll be talking about in this session.

You can have snapshot testing provided by jest, where you take a component.

While snapshot tests can be useful, you may not be able to easily tell if the looks of the page has change or not from the snapshot. There maybe changes in the dom structure that changes the snapshot, but the looks of the page may still be the same, and the only way to tell that is by actually looking at the built page.

Visual Regression test, where you take the actual looks of the ui and compare it with the parent branch.

Also, another example. Let's say you're using a third-party component library, which just went through an upgrade. You aren't sure weather the component went through an change or not.
With Visual Regression Testing, you can check whether the looks of your pages or components has changed or not, and have more confidence in upgrading the package.

--

[Reg-suit](https://reg-viz.github.io/reg-suit/) is a testing tool for visual regression test.
It stores a series of screenshots of components from your in an external cloud storage from AWS S3 or Google Cloud Storage.
Every time a new pull request is made, it compares the screenshots of the parent branch with the new branch and creates an html report showing the diff.

It can be used in web project.

Storycap with Storybook.
Storycap is a tool made by the creator of reg-suit, and it crawls through each Stories and takes a screenshot of it.

storybook with react-native-web

-

Let's get into the Demo.

Here is a little design system I use for my react native projects.

—

And that wraps up my presentation.

Thank you for listening to my presentation, and I hope you enjoyed it.
Here’s my twitter handle incase you’d like to follow me. And the repository for this slide and the demo is also listed here, if you like to check out it.
