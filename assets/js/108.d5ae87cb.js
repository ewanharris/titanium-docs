(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{1585:function(t,a,s){"use strict";s.r(a);var e=s(21),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"hyperloop-and-android-using-third-party-android-libraries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hyperloop-and-android-using-third-party-android-libraries"}},[t._v("#")]),t._v(" Hyperloop and Android - Using Third Party Android Libraries")]),t._v(" "),e("p",[t._v("With Hyperloop, you can use native Android libraries directly in Titanium using Javascript. In this short tutorial, we will use an existing third party AAR library in our app.")]),t._v(" "),e("p",[t._v("The library we will use is "),e("a",{attrs:{href:"https://github.com/foxsake/ParkedTextView",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parked Text View"),e("OutboundLink")],1),t._v(" – which is basically a textfield with a static and a variable text:")]),t._v(" "),e("p",[e("img",{attrs:{src:s(610),alt:"slack_1"}})]),t._v(" "),e("h2",{attrs:{id:"the-aar-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-aar-file"}},[t._v("#")]),t._v(" The AAR file")]),t._v(" "),e("p",[t._v("First, you will have to download the compiled version of the library or build it yourself using gradle. Since the binary is not available in this repo or on "),e("a",{attrs:{href:"http://search.maven.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("maven central"),e("OutboundLink")],1),t._v(", you have to clone the repo and run "),e("code",[t._v("gradle build")]),t._v(" in the main folder. The AAR file is included in the demo Github repo at: "),e("a",{attrs:{href:"https://github.com/m1ga/hyperloop.parkedText",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/m1ga/hyperloop.parkedText"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"setting-up-the-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-app"}},[t._v("#")]),t._v(" Setting up the app")]),t._v(" "),e("p",[t._v("In the next step, we create a new Titanium project with "),e("code",[t._v("appc new")]),t._v(" and click "),e("strong",[t._v("Yes")]),t._v(" to “Would you like to enable native API access with Hyperloop for this app?”.")]),t._v(" "),e("p",[t._v("We create a folder called "),e("code",[t._v("app/platform/android/")]),t._v(" and copy the AAR file into this folder.")]),t._v(" "),e("p",[t._v("The Parked Text Github repo has a "),e("em",[t._v("Usage")]),t._v(" section with some information on how to include the view but some parts are missing, so we have to look at the main Java file which is located "),e("a",{attrs:{href:"https://github.com/foxsake/ParkedTextView/blob/master/parkedtextview/src/main/java/com/goka/parkedtextview/ParkedTextView.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("There we can find the basic constructor "),e("code",[t._v("public ParkedTextView(Context context)")]),t._v(" and some useful public methods – "),e("code",[t._v("setHintText(), setParkedText() or setParkedHintColor()")]),t._v(" – which we are going to use.")]),t._v(" "),e("h3",{attrs:{id:"importing-classes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#importing-classes"}},[t._v("#")]),t._v(" Importing classes")]),t._v(" "),e("p",[t._v("In Java, you would import a class like this:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import android.view.View;\nView view = new View();\n")])])]),e("p",[t._v("The equivalent in Hyperloop would be:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" View "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.view.View"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" view "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Before we can create the "),e("code",[t._v("ParkedTextView")]),t._v(" object, we need to create the context that is used inside the constructor:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Activity "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.app.Activity"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" context "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Activity")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentActivity"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("The "),e("code",[t._v("ParkedTextView")]),t._v(" class is "),e("code",[t._v("com.goka.parkedtextview.ParkedTextView,")]),t._v(" which needs to be imported like this:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ParkedTextView "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.goka.parkedtextview.ParkedTextView"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" parkedView "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ParkedView")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"use-the-component"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-the-component"}},[t._v("#")]),t._v(" Use the component")]),t._v(" "),e("p",[t._v("Now, we have a JavaScript UI component we can use in our Titanium project in a way we use normal UI components and call some methods:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('parkedView.setParkedTextColor("#000000");\nparkedView.setParkedHintColor("#999999");\nparkedView.setParkedText(".slack.com");\nparkedView.setHintText("your-team");\n')])])]),e("p",[t._v("Add it to our window or a view:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$.index.add(parkedView); // $.view.add(parkedView);\n")])])]),e("h3",{attrs:{id:"listen-to-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#listen-to-events"}},[t._v("#")]),t._v(" Listen to events")]),t._v(" "),e("p",[t._v("Android TextView uses the "),e("a",{attrs:{href:"https://developer.android.com/reference/android/text/TextWatcher.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TextWatcher ()"),e("OutboundLink")],1),t._v(" to listen to the change events.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" TextWatcher "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.text.TextWatcher"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("This provides three listeners that we assign to Javascript callback functions:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" textWatcher "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextWatcher")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    onTextChanged"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" onTextChanged"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    afterTextChanged"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" afterTextChanged"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    beforeTextChanged"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" beforeTextChanged\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeTextChanged")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Before: "')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" parkedView"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getText")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onTextChanged")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Changed: "')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" parkedView"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getText")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("afterTextChanged")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("s")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"After: "')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#layout"}},[t._v("#")]),t._v(" Layout")]),t._v(" "),e("p",[t._v("The last step is to apply a layout, so it will take as much space as needed (like "),e("code",[t._v("Ti.UI.SIZE")]),t._v("). To do that, we use the Android LayoutParams. First, import the classes:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" LayoutParams "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.widget.FrameLayout.LayoutParams"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ViewGroupLayoutParams "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.view.ViewGroup.LayoutParams"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Then, apply the layout:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" layoutParams "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LayoutParams")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ViewGroupLayoutParams"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WRAP_CONTENT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ViewGroupLayoutParams"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WRAP_CONTENT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Gravity"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CENTER")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nparkedView"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLayoutParams")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("layoutParams"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"done"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#done"}},[t._v("#")]),t._v(" Done")]),t._v(" "),e("p",[t._v("The app is ready now! And, the library will be used in our app and receive the text the user types in.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(611),alt:"slack"}})]),t._v(" "),e("p",[t._v("The full example is available at "),e("a",{attrs:{href:"https://github.com/m1ga/hyperloop.parkedText",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/m1ga/hyperloop.parkedText"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("This document was adapted from "),e("a",{attrs:{href:"https://www.appcelerator.com/blog/2018/12/hyperloop-and-android-using-third-party-android-libraries/?utm_source=Axway+Appcelerator&utm_campaign=bf1687b383-BLOG_ROUNDUP_2018_12_14&utm_medium=email&utm_term=0_763a3fa2c9-bf1687b383-430799269",target:"_blank",rel:"noopener noreferrer"}},[t._v("Appcelerator blog post: Hyperloop and Android: Using Third Party Android Libraries"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports},610:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAABwCAIAAAC8dX3AAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAPzklEQVR4nO3ba0wUV8MH8DO7sCzswnJRuQnIxQWKoqhQqRqtCV7aamNqo9g0VRN7s22iVWtKtSmWUmNK2ppq1qjVmkasSAqmivUSKWCsBbwAKshNKbruKizL4l5n5vlw0nn2ZRE4Pra2b/+/D2T2zNkzZ2d3/nPmzMCJokgAAFjInnQHAOCfB8EBAMwQHADADMEBAMwQHADADMEBAMwQHADADMEBAMwQHADADMEBAMwQHADADMEBAMwQHADADMEBAMwQHADADMEBAMwQHADADMEBAMwQHADADMEBAMwQHADADMEBAMwQHADADMEBAMwQHADADMEBAMwQHADADMEBAMwQHADADMEBAMwQHADADMEBAMwQHADADMEBAMwQHADADMEBAMwQHADADMEBAMwQHADADMEBAMwQHADADMEBAMwQHADADMEBAMwQHADAzOtJdwD+2bZt29bX15eQkPDKK69wHPdojdhstq1bt4qimJmZOXfu3MfbQ/gzcKIoPuk+wD9YaGiowWCYN2/esWPHHjk4enp6goODBUFYt27dtm3bHm8P4c+AS5W/KYPBUFhYeP369SfdkWF5XKcfQRAeSzvwZ0Nw/E25XC6z2Wy32590R/5Sjzxmgb8Y5jgGc+3atd7e3okTJyoUClpy69YtvV6fmJio0WgIIUajsampyWQy+fn5xcXFxcTESO+9cuUKISQ1NVUqqa6uVqvVSUlJhJD6+npBEMLCwurr6+Vy+cyZM923W1NT09PTQwjp6Oiw2+3S5lwuV2NjY0dHByEkMjIyKSnJ29tbetfNmzfb2toePHigUqm0Wm14eDgt7+rqam5ujo+Pv3//fnt7uyAI4eHh48aN43n+6tWrer2e47iYmJjExMSHHbcGg+Hbb7+tqqpyOp3jx49funTppEmTHrbTLl68WFhYWFdX5+3tPWPGjBUrVoSEhEhrS0pKiouL79y5ExUVtWTJkjlz5gzYyPbt2+/cuUMIWbZs2bhx4zwr9GsnKytL6rzRaNy7d29lZSXP81OmTFm+fHlcXBwhxGaz5ebmEkJefPHFzs7OwsLCvr6+rKysd955p729fceOHQ0NDdHR0e+++677twYDwhzHYGpra6urq2fP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"},611:function(t,a,s){t.exports=s.p+"assets/img/slack.4f4eb03b.png"}}]);