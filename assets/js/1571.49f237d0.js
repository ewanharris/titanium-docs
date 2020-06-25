(window.webpackJsonp=window.webpackJsonp||[]).push([[1571],{1560:function(t,a,s){"use strict";s.r(a);var e=s(21),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"integrate-with-mobile-backend-services"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integrate-with-mobile-backend-services"}},[t._v("#")]),t._v(" Integrate with Mobile Backend Services")]),t._v(" "),s("h2",{attrs:{id:"objective"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[t._v("#")]),t._v(" Objective")]),t._v(" "),s("p",[t._v("In this section, you will learn how to utilize the Mobile Backend Services (MBS) APIs for your mobile apps.")]),t._v(" "),s("h2",{attrs:{id:"contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),s("p",[t._v("Mobile Backend Services provide a wide array of automatically-scaled network features and data objects for your app. Tasks such as push notifications, user logins, photo uploads, checkins and status updates that usually require server programming or tedious integration with multiple SDKs are performed through one simple interface.")]),t._v(" "),s("p",[t._v("We worry about the database, file storage, search engine and application stack so that you can focus on what’s really important: your app and your users. As usage of your app increases, MBS scales up automatically to handle the load without requiring you to do any additional work. Photos and other files are redundantly stored on multiple devices across multiple storage facilities, preventing data corruption and loss.")]),t._v(" "),s("p",[t._v("Over 25 APIs are available for immediate use in your app to provide the most popular network features. Writing, testing, and deploying server code is a thing of the past. Focus on your users and app features.")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("💡 ACS API support")]),t._v(" "),s("p",[t._v("Note that when new APIs are added to MBS, they may not be immediately available in the Titanium Cloud module.\nThe since version listed after some APIs indicates the Titanium Mobile SDK release that included support for\nthat API. (Note that the Titanium Cloud module version is not always the same as the SDK version that it ships with.)")])]),t._v(" "),s("p",[t._v("MBS is open to all app publishers, regardless of the development technology used to build the app – Titanium, Objective-C, Java, or HTML5 via frameworks like Sencha Touch or PhoneGap – we’ve got you covered. MBS provide a complete REST API along with iOS, Android and JavaScript SDKs. Any device that can make HTTP requests over the Internet can securely use MBS as its server backend.")]),t._v(" "),s("h3",{attrs:{id:"integrating-mobile-backend-services-into-your-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integrating-mobile-backend-services-into-your-app"}},[t._v("#")]),t._v(" Integrating Mobile Backend Services into your app")]),t._v(" "),s("p",[t._v("To integrate MBS into your app, you'll need to follow these four general steps:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Register your app with API Builder")])]),t._v(" "),s("li",[s("p",[t._v("Configure your Titanium project to use Arrow")])]),t._v(" "),s("li",[s("p",[t._v("Authenticate your API calls to the Arrow Cloud infrastructure")])]),t._v(" "),s("li",[s("p",[t._v("Implement the Titanium MBS API calls within your app")])])]),t._v(" "),s("p",[t._v("You might want to add a fifth step to this list: Manage the data your app collects by using the MBS control panel or RESTful API.")]),t._v(" "),s("h4",{attrs:{id:"step-1-register-your-app-with-api-builder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-1-register-your-app-with-api-builder"}},[t._v("#")]),t._v(" Step 1. Register Your App with API Builder")]),t._v(" "),s("p",[t._v("Using MBS API to store and retrieve data for your app is easy.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("When creating a new application in Appcelerator Studio, make sure the "),s("strong",[t._v("Enable Appcelerator Services")]),t._v(" checkbox is enabled.")])]),t._v(" "),s("li",[s("p",[t._v("For a previously created project, open your "),s("code",[t._v("tiapp.xml")]),t._v(" file, then click the "),s("strong",[t._v("Enable Services")]),t._v(" button under the "),s("em",[t._v("Appcelerator Service")]),t._v(" section.")])])]),t._v(" "),s("h4",{attrs:{id:"step-2-configure-your-titanium-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-2-configure-your-titanium-project"}},[t._v("#")]),t._v(" Step 2. Configure your Titanium project")]),t._v(" "),s("p",[t._v("MBS support is baked into Titanium. However, you must include the cloud services module into your project to use Arrow functionality. In your "),s("code",[t._v("app.js")]),t._v(" (or other suitable file), include the "),s("code",[t._v("require()")]),t._v(" statement as shown here:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Cloud "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ti.cloud'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nCloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debug "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// optional; if you add this line, set it to false for production")]),t._v("\n")])])]),s("p",[t._v("In order for the "),s("code",[t._v("ti.cloud")]),t._v(" module to be recognized, ensure that the modules directive has been added to "),s("code",[t._v("tiapp.xml")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("modules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("module")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("platform")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("commonjs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("ti.cloud"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("module")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("modules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h4",{attrs:{id:"step-3-authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-3-authentication"}},[t._v("#")]),t._v(" Step 3. Authentication")]),t._v(" "),s("p",[t._v("Your app must prove that it is allowed to talk to MBS. This keeps your data secure by preventing anyone from making requests to MBS that impersonate your app. In order to make MBS calls, add the Cloud App Key to your "),s("code",[t._v("tiapp.xml")]),t._v(" file.")]),t._v(" "),s("p",[t._v("If you add MBS support to your application when you create it in Studio, Studio adds the authentication keys to your "),s("code",[t._v("tiapp.xml")]),t._v(" file:")]),t._v(" "),s("p",[s("strong",[t._v("tiapp.xml")])]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("acs-api-key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("ARROW_APP_KEY"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h4",{attrs:{id:"step-4-implement-the-titanium-mobile-backend-services-apis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-4-implement-the-titanium-mobile-backend-services-apis"}},[t._v("#")]),t._v(" Step 4. Implement the Titanium Mobile Backend Services APIs")]),t._v(" "),s("p",[t._v("Add cloud services to your app using the MBS APIs. With over 25 APIs available for you to use, we obviously can't cover them all here. But let's take a look at a couple of examples.")]),t._v(" "),s("p",[s("strong",[t._v("Create a user")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// example assumes you have a set of text fields named username, password, etc.")]),t._v("\nCloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Users"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    username"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    password_confirmation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" confirmPassword"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    first_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" firstName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    last_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" lastName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("success"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// user created successfully")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// oops, something went wrong")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Post a photo")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// assumes you've obtained a photo from the camera or gallery, with blob data stored in an object named photo")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// collectionID is an ID generated by ArrowDB for a grouping of photos, you could retrieve via code or hard-code it")]),t._v("\nCloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Photos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    photo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" photo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    collection_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" collectionID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'photo_sync_sizes[]'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'small_240'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("success"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// null out our photo objects to clean up memory")]),t._v("\n        photo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        collectionID "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// oops, something went wrong")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Linking a Facebook login with your app")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Not shown is the code to implement the Facebook module in your app")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// call the ArrowDB Facebook SocialIntegrations API to link logged in states")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateLoginStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Facebook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loggedIn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Logging in to ArrowDB as well, please wait...'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        Cloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SocialIntegrations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("externalAccountLogin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'facebook'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            token"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Facebook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accessToken\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("success"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" user "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("users"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Logged in! You are now logged in as '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Please login to Facebook.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// when the user logs into or out of Facebook, link their login state with ArrowDB")]),t._v("\nFacebook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'login'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateLoginStatus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nFacebook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logout'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateLoginStatus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// add the Facebook login button")]),t._v("\nwin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Facebook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createLoginButton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    top"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Of course, there are many more examples we could show. Instead, head on over to the API documentation to view the samples included there plus the full explanation of MBS APIs.")]),t._v(" "),s("p",[t._v("The Cloud module also includes a sample application demonstrating each of the MBS request types. You can find this in the modules folder under the Titanium SDK folder. For example:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/Library/Application Support/Titanium/modules/commonjs/ti.cloud/<version>/example\n")])])]),s("h4",{attrs:{id:"step-5-managing-your-app-s-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-5-managing-your-app-s-data"}},[t._v("#")]),t._v(" Step 5. Managing your app's data")]),t._v(" "),s("p",[t._v("Of course, there's no sense in collecting data if you don't use it. Data created by your app is stored within the Arrow cloud. You can view and manage this data through the Appcelerator Dashboard. You can also use the RESTful API (or any of the other APIs) to extract the data you need.")]),t._v(" "),s("h4",{attrs:{id:"step-6-sharing-mbs-objects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-6-sharing-mbs-objects"}},[t._v("#")]),t._v(" Step 6. Sharing MBS Objects")]),t._v(" "),s("p",[t._v("The Cloud module supports Access Control Lists (ACLs) to control access to ACL resources. An ACL lets you grant read and write access to users other than the owner of an MBS object. An access control list controls read and write access to any MBS objects it's attached to. For MBS, read and write permission are defined as follows:")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("Read permission")]),t._v(". Includes the ability to show, query and search MBS objects.")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Write permission")]),t._v(". Includes the ability to update and delete MBS objects.")])])]),t._v(" "),s("p",[t._v("An ACL can include:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("A list of user IDs granted read permission.")])]),t._v(" "),s("li",[s("p",[t._v("A list of user IDs granted write permission.")])]),t._v(" "),s("li",[s("p",[t._v("A public read flag granting read permission to "),s("strong",[t._v("all")]),t._v(" users.")])]),t._v(" "),s("li",[s("p",[t._v("A public write flag granting write permission to "),s("strong",[t._v("all")]),t._v(" users.")])])]),t._v(" "),s("p",[t._v("The object's owner always has read and write permission.")]),t._v(" "),s("p",[t._v("You can specify an ACL when you create or update an object.")]),t._v(" "),s("p",[t._v("Currently, ACLs can be used with the following MBS objects: Checkins, Custom Objects, Events, Files, Photos, Photo Collections, Places, Posts, Reviews and Statuses.")]),t._v(" "),s("p",[t._v("See "),s("a",{attrs:{href:"#!/api/Modules.Cloud.ACLs"}},[t._v("Ti.Cloud.ACLs")]),t._v(" for methods to create and update ACLs.")]),t._v(" "),s("h3",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"#!/api/Modules.Cloud"}},[t._v("Cloud Module Reference")])])]),t._v(" "),s("li",[s("p",[s("RouterLink",{attrs:{to:"/guide/Mobile_Backend_Services/Mobile_Backend_Services_Getting_Started/"}},[t._v("Mobile Backend Services Getting Started")])],1)])]),t._v(" "),s("h2",{attrs:{id:"summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),s("p",[t._v("In this section, you briefly explored how to use the Mobile Backend Services APIs in your mobile apps.")])])}),[],!1,null,null,null);a.default=n.exports}}]);