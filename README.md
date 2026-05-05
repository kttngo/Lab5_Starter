# Lab 5 - Starter
Name: Katie Ngo
## Expose & Explore Live Demo
[View Expose Page](https://kttngo.github.io/Lab5_Starter/expose.html)

[View Explore Page](https://kttngo.github.io/Lab5_Starter/explore.html)

## Check Your Understanding Questions
### 1. Would you use a unit test to test the "message" feature of a messaging application? Why or why not? For this question, assume the "message" feature allows a user to write and send a message to another user.
No, I would not use a single unit test to test the entire message feature of an application. This is because the messaging application would contain multiple parts that interact with one another (text, button, display, etc). A unit test is better suited for an individual component on an application.

### 2. Would you use a unit test to test the "max message length" feature of a messaging application? Why or why not? For this question, assume the "max message length" feature prevents the user from typing more than 80 characters.
Yes, I would use a single unit test to test the max message length of an application. This is a small rule that can be easily tested early on with a unit test to prevent future bugs in the application.