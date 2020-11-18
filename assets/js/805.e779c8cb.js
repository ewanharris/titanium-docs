(window.webpackJsonp=window.webpackJsonp||[]).push([[805],{1958:function(e,t,o){"use strict";o.r(t);var r=o(21),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"alloy-debugging-and-troubleshooting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#alloy-debugging-and-troubleshooting"}},[e._v("#")]),e._v(" Alloy Debugging and Troubleshooting")]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("This guide covers debugging and troubleshooting Alloy applications.")]),e._v(" "),o("h2",{attrs:{id:"debugging"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#debugging"}},[e._v("#")]),e._v(" Debugging")]),e._v(" "),o("h3",{attrs:{id:"studio-debugger"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#studio-debugger"}},[e._v("#")]),e._v(" Studio Debugger")]),e._v(" "),o("p",[e._v("The Studio debugger can be utilized to debug your Alloy application. The Studio debugger allows you to set breakpoints in your code to pause your application before it executes a line and to examine variables and their values. Review "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Debugging_and_Profiling/Debugging_in_Studio/"}},[e._v("Debugging in Studio")]),e._v(" for detailed information about using the debugger in Studio.")],1),e._v(" "),o("p",[e._v("Create breakpoints in your Alloy Controllers or "),o("code",[e._v("alloy.js")]),e._v(" file by double-clicking in the left margin on the left side of a line number to add or remove a breakpoint. A blue dot appears for your breakpoint. These breakpoints map to the code in the generated Titanium file located in the "),o("code",[e._v("Resources")]),e._v(" directory.")]),e._v(" "),o("p",[e._v("Breakpoints set in the CommonJS modules and Alloy Model files in the "),o("code",[e._v("app")]),e._v(" directory are ignored during debugging. To add breakpoints for these items, you need to add the breakpoints to the generated Titanium files created by the Alloy CLI. The CommonJS modules are copied to the "),o("code",[e._v("Resources")]),e._v(" directory and the generated Alloy Model files are located in the "),o("code",[e._v("Resources/alloy/models")]),e._v(" directory.")]),e._v(" "),o("p",[e._v("If your "),o("code",[e._v("Resources")]),e._v(" folder is hidden:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("In the "),o("strong",[e._v("Project Explorer")]),e._v(" view, click the "),o("strong",[e._v("View Menu")]),e._v(" button (white triangle pointing down).")])]),e._v(" "),o("li",[o("p",[e._v("Select "),o("strong",[e._v("Customize Views...")]),e._v(", then the "),o("strong",[e._v("Available Customizations")]),e._v(" dialog appears.")])]),e._v(" "),o("li",[o("p",[e._v("In the "),o("strong",[e._v("Filters")]),e._v(" tab, uncheck the "),o("strong",[e._v("Appcelerator Resources Folder")]),e._v(" checkbox.")])]),e._v(" "),o("li",[o("p",[e._v("Click the "),o("strong",[e._v("OK")]),e._v(" button. The "),o("code",[e._v("Resources")]),e._v(" folder should appear.")])])]),e._v(" "),o("p",[e._v("Breakpoints set in the files in the "),o("code",[e._v("Resources")]),e._v(" directory may be cleared or not mapped to the correct line number if you modify any of the files in the "),o("code",[e._v("app")]),e._v(" directory. After your code has been compiled, confirm that the breakpoints set in the files in the "),o("code",[e._v("Resources")]),e._v("directory are still set and in the correct location (line number). If not, clear and reset your breakpoints, then rerun the project in debug mode.")]),e._v(" "),o("p",[e._v("When you are ready to debug your application:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("In the "),o("strong",[e._v("Project Explorer")]),e._v(" view, make sure your project is selected.")])]),e._v(" "),o("li",[o("p",[e._v("In the global tool bar, select "),o("strong",[e._v("Debug")]),e._v(" from the "),o("strong",[e._v("Launch Mode")]),e._v(" drop-down list.")])]),e._v(" "),o("li",[o("p",[e._v("Select the device you want to launch your project on in the "),o("strong",[e._v("Target")]),e._v(" drop-down list.")])]),e._v(" "),o("li",[o("p",[e._v("If the "),o("strong",[e._v("Launch Automatically")]),e._v(" option is not enabled, click the "),o("strong",[e._v("Launch")]),e._v(" button.")])]),e._v(" "),o("li",[o("p",[e._v("Before the code starts to compile, a dialog appears asking to switch the perspective. Click the "),o("strong",[e._v("Yes")]),e._v(" button.")])])]),e._v(" "),o("p",[e._v("In the "),o("em",[e._v("Debug")]),e._v(" perspective, you can use the "),o("em",[e._v("Debug")]),e._v(" view to step into, pause or resume your code. While your code is paused, in the "),o("em",[e._v("Variables")]),e._v(" view, you can view your current variables and their values.")]),e._v(" "),o("h3",{attrs:{id:"compiler-error-messages"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compiler-error-messages"}},[e._v("#")]),e._v(" Compiler error messages")]),e._v(" "),o("p",[e._v("The Alloy compiler generates error messages for syntax errors in the JavaScript, JSON, TSS and XML files. The error messages report the file, line and character position, and a description of the error.")]),e._v(" "),o("p",[e._v("In Studio, these error messages output to the Console View.")]),e._v(" "),o("h2",{attrs:{id:"troubleshooting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),o("h3",{attrs:{id:"error-no-app-js-found-ensure-the-app-js-file-exists-in-your-project-s-resources-directory"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#error-no-app-js-found-ensure-the-app-js-file-exists-in-your-project-s-resources-directory"}},[e._v("#")]),e._v(" [ERROR] No app.js found. Ensure the app.js file exists in your project's Resources directory.")]),e._v(" "),o("p",[e._v("If p art of the contents of your "),o("code",[e._v("Resources")]),e._v(" folder were deleted, run "),o("code",[e._v("alloy compile --config platform=<platform>")]),e._v(" to regenerate the missing files.")]),e._v(" "),o("h3",{attrs:{id:"android-images-html-pages-and-other-assets-do-not-display"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#android-images-html-pages-and-other-assets-do-not-display"}},[e._v("#")]),e._v(" Android: Images, HTML pages and other assets do not display")]),e._v(" "),o("p",[e._v("If assets are being displayed for iOS and Mobile Web applications and not Android applications, the path to the asset needs to be preceded by a slash ('/'). The iOS and Mobile Web platform can accept relative and absolute paths, but the Android platform requires an absolute path.")]),e._v(" "),o("h3",{attrs:{id:"android-runtime-error-uncaught-typeerror-cannot-call-method-xxx-of-undefined"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#android-runtime-error-uncaught-typeerror-cannot-call-method-xxx-of-undefined"}},[e._v("#")]),e._v(" Android Runtime Error: Uncaught TypeError: Cannot call method xxx of undefined")]),e._v(" "),o("p",[e._v("1. You might be trying to create an iOS-only Titanium object. Use the platform attribute in the view to enforce platform-specific objects.\n2. If the top-level UI component in your view has an assigned ID, that is, the id attribute in the XML markup is defined for that component, the controller cannot use "),o("code",[e._v("$.<controller_name>")]),e._v(" to reference it. It needs to use the assigned ID.")]),e._v(" "),o("h3",{attrs:{id:"android-runtime-error-uncaught-referenceerror-alloy-is-not-defined"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#android-runtime-error-uncaught-referenceerror-alloy-is-not-defined"}},[e._v("#")]),e._v(" Android Runtime Error: Uncaught ReferenceError: Alloy is not defined")]),e._v(" "),o("p",[e._v("Non-controller JavaScript files are not automatically wrapped by Alloy. You need to require the 'alloy' module. See "),o("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Controllers/#LibraryCodeandCommonJSModules"}},[e._v("Library Code")]),e._v(" for more information.")],1),e._v(" "),o("h3",{attrs:{id:"ios-application-error-invalid-method-xxx-passed-to-uimodule-unknown-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ios-application-error-invalid-method-xxx-passed-to-uimodule-unknown-file"}},[e._v("#")]),e._v(" iOS Application Error: invalid method (xxx) passed to UIModule (unknown file).")]),e._v(" "),o("p",[e._v("You might be trying to create an Android-only Titanium object. Use the platform attribute in the view to enforce platform-specific objects.")]),e._v(" "),o("h3",{attrs:{id:"ios-application-error-undefined-is-not-an-object-evaluating-xxx-open-unknown-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ios-application-error-undefined-is-not-an-object-evaluating-xxx-open-unknown-file"}},[e._v("#")]),e._v(" iOS Application Error: undefined is not an object (evaluating $.xxx.open) (unknown file).")]),e._v(" "),o("p",[e._v("If the top-level UI component in your view has an assigned ID, that is, the id attribute in the XML markup is defined for that component, the controller cannot use "),o("code",[e._v("$.<controller_name>")]),e._v(" to reference it. It needs to use the assigned ID.")]),e._v(" "),o("h3",{attrs:{id:"studio-unable-to-find-alloy-binary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#studio-unable-to-find-alloy-binary"}},[e._v("#")]),e._v(" Studio: Unable to find alloy binary")]),e._v(" "),o("p",[e._v("There was probably an issue installing Alloy with Studio or the alloy binary is not in your PATH. Check to see if alloy is installed and is in your PATH (usually in '/usr/local/bin') or follow the "),o("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Getting_Started/#command-line-interface-installation"}},[e._v("Manual Installation instructions")]),e._v(" to install it.")],1),e._v(" "),o("h3",{attrs:{id:"getting-help"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-help"}},[e._v("#")]),e._v(" Getting help")]),e._v(" "),o("p",[e._v("Use the "),o("a",{attrs:{href:"https://developer.axway.com/develop-apps#DevelopApps_Engage",target:"_blank",rel:"noopener noreferrer"}},[e._v("Titanium Community Questions and Answers Forum"),o("OutboundLink")],1),e._v(" to receive assistance from Titanium Community members or find an answer to a previously answered question. Enter 'alloy' as a tag and include the Alloy version as part of the platform information included in the question. To get the Alloy version, run the "),o("code",[e._v("alloy --version")]),e._v("command in a console.")]),e._v(" "),o("h2",{attrs:{id:"submitting-a-bug-report"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#submitting-a-bug-report"}},[e._v("#")]),e._v(" Submitting a Bug Report")]),e._v(" "),o("p",[e._v("Use "),o("a",{attrs:{href:"http://jira.appcelerator.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JIRA"),o("OutboundLink")],1),e._v(" to search for existing issues or submit a bug report. Select 'Alloy' as the component when submitting a Titanium Community JIRA ticket and include the Alloy version as part of the environment information. To get the Alloy version, run the "),o("code",[e._v("alloy --version")]),e._v("command in a console.")]),e._v(" "),o("p",[e._v("Refer to "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/How_to_Report_a_Bug_or_Make_a_Feature_Request/"}},[e._v("How to Report a Bug or Make a Feature Request")]),e._v(" for more information.")],1)])}),[],!1,null,null,null);t.default=a.exports}}]);