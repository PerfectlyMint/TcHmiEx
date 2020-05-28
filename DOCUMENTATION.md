## Members

<dl>
<dt><a href="#TcHmiExSettings">TcHmiExSettings</a></dt>
<dd><p>TcHmiEx settings object.</p>
</dd>
<dt><a href="#TcHmiEx">TcHmiEx</a> ⇒ <code><a href="#TcHmiEx">TcHmiEx</a></code></dt>
<dd><p>TcHmiEx Framework extension.</p>
</dd>
<dt><a href="#WEBGL">WEBGL</a></dt>
<dd></dd>
</dl>

<a name="Animate"></a>

## Animate ⇒ <code>Boolean</code>
Function to animate element movement

**Kind**: global Framework Function  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>Ctx</code> | Context object |
| ControlElement | <code>Element</code> | Control to animate |
| Cleanup | <code>Boolean</code> | Clean up after animation |

<a name="BindSymbolFromArrayIndex"></a>

## BindSymbolFromArrayIndex ⇒ <code>ctx</code>
Function to bind single array index from array

**Kind**: global Framework Function  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>Ctx</code> | Context object |
| ArraySymbol | <code>Symbol</code> | Array symbol |
| Index | <code>Number</code> | Array index number to bind |
| Control | <code>Control</code> | Control to bind into |
| Property | <code>Property</code> | Property of control to bind into |

<a name="GetMappedSymbolsOfType"></a>

## GetMappedSymbolsOfType ⇒ <code>Array</code>
Gets Mapped Symbols Of Specified Type

**Kind**: global Framework Function  

| Param | Type | Description |
| --- | --- | --- |
| Type | <code>String</code> | String |

<a name="GetSymbolFromArrayIndex"></a>

## GetSymbolFromArrayIndex ⇒ <code>Symbol</code>
Function to create Symbol of array index

**Kind**: global Framework Function  

| Param | Type | Description |
| --- | --- | --- |
| ArraySymbol | <code>Symbol</code> | Array symbol to use |
| Index | <code>Number</code> | Array index number to use |

<a name="OpenLinkInNewTab"></a>

## OpenLinkInNewTab ⇒ <code>void</code>
Function to open link in new tab

**Kind**: global Framework Function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>String</code> | URL to open |

<a name="ResolveSymbol"></a>

## ResolveSymbol ⇒ <code>void</code>
Resolve bound symbol of property

**Kind**: global Framework Function  

| Param | Type | Description |
| --- | --- | --- |
| ControlFromToResolve | <code>Control</code> | Control to resolve |
| ParameterToResolve | <code>String</code> | Property to resolve |

<a name="WriteToSymbolProperty"></a>

## WriteToSymbolProperty ⇒ <code>void</code>
Write to single proprty of bound symbol

**Kind**: global Framework Function  

| Param | Type | Description |
| --- | --- | --- |
| SymbolToWrite | <code>Symbol</code> | Symbol to write |
| PropertyToWrite | <code>String</code> | Property to write |
| ValueToWrite | <code>Any</code> | Value to write |

<a name="GetLoggedSystemEvents"></a>

## GetLoggedSystemEvents ⇒ <code>void</code>
Export logged system events as CSV

**Kind**: global Framework Function  
<a name="Base64ToString"></a>

## Base64ToString ⇒ <code>String</code>
Convert Base64 to string

**Kind**: global Framework Function  

| Param | Type | Description |
| --- | --- | --- |
| Data | <code>Base64</code> | Base64 data |

<a name="BooleanToVisibility"></a>

## BooleanToVisibility ⇒ <code>TcHmi.Visibility</code>
Convert Boolean to visibility

**Kind**: global Framework Function  

| Param | Type | Description |
| --- | --- | --- |
| Input | <code>Boolean</code> | Base64 data |

<a name="DecimalFormatter"></a>

## DecimalFormatter ⇒ <code>TcHmi.Visibility</code>
Format decimal count

**Kind**: global Framework Function  

| Param | Type | Description |
| --- | --- | --- |
| Value | <code>Number</code> | Value to format |
| Decimals | <code>Number</code> | Decimal count |

<a name="DegreesToRotation"></a>

## DegreesToRotation ⇒ <code>TcHmi.TransformList</code>
Converts angle degrees to TransformList

**Kind**: global Framework Function  

| Param | Type | Description |
| --- | --- | --- |
| Degrees | <code>Number</code> | Angle to use |

<a name="DegreesToRotationWithValveEnable"></a>

## DegreesToRotationWithValveEnable ⇒ <code>TcHmi.TransformList</code>
Converts angle degrees to TransformList

