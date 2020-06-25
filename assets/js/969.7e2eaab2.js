(window.webpackJsonp=window.webpackJsonp||[]).push([[969],{2857:function(e,t,o){"use strict";o.r(t);var r=o(21),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"build-configuration-file-alloy-jmk"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#build-configuration-file-alloy-jmk"}},[e._v("#")]),e._v(" Build Configuration File (alloy.jmk)")]),e._v(" "),o("p",[e._v("Alloy provides hooks to customize the compilation process using a special JavaScript file called a JS Makefile (JMK). The file needs to be named "),o("code",[e._v("alloy.jmk")]),e._v(" and located in the project's "),o("code",[e._v("app")]),e._v(" directory. This file can be used for common administration tasks or to fine tune the build process. It will be loaded automatically by the Alloy command line during compilation.")]),e._v(" "),o("p",[e._v("Example of a JMK file:")]),e._v(" "),o("p",[o("strong",[e._v("alloy.jmk")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("task('pre:compile', function(event, logger) {\n    logger.showTimestamp = true;\n    logger.info('building project at '+ event.dir.project);\n});\n\ntask('post:compile', function(event, logger) {\n    logger.info('compile finished!');\n});\n")])])]),o("p",[e._v("To customize the build process, call the task function with the event name and provide a function callback, which will be called when the event is triggered by the compiler.")]),e._v(" "),o("p",[e._v("These are the event names (or compiler tasks):")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("pre:load:")]),e._v(" called after the project is cleaned and before copying any assets to the "),o("code",[e._v("Resources")]),e._v(" folder.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("pre:compile")]),e._v(": called before the compiler starts.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("post:compile")]),e._v(": called after the compiler finishes but before it exits.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("compile:app.js")]),e._v(": called just after the compilation of the main "),o("code",[e._v("app.js")]),e._v(" file but before the code is written to disk.")])])]),e._v(" "),o("p",[e._v("The function callback provides two arguments: "),o("code",[e._v("event")]),e._v(" and "),o("code",[e._v("logger")]),e._v(".")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("event")]),e._v(" object provides a set of objects and values which may be useful for building tasks:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Object/Value")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("adapters  "),o("br"),e._v("(Array)")]),e._v(" "),o("td",[e._v("List of adapters.")])]),e._v(" "),o("tr",[o("td",[e._v("alloyConfig  "),o("br"),e._v("(Object)")]),e._v(" "),o("td",[e._v("Contains Alloy compiler configuration information."),o("br"),o("br"),e._v("* "),o("strong",[e._v("platform")]),e._v(" : either "),o("code",[e._v("android")]),e._v(", "),o("code",[e._v("ios")]),e._v(" or "),o("code",[e._v("windows")]),e._v("."),o("br"),e._v(" "),o("br"),e._v("* "),o("strong",[e._v("file")]),e._v(": file to target for selective compilation."),o("br"),e._v(" "),o("br"),e._v("* "),o("strong",[e._v("deploytype")]),e._v(" : compilation environment type: either development, test or production."),o("br"),e._v(" "),o("br"),e._v("* "),o("strong",[e._v("beautify")]),e._v(" : if set to "),o("code",[e._v("true")]),e._v(", the output from UglifyJS will be beautified.")])]),e._v(" "),o("tr",[o("td",[e._v("autoStyle  "),o("br"),e._v("(Boolean)")]),e._v(" "),o("td",[e._v("If set to "),o("code",[e._v("true")]),e._v(", autostyle is enabled for the entire project.")])]),e._v(" "),o("tr",[o("td",[e._v("dependencies  "),o("br"),e._v("(Object)")]),e._v(" "),o("td",[e._v("Value of the "),o("code",[e._v("dependencies")]),e._v(" key in the "),o("code",[e._v("config.json")]),e._v(" file.")])]),e._v(" "),o("tr",[o("td",[e._v("dir  "),o("br"),e._v("(Object)")]),e._v(" "),o("td",[e._v("Contains directory paths to various resources."),o("br"),o("br"),e._v("* "),o("strong",[e._v("home")]),e._v(" : absolute path to the Alloy project's "),o("code",[e._v("app")]),e._v(" directory."),o("br"),e._v(" "),o("br"),e._v("* "),o("strong",[e._v("project")]),e._v(" : absolute path to the Alloy project's root directory."),o("br"),e._v(" "),o("br"),e._v("* "),o("strong",[e._v("resources")]),e._v(" : absolute path to the Alloy project's "),o("code",[e._v("Resource")]),e._v(" directory."),o("br"),e._v(" "),o("br"),e._v("* "),o("strong",[e._v("resourcesAlloy")]),e._v(" : absolute path to the Alloy project's "),o("code",[e._v("Resource/alloy")]),e._v(" directory."),o("br"),e._v(" "),o("br"),e._v("* "),o("strong",[e._v("assets")]),e._v(" : absolute path to the Alloy project's assets."),o("br"),e._v(" "),o("br"),e._v("* "),o("strong",[e._v("config")]),e._v(" : absolute path to the Alloy project's config."),o("br"),e._v(" "),o("br"),e._v("* "),o("strong",[e._v("controllers")]),e._v(" : absolute path to the Alloy project's controllers."),o("br"),e._v(" "),o("br"),e._v("* "),o("strong",[e._v("migrations")]),e._v(" : absolute path to the Alloy project's migrations."),o("br"),e._v(" "),o("br"),e._v("* "),o("strong",[e._v("models")]),e._v(" : absolute path to the Alloy project's models."),o("br"),e._v(" "),o("br"),e._v("* "),o("strong",[e._v("styles")]),e._v(" : absolute path to the Alloy project's styles."),o("br"),e._v(" "),o("br"),e._v("* "),o("strong",[e._v("themes")]),e._v(" : absolute path to the Alloy project's themes."),o("br"),e._v(" "),o("br"),e._v("* "),o("strong",[e._v("views")]),e._v(" : absolute path to the Alloy project's views."),o("br"),e._v(" "),o("br"),e._v("* "),o("strong",[e._v("widgets")]),e._v(" : absolute path to the Alloy project's widgets."),o("br"),e._v(" "),o("br"),e._v("* "),o("strong",[e._v("builtins")]),e._v(" : absolute path to the Alloy tool builtins."),o("br"),e._v(" "),o("br"),e._v("* "),o("strong",[e._v("template")]),e._v(" : absolute path to the Alloy tool templates.")])]),e._v(" "),o("tr",[o("td",[e._v("sourcemap  "),o("br"),e._v("(Boolean)")]),e._v(" "),o("td",[e._v("If "),o("code",[e._v("true")]),e._v(", generates the source mapping files for use with the Studio debugger and other functions.  "),o("br"),e._v("These files maps the generated Titanium files in the "),o("code",[e._v("Resources")]),e._v(" directory to the ones in the "),o("code",[e._v("app")]),e._v(" directory.")])]),e._v(" "),o("tr",[o("td",[e._v("theme  "),o("br"),e._v("(String)")]),e._v(" "),o("td",[e._v("Name of the theme being used.")])]),e._v(" "),o("tr",[o("td",[e._v("code  "),o("br"),e._v("(String)")]),e._v(" "),o("td",[o("strong",[e._v("Only present for the "),o("code",[e._v("compile:app.js")]),e._v(" task.")]),e._v(" Contains the contents of the "),o("code",[e._v("app.js")]),e._v(" file.")])]),e._v(" "),o("tr",[o("td",[e._v("appJSFile  "),o("br"),e._v("(String)")]),e._v(" "),o("td",[o("strong",[e._v("Only present for the "),o("code",[e._v("compile:app.js")]),e._v(" task.")]),e._v(" Contains the the absolute path to the "),o("code",[e._v("app.js")]),e._v(" file.")])])])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("logger")]),e._v(" object provides a reference to the logger, which defines the following methods and properties:")]),e._v(" "),o("h2",{attrs:{id:"properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),o("p",[o("strong",[e._v("DEBUG")]),e._v(": Number READONLY\nOutput all log messages.")]),e._v(" "),o("p",[o("strong",[e._v("INFO")]),e._v(": Number READONLY\nOutput all log messages except debug messages.")]),e._v(" "),o("p",[o("strong",[e._v("WARN")]),e._v(": Number READONLY\nOutput only warning and error log messages.")]),e._v(" "),o("p",[o("strong",[e._v("ERROR")]),e._v(": Number READONLY\nOutput only error log messages.")]),e._v(" "),o("p",[o("strong",[e._v("NONE")]),e._v(": Number READONLY\nDisable log messages.")]),e._v(" "),o("p",[o("strong",[e._v("logLevel")]),e._v(": Number\nSets which log messages to output.")]),e._v(" "),o("p",[o("strong",[e._v("showTimestamp")]),e._v(": Boolean\nIf true, outputs timestamp with the log messages.")]),e._v(" "),o("p",[o("strong",[e._v("stripColors")]),e._v(": Boolean\nIf true, suppresses color output.")]),e._v(" "),o("h2",{attrs:{id:"methods"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),o("p",[o("strong",[e._v("debug (String msg)")]),e._v("\nOutputs a debug log message.")]),e._v(" "),o("p",[e._v("Parameters:")]),e._v(" "),o("ul",[o("li",[e._v("msg : String\nMessage to output.")])]),e._v(" "),o("p",[e._v("Returns:")]),e._v(" "),o("ul",[o("li",[e._v("void")])]),e._v(" "),o("p",[o("strong",[e._v("info (String msg)")]),e._v("\nOutputs an info log message.")]),e._v(" "),o("p",[e._v("Parameters:")]),e._v(" "),o("ul",[o("li",[e._v("msg : String\nMessage to output.")])]),e._v(" "),o("p",[e._v("Returns:")]),e._v(" "),o("ul",[o("li",[e._v("void")])]),e._v(" "),o("p",[o("strong",[e._v("warn (String msg)")]),e._v("\nOutputs a warning log message.")]),e._v(" "),o("p",[e._v("Parameters:")]),e._v(" "),o("ul",[o("li",[e._v("msg : String\nMessage to output.")])]),e._v(" "),o("p",[e._v("Returns:")]),e._v(" "),o("ul",[o("li",[e._v("void")])]),e._v(" "),o("p",[o("strong",[e._v("error (String msg)")]),e._v("\nOutputs an error log message.")]),e._v(" "),o("p",[e._v("Parameters:")]),e._v(" "),o("ul",[o("li",[e._v("msg : String\nMessage to output.")])]),e._v(" "),o("p",[e._v("Returns:")]),e._v(" "),o("ul",[o("li",[e._v("void")])])])}),[],!1,null,null,null);t.default=s.exports}}]);