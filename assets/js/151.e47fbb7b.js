(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{1990:function(e,t,a){"use strict";a.r(t);var n=a(21),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"creating-a-new-snippet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-snippet"}},[e._v("#")]),e._v(" Creating a New Snippet")]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("Users can create new templates or modify existing snippets to allow easy creation of default content.")]),e._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),n("p",[e._v("We assume you've "),n("a",{attrs:{href:"#undefined"}},[e._v("created a new Ruble")]),e._v(" as a placeholder for the following content")])]),e._v(" "),n("h2",{attrs:{id:"creating-a-new-snippet-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-snippet-2"}},[e._v("#")]),e._v(" Creating a new snippet")]),e._v(" "),n("p",[e._v("Snippets are templates that show up in content assist and the Snippets View.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(520),alt:"Screen_shot_2011-04-13_at_3.08.29_AM"}})]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Open the existing bundle.rb file.")])]),e._v(" "),n("li",[n("p",[e._v("Add the following content to the bottom of the file:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('snippet "My Snippet" do |snip|\n  snip.trigger = "foo"\n  snip.expansion = "my_super_snippet"\nend\n')])])])]),e._v(" "),n("li",[n("p",[e._v("Save and close bundle.rb.")])])]),e._v(" "),n("p",[e._v('If you now open a new file (for example a .js file) and type "fo", you should see you snippet show up in the list. Selecting it will insert "my_super_snippet" into the document.')]),e._v(" "),n("p",[e._v('Instead, if you type "foo" + the Tab key, the phrase "my_super_snippet" will automatically be inserted.')]),e._v(" "),n("h3",{attrs:{id:"special-characters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#special-characters"}},[e._v("#")]),e._v(" Special Characters")]),e._v(" "),n("p",[e._v("Snippets, like other ruble elements, are written using ruby. As a result, you should familiarize yourself with ruby syntax as a base. Some characters have special meanings inside double-quoted strings: "),n("a",{attrs:{href:"http://ruby-for-beginners.rubymonstas.org/bonus/string_interpolation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://ruby-for-beginners.rubymonstas.org/bonus/string_interpolation.html"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("The basics are that ruby code surrounded with #{} is interpreted and inserted into the string. References to globals, for example, "),n("code",[e._v("$my_global")]),e._v(", will be interpreted even if not surrounded by #{}. You should escape $ like so:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('s.expansion = "\\\\$global = 123;"\n')])])]),n("p",[e._v("This will end up inserting "),n("code",[e._v('"$global = 123;"')]),e._v(", whereas if the dollar was not escaped, the $global reference would be interpreted (and would typically produce an empty string replacement).\nDollar signs are also significant in tab stops (see below). Backticks, `,` are used for executing shell commands (described below).")]),e._v(" "),n("h2",{attrs:{id:"executing-shell-commands"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#executing-shell-commands"}},[e._v("#")]),e._v(" Executing shell commands")]),e._v(" "),n("p",[e._v("You can use backticks to have shellcode executed when the snippet is inserted. The result from running the code gets inserted into the snippet, though with the last newline in the result removed (if present). So for example, to create a snippet that inserts a datestamp in an HTML comment, we can do:")]),e._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- File created on: `date` --\x3e")]),e._v("\n")])])]),n("p",[e._v("Inside shell code, the only character you need to escape is the backtick.")]),e._v(" "),n("h2",{attrs:{id:"adding-tab-stops"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adding-tab-stops"}},[e._v("#")]),e._v(" Adding tab stops")]),e._v(" "),n("p",[e._v("Tab stops allow you to modify a snippet once it has been inserted easily.")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Re-open bundle.rb")])]),e._v(" "),n("li",[n("p",[e._v("Add the following content to the bottom of the file:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('snippet "My Second Snippet" do |s|\n  s.trigger = "foo"\n  s.expansion = "${1:method_name}: function(${2:attribute}){}"\nend\n')])])])]),e._v(" "),n("li",[n("p",[e._v("The ${X:Y} indicates a tab stop. X indicates the order of the tab stop, and Y indicates the default content that will be placed there.")])]),e._v(" "),n("li",[n("p",[e._v("Save and close bundle.rb")])])]),e._v(" "),n("p",[e._v('Now attempt to complete the snippet as before. If you type "foo" + Tab, you will get a list showing the two snippets you\'ve created. Selecting the "My Second Snippet" will insert the snippet and allow you to tab through the two variables listed as $1 and $2 above, where you can replace the default content just by typing. Pressing Tab enough times will exit the snippet.')]),e._v(" "),n("h2",{attrs:{id:"mirroring"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mirroring"}},[e._v("#")]),e._v(" Mirroring")]),e._v(" "),n("p",[e._v("Mirroring means that you can have the same content appear to update in multiple places.")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Re-open bundle.rb.")])]),e._v(" "),n("li",[n("p",[e._v("Update the content to add a second $2 item:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('snippet "My Second Snippet" do |s|\n  s.trigger = "foo"\n  s.expansion = "${1:method_name}: function(${2:attribute}){${2:attribute}}"\nend\n')])])])]),e._v(" "),n("li",[n("p",[e._v("Repeating a tab stop means that the content will be mirrored. If you update the value of one tab stop, the other identically numbered one will also update simultaneously.")])]),e._v(" "),n("li",[n("p",[e._v("Save and close bundle.rb.")])])]),e._v(" "),n("p",[e._v("Attempt to complete the snippet as before. Note that when you start typing for tab stop #2, both items labeled #2 will update.")]),e._v(" "),n("h3",{attrs:{id:"restricting-the-scope-of-a-snippet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#restricting-the-scope-of-a-snippet"}},[e._v("#")]),e._v(" Restricting the scope of a snippet")]),e._v(" "),n("p",[e._v("Adding a scope means that the snippet will only show up in certain editors or languages")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Re-open bundle.rb.")])]),e._v(" "),n("li",[n("p",[e._v("Add this to the bottom of the file:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('snippet "My JavaScript Snippet 2" do |s|\n  s.trigger = "foo"\n  s.scope = "source.js"\n  s.expansion = "function($1) {};"\nend\n')])])])]),e._v(" "),n("li",[n("p",[e._v("Save and close bundle.rb.")])])]),e._v(" "),n("p",[e._v("Note that this snippet is now only available in JavaScript files. A list of scopes is available here: "),n("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Themes/Current_Theme_Scopes/"}},[e._v("Current Theme Scopes")])],1),e._v(" "),n("p",[e._v("The "),n("a",{attrs:{href:"#undefined"}},[e._v("Ruble Specification")]),e._v(" gives a complete discussion on the new Ruble scripting system in Studio.")]),e._v(" "),n("h3",{attrs:{id:"adding-a-snippet-to-a-menu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-snippet-to-a-menu"}},[e._v("#")]),e._v(" Adding a snippet to a menu")]),e._v(" "),n("p",[e._v("Adding a snippet to a menu is identical to adding a command. You add a menu entry with the same name as the snippet:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("require 'ruble'\n\nbundle do |bundle|\n  bundle.display_name = 'My Ruble'\n  bundle.menu 'My Ruble' do |menu|\n    menu.command 'My Snippet'\n  end\nend\n\nsnippet \"My Snippet\" do |snip|\n  snip.trigger = \"foo\"\n  snip.expansion = \"my_super_snippet\"\nend\n")])])]),n("h3",{attrs:{id:"adding-a-snippet-category"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-snippet-category"}},[e._v("#")]),e._v(" Adding a Snippet Category")]),e._v(" "),n("p",[e._v("Having categories allows snippets to be grouped with similar snippets, making it easier to find and discover snippets. To add a snippet category, create a snippet_category entry, and update any corresponding snippets to have the category:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('require \'ruble\'\n\nsnippet_category "my_category" do |category|\n  category.icon_path = "icons/my_category.png"\nend\n\nsnippet "My Snippet" do |snip|\n  snip.trigger = "foo"\n  snip.expansion = "my_categorized_snippet"\n  snip.category = "my_category"\nend\n')])])]),n("h3",{attrs:{id:"adding-additional-information-about-a-snippet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adding-additional-information-about-a-snippet"}},[e._v("#")]),e._v(" Adding additional information about a snippet")]),e._v(" "),n("p",[e._v("This provides context and discoverability of snippets. The Snippets View uses this information to group and filter snippets.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('require \'ruble\'\n\nsnippet "My create map Snippet" do |snip|\n  snip.trigger = "foo"\n  snip.expansion = "my_map_snippet"\n  snip.description = "Creates a map object and adds the following annotations: current location, paris, and ontario"\n  snip.tags = [\'UI\',\'map\',\'annotation\']\n  snip.category = "Maps and Annotations"\n  snip.icon_path = "icons/my_map_icon.png"\nend\n')])])])])}),[],!1,null,null,null);t.default=s.exports},520:function(e,t,a){e.exports=a.p+"assets/img/Screen_shot_2011-04-13_at_3.08.29_AM.0d90f2ea.png"}}]);