import Interaction from "./Interaction.js";

class DalleInteraction extends Interaction {
  constructor(prompt, response, url) {
    super(prompt, response);
    this.url = url;
  }

  show() {
    console.log(`Prompt: ${this.prompt.substring(0, 50)}...`);
    console.log(`Response: ${this.response.substring(0, 50)}...`);
    console.log(`Url: ${this.url}`);
    console.log(`Favorite: ${this.isFavorite ? "Yes" : "No"}.`);
  }

  getType() {
    return "DalleInteraction";
  }
}
export default DalleInteraction;