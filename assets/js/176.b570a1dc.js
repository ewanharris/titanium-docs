(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{1926:function(t,a,s){"use strict";s.r(a);var n=s(21),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"using-native-android-xml-layouts-in-hyperloop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-native-android-xml-layouts-in-hyperloop"}},[t._v("#")]),t._v(" Using native Android XML layouts in Hyperloop")]),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("p",[t._v("This guide demonstrates how to use native Android XML layouts in Titanium by loading them via Hyperloop. Example views are the "),n("a",{attrs:{href:"https://developer.android.com/guide/topics/ui/layout/recyclerview.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RecyclerView"),n("OutboundLink")],1),t._v(", "),n("a",{attrs:{href:"https://developer.android.com/reference/android/support/design/widget/BottomNavigationView.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("BottomNavigationView"),n("OutboundLink")],1),t._v(" and "),n("a",{attrs:{href:"https://developer.android.com/reference/android/support/design/widget/FloatingActionButton.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("FloatingActionButton"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("h2",{attrs:{id:"usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),n("p",[t._v('1. Create a new XML layout (like `main_content.xml`) in "app/platform/android/res/layout" (Alloy) or "platform/android/res/layout" (Classic). Example:')]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("android.support.design.widget.CoordinatorLayout")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@+id/main_content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("theme")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@style/Theme.AppCompat.Light"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("android")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://schemas.android.com/apk/res/android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("app")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://schemas.android.com/apk/res-auto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_width")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("match_parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_height")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("match_parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ListView")]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@+id/lvToDoList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_width")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("match_parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_height")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("match_parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("android.support.design.widget.FloatingActionButton")]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_width")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("wrap_content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_height")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("wrap_content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_gravity")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bottom|right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_margin")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("16dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@drawable/ic_action_share"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("app:")]),t._v("layout_anchor")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@id/lvToDoList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("app:")]),t._v("layout_anchorGravity")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bottom|right|end"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("android.support.design.widget.CoordinatorLayout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("2. Create an `LayoutInflater` class to inflate layouts (ES6+ style here):")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Context "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'android.content.Context'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Inflater "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'android.view.LayoutInflater'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" inflater "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Inflater"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cast")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("activity"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getApplicationContext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSystemService")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LAYOUT_INFLATER_SERVICE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("3. Receive the R.layout.* ID required to inflate its view:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Activity "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'android.app.Activity'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" activity "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Activity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentActivity"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'main_content' = file name, 'layout' = resource, e.g. app/platform/android/res/layout")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Can also be used to receive other R.* values like R.color.*, R.string.* etc.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" resID "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" activity"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResources")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getIdentifier")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main_content'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'layout'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" activity"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPackageName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("4. That's it! Inflate the view and add it to your Titanium view:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" view "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" inflater"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("inflate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resIDFromString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main_content'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'layout'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"output"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[t._v("#")]),t._v(" Output")]),t._v(" "),n("p",[t._v("Here is an example of using the previous code to load a FloatingActionButton inside a CoordinatorLayout:")]),t._v(" "),n("p",[n("img",{attrs:{src:s(705),alt:"Screenshot_1519057240"}})]),t._v(" "),n("h2",{attrs:{id:"full-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#full-example"}},[t._v("#")]),t._v(" Full Example")]),t._v(" "),n("p",[t._v("For a full example and many other native examples, see the "),n("a",{attrs:{href:"https://github.com/appcelerator/hyperloop-examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hyperloop Sample App"),n("OutboundLink")],1),t._v(" for details.")])])}),[],!1,null,null,null);a.default=e.exports},705:function(t,a,s){t.exports=s.p+"assets/img/Screenshot_1519057240.46f8a78f.png"}}]);