(window.webpackJsonp=window.webpackJsonp||[]).push([[431],{1809:function(e,t,a){"use strict";a.r(t);var n=a(21),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"modules-touchid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules-touchid"}},[e._v("#")]),e._v(" Modules.TouchId")]),e._v(" "),a("TypeHeader"),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("h3",{attrs:{id:"warning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#warning"}},[e._v("#")]),e._v(" WARNING")]),e._v(" "),a("p",[e._v("This module has been deprecated in Titanium SDK 6.3.0+ in favor of the "),a("a",{attrs:{href:"https://github.com/appcelerator-modules/titanium-identity",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ti.Identity"),a("OutboundLink")],1),e._v(" module\nthat includes the 1:1 same API's as this one but also more current API's like FaceID-related constants\nand a unified naming-scheme to avoid confusions regarding the name \"TouchID\".")]),e._v(" "),a("p",[e._v("Touch ID is a security mechanism that uses a fingerprint to authenticate the user. The\nfingerprint sensor is located in the Home button of the device. Users can use their fingerprint\ninstead of entering their passcode for authentication.")]),e._v(" "),a("h3",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v("The Touch ID module is available with the Titanium SDK starting with Release 3.4.0.\nThis module only works with devices running iOS 8. You can only test the Touch ID module on a device.")]),e._v(" "),a("p",[e._v("The device must have a Touch ID sensor in the Home button and Touch ID must be setup in order to use\nthe Touch ID authentication mechanism. You can set up Touch ID in iOS Setup Assistant or by\ntapping "),a("strong",[e._v("Touch ID & Passcode")]),e._v(" from Settings.")]),e._v(" "),a("p",[e._v("For information on setting up Touch ID, see\n"),a("a",{attrs:{href:"http://support.apple.com/kb/HT5883",target:"_blank",rel:"noopener noreferrer"}},[e._v("iPhone 5s: Using Touch ID"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),a("p",[e._v("Add the module as a dependency to your application by adding a "),a("strong",[a("code",[e._v("<module>")])]),e._v(" item to the\n"),a("strong",[a("code",[e._v("<modules>")])]),e._v(" element of your "),a("code",[e._v("tiapp.xml")]),e._v(" file:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<ti:app>\n  ...\n  <modules>\n    <module platform="iphone">ti.touchid</module>\n  </modules>\n  ...\n</ti:app>\n')])])]),a("p",[e._v("Use "),a("code",[e._v("require()")]),e._v(" to access the module from JavaScript:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("var TouchID = require('ti.touchid');\n")])])]),a("p",[e._v("The "),a("code",[e._v("TouchId")]),e._v(" variable is a reference to the module. Make API calls using this reference:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("TouchID.authenticate({\n    reason: 'Verify to modify personal settings',\n    callback: function(e) {\n        Ti.API.info(e);\n    }\n});\n")])])]),a("h3",{attrs:{id:"lifetime-notes-ios-only"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lifetime-notes-ios-only"}},[e._v("#")]),e._v(" Lifetime Notes (iOS-only)")]),e._v(" "),a("p",[e._v("The current context will, once evaluated, be used until it's instance gets released or invalidated.\nYou can you use the "),a("type-link",{attrs:{type:"Modules.TouchId.invalidate"}},[e._v("Modules.TouchId.invalidate")]),e._v(" method to force the user to be prompted every time a\nnew authentication is triggered. On iOS 9 and later, this can also be called to cancel a current\nevaluation of an auth-context, e.g. to hide the auth-dialoag.")],1),e._v(" "),a("h3",{attrs:{id:"native-keychain-integration-ios-only"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#native-keychain-integration-ios-only"}},[e._v("#")]),e._v(" Native Keychain Integration (iOS-only)")]),e._v(" "),a("p",[e._v("For more infos regarding the keychain integration, check the <Modules.TiTouchId.KeychainItem>\ndocumentation.")]),e._v(" "),a("h3",{attrs:{id:"sample-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-application"}},[e._v("#")]),e._v(" Sample Application")]),e._v(" "),a("p",[e._v("The module contains a sample application in the\n"),a("code",[e._v("<TITANIUM_SDK_HOME>/modules/iphone/ti.touchid/<VERSION>/example/")]),e._v(" folder.")]),e._v(" "),a("ApiDocs")],1)}),[],!1,null,null,null);t.default=i.exports}}]);