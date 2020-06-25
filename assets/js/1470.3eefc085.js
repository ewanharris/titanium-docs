(window.webpackJsonp=window.webpackJsonp||[]).push([[1470],{1955:function(e,r,o){"use strict";o.r(r);var t=o(21),a=Object(t.a)({},(function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"hyperloop-2-2-0-20-october-2017"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hyperloop-2-2-0-20-october-2017"}},[e._v("#")]),e._v(" Hyperloop 2.2.0 - 20 October 2017")]),e._v(" "),o("p",[e._v("Hyperloop 2.2.0 is a feature release that includes new features, improvements, and bug fixes.")]),e._v(" "),o("h2",{attrs:{id:"new-features"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-features"}},[e._v("#")]),e._v(" New features")]),e._v(" "),o("ul",[o("li",[o("p",[o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-23853",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-23853"),o("OutboundLink")],1),e._v(" - iOS - Support embedded binaries")]),e._v(" "),o("ul",[o("li",[e._v("Added full support for embedded / dynamic binaries including Swift frameworks")])])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-23854",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-23854"),o("OutboundLink")],1),e._v(" - iOS - Support creating of Run Script phases")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Added support to hooks scripts into the application build phase. This can be configured via the appc.js file with the following example:")]),e._v(" "),o("p",[o("strong",[e._v("Run Script phase")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("hyperloop: {\n  ios: {\n    xcodebuild: {\n      scripts: [{\n        name: 'My script phase',\n        shellScript: '${APPC_PROJECT_DIR}/src/script.sh'\n      }]\n    }\n  }\n}\n")])])])])])])]),e._v(" "),o("h2",{attrs:{id:"improvements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#improvements"}},[e._v("#")]),e._v(" Improvements")]),e._v(" "),o("ul",[o("li",[o("p",[o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-23956",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-23956"),o("OutboundLink")],1),e._v(" - iOS: Improve error handling for non-default Xcode installations")]),e._v(" "),o("ul",[o("li",[e._v("Improved error handling for non-default Xcode installation")])])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-24623",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-24623"),o("OutboundLink")],1),e._v(" - iOS: Drop support for CocoaPods 0.39 and below")]),e._v(" "),o("ul",[o("li",[e._v("Dropped support for CocoaPods 0.39 and below. Use CocoaPods 1.x instead as we support and recommend the latest version 1.3.1")])])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-24532",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-24532"),o("OutboundLink")],1),e._v(" - Android: Use .aar handling from AndroidBuilder")]),e._v(" "),o("ul",[o("li",[e._v("Removed the AAR handling from Hyperloop hook; Instead, AAR handling relies on features introduced in Titanium SDK 6.1.0")])])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-24829",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-24829"),o("OutboundLink")],1),e._v(" - Android: Slow Compile-time, too many JS-wrappers generated")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Improved Android build performance by")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Moving the Hyperloop wrapper sources from being processed by the normal Android build process (it will also no longer regenerate all wrappers on every build)")])]),e._v(" "),o("li",[o("p",[e._v("Hyperloop wrappers will no longer be copied to the Resources directory which caused some confusion in classic apps. The hook will now generate all files under the build directory.")])]),e._v(" "),o("li",[o("p",[e._v("All important build steps are now being able to work incrementally. This will allow the Hyperloop processing to only trigger for changed or deleted files instead all of them.")])])])])])])]),e._v(" "),o("h2",{attrs:{id:"deprecations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deprecations"}},[e._v("#")]),e._v(" Deprecations")]),e._v(" "),o("p",[e._v("Starting in Hyperloop 2.2.0, manually configuring frameworks has been deprecated ("),o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-25283",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-25283"),o("OutboundLink")],1),e._v(") with the introduction of dynamic frameworks in modules in Titanium SDK 6.2.0 ("),o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-20557",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-20557"),o("OutboundLink")],1),e._v(" ) and the updated framework handling for Hyperloop. Instead, place your frameworks in "),o("code",[e._v("app/platform/ios")]),e._v(" (Alloy) or "),o("code",[e._v("platform/ios")]),e._v(" (Classic Titanium) in Hyperloop 2.0.0+ and they will be computed automatically. The use-case to directly use Objective-C and Swift source files should also be discouraged in favor of using frameworks.")]),e._v(" "),o("h2",{attrs:{id:"fixed-issues"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fixed-issues"}},[e._v("#")]),e._v(" Fixed issues")]),e._v(" "),o("ul",[o("li",[o("p",[o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-24151",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-24151"),o("OutboundLink")],1),e._v(" - Android: Requiring certain classes throws an error")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-25372",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-25372"),o("OutboundLink")],1),e._v(" - Android: The module android.support.v4.content.ContextCompat is missing with TiSDK 6.2.2.GA")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-23570",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-23570"),o("OutboundLink")],1),e._v(" - iOS: Support use_frameworks flag in Cocoapods")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-24160",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-24160"),o("OutboundLink")],1),e._v(" - iOS: Exclude CocoaPods products from being removed")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-24614",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-24614"),o("OutboundLink")],1),e._v(" - iOS: AVFoundation/AVSpeechSynthesizer class not found")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-25341",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-25341"),o("OutboundLink")],1),e._v(" - iOS: Error after iOS 11 / Xcode 9 update")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-25354",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-25354"),o("OutboundLink")],1),e._v(" - iOS: Building hyperloop-examples app fails with Hyperloop 2.2.0")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-25401",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-25401"),o("OutboundLink")],1),e._v(" - iOS: Hyperloop does not generate code for Flurry & Contentful Pods")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-25402",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-25402"),o("OutboundLink")],1),e._v(" - iOS: Framework handling regressions")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-25403",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-25403"),o("OutboundLink")],1),e._v(" - iOS: Can't find blocks from typedefs")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-25192",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-25192"),o("OutboundLink")],1),e._v(" - Windows: Evaluating a null value from Hyperloop crashes the App")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-24644",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-24644"),o("OutboundLink")],1),e._v(" - Windows: Decouple Hyperloop logic and Ti SDK")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-23926",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-23926"),o("OutboundLink")],1),e._v(" - CLI: Improve Ti SDK handling durin CI builds")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-23948",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-23948"),o("OutboundLink")],1),e._v(" - CLI: Replace deprecated wrench with fs-extra")])])])])}),[],!1,null,null,null);r.default=a.exports}}]);