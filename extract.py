import yaml
import json
import sys

try:
    with open(r'C:\Users\Kamesh R\.gemini\antigravity\brain\966f0c5f-4374-45bd-b64c-a14ecea9aa29\.system_generated\steps\27\output.txt', 'r', encoding='utf-8') as f:
        data = yaml.safe_load(f)

    res = {'styles': {}, 'colors': {}}
    for k, v in data.items():
        if k.startswith('style_'):
            res['styles'][k] = v
        if k.startswith('fill_') or k.startswith('stroke_'):
            if isinstance(v, list) and len(v) > 0 and isinstance(v[0], str) and v[0].startswith('#'):
                res['colors'][k] = v[0]
            elif isinstance(v, dict) and 'colors' in v and len(v['colors']) > 0:
                res['colors'][k] = v['colors'][0]

    with open('c:\\My portfolio website\\figma_styles.json', 'w') as f:
        json.dump(res, f, indent=2)
    print("Success")
except Exception as e:
    print(e)
