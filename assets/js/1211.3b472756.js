(window.webpackJsonp=window.webpackJsonp||[]).push([[1211],{2449:function(e,t,n){"use strict";n.r(t);var s=n(21),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"document-class"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#document-class"}},[e._v("#")]),e._v(" Document Class")]),e._v(" "),n("p",[e._v("The Document class contains methods and properties for interacting with the current document inside Studio.")]),e._v(" "),n("h2",{attrs:{id:"usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),n("p",[e._v("Examples of how you might interact with methods of the document class. Note that the document object is usually accessed off the editor object.")]),e._v(" "),n("h3",{attrs:{id:"instance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#instance"}},[e._v("#")]),e._v(" Instance:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("doc = context.editor.document.get\n")])])]),n("h2",{attrs:{id:"document-methods"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#document-methods"}},[e._v("#")]),e._v(" Document Methods")]),e._v(" "),n("p",[e._v("Document objects have the following properties and methods.")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Property")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[n("code",[e._v("get")])]),e._v(" "),n("td",[e._v("Text of the document.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("char(offset)")])]),e._v(" "),n("td",[e._v("A character at the specified offset.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("content_type(line)")])]),e._v(" "),n("td",[e._v("Content-type at the specified line.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("get(offset, length)")])]),e._v(" "),n("td",[e._v("Text of the document using the specified offset and length.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("legal_content_types")])]),e._v(" "),n("td",[e._v("Legal content types within the document.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("line_delimiter(line)")])]),e._v(" "),n("td",[e._v("The line delimiter which ends the specified line.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("line_length(line)")])]),e._v(" "),n("td",[e._v("Length of the specified line.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("line_of_offset(offset)")])]),e._v(" "),n("td",[e._v("Line # containing this offset.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("line_offset(line)")])]),e._v(" "),n("td",[e._v("Offset in the document at which this line begins.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("length")])]),e._v(" "),n("td",[e._v("Length of the document in characters.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("line_information(line)")])]),e._v(" "),n("td",[e._v("Offset of the line in the document, and length of the line.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("line_information_of_offset(offset)")])]),e._v(" "),n("td",[e._v("Same as above, but based on the specified offset.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("number_of_lines")])]),e._v(" "),n("td",[e._v("The total number of lines in the document.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("number_of_lines(offset, length)")])]),e._v(" "),n("td",[e._v("The number of lines contained with the specified offset and length.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("legal_line_delimiters")])]),e._v(" "),n("td",[e._v("Legal line delimiters used in the document. Usually, you use legal_line_delimiters[0].")])])])]),e._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),n("h3",{attrs:{id:"inserting-a-newline-based-on-the-current-document-settings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inserting-a-newline-based-on-the-current-document-settings"}},[e._v("#")]),e._v(" Inserting a newline, based on the current document settings")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("require 'ruble'\n\ncommand \"Insert Newline\" do |cmd|\n  cmd.output = :insert_as_text\n  cmd.invoke do |context|\n    return context.editor.document.legal_line_delimiters[0]\n  end\nend\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);