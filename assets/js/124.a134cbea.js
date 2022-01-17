(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{2046:function(t,a,s){"use strict";s.r(a);var n=s(21),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"windows-ui-components-and-conventions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windows-ui-components-and-conventions"}},[t._v("#")]),t._v(" Windows UI Components and Conventions")]),t._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",{staticClass:"custom-block-title"},[t._v("❗️ Warning")]),t._v(" "),n("p",[t._v("As of Titanium 9.0.0, building Windows apps is no longer supported.")])]),t._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",{staticClass:"custom-block-title"},[t._v("❗️ Warning")]),t._v(" "),n("p",[t._v("Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.")])]),t._v(" "),n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("p",[t._v("In this section, you will learn some of the user interface and user experience components that are specific to Windows.")]),t._v(" "),n("h2",{attrs:{id:"back-button"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#back-button"}},[t._v("#")]),t._v(" Back button")]),t._v(" "),n("p",[t._v("Windows phones have a hardware back button allowing you to go to the previous opened window. However, Windows tablets do not have a hardware back button. If you rely on the back button for navigation, you will need to implement a navigation element, such as a software back button, for Windows tablets if you choose to support it.")]),t._v(" "),n("p",[t._v("To distinguish between the Windows Phone OS and Windows OS, the "),n("code",[t._v("Titanium.Platform.osname")]),t._v(" property will return "),n("code",[t._v("windowsphone")]),t._v(" if the application is running on a Windows Phone device or "),n("code",[t._v("windowsstore")]),t._v(" if the application is running on a device running the Windows OS.")]),t._v(" "),n("p",[t._v("In Alloy, use the "),n("code",[t._v("formFactor")]),t._v(" attribute to distinguish between a phone (set to "),n("code",[t._v("handheld")]),t._v(") or tablet (set to "),n("code",[t._v("tablet")]),t._v(").")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Alloy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Window")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("formFactor")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tablet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onClick")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("closeWindow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Back"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Window")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Alloy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("As of 5.0.0 of the SDK, you can create an event that can prevent accidental closure of the app due to hitting the back button to many times.")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// some code... }")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// more code")]),t._v("\nwin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"windows:back"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Back pressed"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"command-bar"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#command-bar"}},[t._v("#")]),t._v(" Command Bar")]),t._v(" "),n("p",[t._v("The command bar displays a row of buttons the user can tap to invoke additional functionality with your application (similar to the Action Bar in Android or Toolbar in iOS). On a phone, the command bar always appears at the bottom of the application, and on a tablet, the user needs to tap the More icon ("),n("code",[t._v("[...]")]),t._v(") to reveal the command bar. If you are testing locally on your Windows computer, right-click on the application to reveal the command bar.")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Windows Phone app")]),t._v(" "),n("th",[t._v("Windows Store app")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("* Buttons are centered"),n("br"),t._v(" "),n("br"),t._v("* Room for only four buttons"),n("br"),t._v(" "),n("br"),t._v("* Command bar is always present"),n("br"),t._v(" "),n("br"),n("br"),n("img",{attrs:{src:s(885),alt:"wp_commandbar"}})]),t._v(" "),n("td",[t._v("* Buttons are right-aligned"),n("br"),t._v(" "),n("br"),t._v("* Room for more than four buttons"),n("br"),t._v(" "),n("br"),t._v("* Command bar must be revealed by the user"),n("br"),t._v(" "),n("br"),n("br"),n("img",{attrs:{src:s(886),alt:"ws_commandbar"}})])])])]),t._v(" "),n("p",[t._v("To create a command bar:")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Create buttons and separator objects using the following methods:")]),t._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"#!/api/Titanium.UI.Windows-method-createAppBarButton"}},[t._v("Titanium.UI.Windows.createAppBarButton()")])])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"#!/api/Titanium.UI.Windows-method-createAppBarToggleButton"}},[t._v("Titanium.UI.Windows.createAppBarToggleButton()")])])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"#!/api/Titanium.UI.Windows-method-createAppBarSeparator"}},[t._v("Titanium.UI.Windows.createAppBarSeparator()")]),t._v(" – note that separators only appear for Windows Store apps (for the tablet)")])])])]),t._v(" "),n("li",[n("p",[t._v("Pass an array of button and separator objects to the "),n("code",[t._v("items")]),t._v(" property when creating a command bar with the "),n("a",{attrs:{href:"#!/api/Titanium.UI.Windows-method-createCommandBar"}},[t._v("Titanium.UI.Windows.createCommandBar()")]),t._v(" method. Note that on the phone only four buttons can be displayed.")])]),t._v(" "),n("li",[n("p",[t._v("Add the command bar to a "),n("a",{attrs:{href:"#!/api/Titanium.UI.Window"}},[t._v("Titanium.UI.Window")]),t._v(" object.")])])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" backButton "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Windows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAppBarButton")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        icon"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Windows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SystemIcon"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BACK")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    likeButton "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Windows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAppBarToggleButton")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        icon"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Windows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SystemIcon"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LIKEDISLIKE")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    forwardButton "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Windows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAppBarButton")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        icon"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Windows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SystemIcon"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FORWARD")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    commandBar "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Windows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createCommandBar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        items"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("backButton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" likeButton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" forwardButton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    win "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("commandBar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"asset-qualifiers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#asset-qualifiers"}},[t._v("#")]),t._v(" Asset qualifiers")]),t._v(" "),n("p",[t._v("Windows provides different qualifiers to select which assets to use. The qualifiers can be used to support devices with different screen sizes, contrast themes, layout directions, languages, regions, etc.")]),t._v(" "),n("p",[t._v("For information about using qualifiers, see "),n("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/User_Interface_Deep_Dives/Windows_UI_Components_and_Conventions/Windows_Asset_Qualifiers/"}},[t._v("Windows Asset Qualifiers")]),t._v(".")],1)])}),[],!1,null,null,null);a.default=e.exports},885:function(t,a,s){t.exports=s.p+"assets/img/wp_commandbar.672e7e69.png"},886:function(t,a,s){t.exports=s.p+"assets/img/ws_commandbar.28341df7.png"}}]);