import re
import json

with open("src/data/mockShops.ts", "r") as f:
    content = f.read()

shops = {}
pattern = r'id:\s*"([^"]+)",\s*name:\s*"([^"]+)",[\s\S]*?description:\s*"([^"]+)"'
for match in re.finditer(pattern, content):
    shop_id = match.group(1)
    name = match.group(2)
    desc = match.group(3)
    shops[shop_id] = {
        "name": name,
        "description": desc
    }

en_json = json.dumps({"Shops": shops}, indent=2)
print("ENGLISH JSON:")
print(en_json)

