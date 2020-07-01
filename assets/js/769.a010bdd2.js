(window.webpackJsonp=window.webpackJsonp||[]).push([[769],{1917:function(t,a,e){"use strict";e.r(a);var s=e(21),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"alloy-best-practices-and-recommendations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alloy-best-practices-and-recommendations"}},[t._v("#")]),t._v(" Alloy Best Practices and Recommendations")]),t._v(" "),e("p",[t._v("This guide provides recommendations for writing Alloy applications. This guide supplements the existing Titanium SDK "),e("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Best_Practices_and_Recommendations/"}},[t._v("Best Practices and Recommendations")]),t._v(" guide with a primary focus on the "),e("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Best_Practices_and_Recommendations/Coding_Best_Practices/"}},[t._v("Coding Best Practices")]),t._v(" and "),e("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Best_Practices_and_Recommendations/Style_and_Conventions/"}},[t._v("Style and Conventions")]),t._v(" pages.")],1),t._v(" "),e("h2",{attrs:{id:"titanium-to-alloy-guidance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#titanium-to-alloy-guidance"}},[t._v("#")]),t._v(" Titanium-to-Alloy Guidance")]),t._v(" "),e("h3",{attrs:{id:"in-my-titanium-application-i-previously-loaded-libraries-upon-startup-in-organizing-my-patterns-with-mvc-do-i-need-to-organize-application-functionality-further-under-namespaces-within-controllers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#in-my-titanium-application-i-previously-loaded-libraries-upon-startup-in-organizing-my-patterns-with-mvc-do-i-need-to-organize-application-functionality-further-under-namespaces-within-controllers"}},[t._v("#")]),t._v(" In my Titanium application, I previously loaded libraries upon startup. In organizing my patterns with MVC, do I need to organize application functionality further under namespaces within controllers?")]),t._v(" "),e("p",[t._v("Not unless you want to. If you have a pre-existing set of functionality that you want to make available globally throughout your app, there is no reason to further sub-categorize it unless it serves you in terms of organization or scalability. There is nothing preventing you from requiring your pre-existing modules in all your Alloy controllers, or even making a single global reference to your module that can be referenced throughout your app. For example:")]),t._v(" "),e("p",[e("strong",[t._v("apps/alloy.js")])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Alloy.Globals.refToYourModule will be available in all controllers")]),t._v("\nAlloy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Globals"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("refToYourModule "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yourModule'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"are-there-best-practices-to-employ-within-controllers-for-performance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#are-there-best-practices-to-employ-within-controllers-for-performance"}},[t._v("#")]),t._v(" Are there best practices to employ within controllers for performance?")]),t._v(" "),e("p",[t._v("The same best practices that apply to traditional Titanium development still apply in the world of Alloy. In fact, everything you can do in traditional Titanium development you can do in Alloy's controllers. Use the "),e("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Best_Practices_and_Recommendations/Coding_Best_Practices/"}},[t._v("Coding Best Practices")]),t._v(" you learned with traditional Titanium development in Alloy. That said, the best trick you can use now is taking advantage of the compiler directives to speed up runtime performance. Refer to "),e("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Controllers/#ConditionalCode"}},[t._v("Alloy Controllers: Conditional Code")]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"is-there-a-best-practice-that-i-should-use-to-help-out-alloy-for-my-own-organization-here-as-i-did-in-the-standard-titanium-applications"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#is-there-a-best-practice-that-i-should-use-to-help-out-alloy-for-my-own-organization-here-as-i-did-in-the-standard-titanium-applications"}},[t._v("#")]),t._v(" Is there a best practice that I should use to help out Alloy for my own organization here, as I did in the standard Titanium applications?")]),t._v(" "),e("p",[t._v("It depends on the size and depth of your existing organization. You need to determine if it makes sense to bend Alloy around your existing organization, or bend your existing organization around Alloy. One of the driving forces behind Alloy was a need to standardize the many disparate Titanium coding methodologies out there. In doing so, your projects will be cleaner and more in line with best practices, but also give it a familiar feel and structure that makes it easier for other developers to help and contribute.")]),t._v(" "),e("h2",{attrs:{id:"coding-style-best-practices"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coding-style-best-practices"}},[t._v("#")]),t._v(" Coding Style Best Practices")]),t._v(" "),e("h3",{attrs:{id:"naming-conventions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#naming-conventions"}},[t._v("#")]),t._v(" Naming Conventions")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Do not use double underscore prefixes on variables, properties, or function names (e.g., "),e("code",[t._v("__foo")]),t._v("). They are reserved for use in Alloy. If you use them, there is potential for conflicts and unexpected behavior.")])]),t._v(" "),e("li",[e("p",[t._v("Do not use JavaScript reserved words as IDs. For a complete list, see "),e("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Best_Practices_and_Recommendations/Reserved_Words/"}},[t._v("Reserved Words")]),t._v(".")],1)])]),t._v(" "),e("h3",{attrs:{id:"global-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#global-variables"}},[t._v("#")]),t._v(" Global Variables")]),t._v(" "),e("ul",[e("li",[t._v("Do not declare global variables in app.js and use them in other files. Such usage is currently allowed but not recommended, and it will be deprecated in the future. Users who wish to use globals in Alloy applications can declare the following in their JS files:")])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Alloy "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'alloy'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Backbone "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'alloy/backbone'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'alloy/underscore'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("As an example:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Alloy "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Alloy "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'alloy'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Backbone "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Backbone "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'alloy/backbone'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" _ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'alloy/underscore'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" loading "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Alloy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWidget")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.appcelerator.loading"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"global-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#global-events"}},[t._v("#")]),t._v(" Global Events")]),t._v(" "),e("p",[t._v("Although you can use "),e("code",[t._v("Ti.App.fireEvent('name')")]),t._v(" to call an event declared as "),e("code",[t._v("Ti.App.addEventListener('name', functionAttached)")]),t._v(", this is not recommended at all because this will cross the bridge between native and JavaScript lands, which involves some steps you will not be noticed about, but that bad managed can finish in memory leaks and, in any case, slower processes.")]),t._v(" "),e("p",[t._v("Instead of that, you can use better approaches, depending on the problem you are addressing:")]),t._v(" "),e("ul",[e("li",[t._v("If you have the classic problem communication between a master - child screens (you need that a child event triggers something in the parent), then use the callback approach: you can pass a function to be called as a callback when needed:")])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//master.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("openChild")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Alloy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createController")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'child'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("callback"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" refreshData"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("refreshData")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do the refresh part of master here")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//child.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" args "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arguments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("refreshParent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// You can pass here a return value to the parent")]),t._v("\n  args"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),e("ul",[e("li",[t._v("If you need to communicate between different parts of the app, then use the Backbone dispatcher approach: create a global object with Backbone capabilities. You can do either, declare it in a file and require it when needed or, more practical, create it in "),e("code",[t._v("alloy.js")]),t._v(" file to be available to all your project. Another advantage of use the Backbone approach is that you can cancel the events in any place because are global:")])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//alloy.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\nAlloy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Events "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Backbone"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Events"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//controller_a.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Prepare a "listener" to execute some work when called')]),t._v("\nAlloy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Events"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'updateMainUI'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" refreshData"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Instead of use Ti.App.addEventListener('updateMainUI', refreshData);")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("refreshData")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do what you need here")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Maybe a \"onetime use\" event? you can deactivate it here by calling Alloy.Events.off('updateMainUI');")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Remember to disable it when no needed (probably when you close your controller) to avoid memory leaking problems")]),t._v("\n$"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controller_a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'close'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Alloy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Events"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("off")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'updateMainUI'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//controller_b.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Call the "listener" to execute the work')]),t._v("\nAlloy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Events"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("trigger")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'updateMainUI'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Instead of use Ti.App.fireEvent('updateMainUI');")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),e("p",[e("strong",[t._v("Note:")]),t._v(" in the first example, Alloy c ontrollers are Backbone event dispatchers as well. So you could do also "),e("code",[t._v("Alloy.createController('child').on('refresh', refreshData)")]),t._v(" to get the same behavior of a callback approach but with Backbone approach, and then trigger the event when you need it.")])])}),[],!1,null,null,null);a.default=n.exports}}]);