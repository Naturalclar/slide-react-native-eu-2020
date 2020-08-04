Visual Regression Test in React Native 

Hello everyone, my name is Jesse, and I’m here to talk about the Visual Regression Test in React Native.



In this session, I’ll start out by making a little introduction of my self.
Then I will explain what visual regression test is all about. Then I’ll explain how I’m performing the in React Native, and there will be a little demo to along with it.

This presentation will also be available  in my github repository along with my demo, in case you’d like to read through my slides.

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

Let’s say you have a button in your login page  that you feel is a little small, so you’d like to make it a little bigger.

Since the login page is using a Primary Button component, you go in to the Primary button component and change the style of the button, and you voila, you get what you want.
You commit the change, and get ready to go home.

But wait the primary button is also used in my signup page. And since you changed the size of the primary button, now the style is all messed up.

This change is hard to catch just by looking at the diff of the code, because there has not been any change in the Sign up page component, so you have no way of knowing that you changed the layout of the sign up page.

If you’re performing a proper UI testing, then you can prevent that from happening.

There are two types of UI testing, a snapshot testing, and visual regression testing, what I’ll be talking about in this session.

Visual Regression test is a form of UI testing.



There are two main ways to 

You can have snapshot testing, where you take a component, and 


—

And that wraps up my presentation. 

Thank you for listening to my presentation, and I hope you enjoyed it.
Here’s my twitter handle incase you’d like to follow me. And the repository for this slide and the demo is also listed here, if you like to check out it.


