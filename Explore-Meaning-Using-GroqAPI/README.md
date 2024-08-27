# 🚀 **Word Meaning Extension**🚀 

Welcome to the Word Meaning Extension! This Chrome extension allows you to quickly find the meaning, synonyms, and explanations of any selected text directly within your browser.

### **Features**

**Instant Definitions:** 
Right-click on any selected text to find its meaning and synonyms.
**Contextual Explanations:** 
Get explanations for sentences or code snippets.
**Customizable API Integration:**
Powered by the Groq API, ensuring accurate and comprehensive responses.

### **How It Works**

1.**Select Text:** Highlight any text on a webpage.

2.**Right-Click:** Choose "Find Meaning" from the context menu.

![find-meaning](https://github.com/user-attachments/assets/67d42d3d-d3a2-45bb-b454-164c4d15f370)


3.**View Meaning:**
An alert will display the meaning, synonyms, or explanation based on the selected text.

![meaning-alert](https://github.com/user-attachments/assets/af0eb304-449b-4a93-b3cb-19d6dd460b14)


## **Installation**

1.Clone the repository:
```bash
git clone https://github.com/Pavira/Chrome-Extension.git
```
2.Navigate to the folder
```bash
cd Explore-Meaning-Using-GroqAPI
```
3.Navigate to chrome://extensions/ in your Chrome browser.
Enable "Developer mode" in the top right corner.
Click "Load unpacked" and select the directory where you cloned the repository.

### **Files in the Repository**

**script.js:** The main JavaScript file that handles API requests, context menu creation, and user interactions.

**manifest.json:** The manifest file that defines the extension's permissions, background scripts, and context menu setup.

### **Usage**

Add your Groq API key in script.js:

const API_KEY = 'XXXX'; // Enter your Groq API key

Right-click on any selected text and choose "Find Meaning" to see the definition and explanation.

### **API Integration**

This extension uses the Groq API to fetch meanings, synonyms, and explanations. Ensure you have a valid API key and replace 'XXXX' with your actual key in the script.js file.

### **Contribution**

Feel free to fork the repository, submit pull requests, or open issues for any bugs or feature requests.

### **Show Your Support**

If you like this repository, please 🌟 it to show your support and help others find it! Your support is greatly appreciated.
