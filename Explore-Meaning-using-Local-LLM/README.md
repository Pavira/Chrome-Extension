# **Explore Meaning using Local LLM**

This Chrome extension allows users to find the meaning, synonyms, and an example sentence for a selected word, or an explanation for a selected sentence or code snippet, directly within the browser. The extension leverages a local AI model using the Langchain Ollama LLM and a Flask server to generate the required information.

## **Features**

**1.Context Menu Integration:** Right-click on any selected text in the browser and choose "Find Meaning using Local LLM" to get instant information.

**2.Local AI Model:** Utilizes a locally hosted language model for generating explanations, ensuring privacy and faster responses.

**3.User-Friendly Alerts:** The result is displayed in a browser alert, making it easy to access.

## **Project Structure**

**app.py:** Flask server that handles POST requests, processes the input using the Langchain Ollama LLM, and returns the response.

**background.js:** Chrome extension background script that sets up the context menu and handles communication with the Flask server.

**manifest.json:** Configuration file for the Chrome extension.

**requirements.txt:** Lists all Python dependencies required to run the Flask server.

# **Installation**

### **Setting Up the Local Server**

Install the LLM model you want.Refer the below link, Here I am using Llama 3.1 8B model
```bash
https://github.com/ollama/ollama/blob/main/README.md
``` 

**1.Clone the Repository:**
```bash
git clone https://github.com/Pavira/Chrome-Extension.git
cd Explore-Meaning-using-Local-LLM
```
**2.Set Up a Virtual Environment:**
```bash
python3 -m venv chatbot # You can change your environment name
source chatbot/bin/activate  # For Linux/MacOS
```
**3.Install Required Packages:**
```bash
pip install -r requirements.txt
```
**4.Run the Flask Server:**
```bash
python app.py
```
## **Setting Up the Chrome Extension**

1.**Load the Extension in Chrome:**

  -> Open Chrome and navigate to chrome://extensions/.

  -> Enable "Developer mode" in the top-right corner.

  -> Click "Load unpacked" and select the directory containing background.js and manifest.json.

2.**Using the Extension:**

  -> Highlight any text on a webpage.
  
  -> Right-click and select "Find Meaning using Local LLM".
  
  -> The extension will display the information in an alert box.

## **Show Your Support**

If you like this repository, please 🌟 it to show your support and help others find it! Your support is greatly appreciated.
