""" Extract the definition and example data from the API output and store as JSON. The definition will be used as the prompt for our app while the example works as a hint """
import json
with open('data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)
relevantData = []
for wordData in data:
    # It does not seem plausible that results or entries would be missing in the JSON data, so error checking is not added.
    word = wordData['id']
    # Loop through the entries to find a sense which contains both the definition as well as an example for the word.
    for entry in wordData['results'][0]['lexicalEntries'][0]['entries']:
        sense = entry['senses'][0]
        if 'definitions' in sense and 'examples' in sense:
            definition = sense['definitions'][0]
            example = sense['examples'][0]['text']
            wordDict = {'word': word, 'definition': definition, 'example': example}
            relevantData.append(wordDict)
            break
with open('relevantData.json', 'w', encoding='utf-8') as f:
    json.dump(relevantData, f, ensure_ascii=False, indent=4)



        
