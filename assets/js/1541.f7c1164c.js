(window.webpackJsonp=window.webpackJsonp||[]).push([[1541],{1874:function(t,a,s){"use strict";s.r(a);var n=s(21),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"geolocation-with-titanium-tutorial"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#geolocation-with-titanium-tutorial"}},[t._v("#")]),t._v(" Geolocation with Titanium Tutorial")]),t._v(" "),s("p",[t._v("This document will cover some of the basics to create a geolocation app.")]),t._v(" "),s("p",[t._v("If you need to create an app that requires Geolocation services, you will need to inform Apple and Google that your app requires access to the device's GPS and any related services. This is important as it enables the device's operating system to display the necessary permission dialogs so the user can allow or deny permission. If you don't do this, your app won't be able to run any geolocation code.")]),t._v(" "),s("h2",{attrs:{id:"setting-up-the-tiapp-xml-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-tiapp-xml-file"}},[t._v("#")]),t._v(" Setting up the tiapp.xml file")]),t._v(" "),s("p",[t._v("Let's start out with creating a fresh Titanium app and start setting up the "),s("code",[t._v("tiapp.xml")]),t._v(" file.")]),t._v(" "),s("p",[t._v("For iOS users, use this:")]),t._v(" "),s("p",[s("strong",[t._v("tiapp.xml - iOS")])]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ios")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plist")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("NSLocationWhenInUseUsageDescription"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("We need your location while using because..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("NSLocationAlwaysAndWhenInUseUsageDescription"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("We always need you location because..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plist")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ios")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("For Android:")]),t._v(" "),s("p",[s("strong",[t._v("tiapp.xml - Android")])]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("android")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("android")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("“http://schemas.android.com/apk/res/android”")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("manifest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("“android.permission.ACCESS_FINE_LOCATION”/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("“android.permission.ACCESS_COARSE_LOCATION”/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("manifest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("android")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("With this code, you can try to use Geolocation services in the app. The OS will inform the user that the app needs permission which the user can approve or deny the request.")]),t._v(" "),s("h2",{attrs:{id:"ti-playservices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ti-playservices"}},[t._v("#")]),t._v(" Ti.PlayServices")]),t._v(" "),s("p",[t._v("Titanium SDK 7.1.0 introduced support for "),s("code",[t._v("FusedLocationProvider")]),t._v(" on Android. To enable this feature, include the "),s("a",{attrs:{href:"https://github.com/appcelerator-modules/ti.playservices",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ti.PlayServices"),s("OutboundLink")],1),t._v(" module in your app. This module inclusion will also enable battery efficiency with your app.")]),t._v(" "),s("h2",{attrs:{id:"geolocation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#geolocation"}},[t._v("#")]),t._v(" Geolocation")]),t._v(" "),s("h3",{attrs:{id:"get-position"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-position"}},[t._v("#")]),t._v(" Get position")]),t._v(" "),s("p",[t._v("Assuming the user will approve the request to track location, the device's position can be obtained via this code (works on both Android and iOS):")]),t._v(" "),s("p",[s("strong",[t._v("Geolocate: get current position")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLocation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Geolocation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCurrentPosition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLocation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Keep in mind that if the user denied the permission request from the OS, this code will fail (as it doesn't check if permission was granted or handles any types of errors). To offer a great app experience, the app should have the relevant permission before attempting to use the Geolocation service. The user can modify the location permission at any time and, on iOS, there is a friendly reminder that pops up from time to time to remind the user that the app is still using location feature.")]),t._v(" "),s("h3",{attrs:{id:"check-for-permissions-then-get-location"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-for-permissions-then-get-location"}},[t._v("#")]),t._v(" Check for permissions then get location")]),t._v(" "),s("p",[t._v("To check for permissions, our Geolocation service code should be wrapped with a permission check:")]),t._v(" "),s("p",[s("strong",[t._v("Geolocation permission check")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Geolocation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasLocationPermissions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLocation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Geolocation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestLocationPermissions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Geolocation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AUTHORIZATION_WHEN_IN_USE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("success"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLocation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("‘could not obtain location permissions’"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Here, we are checking for "),s("code",[t._v("AUTHORIZATION_WHEN_IN_USE")]),t._v("because the app is currently focused on getting the location. Note: this code is just obtaining the location once. It should include a timer to run every so often. It should also avoid wasting checks if the device's position hasn't changed after a period of time. We can solve this by using the "),s("code",[t._v("location")]),t._v(" event by modifying the "),s("code",[t._v("getLocation")]),t._v(" function so it will listen for changes based on location.")]),t._v(" "),s("p",[s("strong",[t._v("Listen for location changes")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLocation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Geolocation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"location"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This updated code will execute at the start of the app and whenever the device's location changes.")]),t._v(" "),s("h3",{attrs:{id:"location-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#location-data"}},[t._v("#")]),t._v(" Location data")]),t._v(" "),s("p",[t._v("The data sent back looks something like this:")]),t._v(" "),s("p",[s("strong",[t._v("Location data")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n  code = 0;\n  coords = {\n    accuracy = 5;\n    altitude = 0;\n    altitudeAccuracy = "-1";\n    floor = {\n      level = 0;\n    };\n    heading = "-1";\n    latitude = "51.25243759155273";\n    longitude = "-1.603847026824951";\n    speed = "-1";\n    timestamp = 1553776951640;\n  };\n  source = "[object GeolocationModule]";\n  success = 1;\n  type = location;\n}\n')])])]),s("p",[t._v("With this data (longitude, latitude, altitude, heading, speed, and elevation), the app can determine if the user is walking/running/riding/ on a mountain side or a beach.")]),t._v(" "),s("h2",{attrs:{id:"fine-tuning-accuracy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fine-tuning-accuracy"}},[t._v("#")]),t._v(" Fine tuning accuracy")]),t._v(" "),s("p",[t._v("You can fine tune the app with some additional settings in "),s("code",[t._v("Ti.Geolocation")]),t._v(" to get and deliver location updates. This is important as over-checking the location can drain the device's battery unnecessarily.")]),t._v(" "),s("p",[t._v("Adjusting the accuracy (coupled with the features of the OS and device), can affect how the device figures out your location. For example, in a low power and low accuracy mode, the OS may use other means to figure out the device's location (e.g. cell towers or WiFi). With high accuracy mode enable, the OS might use any and all location detecting options available to it (including GPS) to get a pinpoint location.")]),t._v(" "),s("p",[t._v("To adjust the accuracy, tweak the "),s("code",[t._v("Ti.Geolocation.accuracy")]),t._v(" property to set this to different accuracy levels such as "),s("code",[t._v("Ti.Geolocation.ACCURACY_BEST")]),t._v(" or "),s("code",[t._v("Ti.Geolocation.ACCURACY_LOW")]),t._v(". For iOS, use the "),s("code",[t._v("Ti.Geolocation.distanceFilter")]),t._v(" property to set the number of meters the device has to move before the location event is fired.")]),t._v(" "),s("p",[t._v("To fine tune the settings for Android, set up the "),s("code",[t._v("Ti.Geolocation.Android.LocationRule")]),t._v(". The following code will tell the device to skip location update unless the accuracy is less than 20m and at least 10 seconds has lapsed.")]),t._v(" "),s("p",[s("strong",[t._v("Location rule")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Ti.Geolocation.Android.addLocationRule({accuracy: 20, minAge: 10000});\n")])])]),s("p",[t._v("You can also use the "),s("code",[t._v("activity")]),t._v(" property ("),s("code",[t._v("Ti.Geolocation.ACTIVITYTYPE_FITNESS")]),t._v(" and "),s("code",[t._v("Ti.Geolocation.ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION)")]),t._v("to determine when locations updates happen as the OS may have paused it.")]),t._v(" "),s("p",[t._v("This document was adapted from "),s("a",{attrs:{href:"https://devblog.axway.com/mobile-apps/geolocation-with-titanium-part-1/?utm_source=Axway+Developer&utm_campaign=dff3687f1a-Newsletter_April_2019&utm_medium=email&utm_term=0_763a3fa2c9-dff3687f1a-430799269",target:"_blank",rel:"noopener noreferrer"}},[t._v("Geolocation with Titanium – Part 1"),s("OutboundLink")],1),t._v(" which was written by Jason Kneen.")])])}),[],!1,null,null,null);a.default=e.exports}}]);