**Kind**: global Framework Function  

| Param | Type | Description |
| --- | --- | --- |
| Degrees | <code>Number</code> | Angle to use |
| ValveEnable | <code>Number</code> | Determine if valve is enabled |

<a name="ValueToColorFade"></a>

## ValueToColorFade ⇒ <code>TcHmi.Color</code>
Converts value to shade color scale

**Kind**: global Framework Function  

| Param | Type | Description |
| --- | --- | --- |
| Value | <code>Number</code> | Value to use |
| StartColor | <code>Number</code> | Shading start color |
| EndColor | <code>Number</code> | Shading end color |
| StartValueScale | <code>Number</code> | Value scaling start point |
| EndValueScale | <code>Number</code> | Value scaling end point |

<a name="ValueToColorFade"></a>

## ValueToColorFade ⇒ <code>TcHmi.Color</code>
Converts value to shade color scale

**Kind**: global Framework Function  

| Param | Type | Description |
| --- | --- | --- |
| Value | <code>Number</code> | Value to use |
| StartColor | <code>Number</code> | Shading start color |
| EndColor | <code>Number</code> | Shading end color |
| StartValueScale | <code>Number</code> | Value scaling start point |
| EndValueScale | <code>Number</code> | Value scaling end point |
| ActuatorType | <code>Number</code> | Actuators type for other use |

<a name="PopupCloseThis"></a>

## PopupCloseThis ⇒ <code>void</code>
Used to destroy User Control Hosts from inside user control

**Kind**: global Framework Function  

| Param | Type | Description |
| --- | --- | --- |
| objectAround | <code>Control</code> | Control to destroy |

<a name="PopupOpen"></a>

## PopupOpen ⇒ <code>void</code>
Can be used to open either User Control or Region

**Kind**: global Framework Function  

| Param | Type | Description |
| --- | --- | --- |
| Content | <code>TcHmi.ContentPath</code> | Control |
| Header | <code>TcHmi.String</code> | Control |
| HorizontalAlignment | <code>TcHmi.HorizontalAlignment</code> | Control |
| VerticalAlignment | <code>TcHmi.VerticalAlignment</code> | Control |
| HorizontalDistance | <code>TcHmi.Number</code> | Control |
| VerticalDistance | <code>TcHmi.Number</code> | Control |
| Height | <code>TcHmi.Number</code> | Control |
| Width | <code>TcHmi.Number</code> | Control |
| WhereToInsert | <code>TcHmi.Control</code> | Control |
| AddWhereclicked | <code>Boolean</code> | Control |

<a name="AddToTrendChart"></a>

## AddToTrendChart ⇒ <code>Boolean</code>
Function to add Variable to Trend Chart holder

**Kind**: global Framework Function  

| Param | Type | Description |
| --- | --- | --- |
| VariableToAdd | <code>String</code> | Symbol to add to the list |
| TrendChartListT | <code>Object</code> | rend Chart variable container |

<a name="GetHistorizedConfiguration"></a>

## GetHistorizedConfiguration ⇒
Get Historized symbols' Configuration

**Kind**: global Framework Function  
**Returns**: null  

| Param | Type | Description |
| --- | --- | --- |
| resultTarget | <code>TcHmiDatagrid</code> | Target grid for return data |

<a name="GetHistorizedToComboBox"></a>

## GetHistorizedToComboBox ⇒ <code>ListItemList</code>
Function format Historized Symbols in dropdown format

**Kind**: global Framework Function  

| Param | Type | Description |
| --- | --- | --- |
| HistorizedSymbols | <code>String</code> | Link to Historized symbols under Server.TcHmiSqliteHistorize |

<a name="RemoveFromTrendChart"></a>

## RemoveFromTrendChart ⇒ <code>Boolean</code>
Function to remove Variable from Trend Chart holder

**Kind**: global Framework Function  

| Param | Type | Description |
| --- | --- | --- |
| VariableToAdd | <code>String</code> | Symbol to remove from the list |
| TrendChartListT | <code>Object</code> | rend Chart variable container |

<a name="RequestHistorizedDataOfSymbol"></a>

## RequestHistorizedDataOfSymbol ⇒ <code>ListItemList</code>
Function to request Historized Data of a symbol in CSV format.

**Kind**: global Framework Function  

| Param | Type | Description |
| --- | --- | --- |
| Symbol | <code>String</code> | Symbol expression of the requestable symbol. |
| StartTime | <code>String</code> | StartTime of export |
| EndTime | <code>String</code> | StartTime of export |

