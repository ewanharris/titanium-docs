(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1737:function(t,e,a){"use strict";a.r(e);var s=a(21),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"creating-a-new-template"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-template"}},[t._v("#")]),t._v(" Creating a new template")]),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("p",[t._v("Users can create new templates or modify existing templates to allow easy creation of default content.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("💡 Hint")]),t._v(" "),s("p",[t._v("We assume you've "),s("a",{attrs:{href:"#undefined"}},[t._v("created a new Ruble")]),t._v(" as a placeholder for the following content.")])]),t._v(" "),s("h2",{attrs:{id:"creating-a-new-file-template"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-file-template"}},[t._v("#")]),t._v(" Creating a new file template")]),t._v(" "),s("p",[t._v("New file templates are templates that show up after a user has entered a file name and has clicked the "),s("strong",[t._v("Next")]),t._v(" button:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(542),alt:"Screen_shot_2011-04-05_at_8.56.37_AM"}})]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Open the existing bundle.rb file")])]),t._v(" "),s("li",[s("p",[t._v("Add the following content to the bottom of the file:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('template "Sample File Template" do |t|\n  t.filetype = "*.txt"\n  t.location = "templates/sample.txt"\nend\n')])])])]),t._v(" "),s("li",[s("p",[t._v('Replace the "sample" and "txt" values with values appropriate to your filetype.')])]),t._v(" "),s("li",[s("p",[t._v("Create a templates folder underneath the "),s("em",[t._v("rublename")]),t._v(".ruble folder.")])]),t._v(" "),s("li",[s("p",[t._v("Drop-in file sample.txt (or the specific file you have created).")])]),t._v(" "),s("li",[s("p",[t._v("Save and close bundle.rb.")])])]),t._v(" "),s("p",[t._v("If you now go to "),s("strong",[t._v("File > New > File...")]),t._v(" and create a file name of the appropriate extension above, you should see your template in the list.")]),t._v(" "),s("h2",{attrs:{id:"creating-a-new-project-template"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-project-template"}},[t._v("#")]),t._v(" Creating a new project template")]),t._v(" "),s("p",[t._v("New project templates are templates that show up after a user has entered a project name and has clicked the "),s("strong",[t._v("Next")]),t._v(" button:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(543),alt:"Screen_shot_2011-04-05_at_9.02.07_AM"}})]),t._v(" "),s("p",[t._v("You can create project templates that reference a local .zip file or retrieve content from the web.")]),t._v(" "),s("h3",{attrs:{id:"project-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-types"}},[t._v("#")]),t._v(" Project types")]),t._v(" "),s("p",[t._v('Project templates can be added to existing project wizards by the specification of the "type" element:')]),t._v(" "),s("table",{staticClass:"confluenceTable"},[s("thead",{staticClass:" "}),s("tfoot",{staticClass:" "}),s("tbody",{staticClass:" "},[s("tr",[s("td",{staticClass:"confluenceTh",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("Type")])]),s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("Project")])])]),s("tr",[s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("all")])]),s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("All project types")])])]),s("tr",[s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("ruby")])]),s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("Ruby projects")])])]),s("tr",[s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("php")])]),s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("PHP projects")])])]),s("tr",[s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("web")])]),s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("Web projects")])])]),s("tr",[s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("python")])]),s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("Python projects")])])]),s("tr",[s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("titanium_desktop")])]),s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("Titanium Desktop projects")])])]),s("tr",[s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("titanium_mobile")])]),s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("Titanium Mobile projects")])])])])]),t._v(" "),s("h3",{attrs:{id:"local-content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-content"}},[t._v("#")]),t._v(" Local content")]),t._v(" "),s("p",[t._v("If your content is hosted locally, you can reference a .zip file containing the files in question.")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Create a templates directory in the bundle and add a project_templates.rb file in the templates directory.")])]),t._v(" "),s("li",[s("p",[t._v("Add the following content to the project_templates.rb file:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('require \'ruble\'\n\nproject_template "Sample Project Template" do |t|\n  t.type = :web\n  t.location = "templates/sample_project.zip"\n  t.description = "A sample project template"\n  t.icon = "template.png" // Ideally a ruble-relative path to a 48x48px icon. Could also be a URL to a remote file\n  t.tags = [\'Titanium Classic\']\nend\n')])])])]),t._v(" "),s("li",[s("p",[t._v('Replace the template name, "web", and "sample_project.zip" values with values appropriate to your project.')])]),t._v(" "),s("li",[s("p",[t._v("Drop the file sample_project.zip in the templates folder.")])]),t._v(" "),s("li",[s("p",[t._v("Save and close project_templates.rb.")])])]),t._v(" "),s("p",[s("strong",[t._v("File > New > Project...")]),t._v(" and create a project of the appropriate type above; you should see your template in the list.")]),t._v(" "),s("h3",{attrs:{id:"remote-content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remote-content"}},[t._v("#")]),t._v(" Remote content")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),s("p",[t._v("Note that this does not yet work for Titanium projects. See bug "),s("a",{attrs:{href:"http://jira.appcelerator.org/browse/TISTUD-640",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://jira.appcelerator.org/browse/TISTUD-640"),s("OutboundLink")],1),t._v(" for status on that feature.")])]),t._v(" "),s("p",[t._v("If you instead have a project template hosted on a Git repo, you can reference that as well:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Create a templates directory in the bundle and add a project_templates.rb file in the templates directory.")])]),t._v(" "),s("li",[s("p",[t._v("Add the following content to the project_templates.rb file:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('require \'ruble\'\n\nproject_template "Sample Remote Project Template" do |t|\n  t.type = :web\n  t.location = "git://github.com/repo.git"\n  t.description = "Remote template. Requires network access."\n  t.icon = "template.png" // Ideally a ruble-relative path to a 48x48px icon. Could also be a URL to a remote file\n  t.tags = [\'Titanium Classic\']\nend\n')])])])]),t._v(" "),s("li",[s("p",[t._v('Replace the template name, "web", and "location" values with values appropriate to your project.')])]),t._v(" "),s("li",[s("p",[t._v("Save and close project_templates.rb.")])])]),t._v(" "),s("p",[s("strong",[t._v("File > New > Project...")]),t._v(" and create a project of the appropriate type above; you should see your template in the list.")]),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"#undefined"}},[t._v("Ruble Specification")]),t._v(" gives a complete discussion on the new Ruble scripting system in Studio.")]),t._v(" "),s("h3",{attrs:{id:"template-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#template-variables"}},[t._v("#")]),t._v(" Template variables")]),t._v(" "),s("p",[t._v("It's possible to add template-variables in the project's template files. Those variables will be substituted with the appropriate content as the project is created.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),s("p",[t._v('By default, variables are not replaced. If you need to turn this on, use "t.replace_parameters = true" in the project template definition to enable substitution')])]),t._v(" "),s("p",[t._v("The following variables are supported:")]),t._v(" "),s("table",{staticClass:"confluenceTable"},[s("thead",{staticClass:" "}),s("tfoot",{staticClass:" "}),s("tbody",{staticClass:" "},[s("tr",[s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("TM_NEW_FILE_BASENAME")])]),s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("The file name, without the file extension.")])])]),s("tr",[s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("TM_NEW_FILE")])]),s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("The absolute path to the current file.")])])]),s("tr",[s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("TM_NEW_FILE_DIRECTORY")])]),s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("The directory path for the current file.")])])]),s("tr",[s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("TM_PROJECTNAME")])]),s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("The name of the created project.")])])]),s("tr",[s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("TIME")])]),s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("The current time (in words).")])])]),s("tr",[s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("YEAR")])]),s("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[s("p",[t._v("The current year.")])])])])]),t._v(" "),s("p",[t._v("Variables should be inserted inside a ${} blocks into your code. For example:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Project name is ${TM_PROJECTNAME}.\n")])])])])}),[],!1,null,null,null);e.default=o.exports},542:function(t,e,a){t.exports=a.p+"assets/img/Screen_shot_2011-04-05_at_8.56.37_AM.d10d3bac.png"},543:function(t,e,a){t.exports=a.p+"assets/img/Screen_shot_2011-04-05_at_9.02.07_AM.d9aaa099.png"}}]);