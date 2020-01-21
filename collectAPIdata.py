import json
import requests
words = ["front", "around", "strange", "stripe", "basket", "steep", "stone", "stand", "support", "beast", "camera"]
app_id  = "418ce3a2"
app_key  = "928ab8752a231fc9b7d146d9e7ced8b6"
language_code = "en-us"
listResponses = []
for word in words:
    url = "https://od-api.oxforddictionaries.com/api/v2/entries/" + language_code + "/" + word.lower()
    r = requests.get(url, headers = {"app_id": app_id, "app_key": app_key})
    if r.status_code == 200:
        listResponses.append(r.json())
    else:
        print("Error code {} while accessing {}".format(r.status_code, r.url)
with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(listResponses, f, ensure_ascii=False, indent=4)
