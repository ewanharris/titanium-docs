(window.webpackJsonp=window.webpackJsonp||[]).push([[919],{3006:function(e,r,t){"use strict";t.r(r);var o=t(21),i=Object(o.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"alloy-1-8-0-15-march-2015"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alloy-1-8-0-15-march-2015"}},[e._v("#")]),e._v(" Alloy 1.8.0 - 15 March 2015")]),e._v(" "),t("p",[e._v("Alloy 1.8.0 is a minor release that includes new, improvements, and bug fixes.")]),e._v(" "),t("p",[e._v("As of this release, Alloy 1.7.x will not be supported six months from 1.8.0's release date. See "),t("RouterLink",{attrs:{to:"/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/"}},[e._v("Axway Appcelerator Deprecation Policy")]),e._v(" and "),t("RouterLink",{attrs:{to:"/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes"}},[e._v("Nominal Lifetimes")]),e._v(" documents for details.")],1),e._v(" "),t("h2",{attrs:{id:"improvements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#improvements"}},[e._v("#")]),e._v(" Improvements")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1365",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1365"),t("OutboundLink")],1),e._v(" - Improve how Alloy works with i18n and platform folders")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Alloy has improved i18n and platform-specific resources support. You can now add "),t("code",[e._v("i18n")]),e._v(" and "),t("code",[e._v("platform")]),e._v(" directories in your "),t("code",[e._v("/app")]),e._v(" directory and in your active theme's directory. Additionally, widgets may also have an "),t("code",[e._v("i18n")]),e._v(" directory.")])]),e._v(" "),t("li",[t("p",[e._v("When you build your app, Alloy will delete the "),t("code",[e._v("/i18n")]),e._v(" and "),t("code",[e._v("/platform/<platform>")]),e._v(" directories in the project's root directory. Next it will copy and merge the "),t("code",[e._v("i18n")]),e._v(" and "),t("code",[e._v("platform/<platform>")]),e._v(" directories from the Alloy app's directory into the project's root directory. For platform-specific files, it starts by copying all files from "),t("code",[e._v("/app/platform/<platform>")]),e._v(", then overrides with files from "),t("code",[e._v("/app/themes/<theme name>/platform/<platform>")]),e._v(". i18n files are copied from the "),t("code",[e._v("/app/i18n")]),e._v(" and "),t("code",[e._v("/app/themes/<theme name>/i18n")]),e._v(" directories followed by the each widget's "),t("code",[e._v("/app/widgets/<widget name>/i18n")]),e._v(" directory.")])]),e._v(" "),t("li",[t("p",[e._v("It's important to reiterate that the "),t("code",[e._v("/i18n")]),e._v(", "),t("code",[e._v("/platform/<platform>")]),e._v(", and "),t("code",[e._v("/Resources")]),e._v(" directories are regenerated each time you build. Any manual change to files in these directories will be lost during the next build.")])]),e._v(" "),t("li",[t("p",[e._v("When creating a new Alloy project, it will automatically move existing "),t("code",[e._v("/i18n")]),e._v(" and "),t("code",[e._v("/platform")]),e._v(" directories into the "),t("code",[e._v("/app")]),e._v(" directory. Existing Alloy apps that already have "),t("code",[e._v("/i18n")]),e._v(" or "),t("code",[e._v("/platform")]),e._v(" directories in the project's root directory will fail to build until these directories into the "),t("code",[e._v("/app")]),e._v(" directory.")])])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-86",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-86"),t("OutboundLink")],1),e._v(" - Add support for distributing widgets via NPM")])])]),e._v(" "),t("h2",{attrs:{id:"fixed-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-issues"}},[e._v("#")]),e._v(" Fixed Issues")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1361",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1361"),t("OutboundLink")],1),e._v(" - Destroy calling off on variables that may be undefined")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1369",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1369"),t("OutboundLink")],1),e._v(" - Complex data binding for collection doesn't work with transform")])])])])}),[],!1,null,null,null);r.default=i.exports}}]);