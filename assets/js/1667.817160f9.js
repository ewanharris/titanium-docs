(window.webpackJsonp=window.webpackJsonp||[]).push([[1667],{1756:function(t,a,e){"use strict";e.r(a);var o=e(21),i=Object(o.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"titanium-sdk-7-5-0-functionality-update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#titanium-sdk-7-5-0-functionality-update"}},[t._v("#")]),t._v(" Titanium SDK 7.5.0 Functionality Update")]),t._v(" "),e("h2",{attrs:{id:"functionality-update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#functionality-update"}},[t._v("#")]),t._v(" Functionality Update")]),t._v(" "),e("p",[t._v("Generally speaking, CommonJS modules expect to have their own scope, to export their objects, values, and functions.")]),t._v(" "),e("p",[t._v("Prior to SDK 7.5.0, the app.js loading on all platforms did not adhere to that expectation and would assign any top-level variables to the global object. Furthermore, Alloy relied on this implicit assignment and it's possible your apps may rely on this behavior too. Why? We're moving towards a self-contained app.js scope as well and as a result any assignments to global properties and/or variables should be done explicitly from now on.")]),t._v(" "),e("p",[t._v("As a consequence of this, if we detect that your app might be using this, then we will log a warning during the build process.")]),t._v(" "),e("p",[t._v("This change does not affect the usage of Alloy.Globals.")]),t._v(" "),e("h2",{attrs:{id:"when"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when"}},[t._v("#")]),t._v(" When")]),t._v(" "),e("p",[t._v("From "),e("strong",[t._v("SDK 7.5.0")]),t._v(" and onward, during the build process, we provide an "),e("strong",[t._v("automatic assignment of top-level variables in app.js")]),t._v(" to the global scope to maintain backwards compatibility.")]),t._v(" "),e("p",[t._v("This backwards compatibility feature will be removed in "),e("strong",[t._v("SDK 9.0.0")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("p",[t._v("Currently, in an app.js a variable declared like "),e("code",[t._v("const labelText = 'Titanium Rocks!';")]),t._v(" will be added to the global scope.")]),t._v(" "),e("p",[t._v("If you know your code requires this variable to be accessible throughout the app, you can assign it "),e("code",[t._v("global.labelText = 'Titanium Rocks!';")]),t._v(" to allow this global variable.")])])}),[],!1,null,null,null);a.default=i.exports}}]);