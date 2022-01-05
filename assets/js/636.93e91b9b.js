(window.webpackJsonp=window.webpackJsonp||[]).push([[636],{1422:function(t,n,a){"use strict";a.r(n);var s=a(21),e=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-android-notification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-android-notification"}},[t._v("#")]),t._v(" Titanium.Android.Notification")]),t._v(" "),a("TypeHeader"),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("Notifications alert the user that something is happening to your application while it is\nin the background. Notifications appear in the notification drawer until the user\nclears them and on the lock screen for devices running Android 5.0 or greater.\nNote that the user can filter or turn notifications on and off from "),a("strong",[t._v("Settings")]),t._v(".")]),t._v(" "),a("p",[t._v("For Android toast notifications (pop-up notifications sent while the application is in the\nforeground), see "),a("type-link",{attrs:{type:"Titanium.UI.Notification"}},[t._v("Titanium.UI.Notification")]),t._v(".")],1),t._v(" "),a("p",[t._v("To create a notification, use the "),a("type-link",{attrs:{type:"Titanium.Android.createNotification"}},[t._v("Titanium.Android.createNotification")]),t._v(" method.")],1),t._v(" "),a("p",[t._v("Pass the Notification object to the methods of the "),a("type-link",{attrs:{type:"Titanium.Android.NotificationManager"}},[t._v("Titanium.Android.NotificationManager")]),t._v(" class\nto send or cancel notifications.")],1),t._v(" "),a("p",[t._v("For examples of using Notifications, see "),a("a",{attrs:{href:"#!/guide/Android_Notifications"}},[t._v("Android Notifications")]),t._v(".")]),t._v(" "),a("p",[t._v("Further Reading:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.android.com/design/patterns/notifications.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Developers: Notifications"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"android-5-0-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-5-0-changes"}},[t._v("#")]),t._v(" Android 5.0 Changes")]),t._v(" "),a("p",[t._v("Starting with Android 5.0 (API 21), ticker text, defined with the "),a("code",[t._v("tickerText")]),t._v(" property,\nno longer appears in the status bar when the notification is first sent but is used as an\naudible notification if accessibility services are enabled.")]),t._v(" "),a("p",[t._v("Notifications now appear in the lock screen.  The user can customize the visibility level of\nthese notifications from "),a("strong",[t._v("Settings")]),t._v(".  The visibility level is based on the "),a("code",[t._v("visibility")]),t._v("\nproperty set on the notification.")]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("h3",{attrs:{id:"simple-notification-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-notification-example"}},[t._v("#")]),t._v(" Simple Notification Example")]),t._v(" "),a("p",[t._v("The following example shows how to create a notification that launches the\napplication when the user clicks on the notification.")]),t._v(" "),a("p",[t._v("To have the notification launch an application when the user clicks on it,\nassign the "),a("code",[t._v("contentIntent")]),t._v(" property to an "),a("type-link",{attrs:{type:"Titanium.Android.Intent"}},[t._v("Intent")]),t._v(" object\nthat launches the main activity of the application by specifying the "),a("code",[t._v("packageName")]),t._v("\nand "),a("code",[t._v("className")]),t._v(" properties of the intent.")],1),t._v(" "),a("p",[t._v("The "),a("code",[t._v("packageName")]),t._v(" is the project's application ID. For Titanium applications, you\ncan find this in the "),a("code",[t._v("tiapp.xml")]),t._v(" file.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("className")]),t._v(" is the name of the main activity, prefixed with the "),a("code",[t._v("packageName")]),t._v(".\nFor Titanium applications, the name of the main activity is the application name with\nonly the first character capitalized suffixed with "),a("code",[t._v("Activity")]),t._v(".  You can also find the name\nof the main activity in the "),a("code",[t._v("build/android/AndroidManifest.xml")]),t._v(" file after you build your\napplication.")]),t._v(" "),a("p",[t._v("For example, if the application ID is "),a("code",[t._v("com.appcelerator.notificationsample")]),t._v(" and the\napplication name is "),a("code",[t._v("NotificationSample")]),t._v(", the class name will be:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("com.appcelerator.notificationsample.NotificationsampleActivity\n")])])]),a("p",[t._v("The notification icon must be specified as an Android resource ID. In this case,\nthe icon, "),a("code",[t._v("my_icon.png")]),t._v(" would be placed in "),a("code",[t._v("platforms/android/res/drawable/my_icon.png")]),t._v(".\nSee "),a("type-link",{attrs:{type:"Titanium.App.Android.R"}},[t._v("Titanium.App.Android.R")]),t._v(" for more information.")],1),t._v(" "),a("p",[t._v("This example does not include a custom alert sound. For information on adding a\ncustom alert sound, see "),a("type-link",{attrs:{type:"Titanium.Android.Notification.sound"}},[t._v("Notification.sound")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Intent object to launch the application")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" intent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createIntent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    action"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ACTION_MAIN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Substitute the correct class name for your application")]),t._v("\n    className"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.appcelerator.notificationsample.NotificationsampleActivity'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Substitue the correct package name for your application")]),t._v("\n    packageName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.appcelerator.notificationsample'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nintent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flags "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|=")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FLAG_ACTIVITY_NEW_TASK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nintent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addCategory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CATEGORY_LAUNCHER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create a PendingIntent to tie together the Activity and Intent")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pending "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPendingIntent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    intent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" intent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    flags"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Titanium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FLAG_UPDATE_CURRENT")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create the notification")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" notification "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createNotification")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// icon is passed as an Android resource ID -- see Ti.App.Android.R.")]),t._v("\n    icon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("drawable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("my_icon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  contentTitle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Something Happened'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  contentText "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Click to return to the application.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  contentIntent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" pending\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Send the notification.")]),t._v("\nTitanium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NotificationManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("notify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" notification"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"bundled-notifications-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bundled-notifications-example"}},[t._v("#")]),t._v(" Bundled Notifications Example")]),t._v(" "),a("p",[t._v("The following example shows how to create bundled notifications.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    groupKey "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'group_key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NotificationManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("notify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createNotification")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            icon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("drawable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ic_dialog_info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            contentTitle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NOTIFICATION #'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            contentText "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Lorem ipsum dolor sit amet, facer eruditi omittantur cu pri, nibh nonumy putant eam eu.'")]),t._v("\n            groupKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" groupKey\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nTi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NotificationManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("notify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createNotification")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        icon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("drawable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ic_dialog_info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        contentTitle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NOTIFICATIONS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        contentText "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'You have 3 notifications.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        groupKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" groupKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        groupSummary"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ApiDocs")],1)}),[],!1,null,null,null);n.default=e.exports}}]);