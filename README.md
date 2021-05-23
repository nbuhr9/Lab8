# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

I probably would not, but it ultimately depends on how the message feature is implemented. I find it unlikely that it wouldn't be a collection of individual components that work together to accept a message from one user, possibly encrypt it, and eventually send it to another user. It would be better to test these individual 'units' rather than the overarching feature.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

I would use a unit test for this feature; it seems simple enough to be implemented in a single function/routine, and simple components can be tested individually.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

We wouldn't be able to see how puppeteer is running our tests; we would just get a report on the result when they're finished.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

According to the instructions on canvas, updating the url directly doesn't work, so we can't use page.goto(). Then we can either simulate a user clicking to the settings page or force a change of state at the start of each test so we can start from the settings page each time.
