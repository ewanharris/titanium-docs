(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{2962:function(t,a,n){"use strict";n.r(a);var s=n(21),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"inheritance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inheritance"}},[t._v("#")]),t._v(" Inheritance")]),t._v(" "),s("p",[t._v("Demonstrates how an Alloy controller can inherit functionality from another controller.")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("💡 App folder location")]),t._v(" "),s("p",[s("em",[t._v("alloy")]),t._v("/test/apps/"),s("strong",[t._v("advanced/inheritance")])])]),t._v(" "),s("p",[s("img",{attrs:{src:n(496),alt:"inheritance"}})]),t._v(" "),s("p",[t._v("The parent controller exports its inheritable properties or methods on its "),s("strong",[s("code",[t._v("exports")])]),t._v(" property. To inherit the parent's functionality, the child controller assigns the base name of parent controller to its "),s("code",[t._v("exports.baseController")]),t._v(" property. For example, in the sample application t he "),s("strong",[t._v("controllers/baseDialog.js")]),t._v(" file defines the dialog's common functionality, including two methods named "),s("code",[t._v("openDialog()")]),t._v(" and "),s("code",[t._v("closeDialog()")]),t._v(".")]),t._v(" "),s("p",[s("strong",[t._v("app/controllers/baseDialog.js")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" args "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dialog'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("openDialog")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("win")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("refWin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" win"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("refWin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cover"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("refWin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("closeDialog")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("refWin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cover"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("refWin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("refWin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cover "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("The child controller, defined by "),s("strong",[t._v("controllers/animatedDialog.js,")]),t._v(" inherits from "),s("code",[t._v("baseController.js")]),t._v(" and overrides the parent's "),s("code",[t._v("openDialog()")]),t._v(" function with a version that animates the dialog window's opacity as it opens.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// Establish inheritance from baseDialog\nexports.baseController = 'baseDialog';\nexports.openDialog = function(win) {\n    $.refWin = win;\n    // make invisible\n    $.cover.opacity = 0;\n    $.dialog.opacity = 0;\n    // add to reference window\n    $.refWin.add($.cover);\n    $.refWin.add($.dialog);\n    // animate in the opacity\n    $.cover.animate({\n        duration: 500,\n        opacity: 0.5\n    });\n    $.dialog.animate({\n        duration: 500,\n        opacity: 1\n    });\n};\n")])])])])}),[],!1,null,null,null);a.default=e.exports},496:function(t,a,n){t.exports=n.p+"assets/img/inheritance.a88c54f8.png"}}]);