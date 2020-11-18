(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1779:function(t,e,o){"use strict";o.r(e);var a=o(21),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"hello-titanium-app-tutorial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-titanium-app-tutorial"}},[t._v("#")]),t._v(" Hello Titanium App Tutorial")]),t._v(" "),a("p",[t._v("Now that you've installed Studio and at least one of the native platform SDKs, you're ready to create and run an application on a device or simulator.")]),t._v(" "),a("h2",{attrs:{id:"create-a-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-project"}},[t._v("#")]),t._v(" Create a project")]),t._v(" "),a("p",[t._v("The first step is to create a new Mobile App Project and select a starting template. The Titanium SDK supports two project types: Alloy and Classic. "),a("RouterLink",{attrs:{to:"/guide/Alloy_Framework/"}},[t._v("Alloy")]),t._v(" is an MVC framework that lets you develop applications in less time and with less code than is possible in a Classic project. In general, it's recommended you use Alloy for your projects.")],1),t._v(" "),a("p",[a("strong",[t._v("To create a new project:")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("In Studio, either:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Press "),a("strong",[t._v("⌘+N")]),t._v(" (Mac) or "),a("strong",[t._v("Ctrl+N")]),t._v(" (Windows) to open the project wizard dialog.")])]),t._v(" "),a("li",[a("p",[t._v("Or from the menu bar, select "),a("strong",[t._v("File")]),t._v(" > "),a("strong",[t._v("New")]),t._v(" > "),a("strong",[t._v("Mobile App Project")]),t._v(".")])])])]),t._v(" "),a("li",[a("p",[t._v("Select "),a("strong",[t._v("Mobile App Project")]),t._v(" as the wizard type and click "),a("strong",[t._v("Next")]),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:o(590),alt:"Studio-Select-a-wizard"}})])]),t._v(" "),a("li",[a("p",[t._v("On the "),a("strong",[t._v("Project Template")]),t._v(" page, select "),a("strong",[t._v("Default Alloy Project")]),t._v(" as the template type. Click "),a("strong",[t._v("Next")]),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:o(591),alt:"Studio-Project-Template"}})])]),t._v(" "),a("li",[a("p",[t._v("On the "),a("strong",[t._v("Project Location")]),t._v(" page, enter the following information:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("In the "),a("strong",[t._v("Project Name")]),t._v(" field, enter "),a("strong",[t._v("Hello")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("In the "),a("strong",[t._v("App ID")]),t._v(" field, enter "),a("strong",[t._v("com.example.hello")]),t._v(". This format is called reverse domain notation. You must use your own domain before publishing your application to market, but for testing purposes a temporary domain is fine.")])]),t._v(" "),a("li",[a("p",[t._v("Select one or more "),a("strong",[t._v("Deployment Targets")]),t._v(". By default, Studio selects all available targets platforms that you have installed.")])]),t._v(" "),a("li",[a("p",[t._v("Disable enable Axway Appcelerator Platform Services (defaults to enabled) as we won't use this service for this app.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(592),alt:"Studio-Project-Location"}})])])])]),t._v(" "),a("li",[a("p",[t._v("Click "),a("strong",[t._v("Finish")]),t._v(" to create the project. By default, the application's configuration file called "),a("code",[t._v("tiapp.xml")]),t._v(" opens up in the TiApp Editor. You can close that file.")])]),t._v(" "),a("li",[a("p",[t._v("In the "),a("strong",[t._v("Project Explorer")]),t._v(" view, open "),a("strong",[t._v("index.xml")]),t._v(" located in the "),a("strong",[t._v("app/views")]),t._v(" folder.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(593),alt:"Studio-Hello-Titanium"}})]),t._v(" "),a("p",[t._v("When developing an app in Alloy, you create your UI declaratively using XML elements that, during compilations, are mapped to standard Titanium SDK objects. For instance, the default Alloy template includes a "),a("code",[t._v("<Label>")]),t._v(" element that corresponds to a "),a("a",{attrs:{href:"#!/api/Titanium.UI.Label"}},[t._v("Label")]),t._v(" object.")])]),t._v(" "),a("li",[a("p",[t._v("In "),a("code",[t._v("index.xml")]),t._v(", change the text inside the "),a("code",[t._v("<Label>")]),t._v(" element from "),a("code",[t._v("Hello, World")]),t._v(" to "),a("code",[t._v("Hello, Titanium")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Save your changes. Now we're ready to run the application.")])])]),t._v(" "),a("h2",{attrs:{id:"running-the-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-the-application"}},[t._v("#")]),t._v(" Running the application")]),t._v(" "),a("p",[t._v("To run the application you select a target simulator, emulator, or device, and click "),a("strong",[t._v("Run")]),t._v(". The targets available for you to test with depends on which native SDKs you previously installed. For this example, it's assumed you've installed XCode and are targeting an iOS simulator. If you are targeting Android, select an appropriate simulator, emulator or device from the "),a("strong",[t._v("Target")]),t._v(" menu.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Select the project in Project Explorer.")])]),t._v(" "),a("li",[a("p",[t._v("Make sure "),a("strong",[t._v("Run")]),t._v(" is selected in the "),a("strong",[t._v("Launch Mode")]),t._v(" drop-down.")])]),t._v(" "),a("li",[a("p",[t._v("From the "),a("strong",[t._v("Target")]),t._v(" drop-down, select an iOS simulator.\n"),a("img",{attrs:{src:o(594),alt:"select_sim"}})])]),t._v(" "),a("li",[a("p",[t._v("Click "),a("strong",[t._v("Run")]),t._v(". Your application will compile and launch in the iOS Simulator. Click the "),a("strong",[t._v("Hello, Titanium")]),t._v(" label text. An alert dialog appears.\n"),a("img",{attrs:{src:o(595),alt:"sim_output_loaded"}}),t._v(" "),a("img",{attrs:{src:o(596),alt:"sim_output_alert"}})])])]),t._v(" "),a("p",[t._v("If you run into problems running your application, see "),a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Studio_Troubleshooting/"}},[t._v("Studio Troubleshooting")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=i.exports},590:function(t,e,o){t.exports=o.p+"assets/img/Studio-Select-a-wizard.a62edcfa.png"},591:function(t,e,o){t.exports=o.p+"assets/img/Studio-Project-Template.b2d7a37a.png"},592:function(t,e,o){t.exports=o.p+"assets/img/Studio-Project-Location.ed68dce0.png"},593:function(t,e,o){t.exports=o.p+"assets/img/Studio-Hello-Titanium.7133f5e0.png"},594:function(t,e,o){t.exports=o.p+"assets/img/select_sim.8c945e9c.png"},595:function(t,e,o){t.exports=o.p+"assets/img/sim_output_loaded.c8224b64.png"},596:function(t,e,o){t.exports=o.p+"assets/img/sim_output_alert.022d4503.png"}}]);