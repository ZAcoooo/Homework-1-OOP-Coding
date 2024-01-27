# Homework-1-OOP-Coding
Homework 1 for CS 5010<br>
The PromptManager is used for recording prompts and responses during interacting with the ChatGPT.<br>
**Author: Qichen Wang**

## Creative addition
I added a Favorite functionality. The user can choose which interactions they want to toggle favorite or not favorite by the index. When the interactions are showed, it will also show whether the interaction is favorite or not.

## Testing
I created a test.js file for Testing. It tested recordPrompt and recordDalleInteraction functions. It also tested remove a interaction by the index and switch favorite by the index. Finally, it tested showing all interactions.

### Steps for running test.js file
1. Switch to the current directory in the terminal.
2. Enter ```node test.js``` in the terminal.
3. It will show the below information in the terminal:
```
Interaction has been switch to favorite.
Interaction has been switch to favorite.
The index 0 in the interactions has been removed.
Prompt: give a dog picture...
Response: Here is a dog picture....
Url: https://example.com/dog-url
Favorite: Yes.
Prompt: Tell me something fun...
Response: Sure, here's a fun fact: Honey never spoils. Archa...
Favorite: Yes.
Prompt: Give me a random picture...
Response: Here is a random picture...
Url: https://example.com/random
Favorite: No.
Interaction has been switch to not favorite.
```

