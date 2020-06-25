(window.webpackJsonp=window.webpackJsonp||[]).push([[1276],{2347:function(e,n,o){"use strict";o.r(n);var t=o(21),s=Object(t.a)({},(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"sdk-requirements-json"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sdk-requirements-json"}},[e._v("#")]),e._v(" SDK Requirements JSON")]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("When Studio starts up, it contacts a remote server to determine what versions of the Android and iOS SDKs must be installed in order to enable proper Titanium Development. Below, we detail the pieces of that file.")]),e._v(" "),o("h2",{attrs:{id:"versioning"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#versioning"}},[e._v("#")]),e._v(" Versioning")]),e._v(" "),o("p",[e._v("The versioning information follows OSGI conventions, so similar flexibility in defining version information is available here too.")]),e._v(" "),o("table",{staticClass:"confluenceTable"},[o("thead",{staticClass:" "}),o("tfoot",{staticClass:" "}),o("tbody",{staticClass:" "},[o("tr",[o("td",{staticClass:"confluenceTh",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Definition")])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Description")])])]),o("tr",[o("td",{staticClass:"confluenceTh",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("4.0, 4.4")])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Version 4.0 to 4.4.X inclusive, but not including version 4.5.X")])])]),o("tr",[o("td",{staticClass:"confluenceTh",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("4.0, 4.4")])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Version 4.0 to 4.3.X inclusive, but not including version 4.4.X")])])])])]),e._v(" "),o("h2",{attrs:{id:"overall-structure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overall-structure"}},[e._v("#")]),e._v(" Overall Structure")]),e._v(" "),o("p",[e._v("There are two top-level objects, once for android, one for ios. Underneath that we have separate entries for each platform. Note that we only have osx for ios, since the ios SDK is not available on any other platform.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('{\n  "android": {\n    "macosx": {\n    },\n    "win32": {\n    }\n  },\n  "ios": {\n    "macosx": {\n    }\n  }\n}\n')])])]),o("h2",{attrs:{id:"android-sdks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#android-sdks"}},[e._v("#")]),e._v(" Android SDKs")]),e._v(" "),o("p",[e._v("Android requires a number of different items to be installed. Due to complexities in the Titanium Mobile SDKs, we require both platform version 7 and platform version 8 to be installed simultaneously.")]),e._v(" "),o("p",[e._v("Structure:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v('"android"')]),e._v(" "),o("ul",[o("li",[o("p",[e._v('platform ("osx"/"win32")')]),e._v(" "),o("ul",[o("li",[o("p",[e._v("requiredAddOns: array of strings, corresponding with Google add-on names")])]),e._v(" "),o("li",[o("p",[e._v("requiredSDKTools: array of integers, corresponding with Google SDK Tooling levels")])]),e._v(" "),o("li",[o("p",[e._v("requiredPlatformTools: array of integers, corresponding with Google Platform levels (2.1 == 7, 2.2 == 8, etc.)")])]),e._v(" "),o("li",[o("p",[e._v("requiredPlatforms: array of regular expression strings, corresponding with Google Platform levels")])]),e._v(" "),o("li",[o("p",[e._v("sdkURL: String to .zip file of latest SDK download location")])]),e._v(" "),o("li",[o("p",[e._v("jdkURL (Windows only): String to .zip file of latest JDK download installation")])])])])])])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('{\n  "android": {\n    "linux": {\n      "requiredAddOns": [\n        "addon_google_apis_google_inc_7"\n      ],\n      "requiredPlatformTools": "7",\n      "requiredPlatforms": [\n        "Android\\\\s*2\\\\.1.*"\n      ],\n      "requiredSDKTools": "13",\n      "sdkURL":"http://dl.google.com/android/android-sdk_r13-linux_x86.tgz"\n    },\n    ...\n  }\n}\n')])])]),o("h2",{attrs:{id:"ios"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ios"}},[e._v("#")]),e._v(" iOS")]),e._v(" "),o("p",[e._v("iOS is a bit simpler, since we only need to verify one SDK version. Note how we use the version constraints here, not possible with Android above due to inconsistent version numbering (we use the regexes instead)")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('{\n  "ios":{\n    "macosx": {\n      "requiredPlatforms": [\n        "[4.0, 4.4)"\n      ],\n      "sdkURL": "http://itunes.apple.com/us/app/xcode/id448457090?mt=12#"\n    }\n  }\n}\n')])])]),o("h2",{attrs:{id:"complete-example"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#complete-example"}},[e._v("#")]),e._v(" Complete Example")]),e._v(" "),o("p",[e._v("A complete example of a JSON SDK requirements file.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('{\n  "android": {\n    "linux": {\n      "requiredAddOns": [\n        "addon_google_apis_google_inc_7"\n      ],\n      "requiredPlatformTools": "7",\n      "requiredPlatforms": [\n        "Android\\\\s*2\\\\.1.*"\n      ],\n      "requiredSDKTools": "13",\n      "sdkURL":"http://dl.google.com/android/android-sdk_r13-linux_x86.tgz"\n    },\n    "macosx": {\n      "requiredAddOns": [\n        "addon_google_apis_google_inc_7"\n      ],\n      "requiredPlatformTools": "7",\n      "requiredPlatforms": [\n        "Android\\\\s*2\\\\.1.*"\n      ],\n      "requiredSDKTools": "13",\n      "sdkURL":"http://dl.google.com/android/android-sdk_r13-mac_x86.zip"\n    },\n    "win32": {\n      "requiredAddOns": [\n        "addon_google_apis_google_inc_7"\n      ],\n      "requiredPlatformTools": "7",\n      "requiredPlatforms": [\n        "Android\\\\s*2\\\\.1.*"\n      ],\n      "requiredSDKTools": "13",\n      "sdkURL": "http://dl.google.com/android/android-sdk_r13-windows.zip",\n      "jdkURL": "http://download.oracle.com/otn-pub/java/jdk/6u29-b11/jdk-6u29-windows-i586.exe"\n    }\n  },\n  "ios": {\n    "macosx": {\n      "requiredPlatforms": [\n        "[4.0, 4.4)"\n      ],\n      "sdkURL": "http://itunes.apple.com/us/app/xcode/id448457090?mt=12#"\n    }\n  }\n}\n')])])])])}),[],!1,null,null,null);n.default=s.exports}}]);