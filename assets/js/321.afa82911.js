(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{2017:function(t,a,e){"use strict";e.r(a);var s=e(21),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"community-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#community-app"}},[t._v("#")]),t._v(" Community app")]),t._v(" "),s("p",[t._v("This document contains information on where to download the community app and overview of core concepts and conventions.")]),t._v(" "),s("h2",{attrs:{id:"download"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[t._v("#")]),t._v(" Download")]),t._v(" "),s("p",[t._v("You can download the project from this GitHub repo: "),s("a",{attrs:{href:"https://github.com/appcelerator-titans/App",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/appcelerator-titans/App"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[s("strong",[t._v("As of this writing, the repo was structured such that you cannot directly import it into Studio")]),t._v(" (via the Import > GitHub repo option). This is because the repo includes additional files, such as source graphics, which requires an extra level of directory structure. So, download the zip and import the Community directory into Studio.")]),t._v(" "),s("h2",{attrs:{id:"core-concepts-and-conventions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#core-concepts-and-conventions"}},[t._v("#")]),t._v(" Core Concepts and Conventions")]),t._v(" "),s("p",[t._v("This app features a number of Titanium current-practices, including:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("A CommonJS modules pattern")])]),t._v(" "),s("li",[s("p",[t._v("Minimal additions to the global namespace")])]),t._v(" "),s("li",[s("p",[t._v("Heavy use of the platform build directories to create user experiences tailored to the user's operating system")])]),t._v(" "),s("li",[s("p",[t._v("Wrapping of proxies to avoid the need to extend the Titanium objects")])])]),t._v(" "),s("p",[t._v("This app is not a template for new projects. It is a living app, one that is in constant development by our Development Relations team. We encourage you to pull ideas from the app rather than specific code.")]),t._v(" "),s("h3",{attrs:{id:"commonjs-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-pattern"}},[t._v("#")]),t._v(" CommonJS pattern")]),t._v(" "),s("p",[t._v("Appcelerator's recommended practice is to implement app functionality as a set of CommonJS modules. These modules can represent UI components, factories for app components, or functional libraries (such as a network or database library). The Community app makes extensive use of modules.")]),t._v(" "),s("h3",{attrs:{id:"global-namespace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-namespace"}},[t._v("#")]),t._v(" Global namespace")]),t._v(" "),s("p",[t._v("As outlined elsewhere in these guides, JavaScript has limited notion of scope. You're asking for a world of hurt if you go dumping a lot of variables into the global scope. This app adds a single variable to the global scope. And with slight modification could even eliminate that.")]),t._v(" "),s("p",[t._v("A common use for the global namespace in Titanium apps is as a storehouse for \"session\" data that must be passed between portions of your app. With the CommonJS pattern, modules have their own global namespace and don't have access to the app's global space. This is a similar challenge faced by multi-context apps. The Community app doesn't have a specific need for passing such data. Common solutions for this problem center around creating an object and passing it to each module as needed.")]),t._v(" "),s("p",[t._v("For example, you could create a single global App object to which you may append objects as needed. While there may be times when another global object is needed, everything will be placed in this namespace and documented in order to stay organized and avoid conflicts. e.g. "),s("code",[t._v("App.livedata = {}")]),t._v("; could be the home of transient session data for this app.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" App "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app to which you'll store objects, properties, & session data")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" someComponent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pass the object into the module")]),t._v("\nsomeComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("livedata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someProperty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or pass a specific property to a method")]),t._v("\n")])])]),s("h3",{attrs:{id:"platform-build-directories"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#platform-build-directories"}},[t._v("#")]),t._v(" Platform build directories")]),t._v(" "),s("p",[t._v("The Community app makes heavy use of an under-appreciated feature of Titanium: the platform build directories. Titanium supports an overrides system by which you can provide platform-specific files that will be used in place of those in the main Resources branch. Here's the app.js:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//do any global bootstrapping - none needed now")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//..")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//platform-specific UI bootstrap")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/ui/bootstrap'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("launch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("But when you look at the Resources/ui folder, you won't find a file named bootstrap.js. That's because there are platform-specific versions of that file as shown in this screenshot.")]),t._v(" "),s("p",[s("img",{attrs:{src:e(887),alt:"Screen_Shot_2012-03-23_at_9.14.41_AM"}})]),t._v(" "),s("p",[t._v("Platform build directories (overrides) eliminate the need for "),s("code",[t._v("if(platform) // do this")]),t._v(" type branching in your code. Instead, all the platform-specific code is merged into your project at build time. This can increase execution performance and reduce code complexity. Of course, those benefits come with two costs: slightly longer build time, plus the need to manage multiple versions of files. In this app's case, the UI on each platform varies and takes specific advantage of platform-specific conventions. So the benefit outweigh the costs.")]),t._v(" "),s("h3",{attrs:{id:"wrapping-proxy-objects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wrapping-proxy-objects"}},[t._v("#")]),t._v(" Wrapping proxy objects")]),t._v(" "),s("p",[t._v("A key gotcha that we try to point out frequently is that you should not extend or override any of the Titanium proxy objects (e.g. a table row object, view, or something like Ti.App). While JavaScript is very flexible, the underlying native languages are not. Neither is the bridge between JavaScript and nativeland. Adding a property or two to a proxy is probably okay, adding objects or methods is likely to cause your app to crash.")]),t._v(" "),s("p",[t._v("Still, there are times when it's so hard to resist storing some data in a proxy. For that, we suggest you wrap proxies in standard JavaScript objects and extend those JavaScript objects. The Community app does this. See the "),s("code",[t._v("/ui/components.js")]),t._v(" for example code. Here's an excerpt:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*Titanium Proxy Object*/")]),t._v(" tiView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("viewProxy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tiView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Wrappers for common Titanium view construction functions")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("tiChildView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" v "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tiChildView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("viewProxy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("tiChildView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("viewProxy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... lots more here")]),t._v("\n")])])]),s("p",[t._v("The other modules could then call on this component object to wrap Titanium proxies, like this:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ui "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/ui/components'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myview "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ui"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ui"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("View")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("44")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     top"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     backgroundImage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/images/sliver.png'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyview"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("someMethod")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do stuff here")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Because these wrapped objects have a slightly different interface (different methods & properties) than the standard objects they represent, you probably want to use them only when required.")])])}),[],!1,null,null,null);a.default=n.exports},887:function(t,a,e){t.exports=e.p+"assets/img/Screen_Shot_2012-03-23_at_9.14.41_AM.fb2e5777.png"}}]);