(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{2326:function(e,t,o){"use strict";o.r(t);var r=o(21),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"errors-building-titanium-projects"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#errors-building-titanium-projects"}},[e._v("#")]),e._v(" Errors Building Titanium Projects")]),e._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("p",[e._v("Errors while building a Titanium project are usually due to configuration issues. The most common problems and possible solutions are posted here.")]),e._v(" "),r("h2",{attrs:{id:"run-debug-icons-are-greyed-out"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#run-debug-icons-are-greyed-out"}},[e._v("#")]),e._v(" Run/Debug icons are greyed out")]),e._v(" "),r("p",[e._v("This occurs when a project isn't recognized as a Titanium project. You can check whether the project has the correct type by looking at the project folder in the "),r("strong",[e._v("Navigator")]),e._v(" or "),r("strong",[e._v("Project Explorer")]),e._v(' view. If the type is set correctly, the folder should have an "M" icon (for Mobile) or a "D" icon (for Desktop). If the icon is missing, the project type is set incorrectly.')]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Follow the steps in "),r("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Basic_Concepts/Working_with_Projects/Changing_Your_Project_Type/"}},[e._v("Changing Your Project Type")]),e._v(", choosing the settings for Titanium Mobile or Titanium Desktop.")],1)]),e._v(" "),r("li",[r("p",[e._v("After changing the project type, you may need to restart Studio.")])])]),e._v(" "),r("h2",{attrs:{id:"build-error-in-console-output"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#build-error-in-console-output"}},[e._v("#")]),e._v(" Build error in console output")]),e._v(" "),r("p",[e._v("Sometimes your project fails to build, but it's not clear if it's an issue with Studio, or perhaps there is a bug in the SDK. To isolate this problem, you can try building from the command line using the exact same parameters as Studio.")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Open the Studio "),r("strong",[e._v("Preferences")]),e._v(" dialog and navigate to "),r("strong",[e._v("Studio > Troubleshooting")]),e._v(".")]),e._v(" "),r("ol",[r("li",[r("p",[e._v('Push the slider all the way to the right to "All"')])]),e._v(" "),r("li",[r("p",[e._v('Check on "debug specific components"')])]),e._v(" "),r("li",[r("p",[e._v('Check on "com.aptana.core/debug/shell"')])])])]),e._v(" "),r("li",[r("p",[e._v("Save and exit the preference menu")])]),e._v(" "),r("li",[r("p",[e._v("Re-run the build. View the Studio log file ("),r("strong",[e._v("Help > Studio > View Log file")]),e._v(")")])]),e._v(" "),r("li",[r("p",[e._v("You should see an entry like:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('!ENTRY com.aptana.core 1 0 2011-10-26 06:54:16.525\n!MESSAGE (Build 3.0.4.qualifier) [INFO] com.aptana.core/debug/shell Running process:\nProcess: "/usr/bin/python" "/Library/Application Support/Titanium/mobilesdk/osx/1.7.2/iphone/builder.py" "simulator" "4.3" "/Users/ingo/Documents/Aptana Studio 3 Workspace/testmobil" "com.app" "testmobil" "universal" "iphone" ""\nWorking directory: null\nEnvironment: null\n')])])])]),e._v(" "),r("li",[r("p",[e._v("Open a terminal window and paste in the first line (the whole line, starting with the reference to Python), as shown below:")]),e._v(" "),r("p",[r("img",{attrs:{src:o(638),alt:"Screen_Shot_2011-10-26_at_6.57.37_AM"}})])])]),e._v(" "),r("p",[e._v("Does the process give the same error?")]),e._v(" "),r("h2",{attrs:{id:"build-error-no-such-file-or-directory"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#build-error-no-such-file-or-directory"}},[e._v("#")]),e._v(" Build error: No such file or directory")]),e._v(" "),r("p",[e._v("This can be caused by a few different issues:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("You are running an incompatible version of XCode. Upgrade to the latest version.")])]),e._v(" "),r("li",[r("p",[e._v("You have not correctly installed the Java JDK.")])])]),e._v(" "),r("h2",{attrs:{id:"install-error-install-failed-missing-shared-library"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#install-error-install-failed-missing-shared-library"}},[e._v("#")]),e._v(" Install Error: INSTALL_FAILED_MISSING_SHARED_LIBRARY")]),e._v(" "),r("p",[e._v("When launching an Android application on the emulator, you may run into the following error:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[ERROR] Failed installing com.appcelerator.titanium:   pkg: /data/local/tmp/app.apk\nFailure [INSTALL_FAILED_MISSING_SHARED_LIBRARY]\n")])])]),r("p",[e._v("There are a few possible fixes.")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Check that your launch configuration uses the "),r("em",[e._v("'Google APIs'")]),e._v(" Android version (e.g. 'Google APIs Android 2.2').")])]),e._v(" "),r("li",[r("p",[e._v("Kill the emulator ("),r("em",[e._v("adb")]),e._v(") process, and relaunch the application through your launch-configurations.")])])]),e._v(" "),r("h2",{attrs:{id:"xcode-not-installed"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#xcode-not-installed"}},[e._v("#")]),e._v(" Xcode not installed")]),e._v(" "),r("p",[e._v("Studio reports that Xcode is not installed, even though you believe it is. This appears to be caused by a bad install of Xcode. Uninstalling and reinstalling Xcode has fixed the issue in every case so far.")]),e._v(" "),r("p",[e._v("You can double check the install location of Xcode by typing the following in Terminal:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("xcode-select -print-path\n")])])]),r("p",[e._v("Which should print something like '/Developer'")]),e._v(" "),r("h2",{attrs:{id:"the-directory-contains-2-projects"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-directory-contains-2-projects"}},[e._v("#")]),e._v(" The directory ... contains 2 projects")]),e._v(" "),r("p",[e._v("This can happen when renaming an application. To fix this, delete the contents of "),r("strong",[e._v("build/iphone")]),e._v(" and re-build.")])])}),[],!1,null,null,null);t.default=i.exports},638:function(e,t,o){e.exports=o.p+"assets/img/Screen_Shot_2011-10-26_at_6.57.37_AM.e49da860.png"}}]);