(window.webpackJsonp=window.webpackJsonp||[]).push([[858],{2078:function(e,t,_){"use strict";_.r(t);var r=_(21),v=Object(r.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"ruble-environment-variables"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ruble-environment-variables"}},[e._v("#")]),e._v(" Ruble environment variables")]),e._v(" "),_("h2",{attrs:{id:"overview"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),_("p",[e._v("Rubles can reference environment variables during execution, and developers can contribute new environment variables as well.")]),e._v(" "),_("h2",{attrs:{id:"referencing-an-environment-variable"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#referencing-an-environment-variable"}},[e._v("#")]),e._v(" Referencing an environment variable")]),e._v(" "),_("p",[e._v("Environment variables are available through a hash. There are two methods of accessing them, depending on how they are used in the Ruby code:")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("In statements: "),_("code",[e._v("filepath.sub(ENV['TM_PROJECT_DIRECTORY'], '') : File.basename(filepath)")])])]),e._v(" "),_("li",[_("p",[e._v("Inside strings: "),_("code",[e._v("rspec_merb_gem = (Dir[\"#{ENV['TM_PROJECT_DIRECTORY']}/gems/gems/rspec*\"].first || ''))")])])])]),e._v(" "),_("p",[e._v("Note the usage of "),_("code",[e._v("#ENV['keyname']")]),e._v(" inside strings.")]),e._v(" "),_("h2",{attrs:{id:"setting-an-environment-variable"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#setting-an-environment-variable"}},[e._v("#")]),e._v(" Setting an environment variable")]),e._v(" "),_("p",[e._v("You can also set variables into the same hash:")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("In Ruby code: "),_("code",[e._v("ENV['TM_DATE'] = Time.now.strftime(\"%Y-%m-%d\")")])])]),e._v(" "),_("li",[_("p",[e._v("Example:")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v('template "XXX Template" do |t|\n  t.filetype = "*.xxx"\n  t.invoke do |context|\n    ENV[\'TM_DATE\'] = Time.now.strftime("%Y-%m-%d")\n    raw_contents = IO.read("#{File.dirname(ENV[\'TM_BUNDLE_SUPPORT\'])}/templates/yyy.xxx")\n    raw_contents.gsub(/\\$\\{([Creating a new template^}]*)\\}/) {|match| ENV[match[2..-2]] }\n  end\nend\n')])])])])]),e._v(" "),_("h2",{attrs:{id:"textmate-environment-variables"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#textmate-environment-variables"}},[e._v("#")]),e._v(" TextMate Environment Variables")]),e._v(" "),_("h3",{attrs:{id:"current-editor"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#current-editor"}},[e._v("#")]),e._v(" Current Editor")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[e._v("Variable")]),e._v(" "),_("th",[e._v("Description")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[e._v("TM_BUNDLE_PATH")]),e._v(" "),_("td",[e._v("Absolute path to the root of the ruble directory.")])]),e._v(" "),_("tr",[_("td",[e._v("TM_BUNDLE_SUPPORT")]),e._v(" "),_("td",[e._v("Absolute path to the lib sub-dir of the ruble.")])]),e._v(" "),_("tr",[_("td",[e._v("TM_CARET_LINE_NUMBER")]),e._v(" "),_("td",[e._v("The line number where the caret is in the active editor (1-based).")])]),e._v(" "),_("tr",[_("td",[e._v("TM_CARET_LINE_TEXT")]),e._v(" "),_("td",[e._v("Text of the line where the caret is in the active editor.")])]),e._v(" "),_("tr",[_("td",[e._v("TM_CARET_OFFSET")]),e._v(" "),_("td",[e._v("Offset of the caret in the active editor from the beginning of the file (0-based).")])]),e._v(" "),_("tr",[_("td",[e._v("TM_COLUMN_NUMBER")]),e._v(" "),_("td",[e._v("caret_column + 1")])]),e._v(" "),_("tr",[_("td",[e._v("TM_COMMENT_END")]),e._v(" "),_("td",[e._v("end characters used when wrapping comment, for example, '*/' - may not exist for pair because there's only start characters (for example, // or #).")])]),e._v(" "),_("tr",[_("td",[e._v("TM_COMMENT_START")]),e._v(" "),_("td",[e._v("start characters used when wrapping comment, i.e. '// ', '# ', '/*'.")])]),e._v(" "),_("tr",[_("td",[e._v("TM_CURRENT_LINE")]),e._v(" "),_("td",[e._v("Text of the current line in the active editor.")])]),e._v(" "),_("tr",[_("td",[e._v("TM_DIRECTORY")]),e._v(" "),_("td",[e._v("The absolute path of the parent directory of the file in the active editor.")])]),e._v(" "),_("tr",[_("td",[e._v("TM_EMAIL")]),e._v(" "),_("td",[e._v("The email address of the current user.")])]),e._v(" "),_("tr",[_("td",[e._v("TM_FILENAME")]),e._v(" "),_("td",[e._v("Just the filename (basename) of the file in the active editor.")])]),e._v(" "),_("tr",[_("td",[e._v("TM_FILEPATH")]),e._v(" "),_("td",[e._v("The absolute path of the file in the active editor.")])]),e._v(" "),_("tr",[_("td",[e._v("TM_FULLNAME")]),e._v(" "),_("td",[e._v("Full name of the current user.")])]),e._v(" "),_("tr",[_("td",[e._v("TM_INPUT_START_COLUMN")]),e._v(" "),_("td",[e._v("Offset inside the line, from the beginning of a line (1-based).")])]),e._v(" "),_("tr",[_("td",[e._v("TM_INPUT_START_LINE")]),e._v(" "),_("td",[e._v("TM_SELECTION_START_LINE_NUMBER")])]),e._v(" "),_("tr",[_("td",[e._v("TM_INPUT_START_LINE_INDEX")]),e._v(" "),_("td",[e._v("Offset inside the line, from the beginning of of a line (0-based).")])]),e._v(" "),_("tr",[_("td",[e._v("TM_LINE_INDEX")]),e._v(" "),_("td",[e._v("Offset inside the line, from the beginning of a line (0-based).")])]),e._v(" "),_("tr",[_("td",[e._v("TM_LINE_NUMBER")]),e._v(" "),_("td",[e._v("The line number where the selection begins in the active editor (lines are 1-based).")])]),e._v(" "),_("tr",[_("td",[e._v("TM_NEW_FILE")]),e._v(" "),_("td",[e._v("Absolute path to the new file.")])]),e._v(" "),_("tr",[_("td",[e._v("TM_NEW_FILE_BASENAME")]),e._v(" "),_("td",[e._v("The basename of the new file.")])]),e._v(" "),_("tr",[_("td",[e._v("TM_NEW_FILE_DIRECTORY")]),e._v(" "),_("td",[e._v("The directory containing the new file.")])]),e._v(" "),_("tr",[_("td",[e._v("TM_RUBY")]),e._v(" "),_("td",[e._v("Override pointer to ruby executable to use.")])]),e._v(" "),_("tr",[_("td",[e._v("TM_SELECTED_FILE")]),e._v(" "),_("td",[e._v("The absolute path of the file in the active editor.")])]),e._v(" "),_("tr",[_("td",[e._v("TM_SELECTED_TEXT")]),e._v(" "),_("td",[e._v("actual text selected in the active editor.")])]),e._v(" "),_("tr",[_("td",[e._v("TM_SELECTION_END_LINE_NUMBER")]),e._v(" "),_("td",[e._v("The line number where selection ends in the active editor (lines are 1-based).")])]),e._v(" "),_("tr",[_("td",[e._v("TM_SELECTION_LENGTH")]),e._v(" "),_("td",[e._v("Length of selected text in the active editor.")])]),e._v(" "),_("tr",[_("td",[e._v("TM_SELECTION_OFFSET")]),e._v(" "),_("td",[e._v("Offset of the beginning of the selection inside the active editor (from the beginning of the file, 0-based).")])]),e._v(" "),_("tr",[_("td",[e._v("TM_SELECTION_START_LINE_NUMBER")]),e._v(" "),_("td",[e._v("The line number where the selection begins in the active editor (lines are 1-based).")])]),e._v(" "),_("tr",[_("td",[e._v("TM_SOFT_TABS")]),e._v(" "),_("td",[e._v('"YES" = use spaces for tabs, "NO" = use tab character')])]),e._v(" "),_("tr",[_("td",[e._v("TM_TAB_SIZE")]),e._v(" "),_("td",[e._v("number of spaces to represent a tab/indent level, typically 4, 2 for ruby code.")])]),e._v(" "),_("tr",[_("td",[e._v("USER")]),e._v(" "),_("td",[e._v("The short name for the current user, for example, 'cwilliams'.")])])])])])}),[],!1,null,null,null);t.default=v.exports}}]);