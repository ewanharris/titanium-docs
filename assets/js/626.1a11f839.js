(window.webpackJsonp=window.webpackJsonp||[]).push([[626],{1412:function(t,e,a){"use strict";a.r(e);var s=a(21),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-analytics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-analytics"}},[t._v("#")]),t._v(" Titanium.Analytics")]),t._v(" "),a("TypeHeader"),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("The Analytics module can be used to supply additional context or application-specific\ninformation which can then be accessed during analysis using Analytics.")]),t._v(" "),a("p",[t._v("Use the "),a("type-link",{attrs:{type:"Titanium.Analytics.featureEvent"}},[t._v("featureEvent")]),t._v(" method to generate custom\nevents that you can view through the Analytics product. You can specify a name for\nthe feature event which is visible through Analytics.")],1),t._v(" "),a("p",[a("strong",[t._v("NOTE")]),t._v(" The Analytics module lets you transmit some data that is stored, but\nnot made accessible through the Analytics UI. To access this data, you must\nsign up for the optional raw data export service.")]),t._v(" "),a("p",[a("em",[t._v("The following types of data are stored but not made available through the Analytics UI:")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Navigation events.")])]),t._v(" "),a("li",[a("p",[t._v("Extra data added to feature events (the "),a("code",[t._v("data")]),t._v(" parameter).")])])]),t._v(" "),a("p",[t._v("Viewing navigation events in the Analytics UI will be supported in a future version\nof the Analytics product. There is no plan to support the other event types, and they\nshould not be used.")]),t._v(" "),a("p",[a("strong",[t._v("GDPR Compliance")])]),t._v(" "),a("p",[t._v("The Ti.Analytics namespace in Titanium is GDPR compliant since SDK 7.2.0. End users\nshould be able to opt out of Analytics using the "),a("type-link",{attrs:{type:"Titanium.Analytics.optedOut"}},[t._v("Titanium.Analytics.optedOut")]),t._v(" property.\nIf a user opted out from Analytics and you still call Analytics events, they will be ignored.")],1),t._v(" "),a("p",[t._v("Note: This does not affect your app until you make use of the "),a("code",[t._v("optedOut")]),t._v(" property. Once\nenabled for your users (e.g. by having a "),a("type-link",{attrs:{type:"Titanium.UI.Switch"}},[t._v("Titanium.UI.Switch")]),t._v(" in your settings), you\nshould handle it within your app logic.")],1),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("h3",{attrs:{id:"custom-feature-event"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-feature-event"}},[t._v("#")]),t._v(" Custom Feature Event")]),t._v(" "),a("p",[t._v("This example shows how to send a feature event during an application session to indicate\nsome feature that you would like to track was used.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Analytics"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("featureEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app.feature'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("In this case, the Analytics product would show statistics about how many times the\n'app.feature' event was generated.")]),t._v(" "),a("ApiDocs")],1)}),[],!1,null,null,null);e.default=n.exports}}]);