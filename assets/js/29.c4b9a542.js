(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1536:function(e,t,a){"use strict";a.r(t);var s=a(21),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"ios-module-debugging"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ios-module-debugging"}},[e._v("#")]),e._v(" iOS Module Debugging")]),e._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),s("p",[e._v("This guide covers how to debug a native iOS module directly inside Xcode. As an example we will setup the "),s("a",{attrs:{href:"https://github.com/appcelerator-modules/titanium-socketio",target:"_blank",rel:"noopener noreferrer"}},[e._v("titanium-socketio"),s("OutboundLink")],1),e._v(" module.")]),e._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),s("p",[e._v("To debug a native iOS module you first need a Titanium test app. It is recommended to use a new plain Titanium app project. You can create a new one with the following command.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ti create -t app\n")])])]),s("p",[e._v("After you created the new app project you need to build it once. This will generate the Xcode project we'll use as the starting point to setup iOS module debugging.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ti build -p ios -b\n")])])]),s("h2",{attrs:{id:"preparing-xcode-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preparing-xcode-project"}},[e._v("#")]),e._v(" Preparing Xcode project")]),e._v(" "),s("p",[e._v("Now that you have a newly generated Xcode project there are a few changes that need to be done to get everything up and running. Open up the generated Xcode project from "),s("code",[e._v("<project-dir>/build/iphone/<project-name>.xcodeproj")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"add-build-phase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-build-phase"}},[e._v("#")]),e._v(" Add Build Phase")]),e._v(" "),s("p",[e._v('First you need to add a new "Run Script" phase to the app target.')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cp ~/Library/Application\\ Support/Titanium/mobilesdk/osx/<sdk-version>/common/Resources/ios/ti.main.js ${BUILT_PRODUCTS_DIR}/${CONTENTS_FOLDER_PATH}/ti.main.js\ncp ${SRCROOT}/build/Products/Debug-iphonesimulator/${CONTENTS_FOLDER_PATH}/_index_.json ${BUILT_PRODUCTS_DIR}/${CONTENTS_FOLDER_PATH}/_index_.json\n")])])]),s("p",[e._v("Make sure to change the "),s("code",[e._v("<sdk-version>")]),e._v(" to the SDK version that you used while running the above "),s("code",[e._v("ti build")]),e._v(" command. This will copy two required runtime files into the app bundle, which is usually done by the Titanium CLI.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(638),alt:"Screenshot_2020-03-05_at_19.11.22"}})]),e._v(" "),s("h3",{attrs:{id:"add-resources-to-copy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-resources-to-copy"}},[e._v("#")]),e._v(" Add Resources to Copy")]),e._v(" "),s("p",[e._v("Next you need to drag and drop the projects "),s("code",[e._v("Resources/app.js")]),e._v(" file into the Xcode project and place it under the "),s("code",[e._v("Resources")]),e._v(" group. Do this for all other JS files as well that you may want to require.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(639),alt:"Screenshot_2020-03-05_at_19.14.10"}})]),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("💡 NOTE")]),e._v(" "),s("p",[e._v("These files are not getting transpiled like you are used to when building a Titanium app via CLI. You need to make sure that they only contain valid JavaScript for the device you targeting.")])]),e._v(" "),s("h2",{attrs:{id:"adding-and-linking-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-and-linking-module"}},[e._v("#")]),e._v(" Adding and linking module")]),e._v(" "),s("p",[e._v("Next up you'll add the module Xcode project as a dependency. Again, simply drag and drop the module's Xcode project into the open Xcode project of your testing app.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(640),alt:"Screenshot_2020-03-05_at_19.15.02"}})]),e._v(" "),s("p",[e._v('Now you need to add the module\'s library (Objective-C) or framework (Swift) to the main Xcode project. Select the target and under the "General" tab, look for "Frameworks, Libraries, and Embedded Content" and press "+" to add it.')]),e._v(" "),s("p",[s("img",{attrs:{src:a(641),alt:"Screenshot_2020-03-05_at_19.18.38"}})]),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("💡 Third-Party Dependencies")]),e._v(" "),s("p",[e._v("If the module you are debugging contains third-party dependencies under its "),s("code",[e._v("ios/platform")]),e._v(' folder, you need to add them here as well. In the dialog that pops up after pressing "+", select "Add Other..." > "Add files..." and select the dependencies of your module. You also need to adjust the header and/or framework search path under "Build Settings", so Xcode knows where to find your module\'s dependencies.')])]),e._v(" "),s("p",[e._v('Switch over to the "Build Phases" tab and make sure to add the module project as a dependency so Xcode will build both the app and the module. Press the "+" under "Dependencies" and select the module\'s library (Objective-C) or framework (Swift) as a dependency.')]),e._v(" "),s("p",[s("img",{attrs:{src:a(642),alt:"Screenshot_2020-03-05_at_19.21.06"}})]),e._v(" "),s("h2",{attrs:{id:"build-and-debug"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-and-debug"}},[e._v("#")]),e._v(" Build and Debug")]),e._v(" "),s("p",[e._v("You can now build and debug the whole app and your module. Open "),s("code",[e._v("Resources/app.js")]),e._v(" and add some code that uses your module from JavaScript.")]),e._v(" "),s("p",[s("strong",[e._v("Resources/app.js")])]),e._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" io "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'ti.socketio'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" socket "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("connect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'http://localhost:8080'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("Set a breakpoint in the code you want to debug and run the app!")]),e._v(" "),s("p",[s("img",{attrs:{src:a(643),alt:"Screenshot_2020-03-05_at_19.33.43"}})])])}),[],!1,null,null,null);t.default=o.exports},638:function(e,t,a){e.exports=a.p+"assets/img/Screenshot_2020-03-05_at_19.11.22.8d8cfabb.png"},639:function(e,t,a){e.exports=a.p+"assets/img/Screenshot_2020-03-05_at_19.14.10.14c2e54c.png"},640:function(e,t,a){e.exports=a.p+"assets/img/Screenshot_2020-03-05_at_19.15.02.b3b163b1.png"},641:function(e,t,a){e.exports=a.p+"assets/img/Screenshot_2020-03-05_at_19.18.38.cbd65d20.png"},642:function(e,t,a){e.exports=a.p+"assets/img/Screenshot_2020-03-05_at_19.21.06.2981eaf7.png"},643:function(e,t,a){e.exports=a.p+"assets/img/Screenshot_2020-03-05_at_19.33.43.a32ab1e3.png"}}]);