(window.webpackJsonp=window.webpackJsonp||[]).push([[402],{1725:function(e,t,n){"use strict";n.r(t);var s=n(21),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"modules-newsstand"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#modules-newsstand"}},[e._v("#")]),e._v(" Modules.Newsstand")]),e._v(" "),n("TypeHeader"),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("h3",{attrs:{id:"requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),n("p",[e._v("This module requires iOS 5 or greater")]),e._v(" "),n("h3",{attrs:{id:"newsstand-resources"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#newsstand-resources"}},[e._v("#")]),e._v(" Newsstand Resources")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://developer.apple.com/newsstand/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Newsstand for Developers"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://developer.apple.com/library/ios/#documentation/StoreKit/Reference/NewsstandKit_Framework/_index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Newsstand Kit Framework Reference"),n("OutboundLink")],1)])]),e._v(" "),n("h3",{attrs:{id:"publishing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#publishing"}},[e._v("#")]),e._v(" Publishing")]),e._v(" "),n("p",[e._v("Apple allows you to update your app icon in iTunes connect so that the latest issue can always be displayed. Documentation around setting this up can be found in the "),n("a",{attrs:{href:"https://developer.apple.com/library/ios/#documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/14_Newsstand/Newsstand.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("iTunes Connect Developer Guide"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"getting-started"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),n("p",[e._v("View the "),n("a",{attrs:{href:"http://docs.appcelerator.com/titanium/latest/#!/guide/Using_Titanium_Modules",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using Titanium Modules"),n("OutboundLink")],1),e._v(" document for instructions on getting\nstarted with using this module in your application.")]),e._v(" "),n("h3",{attrs:{id:"accessing-the-newsstand-module"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-newsstand-module"}},[e._v("#")]),e._v(" Accessing the Newsstand Module")]),e._v(" "),n("p",[e._v("To access this module from JavaScript, you would do the following:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('var Newsstand = require("ti.newsstand");\n')])])]),n("p",[e._v("The newsstand variable is a reference to the Module object.")]),e._v(" "),n("h3",{attrs:{id:"setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),n("ol",[n("li",[e._v("Setup the app as a Newsstand app by adding the code below to your tiapp.xml")]),e._v(" "),n("li",[e._v("Modify the "),n("code",[e._v("UINewsstandBindingEdge")]),e._v(" and "),n("code",[e._v("UINewsstandBindingType")]),e._v(" values to get different decorations on the icons. Available options can be found in Apple's "),n("a",{attrs:{href:"https://developer.apple.com/library/mac/#documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("CoreFoundationKeys Documentation"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("li",[e._v("Add "),n("code",[e._v("newsstandicon.png")]),e._v(" to the 'Resources/iphone' directory next to appicon.png")]),e._v(" "),n("li",[e._v("Run the app, you should see it in the Newsstand folder.")]),e._v(" "),n("li",[e._v("During development, be sure to call "),n("type-link",{attrs:{type:"Modules.Newsstand.enableDevMode"}},[e._v("Modules.Newsstand.enableDevMode")]),e._v(" to remove the daily download limit.")],1)]),e._v(" "),n("p",[e._v("tiapp.xml")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("<ios>\n    <plist>\n        <dict>\n            <key>CFBundleIcons</key>\n            <dict>\n                <key>CFBundlePrimaryIcon</key>\n                <dict>\n                    <key>CFBundleIconFiles</key>\n                    <array>\n                        <string>appicon.png</string>\n                    </array>\n                </dict>\n                <key>UINewsstandIcon</key>\n                <dict>\n                    <key>CFBundleIconFiles</key>\n                    <array>\n                        <string>newsstandicon.png</string>\n                    </array>\n                    <key>UINewsstandBindingEdge</key>\n                    <string>UINewsstandBindingEdgeLeft</string>\n                    <key>UINewsstandBindingType</key>\n                    <string>UINewsstandBindingTypeMagazine</string>\n                </dict>\n            </dict>\n            <key>UINewsstandApp</key>\n            <true/>\n            <key>UIBackgroundModes</key>\n            <array>\n                <string>newsstand-content</string>\n            </array>\n        </dict>\n    </plist>\n</ios>\n")])])]),n("h3",{attrs:{id:"push-notifications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#push-notifications"}},[e._v("#")]),e._v(" Push Notifications")]),e._v(" "),n("p",[e._v('Push notifications can be sent to the device to notify it that a new issue is available. The notification payload must contain a "content-available" key set to 1. If this is not set, iOS will not allow the application to wake in the background to download a new issue.')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('{\n  "aps":{\n\t"content-available":1,\n        },\n   "device_tokens": ["exampleToken4F2509D125889AED3466F4D1376B26C374190B3974739"]\n}\n')])])]),n("p",[e._v("Use the "),n("type-link",{attrs:{type:"Titanium.Network.NOTIFICATION_TYPE_NEWSSTAND"}},[e._v("Titanium.Network.NOTIFICATION_TYPE_NEWSSTAND")]),e._v(" type when calling "),n("type-link",{attrs:{type:"Titanium.Network.registerForPushNotifications"}},[e._v("Titanium.Network.registerForPushNotifications")])],1),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("Ti.Network.registerForPushNotifications({\n    types:[\n        Ti.Network.NOTIFICATION_TYPE_NEWSSTAND\n    ],\n    success: eventSuccess,\n    error: eventError,\n    callback: eventCallback\n});\n")])])]),n("p",[e._v("To enable your application to download assets in the background in response to a push notification, you "),n("em",[e._v("must")]),e._v(" wrap\nyour "),n("type-link",{attrs:{type:"Modules.Newsstand.Issue.downloadAsset"}},[e._v("Modules.Newsstand.Issue.downloadAsset")]),e._v(" calls with calls to "),n("type-link",{attrs:{type:"Modules.Newsstand.beginBackgroundDownloadRequests"}},[e._v("Modules.Newsstand.beginBackgroundDownloadRequests")]),e._v(" and "),n("type-link",{attrs:{type:"Modules.Newsstand.endBackgroundDownloadRequests"}},[e._v("Modules.Newsstand.endBackgroundDownloadRequests")]),e._v(".")],1),e._v(" "),n("p",[e._v("For example, the event callback specified for "),n("type-link",{attrs:{type:"Titanium.Network.registerForPushNotifications"}},[e._v("Titanium.Network.registerForPushNotifications")]),e._v(" might look like the following:")],1),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("function eventCallback(e) {\n  \tif (e.data['content-available'] === 1) {\n\t\tNewsstand.beginBackgroundDownloadRequests();\n\t\tvar issue = Newsstand.getIssue({\n\t\t\tname: issues[0].name\n\t\t});\t\n\t\tif (!issue) {\n\t\t\t// if issue is not found then add it\n\t\t\tissue = Newsstand.addIssue({\n\t\t\t\tname: name,\n\t\t\t\tdate: new Date()\n\t\t\t});\n\t\t}\n\t\tissue.downloadAsset({\n\t\t\turl: issues[0].content,\n\t\t\tuserInfo: {\n\t\t\t\tid: 9999,\n\t\t\t\tname: 'TESTBACKGROUND'\n\t\t\t}\n\t\t});\n\t\tNewsstand.endBackgroundDownloadRequests();\n  \t}\n}\n")])])]),n("ApiDocs")],1)}),[],!1,null,null,null);t.default=a.exports}}]);