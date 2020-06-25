(window.webpackJsonp=window.webpackJsonp||[]).push([[1261],{2365:function(e,t,a){"use strict";a.r(t);var s=a(21),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-modules-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-modules-information"}},[e._v("#")]),e._v(" Titanium Modules Information")]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v("The examples in this page use the "),a("em",[a("strong",[e._v("Prototype")])]),e._v(" library, which is included by default inside a portal. However, the same concepts may be applied using other implementations.")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("These set of actions can retrieve a Titanium Modules information from the Studio. The actions support both Mobile modules and Desktop modules.")]),e._v(" "),a("h2",{attrs:{id:"invocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invocation"}},[e._v("#")]),e._v(" Invocation")]),e._v(" "),a("p",[e._v("This command is executed immediately in a synchronous way.")]),e._v(" "),a("h2",{attrs:{id:"mobile-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mobile-modules"}},[e._v("#")]),e._v(" Mobile Modules")]),e._v(" "),a("p",[e._v("The following "),a("em",[e._v("dispatch")]),e._v(" call will get the Titanium Mobile Modules information:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("modulesInfo = dispatch($H({\n  controller: 'portal.titanium.modules',\n  action: \"getMobileModules\"\n}).toJSON()).evalJSON();\n")])])]),a("p",[e._v("The returned "),a("em",[e._v("mobules information")]),e._v(" JSON is a Map object that has two roots:")]),e._v(" "),a("ol",[a("li",[a("p",[a("strong",[e._v("global_modules")]),e._v(" - Holds the modules that were installed into the Titanium SDK folder ("),a("sdk-dir",[e._v("/modules).")])],1)]),e._v(" "),a("li",[a("p",[a("strong",[e._v("project_modules")]),e._v(" - Holds the modules that were installed into the opened "),a("em",[e._v("Titanium Mobile Projects")]),e._v(" in the workspace.")])])]),e._v(" "),a("h3",{attrs:{id:"global-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-modules"}},[e._v("#")]),e._v(" Global Modules")]),e._v(" "),a("p",[e._v("As described above, the "),a("em",[e._v("Global Modules")]),e._v(" are the modules that were installed into the Titanium SDK modules directory.\nThe hash value for the "),a("strong",[e._v("global_modules")]),e._v(" key holds an "),a("em",[e._v("array")]),e._v(" of module-descriptions. Each item in this array is a hash that holds the following information:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("key")]),e._v(" "),a("th",[e._v("description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("name")]),e._v(" "),a("td",[e._v("The name of the module")])]),e._v(" "),a("tr",[a("td",[e._v("platforms")]),e._v(" "),a("td",[e._v("The platforms that this module has support for (an array)")])]),e._v(" "),a("tr",[a("td",[e._v("versions")]),e._v(" "),a("td",[e._v("The versions that this module has support for (an array)")])]),e._v(" "),a("tr",[a("td",[e._v("type")]),e._v(" "),a("td",[e._v("The module-type ('"),a("em",[e._v("global")]),e._v("' or '"),a("em",[e._v("project")]),e._v("', and in this case - only '"),a("em",[e._v("global")]),e._v("')")])])])]),e._v(" "),a("h3",{attrs:{id:"project-s-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project-s-modules"}},[e._v("#")]),e._v(" Project's Modules")]),e._v(" "),a("p",[e._v("The Studio collects all the modules information from the "),a("em",[e._v("Titanium Mobile Projects")]),e._v(" in the workspace. Modules that were located under a "),a("em",[e._v("modules")]),e._v(" directory in a project are considered as installed-modules for that project.\nThe hash value for the "),a("strong",[e._v("project_modules")]),e._v(" key holds a "),a("em",[e._v("hash")]),e._v(" that maps from a "),a("em",[e._v("project-name")]),e._v(" to an array of modules. Each module in that array holds the same information as described above, with the minor difference in the "),a("em",[e._v("'type'")]),e._v(" field.")]),e._v(" "),a("h3",{attrs:{id:"json-structure-illustration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-structure-illustration"}},[e._v("#")]),e._v(" JSON Structure Illustration")]),e._v(" "),a("p",[e._v("Here is an illustration that describes the form of the returned JSON object.")]),e._v(" "),a("table",{staticClass:"confluenceTable"},[a("thead",{staticClass:" "}),a("tfoot",{staticClass:" "}),a("tbody",{staticClass:" "},[a("tr",[a("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[a("p",[a("img",{staticClass:"confluence-embedded-image image-left",attrs:{src:"images/download/attachments/30083163/modules_json.png",alt:"images/download/attachments/30083163/modules_json.png"}})])])])])]),e._v(" "),a("h3",{attrs:{id:"installing-a-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-a-module"}},[e._v("#")]),e._v(" Installing a Module")]),e._v(" "),a("p",[e._v("You can download and install a Mobile Module by using the "),a("em",[e._v("'installModule'")]),e._v(" action.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('dispatch($H({\n    controller: \'portal.titanium.modules\',\n    action: "installModule",\n    args: \'["<url>", "<target>", "<project-name>"]\'\n}).toJSON());\n')])])]),a("p",[e._v("The "),a("em",[e._v('"target"')]),e._v(" and the "),a("em",[e._v('"project-name"')]),e._v(" are optional arguments.\nThe 'target' can be one of "),a("em",[a("strong",[e._v("global_modules")])]),e._v(" or "),a("em",[a("strong",[e._v("project_modules")])]),e._v(".\nWhen a "),a("em",[e._v("'global_modules'")]),e._v(" string is passed in, there is no need for the last argument, and the module will be downloaded and installed into the global space (the Titanium SDK modules directory).\nThe "),a("em",[e._v("'project_modules'")]),e._v(" argument required a third argument that specify the project name that the module will be deployed into.")]),e._v(" "),a("p",[e._v("When the given URL is null or empty, the Studio will display a module-deployment dialog that will allow the user to input a valid URL and select the deployment target. The the URL is the only argument given here, the Studio will display the same dialog, but this time without the URL field (just the deployment-target selection).")]),e._v(" "),a("h2",{attrs:{id:"desktop-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#desktop-modules"}},[e._v("#")]),e._v(" Desktop Modules")]),e._v(" "),a("p",[e._v("The following "),a("em",[e._v("dispatch")]),e._v(" call will get the Titanium Desktop Modules information:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("modulesInfo = dispatch($H({\n  controller: 'portal.titanium.modules',\n  action: \"getDesktopModules\"\n}).toJSON()).evalJSON();\n")])])]),a("p",[e._v("The returned "),a("em",[e._v("mobules information")]),e._v(" JSON is a Map object that holds the "),a("em",[e._v("versions")]),e._v(" of the installed modules as "),a("em",[e._v("keys")]),e._v(", and holds an array of "),a("em",[e._v("module-names")]),e._v(" as values.\nFor example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{"1.1.0" : ["php", "ruby", "python", "javascript", "tiapp"...]}\n')])])]),a("h2",{attrs:{id:"sample-of-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-of-use"}},[e._v("#")]),e._v(" Sample of use")]),e._v(" "),a("p",[e._v("See "),a("em",[a("strong",[a("a",{attrs:{href:"https://github.com/aptana/studio3-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("studio3-sdk"),a("OutboundLink")],1)])]),e._v(" repository ("),a("em",[e._v("modules.js")]),e._v(")")])])}),[],!1,null,null,null);t.default=o.exports}}]);