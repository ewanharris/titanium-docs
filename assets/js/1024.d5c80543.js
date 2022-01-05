(window.webpackJsonp=window.webpackJsonp||[]).push([[1024],{1920:function(e,t,o){"use strict";o.r(t);var i=o(21),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"reviewing-pull-requests"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#reviewing-pull-requests"}},[e._v("#")]),e._v(" Reviewing pull requests")]),e._v(" "),o("p",[e._v("An important way you can help move Titanium forward is to review the changes that others have submitted. Proper functional testing helps us merge changes more quickly and with more confidence.")]),e._v(" "),o("p",[e._v('This document describes the process you can follow to test any of the "NPM-installable" projects, including Alloy and the CLI. While you could test PRs for the Titanium SDK itself, that would also involve '),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Building_the_Titanium_SDK_From_Source/"}},[e._v("Building the Titanium SDK From Source")]),e._v(" which is covered elsewhere in the documentation.")],1),e._v(" "),o("h2",{attrs:{id:"one-time-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#one-time-setup"}},[e._v("#")]),e._v(" One-time setup:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Clone the project repo to a local directory. For example, for Alloy you would use "),o("code",[e._v("git clone https://github.com/appcelerator/alloy.git")]),e._v(" (you can't do this with your fork of the project)")])]),e._v(" "),o("li",[o("p",[e._v("In the resulting directory, open the "),o("strong",[e._v(".git/config")]),e._v(" file in your text editor.")])]),e._v(" "),o("li",[o("p",[e._v("Follow the instructions at "),o("a",{attrs:{href:"https://help.github.com/articles/checking-out-pull-requests-locally",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://help.github.com/articles/checking-out-pull-requests-locally"),o("OutboundLink")],1),e._v(" to modify your git configuration to support fetching pull requests")])])]),e._v(" "),o("p",[e._v("Checkout a PR")]),e._v(" "),o("p",[e._v("GitHub for Mac (or Windows) users, you'll see a button to check out the PR directly from the GitHub repo page. This will work only if you have write access to the repo. (You can check out "),o("a",{attrs:{href:"https://github.com/blog/1582-checking-out-pull-requests",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/blog/1582-checking-out-pull-requests"),o("OutboundLink")],1),e._v(" for more details.) Sorry, you're going to have to use the command-line for this:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Update your local repo with "),o("code",[e._v("git fetch origin")]),e._v(" (which will also fetch all the PRs).")])]),e._v(" "),o("li",[o("p",[e._v("Check out the specific PR using "),o("code",[e._v("git checkout pull/origin/999 -b 999")]),e._v(" where 999 is the PR number (the -b 999 creates a new local branch named after the PR)")])]),e._v(" "),o("li",[o("p",[e._v("Install from your local branch: ["),o("code",[e._v("sudo]``npm install -g .")]),e._v(" (with the dot at the end). You’re ready now to do your testing, etc.")])])]),e._v(" "),o("p",[e._v("Functional Review testing")]),e._v(" "),o("p",[e._v("Tickets should contain a description of what steps should be followed to review the changes. Alloy tickets, for example, should note a sample app (either attached to the PR or to the ticket). Run that app and confirm it displays the expected behavior.")]),e._v(" "),o("p",[e._v("Optionally, you could build one of your own projects with the PR version. This could uncover issues that might be missed by the simple test case app included on the ticket.")]),e._v(" "),o("p",[e._v("When you're done, add a comment on the ticket (preferred) or pull request. If all works fine, a simple \"FR passes\" comment will suffice. If there are errors or if the feature doesn't work as expected, please post detailed comments including any error messages")]),e._v(" "),o("p",[e._v("Post FR cleanup")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Install the release version again. E.g. ["),o("code",[e._v("sudo]``npm install -g alloy")])])]),e._v(" "),o("li",[o("p",[e._v("Switch to your master branch: "),o("code",[e._v("git checkout master")])])]),e._v(" "),o("li",[o("p",[e._v("Finally, force-delete your local PR branch: "),o("code",[e._v("git branch -D 999")]),e._v(" (this will destroy any changes you made to the files)")])])]),e._v(" "),o("p",[e._v("Alloy's jake app runner")]),e._v(" "),o("p",[e._v("Alloy includes the jake (JavaScript make) utility, which you can use this to run any of the PR test apps, as well as the sample/demo apps included in the repo. For example, from your local Alloy repo directory:")]),e._v(" "),o("p",[e._v("jake app:run dir=ALOY-1234 // to run the app in test/apps/testing/ALOY-1234\njake app:run dir=basics/simple // to run the test/apps/basics/simple demo app")]),e._v(" "),o("p",[e._v("// additional command-line options are:\nplatform=android   // to build for android,ios,mobileweb,blackberry\ntiversion=3.2.2.GA  // to build using a specific SDK version (must match tiapp.xml)(\ntisdk=<path_to_sdk>")]),e._v(" "),o("p",[e._v("// e.g.\njake app:run dir=ALOY-1234 platform=android tiversion=3.2.2.GA")]),e._v(" "),o("p",[e._v("The resulting app will be installed to your simulator/emulator under the name "),o("strong",[e._v("Harness")]),e._v(". You can import the Harness app into Studio to build for other platforms, install to device, etc. The Harness app is wiped with each jake app:run command.")])])}),[],!1,null,null,null);t.default=r.exports}}]);