const API_KEY = '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'; //Entry your groq API key

async function fetchMeaning(selectedText) {
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      "messages": [
        {
          "role": "system",
          "content": "Provide information about the input. If it's a word, give its meaning, synonyms, and an example sentence. If it's a sentence or code, explain it."
        },
        {
          "role": "assistant",
          "content": "just give the meaning, ignore 'how to', 'when to', and 'what type of' words at the beginning of the sentence."
        },
        {
          "role": "user",
          "content": selectedText
        }
      ],
      "model": "llama3-8b-8192",
      "temperature": 0.8,
      "max_tokens": 1024,
      "top_p": 1,
      "stream": false,
      "stop": null
    })
  });

  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }

  const data = await response.json();
  console.log('Parsed API Response:', data); // Log the parsed API response
  return data;
}

chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed'); // Log when the extension is installed

  chrome.contextMenus.create({
    id: "findMeaning",
    title: "Find Meaning",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "findMeaning" && info.selectionText) {
    const selectedText = info.selectionText;
    console.log('Selected Text:', selectedText); // Log the selected text

    try {
      const data = await fetchMeaning(selectedText);
      console.log('API Response:', data); // Log the API response

      const meaning = data.choices[0]?.message?.content || 'No response';

      chrome.scripting.executeScript({
        target: { tabId: tab.id, allFrames: true },
        func: (message) => {
          if (document.body) {
            alert(message);
          } else {
            console.error('Cannot show alert: Document body is not available.');
          }
        },
        args: [meaning]
      });

    } catch (error) {
      console.error('Error fetching the meaning:', error);
      chrome.scripting.executeScript({
        target: { tabId: tab.id, allFrames: true },
        func: (errorMsg) => alert(errorMsg),
        args: ['Error fetching the meaning.']
      });
    }
  }
});

console.log('Welcome to the Word Meaning Extension!'); // Welcome message
