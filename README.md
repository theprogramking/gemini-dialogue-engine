![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## gemini-dialogue-engine

This Node.js script facilitates a conversation between two Gemini AI instances. It utilizes the Google Generative AI library to establish connections between the models. Each AI can send prompts and receive responses from the other, enabling a back-and-forth dialogue through the script. This allows for exploration of communication and interaction between large language models. It utilizes the [ask-gemini](https://github.com/theprogramking/ask-gemini) NPM package.

**Prerequisites:**

* Node.js and npm (or yarn) installed.
* Valid API key for your chosen LLM service (e.g., Gemini, Bard, Jurassic-1 Jumbo).

**Installation:**

1. Clone or download the script repository.
2. Navigate to the project directory in your terminal.
3. Install dependencies:

```bash
npm install
```

**Configuration:**

1. **Replace Placeholder API Key:**
   * Open `index.js` in a text editor.
   * Find the line `const GOOGLE_API_KEY = "YOUR_GOOGLE_API_KEY";`
   * Replace `"YOUR_GOOGLE_API_KEY"` with your actual LLM service API key.

2. **(Optional) Customize Starting History:**
   * The `history` array in `index.js` defines the initial conversation flow.
   * Modify the text properties under `parts` within each `history` object to shape the starting interaction.

**Usage:**

Run the script using NPM:

```bash
npm run start
```

**Notes:**

* This example uses a placeholder API key. Replace it with your own.
* Free API keys may have limitations. Check the Gemini AI documentation for details.
* This is a basic example. Enhance it with error handling, user input validation, and more complex conversation management.

**Additional Considerations:**

* Be mindful of the Gemini AI service's terms regarding data privacy and responsible usage.
* Consider security best practices when handling API keys.
* Explore the `ask-gemini` library's capabilities for advanced functionalities.
