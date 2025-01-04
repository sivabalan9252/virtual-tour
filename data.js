var APP_DATA = {
  "scenes": [
    {
      "id": "0-view-1",
      "name": "View 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -3.0746185267422135,
        "pitch": 0.010133954597744577,
        "fov": 1.3537778064991228
      },
      "linkHotspots": [
        {
          "yaw": 2.3596777423010735,
          "pitch": 0.49756183944579746,
          "rotation": 0,
          "target": "1-view-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.3706748099652746,
          "pitch": 0.4249166832593314,
          "title": "View 2",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-view-2",
      "name": "View 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -3.1281096559057673,
        "pitch": 0.07295948095421423,
        "fov": 1.3537778064991228
      },
      "linkHotspots": [
        {
          "yaw": -2.488740883214275,
          "pitch": 0.4887879357602163,
          "rotation": 0,
          "target": "0-view-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.488067245797147,
          "pitch": 0.41220075459502503,
          "title": "View 1",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Office Room",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
