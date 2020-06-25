(window.webpackJsonp=window.webpackJsonp||[]).push([[1345],{2149:function(e,t,a){"use strict";a.r(t);var r=a(21),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"rails-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rails-development"}},[e._v("#")]),e._v(" Rails Development")]),e._v(" "),a("h2",{attrs:{id:"rails-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rails-support"}},[e._v("#")]),e._v(" Rails Support")]),e._v(" "),a("p",[e._v("Studio is shipped with built-in support for Rails editing. This is additional support beyond that described in "),a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Ruby_Development/"}},[e._v("Ruby Development")]),e._v(", "),a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/HTML_Development/"}},[e._v("HTML Development")]),e._v(", "),a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/CSS_Development/"}},[e._v("CSS Development")]),e._v(", and "),a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/"}},[e._v("JavaScript Development")]),e._v(".")],1),e._v(" "),a("p",[e._v("It should be noted that Studio relies on developers to be familiar with the standard Rails command-line tools, generators, and tasks. RadRails used to provide UI view front-ends to the generators, servers, and so forth. In Studio, we embed a Terminal view and expect users to be familiar with Rails enough to be able to generate models, controllers, and so forth and run servers from the command line.")]),e._v(" "),a("p",[e._v("If you're unfamiliar with Rails development, a good starting place is "),a("a",{attrs:{href:"http://guides.rubyonrails.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://guides.rubyonrails.org/"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),a("p",[e._v("We expect that users already have their ruby, rails and gems installed to use our tooling. Ruby is pre-installed on Mac OS X, but it is recommended you upgrade the pre-installed Rails to the latest version.")]),e._v(" "),a("h4",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),a("p",[e._v("We highly recommend that users install Rails via "),a("a",{attrs:{href:"http://railsinstaller.org/en",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rails Installer"),a("OutboundLink")],1),e._v(". It will properly install a compatible PortableGit that works with our git support, as well as Ruby, Rails, and DevKit, so that native gem installation works properly.")]),e._v(" "),a("h3",{attrs:{id:"creating-importing-a-rails-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-importing-a-rails-project"}},[e._v("#")]),e._v(" Creating/Importing a Rails Project")]),e._v(" "),a("h4",{attrs:{id:"creating-a-project-using-the-new-project-wizard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-project-using-the-new-project-wizard"}},[e._v("#")]),e._v(" Creating a project using the new-project wizard")]),e._v(" "),a("p",[e._v("The Rails project wizard can be accessed through multiple locations in the workspace.\nA project can be created through the File->New->Rails Project, or by right-clicking the 'Project Explorer' or the 'App Explorer' and select New->Rails Project.")]),e._v(" "),a("table",{staticClass:"confluenceTable"},[a("thead",{staticClass:" "}),a("tfoot",{staticClass:" "}),a("tbody",{staticClass:" "},[a("tr",[a("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[a("p",[a("img",{staticClass:"confluence-embedded-image image-center",attrs:{src:"images/download/attachments/30083026/rails_project_wizard.png",alt:"images/download/attachments/30083026/rails_project_wizard.png"}})])])])])]),e._v(" "),a("h4",{attrs:{id:"importing-a-rails-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#importing-a-rails-project"}},[e._v("#")]),e._v(" Importing a Rails Project")]),e._v(" "),a("p",[e._v("To import a rails project (whether created inside the IDE previously or outside the IDE on the command line), you can use the Rails Project Wizard as outlined above - but point it at the existing rails project root. It will detect that files exist and will not run the rails generator over top of the existing files. You can also explicitly state that the generator not be run in case that detection fails.")]),e._v(" "),a("h3",{attrs:{id:"editing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#editing"}},[e._v("#")]),e._v(" Editing")]),e._v(" "),a("p",[e._v("In addition to our HTML/CSS/JS/Ruby support, we also support editing HTML.ERB/RHTML, HAML, SASS and YAML files.")]),e._v(" "),a("h3",{attrs:{id:"deprecated-views-servers-plugins-gems-generators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deprecated-views-servers-plugins-gems-generators"}},[e._v("#")]),e._v(" Deprecated Views - Servers, Plugins, Gems, Generators")]),e._v(" "),a("p",[e._v("RadRails 2.x used to provide UI front-ends to the generator, server, plugin, and gems for your project. Often this UI was difficult to keep working across multiple rails versions and tended to offer little advantage to just using the command line to achieve your goal.")]),e._v(" "),a("p",[e._v("If you strongly miss one of these views, please voice your request to bring it back in our bug tracker.")]),e._v(" "),a("p",[e._v("For Servers, you can launch a server via the command line or the gear menu of the App Explorer. To kill/stop the server, give the Terminal running the server process/command focus and then hit Ctrl+C.")]),e._v(" "),a("h2",{attrs:{id:"related-topics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-topics"}},[e._v("#")]),e._v(" Related Topics")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Rails_Development/RHTML_Editor/"}},[e._v("RHTML Editor")])],1)])])}),[],!1,null,null,null);t.default=i.exports}}]);