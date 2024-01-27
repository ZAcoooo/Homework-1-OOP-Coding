class Interaction {
  prompt = "";
  response = "";
  isFavorite = false; // indicate whether this interaction is your favorite
  constructor(prompt, response) {
    this.prompt = prompt;
    this.response = response;
  }

  show() {
    console.log(`Prompt: ${this.prompt.substring(0, 50)}...`);
    console.log(`Response: ${this.response.substring(0, 50)}...`);
    console.log(`Favorite: ${this.isFavorite ? "Yes" : "No"}.`); // output whether favorite
  }

  // switch the current interaction's favorite status
  switchFavorite() {
    this.isFavorite = !this.isFavorite;
    console.log(`Interaction has been switch to ${this.isFavorite ? "favorite" : "not favorite"}.`);
  }
}
export default Interaction;