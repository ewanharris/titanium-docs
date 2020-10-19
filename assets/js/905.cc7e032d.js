(window.webpackJsonp=window.webpackJsonp||[]).push([[905],{1763:function(t,a,s){"use strict";s.r(a);var e=s(21),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"titanium-sdk-faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#titanium-sdk-faq"}},[t._v("#")]),t._v(" Titanium SDK FAQ")]),t._v(" "),s("p",[t._v("This document provides answers and links to commonly asked questions about Titanium SDK.")]),t._v(" "),s("h2",{attrs:{id:"can-i-use-swift-code-to-develop-apps-for-android-in-hyperloop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#can-i-use-swift-code-to-develop-apps-for-android-in-hyperloop"}},[t._v("#")]),t._v(" Can I use Swift code to develop apps for Android in Hyperloop?")]),t._v(" "),s("p",[t._v("Short answer is no. You cannot use Swift code to develop Android apps. Classes in Hyperloop map to the underlying classes defined in Objective-C for iOS and in Java for Android.")]),t._v(" "),s("p",[t._v("Refer to "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Hyperloop/Hyperloop_Guides/Android_Hyperloop_Programming_Guide/"}},[t._v("Android Hyperloop Programming Guide")]),t._v(" and "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Hyperloop/Hyperloop_Guides/iOS_Hyperloop_Programming_Guide/"}},[t._v("iOS Hyperloop Programming Guide")]),t._v(" for information on how to develop apps using Hyperloop.")],1),t._v(" "),s("h2",{attrs:{id:"does-geofence-module-uses-corelocation-for-ios-or-does-it-use-something-else"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#does-geofence-module-uses-corelocation-for-ios-or-does-it-use-something-else"}},[t._v("#")]),t._v(" Does geofence module uses coreLocation (for iOS) or does it use something else?")]),t._v(" "),s("p",[t._v("Yes, it uses corelocation but it hasn't been verified as a background mode. You can try it using the "),s("code",[t._v("theNSLocationWhenInUseUsageDescription")]),t._v(" key in the "),s("code",[t._v("plist")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"how-do-i-use-titanium-android-intent-in-android-for-calendar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-use-titanium-android-intent-in-android-for-calendar"}},[t._v("#")]),t._v(" How do I use Titanium.Android.Intent in Android for calendar")]),t._v(" "),s("p",[t._v("The following code sample could be used to do this:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" intent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createIntent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   action"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ACTION_INSERT_OR_EDIT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vnd.android.cursor.item/event"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nTi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentActivity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startActivity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"create-an-appcelerator-android-module-with-armeabi-v7a-x86-architectures"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-an-appcelerator-android-module-with-armeabi-v7a-x86-architectures"}},[t._v("#")]),t._v(" Create an Appcelerator Android module with armeabi-v7a,x86 architectures")]),t._v(" "),s("p",[t._v("Create a Titanium module:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Edit the manifest and change the "),s("code",[t._v("architectures")]),t._v(" line to "),s("code",[t._v("architectures: armeabi-v7a,x86")])])]),t._v(" "),s("li",[s("p",[t._v("Change directories to "),s("code",[t._v("android")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Execute this command: "),s("code",[t._v("appc run -p android --build-only")])])]),t._v(" "),s("li",[s("p",[t._v("Verify the "),s("code",[t._v("libs")]),t._v(" and "),s("code",[t._v("dist/<whatever>.zip")]),t._v(" file only contains the desired architectures.")])])]),t._v(" "),s("h2",{attrs:{id:"ios-10-and-plist"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ios-10-and-plist"}},[t._v("#")]),t._v(" iOS 10+ and plist")]),t._v(" "),s("p",[t._v("For the iOS 10 or later version, you have to add the following keys in the "),s("code",[t._v("plist")]),t._v(" of the "),s("code",[t._v("tiapp.xml")]),t._v(" file, if you use any of the following:")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[s("code",[t._v("NSContactsUsageDescription")])]),t._v(": If you use the Ti.Contacts API to access contacts from the address book")])]),t._v(" "),s("li",[s("p",[s("strong",[s("code",[t._v("NSCameraUsageDescription")])]),t._v(": If you use the Ti.Media.showCamera API to capture photos and videos")])]),t._v(" "),s("li",[s("p",[s("strong",[s("code",[t._v("NSCalendarsUsageDescription")])]),t._v(": If you use the Ti.Calendar API to access device calendars")])]),t._v(" "),s("li",[s("p",[s("strong",[s("code",[t._v("NSPhotoLibraryUsageDescription")])]),t._v(": If you use the Ti.Media.openPhotoGallery API to access the photo gallery or Ti.Media.showCamera API to save photos")])]),t._v(" "),s("li",[s("p",[s("strong",[s("code",[t._v("NSMicrophoneUsageDescription")])]),t._v(": If you use the Ti.Media.AudioRecorder API to record audio or Ti.Media.showCamera to record videos")])])]),t._v(" "),s("p",[t._v("An example of updated "),s("code",[t._v("tiapp.xml")]),t._v(" file might look something like this:")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ios")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plist")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("NSContactsUsageDescription"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Can we use to your contacts?"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("NSCameraUsageDescription"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Can we use your camera?"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("NSCalendarsUsageDescription"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Can we use your calendar?"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("NSPhotoLibraryUsageDescription"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Can we save to your library?"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("NSMicrophoneUsageDescription"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Can we use your microphone?"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plist")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ios")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"how-to-change-the-android-buildtools-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-change-the-android-buildtools-version"}},[t._v("#")]),t._v(" How to change the Android buildtools version")]),t._v(" "),s("p",[t._v("To verify your buildtools version, go to your Android SDK location: "),s("code",[t._v("/users/<user>/Library/Android/sdk/build-tools/ <version_number>")])]),t._v(" "),s("p",[t._v("You can change the build tools version using this command: "),s("code",[t._v("appc ti config android.buildTools.selectedVersion ##.##.##")])]),t._v(" "),s("h2",{attrs:{id:"how-do-you-check-if-a-module-supports-64bit-or-not"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-do-you-check-if-a-module-supports-64bit-or-not"}},[t._v("#")]),t._v(" How do you check if a module supports 64bit or not?")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Build your module.")])]),t._v(" "),s("li",[s("p",[t._v("Open a terminal and change directories to the module's last directory (where the "),s("code",[t._v("libti.modulename.a")]),t._v(" is located).")])]),t._v(" "),s("li",[s("p",[t._v("Execute either "),s("code",[t._v("xcrun lipo -info")]),t._v(" or "),s("code",[t._v("xcrun lipo -info libti.modulename.a")]),t._v(". For example, executing "),s("code",[t._v("xcrun lipo -info libti.barcode.a")]),t._v(" should return this info: "),s("code",[t._v("Architectures in the fat file: libti.barcode.a are: armv7 i386 x86_64 arm64")])])])]),t._v(" "),s("h2",{attrs:{id:"localization-supports-for-the-plist-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#localization-supports-for-the-plist-file"}},[t._v("#")]),t._v(" Localization supports for the plist file")]),t._v(" "),s("p",[t._v("You can add localization support in the plist file. Here is an example for Japanese language for camera permission:")]),t._v(" "),s("p",[s("strong",[t._v("tiapp.xml")])]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ios")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plist")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("NSCameraUsageDescription"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Can we use your camera?"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plist")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ios")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n//i18n/ja/app.xml\n"),s("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("resources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("NSCameraUsageDescription"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("あなたのカメラは使えますか?"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("resources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("After applying this, if you change your device language to Japanese, you will the changes take effect.")]),t._v(" "),s("h2",{attrs:{id:"where-can-i-find-the-best-practices-for-titanium-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-can-i-find-the-best-practices-for-titanium-sdk"}},[t._v("#")]),t._v(" Where can I find the best practices for Titanium SDK?")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Best_Practices_and_Recommendations/"}},[t._v("Best Practices and Recommendations")])],1),t._v(" "),s("h2",{attrs:{id:"what-are-the-system-requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-are-the-system-requirements"}},[t._v("#")]),t._v(" What are the system requirements?")]),t._v(" "),s("p",[t._v("Your system environment must meet the following requirements to run Studio:")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("Operating System:")]),t._v(" A recent version of Windows or Mac OS X")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Memory:")]),t._v(" 8 GB RAM minimum system memory (2 GB RAM available memory). 16 GB RAM recommended.")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Java Runtime:")]),t._v(" Oracle JDK (no other brand of Java is suitable)")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Node.js:")]),t._v(" Required for the Titanium command-line tools like the CLI, Alloy and AMPLIFY Runtime Services")])])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("💡 Hint")]),t._v(" "),s("p",[t._v("For Windows, you can use either 32-bit or 64-bit versions of Java JDK. Please refer to "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Titanium_Compatibility_Matrix/Studio_Java_Support/"}},[t._v("Studio Java Support")]),t._v(" for more information.")],1)]),t._v(" "),s("p",[t._v("For more details, please refer to "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/"}},[t._v("Prerequisites")]),t._v(" document.")],1),t._v(" "),s("p",[t._v("For a complete list of compatibility of system environments, dependencies, and other requirements, please review "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Titanium_Compatibility_Matrix/"}},[t._v("Titanium Compatibility Matrix")]),t._v(" document.")],1),t._v(" "),s("h2",{attrs:{id:"what-are-the-reserved-words"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-are-the-reserved-words"}},[t._v("#")]),t._v(" What are the reserved words?")]),t._v(" "),s("p",[t._v("See "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Best_Practices_and_Recommendations/Reserved_Words/"}},[t._v("Reserved Words")]),t._v(" for details.")],1),t._v(" "),s("h2",{attrs:{id:"what-is-hyperloop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-hyperloop"}},[t._v("#")]),t._v(" What is Hyperloop?")]),t._v(" "),s("p",[t._v("Hyperloop gives you direct access to the native APIs. Titanium SDK already covers plenty of the native APIs and makes them cross-platform addressing the most popular APIs. This technology was built for those developers who require access to even the most obscure APIs out there.")]),t._v(" "),s("h2",{attrs:{id:"how-do-i-enable-hyperloop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-enable-hyperloop"}},[t._v("#")]),t._v(" How do I enable Hyperloop?")]),t._v(" "),s("p",[t._v("See "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Hyperloop/Enabling_Hyperloop/"}},[t._v("Enabling Hyperloop")]),t._v(" for details.")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);