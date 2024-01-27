import Interaction from "./Interaction.js";
import DalleInteraction  from "./DalleInteraction.js";

export class PromptManager {
  interactions = [];

  showAllInteractions() {
    for (let inter of this.interactions) {
      inter.show();
    }
  }

  recordPrompt(prompt, response) {
    const p = new Interaction(prompt, response);
    this.interactions.push(p);
  }
  recordDalleInteraction(prompt, response, url) {
    const d = new DalleInteraction(prompt, response, url);
    this.interactions.push(d);
  }
  removeInteraction(index) {
    if (index < 0 || index >= this.interactions.length) {
      console.log(`Invalid index: ${index}.`);
    } else {
      this.interactions.splice(index, 1);
      console.log(`The index ${index} in the interactions has been removed.`);
    }
  }

  // Switch the favorite status of the specific interaction by the index
  switchFavorite(index) {
    if (index < 0 || index >= this.interactions.length) {
      console.log(`Invalid index: ${index}.`);
    } else {
      const interaction = this.interactions[index];
      interaction.switchFavorite();
    }
  }
}

export default PromptManager;