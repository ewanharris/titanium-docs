(window.webpackJsonp=window.webpackJsonp||[]).push([[1207],{2455:function(e,t,n){"use strict";n.r(t);var i=n(21),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"modifying-an-existing-ruble"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#modifying-an-existing-ruble"}},[e._v("#")]),e._v(" Modifying an existing Ruble")]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("If you want to extend the functionality of Studio, you can do so by creating a new Ruble or extending an existing one.")]),e._v(" "),n("h2",{attrs:{id:"modifying-an-existing-ruble-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#modifying-an-existing-ruble-2"}},[e._v("#")]),e._v(" Modifying an existing Ruble")]),e._v(" "),n("p",[e._v("The "),n("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Rubles/Ruble_Specification/"}},[e._v("Ruble Specification")]),e._v(" lists the complete mechanism for extending existing Rubles, but there are two main mechanisms.")],1),e._v(" "),n("h3",{attrs:{id:"edit-this-bundle"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#edit-this-bundle"}},[e._v("#")]),e._v(" Edit this bundle")]),e._v(" "),n("p",[e._v("You can edit an existing Ruble by cloning the existing version from Github and editing the files.")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Select "),n("strong",[e._v("Commands > "),n("em",[e._v("RubleName")]),e._v(" > Edit this bundle.")]),e._v("\nThe ruble is cloned from Github and imported as a project into your workspace.")])]),e._v(" "),n("li",[n("p",[e._v("At this point, you now have a complete copy of the Ruble to edit as you like. However, you won't get automatic updates if the remote content changes.")])])]),e._v(" "),n("p",[e._v("To update your Ruble, do one of the following:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Select "),n("strong",[e._v("Commands > Bundle Development > Update User Bundles.")])])]),e._v(" "),n("li",[n("p",[e._v("Right-click on the project folder in "),n("strong",[e._v("Project Explorer")]),e._v(" and select "),n("strong",[e._v("Team > Pull.")])])])]),e._v(" "),n("h3",{attrs:{id:"extend-an-existing-ruble"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#extend-an-existing-ruble"}},[e._v("#")]),e._v(" Extend an existing Ruble")]),e._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),n("p",[e._v("You need to reference the "),n("em",[e._v("name")]),e._v(" of the Ruble, not the display name (which may be what you see in Menu items). You can find out the ruble name by opening up the Bundles View and expanding the node relevant to the Ruble of interest. You'll want to use the folder name of the Ruble, "),n("em",[e._v("minus")]),e._v(' ".ruble"; in other words, "html.ruble" => "html".')])]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Create a folder named "),n("em",[e._v("rublename.ruble")]),e._v(" (replacing "),n("em",[e._v("rublename")]),e._v(" with the name you wish).")])]),e._v(" "),n("li",[n("p",[e._v("Add a bundle.rb file with the following content:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("require 'ruble'\n\nbundle \"XXX\" do |bundle|\n  bundle.display_name = 'YYY'\nend\n")])])])]),e._v(" "),n("li",[n("p",[e._v('Replace "XXX" with the name of the Ruble you are extending, and "YYY" with the display name.')])]),e._v(" "),n("li",[n("p",[e._v("Save and close ruble.rb.")])])]),e._v(" "),n("h2",{attrs:{id:"specific-overrides"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#specific-overrides"}},[e._v("#")]),e._v(" Specific overrides")]),e._v(" "),n("p",[e._v("Some examples of how you might override an existing item.")]),e._v(" "),n("h3",{attrs:{id:"overriding-an-existing-command"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overriding-an-existing-command"}},[e._v("#")]),e._v(" Overriding an existing command")]),e._v(" "),n("p",[e._v("This replaces a current command's implementation with the new implementation. We'll use the HTML plugin as an example here.")]),e._v(" "),n("ol",[n("li",[n("p",[e._v('Follow the instructions to "Extend an Existing Ruble":')]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Create a folder in a workspace project titled "),n("strong",[e._v("bundles/htmlextension.ruble.")])])]),e._v(" "),n("li",[n("p",[e._v("Create a "),n("strong",[e._v("bundle.rb")]),e._v(" file with the following content:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("require 'ruble'\n\nbundle \"html\" do |bundle|\n  bundle.display_name = 'HTML'\nend\n")])])])]),e._v(" "),n("li",[n("p",[e._v("Create a folder at "),n("strong",[e._v("bundles/htmlextension.ruble/commands.")])])]),e._v(" "),n("li",[n("p",[e._v("Create a file in the "),n("strong",[e._v("commands")]),e._v(" folder, which is a copy of an existing command; in other words, "),n("strong",[e._v("strip_html_tags.rb")]),e._v(".")])]),e._v(" "),n("li",[n("p",[e._v("Add new content to suit:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("require 'ruble'\n\ncommand 'Strip HTML Tags from Document / Selection' do |cmd|\n  cmd.scope = 'text.html'\n  cmd.output = :replace_selection\n  cmd.input = :selection, :document\n  cmd.invoke do |context|\n    CONSOLE.puts \"Testing...\"\n  end\nend\n")])])])]),e._v(" "),n("li",[n("p",[e._v("Modify the above code to suit.")])])])])]),e._v(" "),n("p",[e._v("Running the above command from the HTML menu should use your new implementation.")])])}),[],!1,null,null,null);t.default=a.exports}}]);