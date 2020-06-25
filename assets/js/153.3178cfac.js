(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{2431:function(e,t,n){"use strict";n.r(t);var o=n(21),p=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"adding-popup-windows-in-rubles"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adding-popup-windows-in-rubles"}},[e._v("#")]),e._v(" Adding Popup Windows in Rubles")]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("In this recipe, we show how a Ruble command can open a popup window for user input.")]),e._v(" "),o("h2",{attrs:{id:"opening-a-popup-window-to-select-from-a-list-of-elements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#opening-a-popup-window-to-select-from-a-list-of-elements"}},[e._v("#")]),e._v(" Opening a popup window to select from a list of elements")]),e._v(" "),o("p",[e._v("Here, we select from a list of projects and use the output of choice to insert different snippets to the editor.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('require \'ruble\'\n\ncommand "Copy Scope" do |cmd|\n  cmd.key_binding = "CONTROL+SHIFT+COMMAND+C"\n  cmd.input = :none\n  cmd.output = :insert_as_snippet\n  cmd.invoke {\n    choice = Ruble.choose("Projects:", ["project 1","project 2", "project 3"], :title => "Project Selector")\n    case choice\n    when 1\n      "snippet for project 1"\n    when 2\n      "snippet for project 2"\n    when 3\n      "snippet for project 3"\n    end\n  }\nend\n')])])]),o("p",[e._v("The popup will look like the following:")]),e._v(" "),o("p",[o("img",{attrs:{src:n(617),alt:"project_selection"}})]),e._v(" "),o("h2",{attrs:{id:"opening-a-popup-window-for-user-input"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#opening-a-popup-window-for-user-input"}},[e._v("#")]),e._v(" Opening a popup window for user input")]),e._v(" "),o("p",[e._v('Here, we open a pop window to prompt for user input, store the output into a local variable "name" and output it as a snippet.')]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('require \'ruble\'\n\ncommand "Copy Scope" do |cmd|\n  cmd.key_binding = "CONTROL+SHIFT+COMMAND+C"\n  cmd.input = :none\n  cmd.output = :insert_as_snippet\n  cmd.invoke {\n    name = Ruble::UI.request_string(\n    :title => "User Name",\n    :default => "guest",\n    :prompt => "Please insert user name:"\n    )\n  }\nend\n')])])]),o("p",[e._v("The popup will look like the following:")]),e._v(" "),o("p",[o("img",{attrs:{src:n(618),alt:"username_popup"}})])])}),[],!1,null,null,null);t.default=p.exports},617:function(e,t,n){e.exports=n.p+"assets/img/project_selection.0e531c13.png"},618:function(e,t,n){e.exports=n.p+"assets/img/username_popup.f6d09b4e.png"}}]);