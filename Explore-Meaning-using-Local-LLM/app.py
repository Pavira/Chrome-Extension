from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate

app = Flask(__name__)
CORS(app)

# Define the template with the specified prompt
template = ChatPromptTemplate([
    ("system", "You are an intelligent AI assistant. Provide information about the input. If it's a word, give its meaning, synonyms, and an example sentence. If it's a sentence or code, explain it."),
    ("human", "{input}")
])

# Set up the model
model = OllamaLLM(model="llama3.1")

@app.route('/get-meaning', methods=['POST'])
def get_meaning():
    
    data = request.json
    selected_text = data.get('question', '')
    print("Question: " + selected_text)

    prompt_value = template.invoke({"input": selected_text})

    # Ensure the prompt_value is in the correct format
    if isinstance(prompt_value, dict):
        prompt_value = prompt_value["messages"]

    # Use the appropriate template and chain
    result = model.invoke(prompt_value)

    print("Result: " + result)
    
    return jsonify({"answer": result})

if __name__ == "__main__":
    app.run(port=8080)
