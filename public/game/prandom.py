#!/usr/bin/env python3
import json
import random
import re

def convert_js_to_json(js_text):
    """
    Convert the JS object literal (with a variable assignment) into valid JSON.
    """
    # Remove leading/trailing whitespace.
    js_text = js_text.strip()

    # Remove any single-line comments (// …) if they appear on their own lines.
    js_text = "\n".join(line for line in js_text.splitlines() if not line.strip().startswith("//"))
    
    # Remove the variable assignment (e.g., "const questions = ").
    js_text = re.sub(r'^(const|let|var)\s+\w+\s*=\s*', '', js_text, count=1)

    # Remove trailing semicolon if present.
    if js_text.endswith(';'):
        js_text = js_text[:-1]
    
    # Wrap unquoted object keys in double quotes.
    js_text = re.sub(r'([{,]\s*)([a-zA-Z_]\w*)\s*:', r'\1"\2":', js_text)
    
    # Replace any uppercase booleans (if they exist).
    js_text = js_text.replace("True", "true").replace("False", "false")
    
    return js_text

def randomize_answers(questions):
    """
    Randomly shuffle the answers for each question.
    """
    for question in questions:
        random.shuffle(question["answers"])
    return questions

def convert_json_to_js(questions):
    """
    Convert the Python object back into a JavaScript variable assignment.
    """
    json_str = json.dumps(questions, indent=2)
    return f"const questions = {json_str};"

def main():
    input_filename = "C:\\Users\\Jake\\Downloads\\quiz\\public\\game\\questions.js"
    output_filename = input_filename  # Overwrite the same file

    with open(input_filename, "r", encoding="utf-8") as f:
        js_data = f.read()

    json_text = convert_js_to_json(js_data)
    
    # Debug: print the first few characters of the converted text
    print("Converted text preview:", json_text[:100])
    if not json_text.startswith('['):
        print("Warning: The converted text does not start with '['. Check your file's format.")

    try:
        questions = json.loads(json_text)
    except json.JSONDecodeError as e:
        print("Error decoding JSON:", e)
        print("Full converted text:")
        print(json_text)
        return

    randomize_answers(questions)
    js_result = convert_json_to_js(questions)

    with open(output_filename, "w", encoding="utf-8") as f:
        f.write(js_result + "\n")

    print(f"Shuffled questions have been saved to {output_filename}")

if __name__ == '__main__':
    main()
