(window.webpackJsonp=window.webpackJsonp||[]).push([[984],{1496:function(t,e,a){"use strict";a.r(e);var r=a(21),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"android-module-upgrade-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-module-upgrade-guide"}},[t._v("#")]),t._v(" Android Module Upgrade Guide")]),t._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),a("p",[t._v("With major releases of the Titanium SDK, you may need to update older modules. This document will provide you with the information to upgrade your Android modules as necessary. Modules built with Titanium 7.0.0 are backward compatible with apps built with Titanium 8.x.x and 9.x.x. However, old modules that are to be built with Titanium 9.0.0 will need to be migrated to use the new gradle build system and support new CPU architectures.")]),t._v(" "),a("h2",{attrs:{id:"migration-to-sdk-9-0-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migration-to-sdk-9-0-0"}},[t._v("#")]),t._v(" Migration to SDK 9.0.0")]),t._v(" "),a("p",[t._v("When using Titanium SDK 9.0.0 and later, you can simply switch to your Android module project (e.g. "),a("code",[t._v("cd ti.map/android")]),t._v(") and use "),a("code",[t._v("appc run -p android --build-only")]),t._v(". The command will prompt you to confirm the migration and update your manifest file for you. The details of the migration are described below.")]),t._v(" "),a("p",[t._v("The following components of the Android manifest file need to be updated:")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[a("code",[t._v("architecture")])]),t._v(' : Make sure the following 4 CPU architectures "arm64-v8a armeabi-v7a x86 x86_64" are defined')])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("apiversion")])]),t._v(' : Update the value to "4"')])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("minsdk")])]),t._v(' : Update the value to "9.0.0" when building with Titanium SDK 9.0.0 or higher')])]),t._v(" "),a("li",[a("p",[a("code",[t._v("version")]),t._v(": Update the value to the next major version (read more about semantic versioning "),a("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v('). If your module version is "1.2.0" right now, it should be revised to "2.0.0"')])])]),t._v(" "),a("p",[t._v('Please see the "ti.map" module\'s '),a("code",[t._v("manifest")]),t._v(" file for an example on how it should be configured when building with Titanium SDK 9.0.0 or higher.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/appcelerator-modules/ti.map/blob/master/android/manifest",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/appcelerator-modules/ti.map/blob/master/android/manifest"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"manifest-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manifest-file"}},[t._v("#")]),t._v(" Manifest file")]),t._v(" "),a("p",[t._v("The following tables provide an overview of the relations between different properties inside a native Android module project.")]),t._v(" "),a("h3",{attrs:{id:"apiversion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apiversion"}},[t._v("#")]),t._v(" apiversion")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("SDK")]),t._v(" "),a("th",[t._v("required apiversion")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("9.x.x")]),t._v(" "),a("td",[t._v("4")])]),t._v(" "),a("tr",[a("td",[t._v("8.x.x")]),t._v(" "),a("td",[t._v("4")])]),t._v(" "),a("tr",[a("td",[t._v("7.x.x")]),t._v(" "),a("td",[t._v("4")])]),t._v(" "),a("tr",[a("td",[t._v("6.x.x")]),t._v(" "),a("td",[t._v("3")])]),t._v(" "),a("tr",[a("td",[t._v("5.x.x")]),t._v(" "),a("td",[t._v("2")])])])]),t._v(" "),a("h3",{attrs:{id:"minsdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minsdk"}},[t._v("#")]),t._v(" minsdk")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("SDK")]),t._v(" "),a("th",[t._v("required apiversion")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("9.x.x")]),t._v(" "),a("td",[t._v("9.0.0.GA")])]),t._v(" "),a("tr",[a("td",[t._v("8.x.x")]),t._v(" "),a("td",[t._v("7.0.0.GA")])]),t._v(" "),a("tr",[a("td",[t._v("7.x.x")]),t._v(" "),a("td",[t._v("7.0.0.GA")])]),t._v(" "),a("tr",[a("td",[t._v("6.x.x")]),t._v(" "),a("td",[t._v("6.0.0.GA")])]),t._v(" "),a("tr",[a("td",[t._v("5.x.x")]),t._v(" "),a("td",[t._v("5.0.0.GA")])])])]),t._v(" "),a("h3",{attrs:{id:"architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[t._v("#")]),t._v(" architecture")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("SDK")]),t._v(" "),a("th",[t._v("Architecture")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("9.x.x")]),t._v(" "),a("td",[t._v("arm64-v8a armeabi-v7a x86 x86_64")])]),t._v(" "),a("tr",[a("td",[t._v("8.x.x")]),t._v(" "),a("td",[t._v("arm64-v8a armeabi-v7a x86")])]),t._v(" "),a("tr",[a("td",[t._v("7.x.x")]),t._v(" "),a("td",[t._v("arm64-v8a armeabi-v7a x86")])]),t._v(" "),a("tr",[a("td",[t._v("6.x.x")]),t._v(" "),a("td",[t._v("armeabi-v7a x86")])]),t._v(" "),a("tr",[a("td",[t._v("5.x.x")]),t._v(" "),a("td",[t._v("armeabi armeabi-v7a x86")])])])]),t._v(" "),a("h3",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[t._v("#")]),t._v(" Version")]),t._v(" "),a("p",[t._v("Update the module version to the major version number.")]),t._v(" "),a("h2",{attrs:{id:"api-updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-updates"}},[t._v("#")]),t._v(" API updates")]),t._v(" "),a("p",[t._v("Please note any API changes. Refer to "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Release_Notes/"}},[t._v("Titanium SDK Release Notes")]),t._v(" for the latest info on changes to the API and/or the "),a("a",{attrs:{href:"#!/api"}},[t._v("API documentation")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=i.exports}}]);