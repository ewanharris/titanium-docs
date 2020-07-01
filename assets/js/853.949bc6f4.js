(window.webpackJsonp=window.webpackJsonp||[]).push([[853],{2070:function(e,t,n){"use strict";n.r(t);var o=n(21),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"print-editor-properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#print-editor-properties"}},[e._v("#")]),e._v(" Print Editor Properties")]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("In this recipe, we show how to create a simple Ruble command that prints out the properties of the current editor")]),e._v(" "),n("h2",{attrs:{id:"the-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-code"}},[e._v("#")]),e._v(" The Code")]),e._v(" "),n("p",[e._v("In the snippet below, we use the Ruby reflection method to print all the public methods available on the editor property of the context object")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("require 'ruble'\n\ncommand \"Print Editor Properties\" do |cmd|\n  cmd.output = :insert_as_text\n  cmd.invoke do |context|\n    CONSOLE.puts context.editor.public_methods(true).sort\n  end\nend\n")])])]),n("h2",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),n("p",[e._v("As an example of the above properties, you can try the following. In a blank CSS file, add the following content:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("body {\n  background: #000;\n}\n")])])]),n("p",[e._v('Select text "background", with the caret after the "d":')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('require \'ruble\'\n\ncommand "Print Editor Properties" do |cmd|\n  cmd.invoke do |context|\n    r = "\\nEditor properties:\\n"\n    r << "editor.caret_column                                               #{context.editor.caret_column}\\n"\n    r << "editor.caret_line                                                 #{context.editor.caret_line}\\n"\n    r << "editor.caret_offset                                               #{context.editor.caret_offset}\\n"\n    r << "editor.current_line                                               \'#{context.editor.current_line}\'\\n"\n    r << "editor.current_line.length                                        #{context.editor.current_line.length }\\n"\n    r << "editor.current_scope                                              #{context.editor.current_scope}\\n"\n    r << "editor.dirty?                                                     #{context.editor.dirty?}\\n"\n    r << "editor.line(caret_line)                                          \'#{context.editor.line(context.editor.caret_line)}\'\\n"\n    r << "editor.offset_at_line(caret_line)                                 #{context.editor.offset_at_line(context.editor.caret_line)}\\n"\n    r << "editor.line_information(caret_line)                               #{context.editor.line_information(context.editor.caret_line)}\\n"\n    r << "editor.scope_at_offset(caret_offset)                              #{context.editor.scope_at_offset(context.editor.caret_offset)}\\n"\n    r << "\\n\\nDocument properties:\\n"\n    r << "editor.document.get                                               \'#{context.editor.document.get}\'\\n"\n    r << "editor.document.char(1)                                           #{context.editor.document.char(1)}\\n"\n    r << "editor.document.content_type(caret_line)                          #{context.editor.document.content_type(context.editor.caret_line)}\\n"\n    r << "editor.document.get(1, 1)                                         #{context.editor.document.get(1, 1)}\\n"\n    r << "editor.document.legal_content_types                               #{context.editor.document.legal_content_types.sort.join(\',\')}\\n"\n    r << "editor.document.line_delimiter(caret_line)                        #{context.editor.document.line_delimiter(context.editor.caret_line)}\\n"\n    r << "editor.document.line_length(caret_line)                           #{context.editor.document.line_length(context.editor.caret_line)}\\n"\n    r << "editor.document.line_of_offset(caret_offset)                      #{context.editor.document.line_of_offset(context.editor.caret_offset)}\\n"\n    r << "editor.document.line_offset(caret_line)                           #{context.editor.document.line_offset(context.editor.caret_line)}\\n"\n    r << "editor.document.length                                            #{context.editor.document.length}\\n"\n    r << "editor.document.line_information(caret_line)                      #{context.editor.document.line_information(context.editor.caret_line)}\\n"\n    r << "editor.document.line_information_of_offset(caret_offset)          #{context.editor.document.line_information_of_offset(context.editor.caret_offset)}\\n"\n    r << "editor.document.number_of_lines                                   #{context.editor.document.number_of_lines}\\n"\n    r << "editor.document.number_of_lines(0,1)                              #{context.editor.document.number_of_lines(0,1)}\\n"\n    r << "editor.document.legal_line_delimiters                             #{context.editor.document.legal_line_delimiters.sort.join(\',\')}\\n"\n    r << "\\n\\nSelection properties:\\n"\n    r << "editor.selection.offset                                           #{context.editor.selection.offset}\\n"\n    r << "editor.selection.text                                             #{context.editor.selection.text}\\n"\n    r << "editor.selection.start_line                                       #{context.editor.selection.start_line}\\n"\n    r << "editor.selection.end_line                                         #{context.editor.selection.end_line}\\n"\n    CONSOLE.puts r\n  end\nend\n')])])]),n("p",[e._v("Results:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Editor properties:\neditor.caret_column                                               1\neditor.caret_line                                                 1\neditor.caret_offset                                               18\neditor.current_line                                               '  background: #000;'\neditor.current_line.length                                        18\neditor.current_scope                                              source.css meta.property-list.css meta.property-value.css punctuation.separator.key-value.css\neditor.dirty?                                                     true\neditor.line(caret_line)                                          '  background: #000;'\neditor.offset_at_line(caret_line)                                 7\neditor.line_information(caret_line)                               offset: 7, length: 18\neditor.scope_at_offset(caret_offset)                              source.css meta.property-list.css meta.property-value.css punctuation.separator.key-value.css\n\nDocument properties:\neditor.document.get                                               'body {\n  background: #000;\n}\n'\neditor.document.char(1)                                           111\neditor.document.content_type(caret_line)                          __dftl_partition_content_type\neditor.document.get(1, 1)                                         o\neditor.document.legal_content_types                               __css___dftl_partition_content_type,__css_multiline_comment,__css_string_double,__css_string_single\neditor.document.line_delimiter(caret_line)\n\neditor.document.line_length(caret_line)                           19\neditor.document.line_of_offset(caret_offset)                      1\neditor.document.line_offset(caret_line)                           7\neditor.document.length                                            28\neditor.document.line_information(caret_line)                      offset: 7, length: 18\neditor.document.line_information_of_offset(caret_offset)          offset: 7, length: 18\neditor.document.number_of_lines                                   4\neditor.document.number_of_lines(0,1)                              1\neditor.document.legal_line_delimiters\n,\n,\n\nSelection properties:\neditor.selection.offset                                           8\neditor.selection.text                                             background\neditor.selection.start_line                                       1\neditor.selection.end_line                                         1\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);