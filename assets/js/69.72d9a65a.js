(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1560:function(e,t,a){"use strict";a.r(t);var o=a(21),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"ios-platform-overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ios-platform-overview"}},[e._v("#")]),e._v(" iOS Platform Overview")]),e._v(" "),o("h2",{attrs:{id:"objective"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[e._v("#")]),e._v(" Objective")]),e._v(" "),o("p",[e._v("In this chapter, you will examine the concepts, features, and components that uniquely identify iOS apps. You'll look at user interface conventions, application components, and device features.")]),e._v(" "),o("h2",{attrs:{id:"contents"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),o("p",[e._v("iOS stands apart from most other mobile operating systems in that both its software and hardware are controlled by Apple. For this reason, it has a tight integration of front end and back end components that is arguably unmatched. We'll look at Apple's design considerations, the Cocoa Touch framework, and various UI components that are specific to iOS. Some of the key features of the iOS platform include:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Crafted and consistent user interface conventions")])]),e._v(" "),o("li",[o("p",[e._v("Minimalist hardware design")])]),e._v(" "),o("li",[o("p",[e._v("Apple's Human Interface Guidelines")])]),e._v(" "),o("li",[o("p",[e._v("Cocoa Touch")])]),e._v(" "),o("li",[o("p",[e._v("Curated and closely controlled app distribution system")])])]),e._v(" "),o("h3",{attrs:{id:"user-interface-conventions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#user-interface-conventions"}},[e._v("#")]),e._v(" User interface conventions")]),e._v(" "),o("p",[e._v("iOS is a carefully crafted and well-designed mobile operating system. Apple has carefully considered both usability and design throughout every aspect of its design. iOS is also remarkably consistent across devices, with only a couple of minor UI differences between iPhones, iPods, and iPads, as hardware capabilities differ across those devices.")]),e._v(" "),o("p",[e._v("The following screen illustrates some of the common user interface components offered by iOS:\n"),o("img",{attrs:{src:a(632),alt:"Screen_shot_2011-08-24_at_9.00.30_PM"}})]),e._v(" "),o("p",[e._v("Programmers adopt one of two general approaches when creating iOS apps: adopt the conventions completely or establish their own. Game makers tend to dispense entirely with stock controls (buttons and so forth) and create custom UI controls for all aspects of their app. Programmers of business or information-oriented apps tend to adopt the standard conventions. Through the power of Titanium you are free to adopt either approach, allowing you to use the methodology that best suits the app you are creating.")]),e._v(" "),o("h3",{attrs:{id:"minimalist-hardware-design"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#minimalist-hardware-design"}},[e._v("#")]),e._v(" Minimalist hardware design")]),e._v(" "),o("p",[e._v("iOS devices are famous for their one-button design. Other than a power button, volume rocker, and camera button (on some devices), iOS devices offer a single button with a consistent function – to return the user to the Springboard, or main screen. What this single-button design means to you is that your app's UI will need to include buttons and controls for every operation your app could perform. You can't rely on a hardware menu button, back button, etc. like you can on Android.")]),e._v(" "),o("h3",{attrs:{id:"apple-s-human-interface-guidelines"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#apple-s-human-interface-guidelines"}},[e._v("#")]),e._v(" Apple's Human Interface Guidelines")]),e._v(" "),o("p",[e._v("In Apple's words, the "),o("a",{attrs:{href:"http://developer.apple.com/library/ios/#documentation/UserExperience/Conceptual/MobileHIG/Introduction/Introduction.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Human Interface Guidelines"),o("OutboundLink")],1),e._v(' will help you build "a superlative user interface and user experience for your iOS app." Some of the key design principles from that guide are summarized in the following image: '),o("img",{attrs:{src:a(633),alt:"hig_principles"}})]),e._v(" "),o("h3",{attrs:{id:"cocoa-touch"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cocoa-touch"}},[e._v("#")]),e._v(" Cocoa Touch")]),e._v(" "),o("p",[e._v("Cocoa Touch is an abstraction of iOS operating system functions that is designed to help developers easily implement sophisticated app features. It is part of a layered set of APIs, as illustrated in this figure: "),o("img",{attrs:{src:a(634),alt:"Screen_shot_2011-08-25_at_10.37.12_AM"}}),e._v("\nCocoa Touch provides the key frameworks for developing applications on devices running iOS. Some of these key frameworks are:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Foundation Kit Framework")])]),e._v(" "),o("li",[o("p",[e._v("UIKit Framework (based on Application Kit)")])]),e._v(" "),o("li",[o("p",[e._v("Game Kit Framework")])]),e._v(" "),o("li",[o("p",[e._v("iAd Framework")])]),e._v(" "),o("li",[o("p",[e._v("Map Kit Framework")])])]),e._v(" "),o("p",[e._v("Titanium enables easy access to each of those functions. For example, Titanium enables access to the rich set of UI controls defined in UIKit.")]),e._v(" "),o("h3",{attrs:{id:"curated-app-distribution"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#curated-app-distribution"}},[e._v("#")]),e._v(" Curated app distribution")]),e._v(" "),o("p",[e._v("We won't spend much time on it here, as there's a whole chapter on distribution later, but Apple's curated distribution model is also part of the iOS experience. By examining and approving every app in the App Store, Apple helps ensure that only useful, high quality apps are presented to users. They also carefully screen out \"spam\", malware, and other dangerous apps. Check out the Deployment and Distribution module for more details.")]),e._v(" "),o("p",[e._v("A key consideration is that you will need an "),o("a",{attrs:{href:"http://developer.apple.com/devcenter/ios/index.action",target:"_blank",rel:"noopener noreferrer"}},[e._v("iOS Developer Center"),o("OutboundLink")],1),e._v(" account to test or publish iOS apps you create with Titanium. A basic membership is free, which gives you access to the developer tools and documentation. To test on a device or publish your app, though, you will need to upgrade to a paid membership level, which at the time of this writing is $99/year USD for individuals and businesses.")]),e._v(" "),o("h3",{attrs:{id:"references-and-further-reading"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references-and-further-reading"}},[e._v("#")]),e._v(" References and Further Reading")]),e._v(" "),o("ul",[o("li",[o("p",[o("a",{attrs:{href:"http://developer.apple.com/library/ios/#documentation/UserExperience/Conceptual/MobileHIG/Introduction/Introduction.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("iOS Human Interface Guidelines"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"http://developer.apple.com/technologies/ios/cocoa-touch.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cocoa Touch"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"http://developer.apple.com/devcenter/ios/index.action",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple's iOS Developer Center"),o("OutboundLink")],1)])])]),e._v(" "),o("h2",{attrs:{id:"summary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),o("p",[e._v("In this chapter, you examined the concepts, features, and components that make iOS apps – those for iPhone, iPod, and iPad – what they are. You looked at user interface conventions, application components, and device features. next we'll discuss some basic coding strategies for creating high quality, maintainable Titanium apps.")])])}),[],!1,null,null,null);t.default=r.exports},632:function(e,t,a){e.exports=a.p+"assets/img/Screen_shot_2011-08-24_at_9.00.30_PM.13efb2dd.png"},633:function(e,t,a){e.exports=a.p+"assets/img/hig_principles.fb678bbb.png"},634:function(e,t,a){e.exports=a.p+"assets/img/Screen_shot_2011-08-25_at_10.37.12_AM.e59e8efa.png"}}]);