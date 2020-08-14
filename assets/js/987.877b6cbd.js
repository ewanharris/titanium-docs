(window.webpackJsonp=window.webpackJsonp||[]).push([[987],{1481:function(t,a,n){"use strict";n.r(a);var s=n(21),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"windows-runtime-direct-api-access"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windows-runtime-direct-api-access"}},[t._v("#")]),t._v(" Windows Runtime Direct API Access")]),t._v(" "),n("div",{staticClass:"danger custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("❗️ Warning")]),t._v(" "),n("p",[t._v("WIndows Runtime Direct API Access was removed in Titanium SDK 6.1.0. Use "),n("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Hyperloop/"}},[t._v("Hyperloop")]),t._v(" to access native APIs.")],1)]),t._v(" "),n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("p",[t._v("For the Windows Platform, the Titanium SDK allows you to directly use the Windows Runtime (WinRT) C++ APIs in your project's JavaScript files. The Titanium SDK will scan your JavaScript files to see if it uses any of the WinRT APIs and will create C++ wrappers and add any dependencies. The Windows Runtime C#, VB and JavaScript APIs are not supported as well as the Windows 10 Mobile APIs.")]),t._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),n("p",[t._v("The first time you build a project that includes WinRT APIs, the first build will be slow (will take several minutes). Subsequent builds should be faster even if you add more WinRT classes.")])]),t._v(" "),n("h2",{attrs:{id:"usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),n("p",[t._v("To use a Windows API, you must first require in the class, then you can invoke its APIs. For most APIs, you can directly use the API name without any modification.")]),t._v(" "),n("p",[t._v("Before using an API make sure it can be supported first. Open the "),n("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/windows/apps/br211369.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("API reference"),n("OutboundLink")],1),t._v(" for the API you want to use.")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Check if it is supported in C++. In the "),n("em",[t._v("Syntax")]),t._v(" section at the top of the API reference, the tabbed group should contain a C++ tab.")])]),t._v(" "),n("li",[n("p",[t._v("Check that the minimum API version is at least Windows 8 or 8.1. At the bottom of the API reference, check for a "),n("em",[t._v("Requirements (Windows 8.x and Windows Phone)")]),t._v(" section.")])]),t._v(" "),n("li",[n("p",[t._v("Check if the API supports only Windows Phone or only Windows. Some APIs may only support one platform. Check the platform in the application before invoking the API.")])])]),t._v(" "),n("h3",{attrs:{id:"require-a-class"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#require-a-class"}},[t._v("#")]),t._v(" Require a class")]),t._v(" "),n("p",[t._v("To include a WinRT C++ class, pass the fully qualified class name to the "),n("code",[t._v("require()")]),t._v(" method. Do not pass variables or concatenated strings that evaluate to the class name to the "),n("code",[t._v("require()")]),t._v(" call. The Titanium SDK looks specifically for any string literals that start with "),n("code",[t._v("Windows")]),t._v(". in order to include the class when building the application.")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// WILL WORK")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Windows.UI.Xaml.Window'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// WILL NOT WORK")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" window_class "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Windows.UI.Xaml.Window'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    win "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("win_class"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" windows_ui_xaml_ns "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Windows.UI.Xaml'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    win "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("windows_ui_xaml_ns "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Window'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("After requiring in the class, you can invoke API calls:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Window "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Windows.UI.Xaml.Window'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    TextBlock "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Windows.UI.Xaml.Controls.TextBlock'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    window "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    text "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextBlock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Text "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Click me, please!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For enum values, you do not need to require in the class")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// See the next section")]),t._v("\ntext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextAlignment "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Windows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Xaml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextAlignment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VerticalAlignment "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Windows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Xaml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VerticalAlignment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HorizontalAlignment "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Windows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Xaml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HorizontalAlignment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FontSize "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Content "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Activate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"enumerations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enumerations"}},[t._v("#")]),t._v(" Enumerations")]),t._v(" "),n("p",[t._v("Enumerations in WinRT are exposed automatically for you when you require any API that may use that enumeration. For example, the "),n("code",[t._v("Windows.UI.Xaml.TextAlignment")]),t._v(", "),n("code",[t._v("Windows.UI.Xaml.VerticalAlignment")]),t._v(" and "),n("code",[t._v("Windows.UI.Xaml.HorizontalAlignment")]),t._v(" enum values will automatically be included when you require "),n("code",[t._v("Windows.UI.Xaml.Controls.TextBlock")]),t._v(".")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" TextBlock "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Windows.UI.Xaml.Controls.TextBlock'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    text "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextBlock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextAlignment "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Windows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Xaml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextAlignment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VerticalAlignment "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Windows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Xaml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VerticalAlignment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HorizontalAlignment "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Windows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Xaml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HorizontalAlignment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"event-handling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-handling"}},[t._v("#")]),t._v(" Event handling")]),t._v(" "),n("p",[t._v("Event handling follows the JavaScript syntax by adding and removing event handlers with the "),n("code",[t._v("addEventListener()")]),t._v(" and "),n("code",[t._v("removeEventListener()")]),t._v(" methods rather than the C++ syntax.")]),t._v(" "),n("p",[t._v("In C++, you would create an event handler and assign it to an event property of a Windows object or class.")]),t._v(" "),n("p",[n("strong",[t._v("DO NOT USE C++ Syntax")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("click_event_ = component->Tapped += ref new TappedEventHandler([this, ctx](Platform::Object^ sender, TappedRoutedEventArgs^ e) {\n    // do something\n});\n")])])]),n("p",[t._v("In JavaScript, invoke the "),n("code",[t._v("addEventListener()")]),t._v(" method on the Windows object or class, and pass the event name and event handler to the method.")]),t._v(" "),n("p",[n("strong",[t._v("Use JavaScript Syntax")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("component.addEventListener('Tapped', function(e) {\n    // do something\n});\n")])])]),n("h3",{attrs:{id:"async-return-types"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#async-return-types"}},[t._v("#")]),t._v(" Async return types")]),t._v(" "),n("p",[t._v("Some of the WinRT APIs return asynchronous return types, such as "),n("code",[t._v("Windows.Foundation.IAsyncAction")]),t._v(", "),n("code",[t._v("Windows.Foundation.IAsyncActionWithProgress")]),t._v(", "),n("code",[t._v("Windows.Foundation.IAsyncOperation")]),t._v(", and "),n("code",[t._v("Windows.Foundation.IAsyncOperationWithProgress")]),t._v(".")]),t._v(" "),n("p",[t._v("For methods that return an asynchronous return type, the operation will be wrapped in a "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript Promise object"),n("OutboundLink")],1),t._v(". In a promise, when a deferred or asynchronous job completes, it passes its value on to a fulfilled or rejected function, where it can be evaluated by the functions and chained to other promises.")]),t._v(" "),n("p",[t._v("After invoking the method, chain either the "),n("code",[t._v("then(fulfilledFunction, rejectedFunction)")]),t._v(" or "),n("code",[t._v("catch(rejectedFunction)")]),t._v(" method to the invoked WinRT method to handle the response after the operation completes.")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" PathIO "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Windows.Storage.PathIO'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nPathIO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadTextAsync")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ms-appdata:///somefile.txt'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'It failed!'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"mix-winrt-apis-with-titanium-apis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mix-winrt-apis-with-titanium-apis"}},[t._v("#")]),t._v(" Mix WinRT APIs with Titanium APIs")]),t._v(" "),n("p",[t._v("You can mix and match WinRT and Titanium APIs together. You can call Titanium APIs from a native event callback, or call Native APIs inside a callback registered with Titanium APIs.")]),t._v(" "),n("p",[t._v("You can also mix and match Titanium.UI.View and its subclasses with any WinRT API expecting a "),n("code",[t._v("Windows.UI.Xaml.UIElement")]),t._v(". For example, you can create a Titanium Window or View object, then add a native UI element, such as a "),n("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/windows/apps/windows.ui.xaml.controls.tooltip.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tooltip"),n("OutboundLink")],1),t._v(", which the Titanium SDK has equivalent API for, to it. Or you can generate a complex layout using the WinRT APIs, then add Titanium Labels, Buttons or Views to it.")]),t._v(" "),n("p",[t._v("We have not yet made the full APIs as seamless as possible. One example is the Titanium SDK can convert between JavaScript and C++ arrays and collections, but explicit native types that are collection subclasses are treated like normal native types and not like a basic array or vector. So if you have a native collection type, such as "),n("code",[t._v("UIElementCollection")]),t._v(", you cannot simply treat it as if it is a normal JavaScript array and invoke JavaScript array methods on it. You will need to use the WinRT APIs to manipulate it.")])])}),[],!1,null,null,null);a.default=e.exports}}]);