(window.webpackJsonp=window.webpackJsonp||[]).push([[629],{1415:function(t,e,a){"use strict";a.r(e);var n=a(21),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-android-activity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-android-activity"}},[t._v("#")]),t._v(" Titanium.Android.Activity")]),t._v(" "),a("TypeHeader"),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v('According to the Android API Reference, an activity is "a single, focused thing that a\nuser can do."')]),t._v(" "),a("p",[t._v("In almost all cases, an activity is associated with a window.  Activities are central\nto the Android "),a("strong",[t._v("Back")]),t._v(" button navigation -- the "),a("strong",[t._v("Back")]),t._v(" button closes the current\nactivity and returns to whatever activity was open previously.")]),t._v(" "),a("p",[t._v("In Titanium, the Android Activity is not created until a window or tab group is opened.\nAfter a Window or TabGroup object is created but before it is opened, its "),a("code",[t._v("activity")]),t._v(" property\nrefers to an empty JavaScript object. You can use it to set properties on the activity, such as\nthe "),a("code",[t._v("onCreateOptionsMenu")]),t._v(" property, but you cannot invoke any Activity methods.")]),t._v(" "),a("p",[t._v("After the window or tab group opens, a real Activity object is created and the properties from\nthe JavaScript object are copied over. The "),a("code",[t._v("activity")]),t._v(" property now refers to this real Activity object,\nwhich you can use to call the various Activity methods. For example, to use the\n"),a("code",[t._v("invalidateOptionsMenu")]),t._v(" method, you need to get the activity after the window or tab group opens.")]),t._v(" "),a("p",[t._v("See also "),a("a",{attrs:{href:"https://developer.android.com/reference/android/app/Activity.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("android.app.Activity"),a("OutboundLink")],1),t._v("\nin the Android API Reference.")]),t._v(" "),a("h3",{attrs:{id:"activity-lifecycle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activity-lifecycle"}},[t._v("#")]),t._v(" Activity Lifecycle")]),t._v(" "),a("p",[t._v("In Android, activities are created, started, resumed, paused, stopped, destroyed and restarted.\nTitanium generates lifecycle events for activities but does not generate application-level events.\nTo be notified when an activity's lifecycle event is triggered, assign callbacks to the following activity\nproperties:")]),t._v(" "),a("ul",[a("li",[a("type-link",{attrs:{type:"Titanium.Android.Activity.onCreate"}},[t._v("onCreate")])],1),t._v(" "),a("li",[a("type-link",{attrs:{type:"Titanium.Android.Activity.onStart"}},[t._v("onStart")])],1),t._v(" "),a("li",[a("type-link",{attrs:{type:"Titanium.Android.Activity.onResume"}},[t._v("onResume")])],1),t._v(" "),a("li",[a("type-link",{attrs:{type:"Titanium.Android.Activity.onPause"}},[t._v("onPause")])],1),t._v(" "),a("li",[a("type-link",{attrs:{type:"Titanium.Android.Activity.onStop"}},[t._v("onStop")])],1),t._v(" "),a("li",[a("type-link",{attrs:{type:"Titanium.Android.Activity.onDestroy"}},[t._v("onDestroy")])],1),t._v(" "),a("li",[a("type-link",{attrs:{type:"Titanium.Android.Activity.onRestart"}},[t._v("onRestart")])],1)]),t._v(" "),a("p",[t._v('See also the "Understand the Lifecycle Callbacks" section in\n'),a("a",{attrs:{href:"https://developer.android.com/training/basics/activity-lifecycle/starting.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Developers: Activity Lifecycle"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"don-t-keep-activities-option"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#don-t-keep-activities-option"}},[t._v("#")]),t._v(" Don't keep activities option")]),t._v(" "),a("p",[t._v("Android 4.0 and greater devices have an option called "),a("strong",[t._v("Don't keep activities")]),t._v(" under the "),a("strong",[t._v("Developer\nOptions")]),t._v(" menu. When this option is enabled, the Android OS will destroy an activity as soon as it\nis stopped. It is intended to help developers debug their apps. For example, it can simulate the\ncase that Android will kill an activity in the background due to memory pressure. In\nnormal use, it is not recommended to turn this option on because this may lead to unexpected issues\non the apps, such as freezes, force closes and reboots.")]),t._v(" "),a("p",[t._v("When the "),a("strong",[t._v("Don't keep activities")]),t._v(" option is enabled, the lifecycle of the activity is different\nfrom the normal case. Whenever the user leaves an activity, such as backgrounding the app using the\nHOME button, this activity is destroyed by Android, which calls "),a("code",[t._v("onDestroy")]),t._v(".  In the normal case, "),a("code",[t._v("onStop")]),t._v("\nwould be called and the activity would not be destroyed.  Later, when the user goes back to that activity, this\nactivity will be recreated, which calls "),a("code",[t._v("onCreate")]),t._v(".  In the normal case, since the activity is not destroyed,\n"),a("code",[t._v("onRestart")]),t._v(" would be called instead.  Therefore, some events, such as the open and close events on the Window\nor TabGroup, will be fired differently from the normal case, and the root window of the app must set\n"),a("type-link",{attrs:{type:"Titanium.UI.Window.exitOnClose"}},[t._v("exitOnClose")]),t._v(" to true; otherwise, the app will be unable to back out, that is,\nhitting the BACK button in the root window will not allow the application to exit.")],1),t._v(" "),a("h3",{attrs:{id:"deprecated-behavior"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deprecated-behavior"}},[t._v("#")]),t._v(" Deprecated Behavior")]),t._v(" "),a("p",[t._v('Prior to Release 8.0.0, you would set the below "tiapp.xml" property to '),a("code",[t._v("true")]),t._v(' to handle the case\nwhere the Android OS would automatically close all child activity windows after the app has been backgrounded\nfor about 30 minutes, bringing the app back to the root splash screen activity window. The below property\nwould restart your app\'s UI in this case. This is no longer needed in 8.0.0 since Titanium now sets the\n"AndroidManifest.xml" setting\n'),a("a",{attrs:{href:"https://developer.android.com/guide/topics/manifest/activity-element#always",target:"_blank",rel:"noopener noreferrer"}},[t._v("android:alwaysRetainTaskState"),a("OutboundLink")],1),t._v("\nto the root activity instead")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ti.android.root.reappears.restart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("Prior to Release 3.4.0, to monitor lifecycle events, use the activity's events, "),a("code",[t._v("create")]),t._v(", "),a("code",[t._v("destroy")]),t._v(",\n"),a("code",[t._v("pause")]),t._v(", "),a("code",[t._v("resume")]),t._v(", "),a("code",[t._v("start")]),t._v(" and "),a("code",[t._v("stop")]),t._v(", to be notified when an activity is created, destroyed, paused,\nresumed, started and stopped, respectively.")]),t._v(" "),a("p",[t._v("You can only set Activity properties from a TabGroup object after the tab group opens.")]),t._v(" "),a("p",[t._v('Prior to Release 3.2.0, you can create either a "lightweight" or "heavyweight" window, as\ndescribed on the '),a("type-link",{attrs:{type:"Titanium.UI.Window"}},[t._v("Titanium.UI.Window")]),t._v(" reference page. A "),a("em",[t._v("heavyweight")]),t._v(" window creates a\nnew "),a("code",[t._v("Activity")]),t._v(". A "),a("em",[t._v("lightweight")]),t._v(" window runs inside the same activity as the code that\ncreated it.  If you try to reference the activity of lightweight window, it returns undefined.")],1),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("h3",{attrs:{id:"callback-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#callback-example"}},[t._v("#")]),t._v(" Callback Example")]),t._v(" "),a("p",[t._v("The following example shows how to start an activity and retrieve a result code\nand optional data intent when the activity ends.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("activity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startActivityForResult")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The request code used to start this Activity")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" requestCode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The result code returned from the activity ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (https://developer.android.com/reference/android/app/Activity.html#StartingActivities)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" resultCode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resultCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A Titanium.Android.Intent filled with data returned from the Activity")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" intent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("intent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The Activity the received the result")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" source "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ApiDocs")],1)}),[],!1,null,null,null);e.default=s.exports}}]);