(window.webpackJsonp=window.webpackJsonp||[]).push([[1364],{2110:function(e,r,t){"use strict";t.r(r);var o=t(21),a=Object(o.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"studio-release-notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#studio-release-notes"}},[e._v("#")]),e._v(" Studio Release Notes")]),e._v(" "),t("p",[e._v("Studio 4.5.0 is a minor release that includes new features, improvements, and bug fixes. See the "),t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7991?filter=17280",target:"_blank",rel:"noopener noreferrer"}},[e._v("full list of issues address in Release 4.5.0"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("As of this release, Studio 4.4.x will not be supported six months from 4.5.0.GA's release date. See "),t("RouterLink",{attrs:{to:"/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/"}},[e._v("Axway Appcelerator Deprecation Policy")]),e._v(" and "),t("RouterLink",{attrs:{to:"/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes"}},[e._v("Nominal Lifetimes")]),e._v(" documents for details.")],1),e._v(" "),t("h2",{attrs:{id:"new-features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-features"}},[e._v("#")]),e._v(" New Features")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Studio allows drag-and-drop CLI created projects (native, Arrow, and Module) into Appcelerator Studio Project Explorer.")])]),e._v(" "),t("li",[t("p",[e._v("Studio now has a defined range of compatible CLI versions. If the CLI or Studio doesn't fall within the defined range of one another, the user will be prompted to update either Studio or the CLI accordingly.")])]),e._v(" "),t("li",[t("p",[e._v("When a user logs in or out of Studio, the user will be reminded that they are in trial period. This is shown only for Developer Trial/free Plans.")])])]),e._v(" "),t("h2",{attrs:{id:"improvements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#improvements"}},[e._v("#")]),e._v(" Improvements")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Studio now creates swift based watchOS2 projects with SDK 5.2 and higher.")])]),e._v(" "),t("li",[t("p",[e._v("Improved startup performance by loading organizations in the background")])]),e._v(" "),t("li",[t("p",[e._v("During Studio updates, Studio will verify the minimum required Node.js version is set to at least 0.12.7. If the minimum version is not found, a wizard will launch and help you to install the necessary version.")])]),e._v(" "),t("li",[t("p",[e._v("When creating a new Alloy project, only the "),t("code",[e._v("appc new")]),e._v(" call happens instead of calling that command plus "),t("code",[e._v("appc alloy new")])])]),e._v(" "),t("li",[t("p",[e._v("For new workspaces, the console's output is no longer limited to 200,000 characters. Existing workspaces can set a new limit by clicking on "),t("strong",[e._v("Window")]),e._v(" > "),t("strong",[e._v("Preferences")]),e._v(" > "),t("strong",[e._v("Run/Debug")]),e._v(" > "),t("strong",[e._v("Console")]),e._v('. There will a checkbox called "'),t("strong",[e._v("Limit console output")]),e._v('" and a textfield where you can enter the buffer size (up to 1,000,000 characters).')])]),e._v(" "),t("li",[t("p",[e._v("You can now abort Appcelerator CLI installs or upgrades via an alert window")])]),e._v(" "),t("li",[t("p",[e._v("As Appc studio doesn't support JDK 1.8, during the installation phase if studio couldn't find JDK 1.7 in the system, it will install JDK 1.7 even though it has JDK 1.8.")])]),e._v(" "),t("li",[t("p",[e._v("Instead of failing a Windows build, the user is now prompted for a GUID")])]),e._v(" "),t("li",[t("p",[e._v("Previously bad installs of Appcelerator CLI no longer prevents future updates from failing")])])]),e._v(" "),t("h2",{attrs:{id:"fixed-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-issues"}},[e._v("#")]),e._v(" Fixed Issues")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7991",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7991"),t("OutboundLink")],1),e._v(" - Creating an Arrow project with invalid characters in studio does not show any warning message")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7982",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7982"),t("OutboundLink")],1),e._v(" - Windows: Studio should validate the value for Windows Publisher ID before accepting it")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7974",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7974"),t("OutboundLink")],1),e._v(" - Org name is hidden below the users email")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7971",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7971"),t("OutboundLink")],1),e._v(" - Unable to publish arrow app")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7961",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7961"),t("OutboundLink")],1),e._v(" - Avoid force update if studio doesn't find required cli information in the sdk-info.json file")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7956",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7956"),t("OutboundLink")],1),e._v(" - Studio does not recognise orgs with CLI 5.2.0")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7916",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7916"),t("OutboundLink")],1),e._v(" - Can't login to Jira via Appcelerator Studio if username has space")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7911",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7911"),t("OutboundLink")],1),e._v(" - Remove multiple wizard pages for configuring provisioning profiles")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7900",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7900"),t("OutboundLink")],1),e._v(" - Invalid proxyServer set after launching Studio")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7899",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7899"),t("OutboundLink")],1),e._v(" - Remove hardcoded node version 4.2.1 from studio")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7883",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7883"),t("OutboundLink")],1),e._v(" - Install Titanium SDK - List of SDK's empty")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7879",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7879"),t("OutboundLink")],1),e._v(" - JIRA ticket creation will fail from studio if we select the severity to 'None'")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7871",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7871"),t("OutboundLink")],1),e._v(" - When you update Studio, the admin dialog to enter admin password appears")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7822",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7822"),t("OutboundLink")],1),e._v(" - Studio freezes for a while when we open a tiapp.xml file where the project org does not belong to the current logged in user")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7783",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7783"),t("OutboundLink")],1),e._v(" - When you create new project, the App Id field and URL field are in the reverse order")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7769",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7769"),t("OutboundLink")],1),e._v(' - On Login splash screen "Remember my Email Address" label foreground color looks black on windows and white on mac os')])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7741",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7741"),t("OutboundLink")],1),e._v(' - Add prominent display of "what you like/what can be better" to solicit feedback')])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7740",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7740"),t("OutboundLink")],1),e._v(' - Unable to submit a JIRA ticket via Studio as "versions" is not defined')])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7715",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7715"),t("OutboundLink")],1),e._v(" - TiApp Editor doesn't update when you change "),t("extensions")],1)]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7713",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7713"),t("OutboundLink")],1),e._v(" - TiApp: Using the "),t("windows",[e._v(" tag in tiapp.xml shows an invalid content error")])],1)]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7639",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7639"),t("OutboundLink")],1),e._v(' - Clicking on the "Arrow Builder" link in the release notes take you to http://www.appcelerator.com/product/')])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7637",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7637"),t("OutboundLink")],1),e._v(" - Liveview: --liveview flag is not passed to the CLI when building for Windows Platform")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7604",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7604"),t("OutboundLink")],1),e._v(" - Missing Windows Store Certificate in Preferences dialog")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7552",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7552"),t("OutboundLink")],1),e._v(" - Importing an existing Alloy (non-Studio) project does not add Alloy nature")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7538",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7538"),t("OutboundLink")],1),e._v(" - Default URL for tiapp.xml valid in wizard but invalid in editor")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7508",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7508"),t("OutboundLink")],1),e._v(" - When unpublishing an Arrow application, the toast notification displays the app name prefixed with 'P/'")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7484",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7484"),t("OutboundLink")],1),e._v(' - Dashboard in offline mode:Clicking refresh button from dashboard launches another browser with name"Web Browser"')])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7149",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-7149"),t("OutboundLink")],1),e._v(" - Windows: Cryptic error message in tiapp.xml editor that needs to be reworded")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-6755",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-6755"),t("OutboundLink")],1),e._v(" - Appcelerator Studio: Run configurations display incorrectly")])])])])}),[],!1,null,null,null);r.default=a.exports}}]);