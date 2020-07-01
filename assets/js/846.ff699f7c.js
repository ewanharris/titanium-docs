(window.webpackJsonp=window.webpackJsonp||[]).push([[846],{2055:function(t,e,o){"use strict";o.r(e);var r=o(21),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"ui-class"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ui-class"}},[t._v("#")]),t._v(" UI Class")]),t._v(" "),o("p",[t._v("The UI class contains methods for interacting with the user interface inside Studio.")]),t._v(" "),o("h2",{attrs:{id:"usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),o("p",[t._v("Examples of how you might interact with methods of the UI class.")]),t._v(" "),o("h3",{attrs:{id:"singleton"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#singleton"}},[t._v("#")]),t._v(" Singleton:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("require 'ruble/ui'\n\nRuble::UI.alert(:info, 'Title', 'Message') # opens an info dialog box with title\n")])])]),o("h2",{attrs:{id:"ui-methods"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ui-methods"}},[t._v("#")]),t._v(" UI Methods")]),t._v(" "),o("p",[t._v("The UI class has the following singleton methods:")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Method")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("alert(style, title, message, *buttons)")])]),t._v(" "),o("td",[t._v("Opens a dialog box. Style can be one of :warning, :error or :info buttons is an array of string labels for the buttons the of which user can choose. The first entry is the default button (what will be chosen if user hits Enter). The return value is the label of the chosen button.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("menu(options = [])")])]),t._v(" "),o("td",[t._v("Pop up a menu on screen.  "),o("br"),t._v("Options may be an Array of Strings, or an Array of Hashes:"),o("br"),o("br"),t._v("1. If it's an Array of Hashes, it's expected that each Hash will contain:"),o("br"),t._v(" "),o("br"),t._v("2. 'display' => String - entry to show in menu"),o("br"),t._v(" "),o("br"),t._v("3. 'image' = > String - image to show alongside the entry"),o("br"),t._v(" "),o("br"),t._v("4. 'insert' => String - a snippet to insert when the entry is chosen"),o("br"),t._v(" "),o("br"),t._v("5. 'tool_tip' => String - tooltip to display for menu entry")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("simple_notification(options = {})")])]),t._v(" "),o("td",[t._v('Opens an info dialog box with an "OK" button. Pass in :title, :summary in options hash to set those values on the opened dialog. like calling alert(:info, options[:title], options[:summary], "OK").')])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("request_item(:title => '', :prompt => '', :button1 => '', :button2 => '')")])]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[o("code",[t._v("request_color(hex_string = nil)")])]),t._v(" "),o("td",[t._v("Show the system color picker and return a hex-format color (#RRGGBB) string with the chosen color.  "),o("br"),t._v("If the input string is a recognizable hex string, the default color (in the opened color picker) will be set to it.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("request_confirmation(options = {")]),t._v("}")]),t._v(" "),o("td",[t._v("Post a confirmation alert. Returns true if the first button is chosen, false otherwise.  "),o("br"),t._v("Possible options:"),o("br"),o("br"),t._v("* :button1 => String - label of the default button"),o("br"),t._v(" "),o("br"),t._v("* :button2 => String - label of the secondary button"),o("br"),t._v(" "),o("br"),t._v("* :title => String - Title of the dialog"),o("br"),t._v(" "),o("br"),t._v("* :prompt => String - message in the dialog")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("request_string(options)")])]),t._v(" "),o("td",[t._v('Opens a dialog box with a text field input. Returns the user input as a string if they choose "OK".  '),o("br"),t._v("Possible Options:"),o("br"),o("br"),t._v("* :title => String - title of the dialog."),o("br"),t._v(" "),o("br"),t._v("* :prompt => String - message added to dialog"),o("br"),t._v(" "),o("br"),t._v('* :button1 => String - label of the confirm button, defaults to "OK"'),o("br"),t._v(" "),o("br"),t._v('* :button2 => String - label of the cancel button. defaults to "Cancel".')])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("request_secure_string(options = {})")])]),t._v(" "),o("td",[t._v("Opens a password dialog. See request_string.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("tool_tip(content, options = {})")])]),t._v(" "),o("td",[t._v("Show Tooltip using the current cursor location. Content is shown as bold text at the top of the tooltip.  "),o("br"),t._v("Possible options:"),o("br"),o("br"),t._v("* :balloon => true - pop up a balloon style tooltip"),o("br"),t._v(" "),o("br"),t._v("* :icon => :error, :info, or :warning. add an image icon in upper left of tooltip. Only used with balloon tooltips."),o("br"),t._v(" "),o("br"),t._v("* :message => String, an optional explanatory string that is shown below content.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("request_file(options = {})")])]),t._v(" "),o("td",[t._v("Show a standard open file dialog. Returns the full path of the file/dir as a string.  "),o("br"),t._v("Possible Options:"),o("br"),o("br"),t._v("* :only_directories => true - limit to directory selection. If not present or false, it will be limited to only file selection"),o("br"),t._v(" "),o("br"),t._v("* :default => String - message added to dialog if selecting directories"),o("br"),t._v(" "),o("br"),t._v("* :title => String - title of dialog"),o("br"),t._v(" "),o("br"),t._v("* :directory => String - opening directory path for dialog")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("request_files(options = {})")])]),t._v(" "),o("td",[t._v("Show a standard open file dialog, allowing multiple selections. See request_file.")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);