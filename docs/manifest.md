# Manifest.json - chrome extension manifest file

You need to request permissions and what files are ran for certain areas of the extension here.

```json
{
    "name": "dependency_install_swapper_js",
    "version": "1.0",
    "manifest_version": 3,
    "description": "Swap npm & yarn install links interchangeably",
    "action": {
        "default_title": "js dis",
        "default_icon": "icon.png",
        "default_popup": "popup.html"
    },
    "permissions": ["activeTab"],
    "content_scripts": [
        {
          "js": ["output/content.js"],
          "matches": [
            "https://www.npmjs.com/package/*"
          ]
        }
      ]
}
```
