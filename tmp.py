import requests, json

base_url = "https://www.apiv2.ktlearning.com/sq/regenerate-zoom"
data = json.dumps({"auth_token" : "74rCgzN7zzNtnsbZVBjfpQpV", "client" : "zapier_zoom_regeneratort"})
resp = requests.post(base_url, data=data)
result = json.loads(resp.text)

output = {"output" : result}