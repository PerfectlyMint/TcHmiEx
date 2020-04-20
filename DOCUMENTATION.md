## Members

<dl>
<dt><a href="#TcHmiExSettings">TcHmiExSettings</a></dt>
<dd><p>TcHmiEx settings variable.</p>
</dd>
<dt><a href="#TcHmiEx">TcHmiEx</a> ⇒ <code><a href="#TcHmiEx">TcHmiEx</a></code></dt>
<dd><p>TcHmiEx Framework extension.</p>
</dd>
<dt><a href="#Utilities">Utilities</a> ⇒ <code><a href="#Utilities">Utilities</a></code></dt>
<dd><p>Utilities object</p>
</dd>
<dt><a href="#AutoKeyboard">AutoKeyboard</a> ⇒ <code><a href="#AutoKeyboard">AutoKeyboard</a></code></dt>
<dd><p>AutoKeyboard object</p>
</dd>
<dt><a href="#WEBGL">WEBGL</a></dt>
<dd></dd>
</dl>

<a name="AddToTrendChart"></a>

## AddToTrendChart ⇒ <code>Boolean</code>
Function to add Variable to Trend Chart holder

**Kind**: global Framework Function  

| Param | Type | Description |
| --- | --- | --- |
| VariableToAdd | <code>String</code> | Symbol to add to the list |
| TrendChartListT | <code>Object</code> | rend Chart variable container |

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

<a name="TcHmiExSettings"></a>

## TcHmiExSettings
TcHmiEx settings variable.

**Kind**: global variable  
<a name="TcHmiEx"></a>

## TcHmiEx ⇒ [<code>TcHmiEx</code>](#TcHmiEx)
TcHmiEx Framework extension.

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
|  | <code>object</code> | Settings Object |

<a name="Utilities"></a>

## Utilities ⇒ [<code>Utilities</code>](#Utilities)
Utilities object

**Kind**: global variable  

| Type | Description |
| --- | --- |
| <code>object</code> | TcHmiExSettings Settings object |

<a name="AutoKeyboard"></a>

## AutoKeyboard ⇒ [<code>AutoKeyboard</code>](#AutoKeyboard)
AutoKeyboard object

**Kind**: global variable  

| Type | Description |
| --- | --- |
| <code>object</code> | TcHmiExSettings Settings object |

<a name="WEBGL"></a>

## WEBGL
**Kind**: global variable  
**Author**: alteredq / http://alteredqualia.com/  
**Author**: mr.doob / http://mrdoob.com/  
