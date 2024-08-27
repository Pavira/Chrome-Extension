chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "findMeaning",
    title: "Find Meaning using Local LLM",
    contexts: ["selection"]
  });
});


chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "findMeaning" && info.selectionText) {
    const selectedText = info.selectionText;
    console.log(`Selected Text: ${selectedText}`);

    try {
      const response = await fetch('http://localhost:8080/get-meaning', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: selectedText })
      });

      console.log(`Response Status: ${response.status}`);

      const data = await response.json();

      console.log(`Response Data:`, data);

      if (response.ok) {
        
        const successMessage = data.answer;

        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: (message) => { alert(message); },
          args: [successMessage]
        });
      } else {
        console.error(`Error Status: ${response.status}`);
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: (message) => { alert(message); },
          args: [data.error || 'Unknown error occurred']
        });
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      // Display an error alert if there's a problem with the fetch request
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (message) => { alert(message); },
        args: ['Error fetching the meaning.']
      });
    }
  }
});