<a name="SetHistorizedConfiguration"></a>

## SetHistorizedConfiguration ⇒
Set Historized symbols' Configuration

**Kind**: global Framework Function  
**Returns**: null  

| Param | Type | Description |
| --- | --- | --- |
| Configuration | <code>Object</code> | Configuration to save |

<a name="TcHmiExSettings"></a>

## TcHmiExSettings
TcHmiEx settings object.

**Kind**: global variable  
<a name="TcHmiEx"></a>

## TcHmiEx ⇒ [<code>TcHmiEx</code>](#TcHmiEx)
TcHmiEx Framework extension.

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
|  | <code>object</code> | Settings Object |


* [TcHmiEx](#TcHmiEx) ⇒ [<code>TcHmiEx</code>](#TcHmiEx)
    * [.Utilities](#TcHmiEx.Utilities) ⇒ <code>Utilities</code>
        * [.UrlParameters](#TcHmiEx.Utilities.UrlParameters) ⇒ <code>null</code>
        * [.AutoKeyboard](#TcHmiEx.Utilities.AutoKeyboard) ⇒ <code>AutoKeyboard</code>
        * [.dragElement](#TcHmiEx.Utilities.dragElement) ⇒ <code>void</code>
        * [.StringFunctions](#TcHmiEx.Utilities.StringFunctions) ⇒ <code>void</code>
        * [.SwitchView](#TcHmiEx.Utilities.SwitchView) ⇒ <code>void</code>
        * [.ClickCoordinates](#TcHmiEx.Utilities.ClickCoordinates) ⇒ <code>ClickCoordinates</code>
            * [.x](#TcHmiEx.Utilities.ClickCoordinates.x) ⇒ <code>Number</code>
            * [.y](#TcHmiEx.Utilities.ClickCoordinates.y) ⇒ <code>Number</code>
            * [.getClickPressCoordinates](#TcHmiEx.Utilities.ClickCoordinates.getClickPressCoordinates) ⇒ <code>ClickCoordinates</code>
        * [.generateUuidv4](#TcHmiEx.Utilities.generateUuidv4) ⇒ <code>String</code>
        * [.TwoPointScaling](#TcHmiEx.Utilities.TwoPointScaling) ⇒ <code>Number</code>
        * [.Csv](#TcHmiEx.Utilities.Csv) ⇒ <code>Csv</code>
            * [.AddToTrendChart(args)](#TcHmiEx.Utilities.Csv.AddToTrendChart) ⇒ <code>Object</code>
            * [.downloadCSV(args, dataArray)](#TcHmiEx.Utilities.Csv.downloadCSV) ⇒ <code>void</code>
        * [.DisableContextMenu(TcHmiExSettings)](#TcHmiEx.Utilities.DisableContextMenu) ⇒ <code>void</code>
        * [.ViewChanger(TcHmiExSettings)](#TcHmiEx.Utilities.ViewChanger) ⇒ <code>void</code>
        * [.ViewChanger()](#TcHmiEx.Utilities.ViewChanger) ⇒ <code>TcHmi.Color</code>
    * [.Trendline](#TcHmiEx.Trendline) ⇒ <code>Trendline</code>
    * [.Plotter](#TcHmiEx.Plotter) ⇒ <code>Plotter</code>

<a name="TcHmiEx.Utilities"></a>

### TcHmiEx.Utilities ⇒ <code>Utilities</code>
Utilities object

**Kind**: static property of [<code>TcHmiEx</code>](#TcHmiEx)  

| Type | Description |
| --- | --- |
| <code>object</code> | TcHmiExSettings Settings object |


* [.Utilities](#TcHmiEx.Utilities) ⇒ <code>Utilities</code>
    * [.UrlParameters](#TcHmiEx.Utilities.UrlParameters) ⇒ <code>null</code>
    * [.AutoKeyboard](#TcHmiEx.Utilities.AutoKeyboard) ⇒ <code>AutoKeyboard</code>
    * [.dragElement](#TcHmiEx.Utilities.dragElement) ⇒ <code>void</code>
    * [.StringFunctions](#TcHmiEx.Utilities.StringFunctions) ⇒ <code>void</code>
    * [.SwitchView](#TcHmiEx.Utilities.SwitchView) ⇒ <code>void</code>
    * [.ClickCoordinates](#TcHmiEx.Utilities.ClickCoordinates) ⇒ <code>ClickCoordinates</code>
        * [.x](#TcHmiEx.Utilities.ClickCoordinates.x) ⇒ <code>Number</code>
        * [.y](#TcHmiEx.Utilities.ClickCoordinates.y) ⇒ <code>Number</code>
        * [.getClickPressCoordinates](#TcHmiEx.Utilities.ClickCoordinates.getClickPressCoordinates) ⇒ <code>ClickCoordinates</code>
    * [.generateUuidv4](#TcHmiEx.Utilities.generateUuidv4) ⇒ <code>String</code>
    * [.TwoPointScaling](#TcHmiEx.Utilities.TwoPointScaling) ⇒ <code>Number</code>
    * [.Csv](#TcHmiEx.Utilities.Csv) ⇒ <code>Csv</code>
        * [.AddToTrendChart(args)](#TcHmiEx.Utilities.Csv.AddToTrendChart) ⇒ <code>Object</code>
        * [.downloadCSV(args, dataArray)](#TcHmiEx.Utilities.Csv.downloadCSV) ⇒ <code>void</code>
    * [.DisableContextMenu(TcHmiExSettings)](#TcHmiEx.Utilities.DisableContextMenu) ⇒ <code>void</code>
    * [.ViewChanger(TcHmiExSettings)](#TcHmiEx.Utilities.ViewChanger) ⇒ <code>void</code>
    * [.ViewChanger()](#TcHmiEx.Utilities.ViewChanger) ⇒ <code>TcHmi.Color</code>

<a name="TcHmiEx.Utilities.UrlParameters"></a>

#### Utilities.UrlParameters ⇒ <code>null</code>
Url Parameter handler

**Kind**: static property of [<code>Utilities</code>](#TcHmiEx.Utilities)  

| Type | Description |
| --- | --- |
| <code>object</code> | TcHmiExSettings Settings object |

<a name="TcHmiEx.Utilities.AutoKeyboard"></a>

#### Utilities.AutoKeyboard ⇒ <code>AutoKeyboard</code>
AutoKeyboard object

**Kind**: static property of [<code>Utilities</code>](#TcHmiEx.Utilities)  

| Type | Description |
| --- | --- |
| <code>object</code> | TcHmiExSettings Settings object |

<a name="TcHmiEx.Utilities.dragElement"></a>

#### Utilities.dragElement ⇒ <code>void</code>
Helper function to create draggable objects

**Kind**: static property of [<code>Utilities</code>](#TcHmiEx.Utilities)  

| Type | Description |
| --- | --- |
| <code>Element</code> | Element Element to make draggable |

<a name="TcHmiEx.Utilities.StringFunctions"></a>

#### Utilities.StringFunctions ⇒ <code>void</code>
Additional String functios to make life easier

**Kind**: static property of [<code>Utilities</code>](#TcHmiEx.Utilities)  
<a name="TcHmiEx.Utilities.SwitchView"></a>

#### Utilities.SwitchView ⇒ <code>void</code>
Function to change view

**Kind**: static property of [<code>Utilities</code>](#TcHmiEx.Utilities)  

| Type | Description |
| --- | --- |
| <code>String</code> | View View path |
| <code>callback</code> | Callback Callback |

<a name="TcHmiEx.Utilities.ClickCoordinates"></a>

#### Utilities.ClickCoordinates ⇒ <code>ClickCoordinates</code>
Click Coordinate Object

**Kind**: static property of [<code>Utilities</code>](#TcHmiEx.Utilities)  

* [.ClickCoordinates](#TcHmiEx.Utilities.ClickCoordinates) ⇒ <code>ClickCoordinates</code>
    * [.x](#TcHmiEx.Utilities.ClickCoordinates.x) ⇒ <code>Number</code>
    * [.y](#TcHmiEx.Utilities.ClickCoordinates.y) ⇒ <code>Number</code>
    * [.getClickPressCoordinates](#TcHmiEx.Utilities.ClickCoordinates.getClickPressCoordinates) ⇒ <code>ClickCoordinates</code>

<a name="TcHmiEx.Utilities.ClickCoordinates.x"></a>

##### ClickCoordinates.x ⇒ <code>Number</code>
Container for click/press event x coordinate

**Kind**: static property of [<code>ClickCoordinates</code>](#TcHmiEx.Utilities.ClickCoordinates)  
<a name="TcHmiEx.Utilities.ClickCoordinates.y"></a>

##### ClickCoordinates.y ⇒ <code>Number</code>
Container for click/press event y coordinate

**Kind**: static property of [<code>ClickCoordinates</code>](#TcHmiEx.Utilities.ClickCoordinates)  
<a name="TcHmiEx.Utilities.ClickCoordinates.getClickPressCoordinates"></a>

##### ClickCoordinates.getClickPressCoordinates ⇒ <code>ClickCoordinates</code>
Callback function to handle the click events

**Kind**: static property of [<code>ClickCoordinates</code>](#TcHmiEx.Utilities.ClickCoordinates)  
<a name="TcHmiEx.Utilities.generateUuidv4"></a>

#### Utilities.generateUuidv4 ⇒ <code>String</code>
Uuidv4 Generator

**Kind**: static property of [<code>Utilities</code>](#TcHmiEx.Utilities)  
<a name="TcHmiEx.Utilities.TwoPointScaling"></a>

#### Utilities.TwoPointScaling ⇒ <code>Number</code>
Scale value between two ranges

**Kind**: static property of [<code>Utilities</code>](#TcHmiEx.Utilities)  

| Param | Type | Description |
| --- | --- | --- |
| Value | <code>Number</code> | Value to scale |
| xMin | <code>Number</code> | xMin |
| xMax | <code>Number</code> | xMax |
| yMin | <code>Number</code> | yMin |
| yMax | <code>Number</code> | yMax |

<a name="TcHmiEx.Utilities.Csv"></a>

#### Utilities.Csv ⇒ <code>Csv</code>
Csv helper functions

**Kind**: static property of [<code>Utilities</code>](#TcHmiEx.Utilities)  

* [.Csv](#TcHmiEx.Utilities.Csv) ⇒ <code>Csv</code>
    * [.AddToTrendChart(args)](#TcHmiEx.Utilities.Csv.AddToTrendChart) ⇒ <code>Object</code>
    * [.downloadCSV(args, dataArray)](#TcHmiEx.Utilities.Csv.downloadCSV) ⇒ <code>void</code>

<a name="TcHmiEx.Utilities.Csv.AddToTrendChart"></a>

##### Csv.AddToTrendChart(args) ⇒ <code>Object</code>
Function to convert array of objects to csv

**Kind**: static method of [<code>Csv</code>](#TcHmiEx.Utilities.Csv)  
**Author**: cmbaughman  https://gist.github.com/cmbaughman/586fd115b627e0a355553015ad5f0576#file-jsexportcsv-js  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> | Converter arguments |

<a name="TcHmiEx.Utilities.Csv.downloadCSV"></a>

##### Csv.downloadCSV(args, dataArray) ⇒ <code>void</code>
Function to download CSV file

**Kind**: static method of [<code>Csv</code>](#TcHmiEx.Utilities.Csv)  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> | Converter arguments |
| dataArray | <code>Object</code> | Data to download |

<a name="TcHmiEx.Utilities.DisableContextMenu"></a>

#### Utilities.DisableContextMenu(TcHmiExSettings) ⇒ <code>void</code>
Context menu disabler

**Kind**: static method of [<code>Utilities</code>](#TcHmiEx.Utilities)  

| Param | Type | Description |
| --- | --- | --- |
| TcHmiExSettings | <code>Object</code> | TcHmiExSettings |

<a name="TcHmiEx.Utilities.ViewChanger"></a>

#### Utilities.ViewChanger(TcHmiExSettings) ⇒ <code>void</code>
View size change listener listeners for view size changes and changing views

**Kind**: static method of [<code>Utilities</code>](#TcHmiEx.Utilities)  

| Param | Type | Description |
| --- | --- | --- |
| TcHmiExSettings | <code>Object</code> | TcHmiExSettings |

<a name="TcHmiEx.Utilities.ViewChanger"></a>

#### Utilities.ViewChanger() ⇒ <code>TcHmi.Color</code>
Random color generator

**Kind**: static method of [<code>Utilities</code>](#TcHmiEx.Utilities)  
<a name="TcHmiEx.Trendline"></a>

### TcHmiEx.Trendline ⇒ <code>Trendline</code>
Trendline object

**Kind**: static property of [<code>TcHmiEx</code>](#TcHmiEx)  

| Type | Description |
| --- | --- |
| <code>Object</code> | TcHmiExSettings Settings object |

<a name="TcHmiEx.Plotter"></a>

### TcHmiEx.Plotter ⇒ <code>Plotter</code>
Plotter object

**Kind**: static property of [<code>TcHmiEx</code>](#TcHmiEx)  

| Type | Description |
| --- | --- |
| <code>Object</code> | TcHmiExSettings Settings object |

<a name="WEBGL"></a>

## WEBGL
**Kind**: global variable  
**Author**: alteredq / http://alteredqualia.com/  
**Author**: mr.doob / http://mrdoob.com/  
