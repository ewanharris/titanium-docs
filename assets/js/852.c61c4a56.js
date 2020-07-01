(window.webpackJsonp=window.webpackJsonp||[]).push([[852],{2069:function(e,t,n){"use strict";n.r(t);var r=n(21),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"opening-a-browser"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#opening-a-browser"}},[e._v("#")]),e._v(" Opening a Browser")]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("In this recipe, we show how a Ruble command can open a web browser and perform queries.")]),e._v(" "),n("h2",{attrs:{id:"opening-a-browser-using-the-current-selection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#opening-a-browser-using-the-current-selection"}},[e._v("#")]),e._v(" Opening a browser using the current selection")]),e._v(" "),n("p",[e._v("Here we take the currently selected text and perform a search on Google.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("require 'ruble'\n\ncommand 'Search in Google' do |cmd|\n  cmd.output = :output_to_console\n  cmd.input = :selection\n  cmd.invoke do |context|\n    selection = ENV['TM_SELECTED_TEXT']\n    context.browser.open(\"http://www.google.com/#q=\"+selection, :browser => :default)\n  end\nend\n")])])]),n("h2",{attrs:{id:"previewing-the-current-document-in-the-internal-browser"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#previewing-the-current-document-in-the-internal-browser"}},[e._v("#")]),e._v(" Previewing the current document in the internal browser")]),e._v(" "),n("p",[e._v("This example takes the text from STDIN, wraps it into a temporary HTML page, and previews that in the internal browser. This could also preview a selection, or some other snippet of text if cmd.input were changed to another value.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("require 'ruble'\n\ncommand 'Preview in Internal Browser' do |cmd|\n  cmd.output = :show_as_html\n  cmd.input = :document\n  cmd.invoke {|context| STDIN.read }\nend\n")])])]),n("h2",{attrs:{id:"previewing-an-external-url-in-the-internal-browser"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#previewing-an-external-url-in-the-internal-browser"}},[e._v("#")]),e._v(" Previewing an external URL in the internal browser")]),e._v(" "),n("p",[e._v("We take the current selection and use a redirect to point the internal browser to a remote site.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("require 'ruble'\ncommand 'Search in Google' do |cmd|\n  cmd.output = :show_as_html\n  cmd.input = :selection\n  cmd.invoke do |context|\n    url = \"http://www.google.com/#q=\"+ENV['TM_SELECTED_TEXT']\n    \"<meta http-equiv='Refresh' content='0;URL=#{url}'>\"\n  end\nend\n")])])]),n("h2",{attrs:{id:"previewing-a-document-in-the-external-browser"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#previewing-a-document-in-the-external-browser"}},[e._v("#")]),e._v(" Previewing a document in the external browser")]),e._v(" "),n("p",[e._v("We use the TM_FILEPATH environment variable to get the current path to the file.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("require 'ruble'\n\ncommand 'Open Document in Default Browser' do |cmd|\n  cmd.output = :discard\n  cmd.input = :none\n  cmd.invoke do |context|\n    require 'uri'\n    url = \"file:#{URI.escape(ENV['TM_FILEPATH'])}\"\n    context.browser.open(url, :browser => :default)\n  end\nend\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);