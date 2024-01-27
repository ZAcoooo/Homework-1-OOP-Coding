import PromptManager from "./PromptManager.js";

const testPromptManager = () => {
  const p = new PromptManager();

  p.recordPrompt("hello tell me who you are", "Hello! I'm ChatGPT, a product of OpenAI. I'm a language model powered by GPT-3.5, designed to understand and generate human-like text based on the input I receive. My purpose is to assist and provide information to the best of my ability. How can I help you today?");
  p.recordDalleInteraction("give a dog picture", "Here is a dog picture.", "https://example.com/dog-url");
  p.recordPrompt("Tell me something fun", "Sure, here's a fun fact: Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible. The long shelf life of honey is due to its low moisture content and acidic pH, which create an inhospitable environment for bacteria and microorganisms. So, if you ever come across ancient honey, it might still be good to eat!");
  p.recordDalleInteraction("Give me a random picture", "Here is a random picture", "https://example.com/random");
  p.switchFavorite(1);
  p.switchFavorite(2);
  p.removeInteraction(0);
  p.showAllInteractions();
  p.switchFavorite(1);
};

testPromptManager();