import { setGeminiApiKey, askGeminiWithHistory } from 'ask-gemini';

// SET YOUR API KEY HERE!!
const GOOGLE_API_KEY = "YOUR_GOOGLE_API_KEY";
setGeminiApiKey(GOOGLE_API_KEY);

// DEFINING THE START HISTORY
const history = [
  { role: 'user', parts: [{ text: 'Hello.' }] },
  { role: 'model', parts: [{ text: 'Hi! How can I help you today?' }] },
];

// MAIN FUNCTION AND LOOP
function haveAiTalk() {
  askGeminiWithHistory('Who are you?', history)
    .then(response => {
      console.log(response);
      history.push({ role: 'user', parts: [{ text: response }] });
      haveAiTalk(); // RECURSIVE CALL
    })
    .catch(error => console.error(error));
}

// START
haveAiTalk();