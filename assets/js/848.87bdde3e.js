(window.webpackJsonp=window.webpackJsonp||[]).push([[848],{1997:function(e,t,a){"use strict";a.r(t);var o=a(21),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"errors-while-updating"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#errors-while-updating"}},[e._v("#")]),e._v(" Errors While Updating")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Studio is built on top of the Eclipse update mechanism. While quite reliable, it can occasionally spit out a few strange errors. Here are some hints for solving an issues you may encounter while updating.")]),e._v(" "),a("h2",{attrs:{id:"updating-studio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-studio"}},[e._v("#")]),e._v(" Updating Studio")]),e._v(" "),a("p",[e._v('These are errors that occur when starting Studio and you see a pop-up yellow toast indicating "Updates Available" or you manually choose "Check for Updates" in the Help menu.')]),e._v(" "),a("h3",{attrs:{id:"no-updates-were-found"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-updates-were-found"}},[e._v("#")]),e._v(" No updates were found")]),e._v(" "),a("p",[e._v('If there is a new version of Studio available but your current Studio shows "No updates were found" when you select '),a("strong",[e._v("Help > Check for Titanium Updates")]),e._v(" or "),a("strong",[e._v("Help > Check for Appcelerator Updates")]),e._v(", you could try the following:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Open the Studio "),a("strong",[e._v("Preferences")]),e._v(" dialog and navigate to "),a("strong",[e._v("Install/Update > Available Software Sites")]),e._v(' and make sure the appropriate "Release Updates" entry is checked and enabled for what you want to install.')])]),e._v(" "),a("li",[a("p",[e._v("Select the entry and click "),a("strong",[e._v("Reload")]),e._v(" to make sure it returns success.")])]),e._v(" "),a("li",[a("p",[e._v("Try "),a("strong",[e._v("Help > Check for Titanium Updates")]),e._v(" or "),a("strong",[e._v("Help > Check for Appcelerator Updates")]),e._v(" again.")])])]),e._v(" "),a("p",[e._v("Prior to Release 3.2.0, to check for update, select "),a("strong",[e._v("Help > Check for Updates")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"conflicting-dependency"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conflicting-dependency"}},[e._v("#")]),e._v(" Conflicting dependency")]),e._v(" "),a("p",[e._v('If Studio failed to update due to a "Cannot complete the install because of a conflicting dependency" error, try running Studio with elevated privileges, i.e. as Administrator on Windows or using sudo on *nix system, and then update again.')]),e._v(" "),a("p",[e._v("For more details on the issue, please see "),a("a",{attrs:{href:"https://bugs.eclipse.org/bugs/show_bug.cgi?id=322477",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://bugs.eclipse.org/bugs/show_bug.cgi?id=322477"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("It can also happen in a few other circumstances:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("If you have the standalone version installed and are trying to update using the plugin update URL.")])]),e._v(" "),a("li",[a("p",[e._v("If you have the plugin version installed and are trying to update using the standalone update URL.")])]),e._v(" "),a("li",[a("p",[e._v("If you previously installed PyDev and are trying to install Studio over the top of that.")])])]),e._v(" "),a("p",[e._v("In the first two cases, check your URL. In the last case, uninstall PyDev and install studio instead. It includes PyDev.")]),e._v(" "),a("h3",{attrs:{id:"error-while-loading-manipulator-or-error-locating-companion-launcher-jar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-while-loading-manipulator-or-error-locating-companion-launcher-jar"}},[e._v("#")]),e._v(" Error while loading manipulator or Error locating companion launcher jar")]),e._v(" "),a("p",[e._v("There is an error with your .ini file.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Follow the instructions "),a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Adding_Command-Line_Options/"}},[e._v("here")]),e._v(" for adding a launcher argument.")],1)]),e._v(" "),a("li",[a("p",[e._v("Replace the following lines at the top of the file (we are replacing the 1.1.0 version with the 1.1.1 version):")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("-startup\n../../../plugins/org.eclipse.equinox.launcher_1.1.1.R36x_v20101122_1400.jar")])]),e._v(" "),a("p",[e._v("Make sure that plugin exists in your plugins directory. If a different version exists, you may need to change the above line.")])]),e._v(" "),a("li",[a("p",[e._v("Save and restart.")])])]),e._v(" "),a("h3",{attrs:{id:"an-error-occurred-while-collecting-items-to-be-installed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#an-error-occurred-while-collecting-items-to-be-installed"}},[e._v("#")]),e._v(" An error occurred while collecting items to be installed")]),e._v(" "),a("p",[e._v("If an update fails with an error similar to the following:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("An error occurred while collecting items to be installed\nsession context was:(profile=AppceleratorProfile, phase=org.eclipse.equinox.internal.p2.engine.phases.Collect, operand=, action=).\nNo repository found containing\n")])])]),a("p",[e._v("There are a few possibilities:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Studio is having difficulties reaching the remote server. This can happen if there are network issues or you are on an intermittent connection.")])]),e._v(" "),a("li",[a("p",[e._v('Studio has incorrectly cached some metadata from the update site. Follow the instructions above for "No updates were found"')])]),e._v(" "),a("li",[a("p",[e._v('Start updating from a different branch to the one that has failed, by switching the values in "Available Software Sites" (i.e. if on stable, update from nightly). Then stop the download before it completes, restore the initial software sites settings, and try updating from the desired site again.')])])]),e._v(" "),a("h3",{attrs:{id:"no-update-urls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-update-urls"}},[e._v("#")]),e._v(" No Update URLs")]),e._v(" "),a("p",[e._v("If you should happen to find your update list without any URLs, you can re-enter them as below:")]),e._v(" "),a("h4",{attrs:{id:"titanium-studio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-studio"}},[e._v("#")]),e._v(" Titanium Studio")]),e._v(" "),a("ul",[a("li",[e._v("Standalone version: "),a("a",{attrs:{href:"http://download.appcelerator.com/appcelerator/studio/standalone/update/stable/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://download.appcelerator.com/appcelerator/studio/standalone/update/stable/"),a("OutboundLink")],1)])]),e._v(" "),a("h4",{attrs:{id:"aptana-studio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aptana-studio"}},[e._v("#")]),e._v(" Aptana Studio")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Eclipse plug-in version: "),a("a",{attrs:{href:"http://download.aptana.com/studio3/plugin/update/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://download.aptana.com/studio3/plugin/update/"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("Standalone version: "),a("a",{attrs:{href:"http://download.aptana.com/studio3-rcp/plugin/update/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://download.aptana.com/studio3-rcp/plugin/update/"),a("OutboundLink")],1)])])]),e._v(" "),a("h2",{attrs:{id:"updating-titanium-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-titanium-components"}},[e._v("#")]),e._v(" Updating Titanium Components")]),e._v(" "),a("p",[e._v('These are errors that occur when starting Studio and you see a pop-up yellow toast indicating "SDK Updates Available" or you manually choose '),a("strong",[e._v("Check for Titanium Updates")]),e._v(" or "),a("strong",[e._v("Check for Appcelerator Updates")]),e._v(" in the "),a("strong",[e._v("Help")]),e._v(" menu.")]),e._v(" "),a("h3",{attrs:{id:"unable-to-update-to-a-released-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unable-to-update-to-a-released-version"}},[e._v("#")]),e._v(" Unable to update to a released version")]),e._v(" "),a("p",[e._v("It may be that the update server is not serving the appropriate list of available files to you. To check:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Open a web browser")])]),e._v(" "),a("li",[a("p",[e._v("Paste in the url "),a("a",{attrs:{href:"https://api.appcelerator.net/p/v2/release-list?name=mobilesdk&v=",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://api.appcelerator.net/p/v2/release-list?name=mobilesdk&v="),a("OutboundLink")],1),a("code",[e._v("<version>")]),e._v("&limit=5&os="),a("code",[e._v("<os>")]),e._v(", substituting your operating system value, and version of "),a("strong",[e._v("Studio")]),e._v("with only the first three version specifiers")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("<os>")]),e._v(": osx, win32")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("<version>")]),e._v(": 2.0.1.2012042345 => 2.0.1")])])])]),e._v(" "),a("li",[a("p",[e._v("An example might be: "),a("a",{attrs:{href:"https://api.appcelerator.net/p/v2/release-list?name=mobilesdk&v=2.0.0&limit=5&os=osx",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://api.appcelerator.net/p/v2/release-list?name=mobilesdk&v=2.0.0&limit=5&os=osx"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("You should see a list of releases")])])]),e._v(" "),a("p",[e._v("If the release you expect is not in not in that list:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("If it is, but Studio does not see it, first try restarting Studio.")])]),e._v(" "),a("li",[a("p",[e._v("Studio will only automatically download the "),a("em",[e._v("latest")]),e._v(" release in that list. If the one you want is not the first item, you'll need to download it manually.")])]),e._v(" "),a("li",[a("p",[e._v("If it is the latest item, and Studio still does not see it, "),a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Studio_Troubleshooting/Accessing_the_Log_File/"}},[e._v("check the log file")]),e._v(" for information on how to find that file and file a bug.")],1)]),e._v(" "),a("li",[a("p",[e._v("If there is (or isn't) something in the log file "),a("a",{attrs:{href:"http://jira.appcelerator.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("file a bug"),a("OutboundLink")],1),e._v(".")])])]),e._v(" "),a("h3",{attrs:{id:"prompted-repeatedly-to-install-the-same-npm-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prompted-repeatedly-to-install-the-same-npm-package"}},[e._v("#")]),e._v(" Prompted repeatedly to install the same NPM package")]),e._v(" "),a("p",[e._v("If you previously installed the non-GA versions of the NPM packages, you need to first uninstall these components before installing or updating.")]),e._v(" "),a("p",[e._v("To check the current versions run the following commands:")]),e._v(" "),a("p",[a("code",[e._v("npm list -g titanium")]),e._v("npm list -g alloy")]),e._v(" "),a("p",[e._v("If either package has a version number ending in "),a("code",[e._v("-alpha")]),e._v(", "),a("code",[e._v("-beta")]),e._v(", or "),a("code",[e._v("-cr")]),e._v(", you should uninstall the package manually. To uninstall these packages:")]),e._v(" "),a("p",[a("code",[e._v("npm remove -g titanium npm remove -g alloy")])]),e._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),a("p",[e._v("You may need to use "),a("code",[e._v("sudo")]),e._v(" before these terminal commands on OSX.")])]),e._v(" "),a("p",[e._v("You will be prompted to install these components when you restart Studio or to manually check for updates, from the "),a("strong",[e._v("Help")]),e._v(" menu, select "),a("strong",[e._v("Check for Titanium Updates")]),e._v(" or "),a("strong",[e._v("Check for Appcelerator Updates")]),e._v(".")]),e._v(" "),a("p",[e._v("If you should run into any issues, run "),a("code",[e._v("npm cache clean")]),e._v(" and then retry the steps above.")]),e._v(" "),a("p",[e._v("If Studio prompts you to install the same Node.js packages (CLI, ACS, Alloy, etc.), despite the fact that they appear to install successfully each time, Studio may be checking a different installation path than the one you have designated to install your NPM packages. To resolve this issue, add the environment variable NPM_CONFIG_PREFIX. For example, on Mac OS X, add the following to your Bash profile ("),a("code",[e._v("~/.bash_profile")]),e._v("):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export NPM_CONFIG_PREFIX = <PATH_TO_NPM>\n")])])]),a("p",[e._v("For Windows, follow the directions from "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Software_Locations_and_Environment_Variables/#configuring-environment-variables-on-windows"}},[e._v("Configuring Environment Variables on Windows")]),e._v(" to add the environment variable.")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);