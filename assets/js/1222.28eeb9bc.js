(window.webpackJsonp=window.webpackJsonp||[]).push([[1222],{2430:function(e,t,n){"use strict";n.r(t);var a=n(21),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"executing-an-external-command"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#executing-an-external-command"}},[e._v("#")]),e._v(" Executing an External Command")]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("In this recipe, we show how a Ruble command can call an external tool.")]),e._v(" "),n("h2",{attrs:{id:"calling-an-external-application-and-displaying-the-results"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#calling-an-external-application-and-displaying-the-results"}},[e._v("#")]),e._v(" Calling an external application and displaying the results")]),e._v(" "),n("p",[e._v('In this simplest example, we execute the "ls" application in the "\\Users\\username" directory and print the results to the console. We may execute these two different ways, which we discuss here:')]),e._v(" "),n("h3",{attrs:{id:"single-line-approach"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#single-line-approach"}},[e._v("#")]),e._v(" Single-line approach")]),e._v(" "),n("p",[e._v("The approach below is useful if executing a simple command and not adding additional information or performing manipulation on the results")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("require 'ruble'\n\ncommand 'List Files' do |cmd|\n  cmd.output = :output_to_console\n  cmd.working_directory = \"\\Users\\username\"\n  cmd.invoke = \"ls\"\nend\n")])])]),n("h3",{attrs:{id:"blocks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#blocks"}},[e._v("#")]),e._v(" Blocks")]),e._v(" "),n("p",[e._v("Executing the command invocation in a block allows us to do more complicated manipulation of the input and output. Also note that we use Ruby backticks (`) to run the ls application in this context (as if we are passing the command directly to the shell), but that the working directory option used above does not work in this situation...it needs to be part of the command itself.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("require 'ruble'\n\ncommand 'List Files' do |cmd|\n  cmd.output = :output_to_console\n  cmd.invoke do |context|\n    `ls /Users/username`\n  end\nend\n")])])]),n("h2",{attrs:{id:"passing-the-current-contents-of-the-editor-to-an-external-application"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#passing-the-current-contents-of-the-editor-to-an-external-application"}},[e._v("#")]),e._v(" Passing the current contents of the editor to an external application")]),e._v(" "),n("p",[e._v("Often it is useful to select something in the editor and call an external tool based on that value. "),n("strong",[e._v("cmd.output")]),e._v(" can take a variety of options. Some of the most common are:")]),e._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("ul",[n("li",[n("p",[n("strong",[e._v(":selection:")]),e._v(" selected text in the editor")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v(":line:")]),e._v(" the line containing the caret")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v(":document:")]),e._v(" the entire current document")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("📋")]),e._v(" the contents of the clipboard")])])])]),e._v(" "),n("h3",{attrs:{id:"using-the-selection-in-the-executed-command"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-the-selection-in-the-executed-command"}},[e._v("#")]),e._v(" Using the selection in the executed command")]),e._v(" "),n("p",[e._v("Here we take the current selection in the editor and echo it to the console.")]),e._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),n("p",[e._v("When using backticks, you need to assign the value of an environment variable to a temporary variable, and use that in the command.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("require 'ruble'\n\ncommand 'List Files' do |cmd|\n  cmd.output = :output_to_console\n  cmd.input = :selection\n  cmd.invoke do |context|\n    selection = ENV['TM_SELECTED_TEXT']\n    `echo \"#{selection}\"`\n  end\nend\n")])])]),n("h3",{attrs:{id:"referencing-stdin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#referencing-stdin"}},[e._v("#")]),e._v(" Referencing STDIN")]),e._v(" "),n("p",[e._v('Here, we take the current selection in the editor and pipe it to the standard command "cat", printing the results to the console:')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("require 'ruble'\n\ncommand 'Output input' do |cmd|\n  cmd.output = :output_to_console\n  cmd.input = :selection\n  cmd.invoke do |context|\n    cmd_line = \"cat\"\n    IO.popen(cmd_line, 'r+') do |io|\n      io << ENV['TM_SELECTED_TEXT']\n      io.close_write\n      io.read\n    end\n  end\nend\n")])])]),n("h2",{attrs:{id:"running-different-commands-per-os"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#running-different-commands-per-os"}},[e._v("#")]),e._v(" Running different commands per OS")]),e._v(" "),n("p",[e._v("We can specify different commands to be run per-platform, and also mix the single-line and block methods for command invocation:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('# general form, used if no platform specific form is provided\ncommand.invoke = "ls"\ncommand.invoke.windows = "dir /s"\ncommand.invoke.linux do |context|\n `ls`\nend\n')])])]),n("h2",{attrs:{id:"running-a-bash-script"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#running-a-bash-script"}},[e._v("#")]),e._v(" Running a bash script")]),e._v(" "),n("p",[e._v("For advanced usage, you can even include an entire bash script as part of a command.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("require 'ruble'\n\ncommand 'Echo selection' do |cmd|\n  cmd.output = :output_to_console\n  cmd.input = :selection\n  cmd.invoke =<<-EOF\n#!/bin/bash\nselection=${TM_SELECTED_TEXT}\necho \"$selection\"\nEOF\nend\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);