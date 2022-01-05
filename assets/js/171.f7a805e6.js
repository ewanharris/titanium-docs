(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{1841:function(t,a,e){"use strict";e.r(a);var i=e(21),o=Object(i.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"studio-5-1-0-changes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#studio-5-1-0-changes"}},[t._v("#")]),t._v(" Studio 5.1.0 Changes")]),t._v(" "),i("h2",{attrs:{id:"cannot-update-from-studio-5-0-0-to-studio-5-1-0"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#cannot-update-from-studio-5-0-0-to-studio-5-1-0"}},[t._v("#")]),t._v(" Cannot update from Studio 5.0.0 to Studio 5.1.0")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("With Appcelerator Studio 5.1.0 release, we have upgraded the Eclipse core from 4.4 to 4.7. This update brings a different directory structure to Studio for MacOS users.")])]),t._v(" "),i("li",[i("p",[t._v("Due to several internal changes, it is not possible to update from Studio 5.0.0 to 5.1.0. Users are advised to download and install a fresh copy of Studio 5.1.0 installer directly for both Windows and MacOS. Please review "),i("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Updating_Studio/Uninstalling_Studio/"}},[t._v("Uninstalling Studio")]),t._v(" for removing Studio (as necessary for your setup).")],1)]),t._v(" "),i("li",[i("p",[t._v("You are advised to use the existing workspace directory when launching Studio 5.1.0 to get your old studio projects")])])]),t._v(" "),i("h2",{attrs:{id:"noteworthy-changes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#noteworthy-changes"}},[t._v("#")]),t._v(" Noteworthy changes")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("Added support for Java 9 and 10")])]),t._v(" "),i("li",[i("p",[t._v("Upgraded Eclipse from 4.4 to 4.7")])]),t._v(" "),i("li",[i("p",[t._v("Upgraded GIT to 2.16.2")])]),t._v(" "),i("li",[i("p",[t._v("Added Windows 64-bit Studio builds (which requires 64-bit Java installers)")])]),t._v(" "),i("li",[i("p",[t._v("Studio installs Java 1.8.162 if there are not supported Java versions installed (by default)")])]),t._v(" "),i("li",[i("p",[t._v("Updated JRuby and Ruby to versions 9.1.16 and 2.5 respectively to be compatible with Java 9 (useful for loading templates like HTML, JSON, Ruby, and so)")])])]),t._v(" "),i("h2",{attrs:{id:"installers"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#installers"}},[t._v("#")]),t._v(" Installers")]),t._v(" "),i("h3",{attrs:{id:"for-macos"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#for-macos"}},[t._v("#")]),t._v(" For MacOS")]),t._v(" "),i("p",[i("img",{attrs:{src:e(620),alt:"studio_5.0_and_5.1"}})]),t._v(" "),i("p",[t._v("The Studio 5.1.0 installer creates "),i("strong",[t._v("AppceleratorStudio")]),t._v(" application launcher package under "),i("code",[t._v("/Applications")]),t._v(" directory. Previously, it used to be under "),i("code",[t._v("Appcelerator Studio")]),t._v(" directory.")]),t._v(" "),i("p",[t._v("To launch the studio 5.1.0, double click on the "),i("strong",[t._v("AppceleratorStudio")]),t._v(" package launcher file.")]),t._v(" "),i("p",[t._v("To view the contents of “AppceleratorStudio” file,")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("Right-click on "),i("strong",[t._v("AppceleratorStudio")]),t._v(".")])]),t._v(" "),i("li",[i("p",[t._v("Select "),i("strong",[t._v("Show Package Contents")]),t._v(".")])])]),t._v(" "),i("h4",{attrs:{id:"studio-configuration-file"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#studio-configuration-file"}},[t._v("#")]),t._v(" Studio configuration file")]),t._v(" "),i("p",[t._v("Studio configuration file ("),i("code",[t._v("AppceleratorStudio.ini")]),t._v(") is now located in "),i("code",[t._v("/Applications/AppceleratorStudio.app/Contents/Eclipse/AppceleratorStudio.ini")]),t._v(".")]),t._v(" "),i("h3",{attrs:{id:"windows"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),i("p",[t._v("The 64-bit Windows OS Studio 5.1.0 RC builds are not updated in the "),i("a",{attrs:{href:"http://preview.appcelerator.com/appc-studio/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Appcelerator Studio preview"),i("OutboundLink")],1),t._v(" page. You can download it directly from "),i("a",{attrs:{href:"https://s3.amazonaws.com/titanium-studio/5.1.0/Appcelerator_Studio-x64.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://s3.amazonaws.com/titanium-studio/5.1.0/Appcelerator_Studio-x64.exe"),i("OutboundLink")],1),t._v(".")]),t._v(" "),i("p",[t._v("The installer uses the same location as previous versions of Studio. There is no change in the folder structure for Windows.")]),t._v(" "),i("p",[t._v("By default, Studio is installed to "),i("code",[t._v("%USERPROFILE%\\AppData\\Roaming\\Appcelerator\\Appcelerator Studio\\")]),t._v(" folder.")]),t._v(" "),i("p",[t._v("With Studio 5.1.0, we introduce support for 64-bit Studio builds so that we can leverage the features of "),i("a",{attrs:{href:"https://www.oracle.com/java/java9.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 9"),i("OutboundLink")],1),t._v(".")]),t._v(" "),i("h2",{attrs:{id:"java-support-matrix"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#java-support-matrix"}},[t._v("#")]),t._v(" Java support matrix")]),t._v(" "),i("h3",{attrs:{id:"studio-5-0-0-and-earlier-installers"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#studio-5-0-0-and-earlier-installers"}},[t._v("#")]),t._v(" Studio 5.0.0 and earlier installers")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Studio 5.0.0 and earlier")]),t._v(" "),i("th",[t._v("Java Version")]),t._v(" "),i("th",[t._v("Status")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("Windows installer (32-bit)")]),t._v(" "),i("td",[t._v("Java 8 (32-bit)")]),t._v(" "),i("td",[t._v("Functional")])]),t._v(" "),i("tr",[i("td",[t._v("Windows installer (32-bit)")]),t._v(" "),i("td",[t._v("Java 8 (64-bit)")]),t._v(" "),i("td",[t._v("Not compatible")])]),t._v(" "),i("tr",[i("td",[t._v("MacOS installer (64-bit)")]),t._v(" "),i("td",[t._v("Java 8 (64-bit)")]),t._v(" "),i("td",[t._v("Functional")])])])]),t._v(" "),i("h3",{attrs:{id:"studio-5-1-0-installers"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#studio-5-1-0-installers"}},[t._v("#")]),t._v(" Studio 5.1.0+ installers")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Studio 5.1.0 installer")]),t._v(" "),i("th",[t._v("Java Version")]),t._v(" "),i("th",[t._v("Status")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("Windows installer (32-bit)")]),t._v(" "),i("td",[t._v("Java 8 (32-bit)")]),t._v(" "),i("td",[t._v("Functional")])]),t._v(" "),i("tr",[i("td",[t._v("Windows installer (32-bit)")]),t._v(" "),i("td",[t._v("Java 8 (64-bit)")]),t._v(" "),i("td",[t._v("Not compatible")])]),t._v(" "),i("tr",[i("td",[t._v("Windows installer (32-bit)")]),t._v(" "),i("td",[t._v("Java 9 (32-bit)")]),t._v(" "),i("td",[t._v("32-bit Java 9 is not available")])]),t._v(" "),i("tr",[i("td",[t._v("Windows installer (32-bit)")]),t._v(" "),i("td",[t._v("Java 9 (64-bit)")]),t._v(" "),i("td",[t._v("Incompatible (32-bit installer requires 32-bit Java)")])]),t._v(" "),i("tr",[i("td",[t._v("Windows installer (64-bit)")]),t._v(" "),i("td",[t._v("Java 8 (64-bit)")]),t._v(" "),i("td",[t._v("Functional")])]),t._v(" "),i("tr",[i("td",[t._v("Windows installer (64-bit)")]),t._v(" "),i("td",[t._v("Java 8 (32-bit)")]),t._v(" "),i("td",[t._v("Incompatible (64-bit installer requires 64-bit Java)")])]),t._v(" "),i("tr",[i("td",[t._v("Windows installer (64-bit)")]),t._v(" "),i("td",[t._v("Java 9 (64-bit)")]),t._v(" "),i("td",[t._v("Functional")])]),t._v(" "),i("tr",[i("td",[t._v("Windows installer (64-bit)")]),t._v(" "),i("td",[t._v("Java 9 (32-bit)")]),t._v(" "),i("td",[t._v("32-bit Java 9 is not available")])]),t._v(" "),i("tr",[i("td",[t._v("MacOS installer (64-bit)")]),t._v(" "),i("td",[t._v("Java 8 (64-bit)")]),t._v(" "),i("td",[t._v("Functional")])]),t._v(" "),i("tr",[i("td",[t._v("MacOS installer (64-bit)")]),t._v(" "),i("td",[t._v("Java 9 (64-bit)")]),t._v(" "),i("td",[t._v("Functional")])])])])])}),[],!1,null,null,null);a.default=o.exports},620:function(t,a,e){t.exports=e.p+"assets/img/studio_5.0_and_5.1.5aaaa239.png"}}]);