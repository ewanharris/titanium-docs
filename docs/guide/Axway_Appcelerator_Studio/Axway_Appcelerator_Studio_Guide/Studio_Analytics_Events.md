---
title: Studio Analytics Events
weight: '60'
---

# Studio Analytics Events

## GDPR statement

With the enactment of European Union's General Data Protection Regulation (GDPR), we've updated our Privacy Policy and the way Axway collects and processes personal information. We welcome this change and understand the importance of data privacy as a human right. We are taking this opportunity to strengthen our global practices, expanding our robust data privacy practices, and will continue to support data privacy compliance.

For more information, please refer to Axway's **[Privacy compliance program](https://www.axway.com/gdpr)**.

You can contact the Axway Data Protection Office by sending an email to **[privacy@axway.com](#!/guide/mailto:privacy@axway.com)**. If you'd like to contact us in writing, see the following list of addresses that best applies to your location:

* USA: Axway Inc, 6811 E. Mayo Blvd, 4th Floor, Phoenix, AZ 85054, USA

* EMEA: Axway Software, Tour W, 102 Terrasse Boieldieu - 92807 Puteaux Cedex, FRANCE

* APAC: Axway Australia, Suite 1301, 99 Mount Street, North Sydney, 2060 NSW, AUSTRALIA

## Studio Analytics

This document contains information on analytic events generated within Studio during normal usage of the application. With exceptions for specific Titanium events, the events listed in this document are generated by Axway Appcelerator Studio.

## Privacy notice and settings

The following privacy notice will appear the first time you launch Studio 5.1.0:

![dialog1](./dialog1.png)

We've also added the **Privacy Settings** in Preferences.

![dialog2](./dialog2.png)

### Data Sent

The following is a list of the data sent as part of an analytic event:

#### System information

* **event**: `eventName`

* **type**: `eventType`

* **sid**: `UUID.randomUUID().toString()`

* **guid**: `APP_INFO.getAppGuid()`

* **mid**: `CorePlugin.getMID()`

* **app\_id**: `APP_INFO.getAppId()`

* **app\_name**: `APP_INFO.getAppName()`

* **app\_version**: `EclipseUtil.getPluginVersion(APP_INFO.getVersionPluginId())`

* **platform**: `Platform.OS_MACOSX.equals(Platform.getOS()) ? "osx" : Platform.getOS())`

* **version**: "1.1.0"

* **os**: `System.getProperty("os.name")`

* **ostype**: `System.getProperty("sun.arch.data.model") + "bit")`

* **osver**: `System.getProperty("os.version")`

* **osarch**: `System.getProperty("os.arch")`

* **oscpu**: `Runtime.getRuntime().availableProcessors()`

* **ver**: `SPEC_VERSION` (currently "2")

* **tz**: timezone

#### Data payload ("data" parameter)

* **dir**: `project.getProject().getLocation().toOSString()`

* **name**: `project.getAppName()`

* **publisher**: `project.getPublisher()`

* **url**: `project.getURL()`

* **image**: `project.getImage()`

* **appid**: `project.getAppID()`

* **description**: `project.getDescription()`

* **type**: `project.getType()`

* **guid**: `project.getGUID()`

* **version**: `project.getVersion()`

* **copyright**: `project.getCopyright()`

* **runtime**: `"1.0"`

* **date**: `dateFormat.format(Calendar.getInstance().getTime())`

* **id**: `TitaniumCorePlugin.getProjectCount()`

### Events

#### Launch/Quit Studio

Event that happens when a user launches or quits Studio:

* `ti.start`

* `ti.end`

#### Editors

Events every time an editor is opened or closed. The last segment indicates the type of editor opened (e.g. `editor.opened.js`):

* `editor.closed.<editor-type>`

* `editor.opened.<editor-type>`

#### Project events

Events created when interacting with a project. The project type can be of type web, mobile, module, desktop, php, ruby, or rails.

* `project.create.<project-type>`

* `project.delete.<project-type>`

* `project.import`

#### Platform events

##### Android events

* **android.simulator**: Running an Android application in a simulator

* **android.install**: When an Android app is installed to device during running or debugging

* **android.distribute**: Called during the packaging of an Android application

##### iOS events

* **iphone.simulator.debug**: Running an iOS application in a simulator in debug mode

* **iphone.simulator.run**: Running an iOS application in a simulator

* **iphone.install**: When an iOS app is installed to device during running or debugging

* **iphone.distribute**: Called during the packaging of an iOS application (ad hoc or for app store)

* **universal.simulator.debug**: Running an iOS application in a simulator in debug mode

* **universal.simulator.run**: Running an iOS application in a simulator

* **universal.install**: When an iOS app is installed to device during running or debugging

* **universal.distribute**: Called during the packaging of an iOS application (ad hoc or for app store)

* **ipad.simulator.debug**: Running an iOS application in a simulator in debug mode

* **ipad.simulator.run**: Running an iOS application in a simulator

* **ipad.install**: When an iOS app is installed to device during running or debugging

* **ipad.distribute**: Called during the packaging of an iOS application (ad hoc or for app store)

#### Modules

Events during the distribution of modules

* **module.distribute.android**: Called during the packaging of an Android application

* **module.distribute.ios**: Called during the packaging of an iOS application (ad hoc or for app store)

#### Misc events

Events which may no longer be in use or happen exceptionally rarely.

* **unknown.simulator.debug**: Running an iOS application in a simulator in debug mode

* **unknown.simulator.run**: Running an iOS application in a simulator
