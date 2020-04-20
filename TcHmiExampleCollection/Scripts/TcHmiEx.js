// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

/**
 * Version: 0.0.0.1
 */

/**
 * TcHmiEx settings variable.
 */
var TcHmiExSettings = {
    KeyboardAutoHideOnEnter : false,
    KeyboardAutoOpenOnInput : true,
    KeyboardAutoSelectInputContent : true,
    DisableContextMenu : false,
    DesktopView : 'Desktop.view',
    TabletView : 'Desktop.view',
    MobileView: 'Desktop.view',
    TrendDebugMode : true
};

/**
 * TcHmiEx Framework extension.
 * @param {object} - Settings Object
 * @returns {TcHmiEx}
 */
TcHmiEx = (function (TcHmiExSettings) {
    var TcHmiEx = {};
     /**
     * @name TcHmiEx.Utilities
     * @description Utilities object
     * @param {object} - TcHmiExSettings Settings object
     * @returns {Utilities}
     */
    TcHmiEx.Utilities = (function(TcHmiExSettings) {
        var Utilities = {
            /**
            * @name TcHmiEx.Utilities.AutoKeyboard
            * @description AutoKeyboard object
            * @param {object} - TcHmiExSettings Settings object
            * @returns {AutoKeyboard}
            */
            AutoKeyboard : (function(TcHmiExSettings) {
                var Autokeyboard = {
                    parameters : {
                        KeyboardAutoHideOnEnter         : TcHmiExSettings.KeyboardAutoHideOnEnter || false,
                        KeyboardAutoOpenOnInput         : TcHmiExSettings.KeyboardAutoOpenOnInput || false,
                        KeyboardAutoSelectInputContent  : TcHmiExSettings.KeyboardAutoSelectInputContent || false
                    },
                    keyDown : (function() {
                        $(document).keydown(function (e) {
                            /* ENTER PRESSED*/
                            if (e.keyCode == 13 || e.keyCode == 27) {
                                var Keyboard = TcHmi.Controls.get('TcHmiKeyboard');
                                if (Keyboard !== undefined) {
                                    var PopUpFunction = TcHmi.Functions.getFunction("PopupCloseThis");
                                    PopUpFunction(Keyboard.__parent);
                                }
                                return false;
                            }
                        })
                    }
                    ),
                    onClick: (function () {
                        $(document).on("click", function (event) {
                            if (event.target.nodeName == "INPUT") {
                                if (TcHmiEx.Utilities.AutoKeyboard.parameters.KeyboardAutoOpenOnInput) {
                                    var PopUpFunction = TcHmi.Functions.getFunction("PopupOpen");
                                    PopUpFunction("Content/Keyboard/Keyboard.content", "Left", "Top", 0, 0, 500, 1000, 500, TcHmi.Controls.get("Desktop"), true);
                                }
                                if (TcHmiEx.Utilities.AutoKeyboard.parameters.KeyboardAutoSelectInputContent) {
                                    event.target.select();
                                }
                            }
                        })
                    }),
                    init: (function () {
                        TcHmi.EventProvider.register('onInitialized', function (e, data) {
                            e.destroy();
                            TcHmiEx.Utilities.AutoKeyboard.onClick();
                            TcHmiEx.Utilities.AutoKeyboard.keyDown();
                        })
                    })()
                }
                return Autokeyboard;
            })(TcHmiExSettings),
            /**
            * @name TcHmiEx.Utilities.dragElement
            * @description Helper function to create draggable objects
            * @param {Element} - Element Element to make draggable
            * @returns {void}
            */
            dragElement: function (elmnt) {
                var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
                if (document.getElementById(elmnt.id + ".header")) {
                    // if present, the header is where you move the DIV from:
                    document.getElementById(elmnt.id + ".header").onmousedown = dragMouseDown;
                    //document.getElementById(elmnt.id + ".header").ontouchstart = dragMouseDown;
                } else {
                    // otherwise, move the DIV from anywhere inside the DIV: 
                    elmnt.onmousedown = dragMouseDown;
                    //elmnt.ontouchstart = dragMouseDown;
                }

                function dragMouseDown(e) {
                    e = e || window.event;
                    e.preventDefault();
                    // get the mouse cursor position at startup:
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    document.onmouseup = closeDragElement;
                    //document.ontouchend = closeDragElement;
                    // call a function whenever the cursor moves:
                    document.onmousemove = elementDrag;
                    //document.ontouchmove = elementDrag;
                }

                function elementDrag(e) {
                    e = e || window.event;
                    e.preventDefault();
                    // calculate the new cursor position:
                    pos1 = pos3 - e.clientX;
                    pos2 = pos4 - e.clientY;
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    // set the element's new position:
                    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                }

                function closeDragElement() {
                    // stop moving when mouse button is released:
                    document.onmouseup = null;
                    //document.ontouchend = null;
                    document.onmousemove = null;
                    //document.ontouchmove = null;
                }
            },
            /**
            * @name TcHmiEx.Utilities.StringFunctions
            * @description Additional String functios to make life easier
            * @returns {void}
            */
            StringFunctions: (function () {
                String.prototype.endsWith = function () {
                    if ((this.lastIndexOf(arguments[0]) > -1) && (this.lastIndexOf(arguments[0])) == (this.length - arguments[0].length))
                        return true;
                    else
                        return false;
                };
                String.prototype.startsWith = function () {
                    if ((this.indexOf(arguments[0])) == 0)
                        return true;
                    else
                        return false;
                };
                String.prototype.contains = function () {
                    if ((this.indexOf(arguments[0])) > -1)
                        return true;
                    else
                        return false;
                }
            })(),
            /**
            * @name TcHmiEx.Utilities.SwitchView
            * @description Function to change view
            * @param {String} - View View path
            * @param {callback} - Callback Callback
            * @returns {void}
            */
            SwitchView: function (_name, _callback) {
                var v1 = TcHmi.View.get();
                TcHmi.Log.debug(v1.getId());
                TcHmi.View.load(_name + '.view', function (data) {
                    var v2 = TcHmi.View.get();
                    TcHmi.Log.debug(v2.getId());
                    if (_callback && typeof _callback == "function")
                        _callback();
                })
            },
            /**
            * @name TcHmiEx.Utilities.ClickCoordinates
            * @description Click Coordinate Object
            * @returns {ClickCoordinates}
            */
            ClickCoordinates: (function () {
                var ClickCoordinates = {
                    x: null,
                    y: null,
                    getClickPressCoordinates: function (event) {
                        TcHmiEx.Utilities.ClickCoordinates.x = event.clientX;
                        TcHmiEx.Utilities.ClickCoordinates.y = event.clientY;
                    },
                    init: (function () {
                        TcHmi.EventProvider.register('onInitialized', function (e, data) {
                            e.destroy();
                            document.addEventListener("click", TcHmiEx.Utilities.ClickCoordinates.getClickPressCoordinates, true);
                            document.addEventListener("press", TcHmiEx.Utilities.ClickCoordinates.getClickPressCoordinates, true);
                        })
                    })()
                };
                return ClickCoordinates;
            })(),
            generateUuidv4 : function () {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                })
            },
            TwoPointScaling : function (Value, xMin, xMax, yMin, yMax) {
                ratio = (Value - xMin) / (xMax - xMin);
                return ratio * (yMax - yMin) + yMin;
            },
            Csv : (function(){
                var Csv = {
                    convertArrayOfObjectsToCSV : function (args) {
                        var result, ctr, keys, columnDelimiter, lineDelimiter, data;

                        data = args.data || null;
                        if (data == null || !data.length) {
                            return null;
                        }

                        columnDelimiter = args.columnDelimiter || ',';
                        lineDelimiter = args.lineDelimiter || '\n';

                        for (let i = 0; i < data.length; i++) {
                            if ('error' in data[i]) {
                                data.splice(i, 1);
                                i = i - 1;
                            }
                        }

                        keys = Object.keys(data[0]);

                        result = '';
                        result += keys.join(columnDelimiter);
                        result += lineDelimiter;

                        data.forEach(function (item) {
                            ctr = 0;
                            keys.forEach(function (key) {
                                if (ctr > 0) result += columnDelimiter;

                                result += item[key];
                                ctr++;
                            });
                            result += lineDelimiter;
                        });

                        return result;
                    },
                    downloadCSV : function (args, dataArray) {
                        var data, filename, link;
                        var csv = TcHmiEx.Utilities.Csv.convertArrayOfObjectsToCSV({
                            data: dataArray
                        });
                        if (csv == null) return;

                        filename = args.filename || 'export.csv';

                        if (!csv.match(/^data:text\/csv/i)) {
                            csv = 'data:text/csv;charset=utf-8,' + csv;
                        }
                        data = encodeURI(csv);

                        link = document.createElement('a');
                        link.setAttribute('href', data);
                        link.setAttribute('download', filename);
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }
                };
                return Csv;
            })(),
            DisableContextMenu : (function(TcHmiExSettings){
                if (typeof TcHmiExSettings.DisableContextMenu !== 'undefined') {
                    if (TCHMI_ENABLE_DESIGNER_MODE !== true) {
                        if (document.addEventListener) {
                            document.addEventListener('contextmenu', function (e) {
                                e.preventDefault()
                            }, false)
                        } 
                        else {
                            document.attachEvent('oncontextmenu', function () {
                                window.event.returnValue = false;
                            })
                        }
                    }
                }
            })(TcHmiExSettings),
            ViewChanger : (function (TcHmiExSettings) {
                //Register to the global onInitialized event; the anonymous function will be called only one time and will register the event listener for resolution change
                let destr = TcHmi.EventProvider.register("onInitialized", function () {
                    // This event will be raised only once, so it is nice to cleanup
                    destr();

                    //Add an event listener to a media query for desktop resolution
                    if (!TCHMI_ENABLE_DESIGNER_MODE_MASTER) {
                        let mqd = window.matchMedia("(min-width: 1024px)");
                        mqd.addListener(WidthChange);
                        WidthChange(mqd);
                    }

                    //Add an event listener to a media query for tablet resolution
                    if (!TCHMI_ENABLE_DESIGNER_MODE_MASTER) {
                        let mqt = window.matchMedia("(max-width: 1024px) and (min-width: 768px)");
                        mqt.addListener(WidthChange);
                        WidthChange(mqt);
                    }

                    //Add an event listener to a media query for mobile resolution
                    if (!TCHMI_ENABLE_DESIGNER_MODE_MASTER) {
                        let mqm = window.matchMedia("(max-width: 768px)");
                        mqm.addListener(WidthChange);
                        WidthChange(mqm);
                    }
                });

                //Callback if a media query result has changed
                let WidthChange = function (mq) {
                    //console.log(mq);
                    if ((mq.media === "(min-width: 1024px)") && mq.matches) {
                        //console.log("Desktop");
                        //Window width is over 1024px
                        TcHmi.View.load(TcHmiExSettings.DesktopView, function (data) {
                            //Optional: Callback after the page is loaded
                        });
                        return;
                    }

                    if ((mq.media === "(max-width: 1024px) and (min-width: 768px)") && mq.matches) {
                        //console.log("Tablet");
                        //Window width is between 768px and 1024px
                        TcHmi.View.load(TcHmiExSettings.TabletView, function (data) {
                            //Optional: Callback after the page is loaded
                        });
                        return;
                    }

                    if ((mq.media === "(max-width: 768px)") && mq.matches) {
                        //console.log("Mobile");
                        //Window width is under 768px
                        TcHmi.View.load(TcHmiExSettings.MobileView, function (data) {
                            //Optional: Callback after the page is loaded
                        });
                        return;
                    }
                }
            })(TcHmiExSettings),
            generateColor : function () {
                var r = Math.floor(Math.random() * 128 + 64);          // Random between 64-192
                var g = Math.floor(Math.random() * 128 + 64);          // Random between 64-192
                var b = Math.floor(Math.random() * 128 + 64);          // Random between 64-192
                var a = 255;
                var rgba = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'; // Collect all to a string
                return rgba;
            }
        };
        return Utilities;
    })(TcHmiExSettings) || {};
    /**
         * @name TcHmiEx.Trendline
         * @description Utilities object
         * @param {object} - TcHmiExSettings Settings object
         * @returns {Utilities}
         */
    TcHmiEx.Trendline = (function (TcHmiExSettings) {
        var Trendline = {
            DebugMode: true,
            XAxisList: [],
            getXList: function () { return this.XAxisList },
            YAxisList: [],
            getYList: function () { return this.YAxisList },
            checkVariale: function (variable) { return variable !== null },
            generateColor: TcHmiEx.Utilities.generateColor,
            XAxisTemplate: {
                symbol: "",
                yAxisId: 0,
                lineWidth: 2,
                lineColor: "",
                pointDot: true,
                pointDotInStopMode: true,
                pointDotRadius: 2,
                pointDotFillColor: "",
                pointDotStrokeWidth: 2,
                pointDotStrokeColor: "",
            },
            YAxisTemplate: { "id": 0, "position": "Left", "mainTickMinValue": 0, "mainTickMaxValue": 100, "showLabels": true, "showAxisName": true, "axisName": "y-axis", "axisNameFontFamily": null, "axisNameFontSize": 15, "axisNameFontSizeUnit": "px", "axisNameFontWeight": "Bold", "decimalPlaces": 2, "unit": "", "autoScaling": false, "labelFontColor": { "color": "rgba(71, 148, 218, 1)" }, "axisColor": { "color": "rgba(71, 148, 218, 1)" }, "axisNameFontColor": { "color": "rgba(71, 148, 218, 1)" } },
            refresh: function () {
                TcHmi.Symbol.writeEx('%ctrl%TrendlineSelectedSymbols::SrcData%/ctrl%', TcHmiEx.Trendline.XAxisList, function (data) {
                    if (this.DebugMode) { console.log(data); }
                });
                TcHmi.Symbol.writeEx('%ctrl%TcHmiTrendLineChart::LineGraphDescription%/ctrl%', TcHmiEx.Trendline.XAxisList, function (data) {
                    if (this.DebugMode) { console.log(data); }
                });
                TcHmi.Symbol.writeEx('%ctrl%TcHmiTrendLineChart::YAxis%/ctrl%', TcHmiEx.Trendline.YAxisList, function (data) {
                    if (this.DebugMode) { console.log(data); }
                });
            }
        }
        return Trendline;
    })(TcHmiExSettings) || {};
    TcHmiEx.Plotter = (function (TcHmiExSettings) {
        var Plotter = {
            PlotData : [],
            PlotAreas : [],
            DataCollection: { x: [], y: [] },
            Layout : [{
                autosize: true,
                yaxis: {
                    overlaying: 'y',
                    tickfont: { color: '#ffffff00' },
                    titlefont: { color: '#ffffff00' },
                    tickfont: { color: '#ffffff00' },
                    zerolinecolor: '#ffffff00',
                    linecolor: '#ffffff00',
                    gridcolor: '#ffffff00',
                }
            }],
            TraceTypes : [{
                x: [],
                y: [],
                type: 'scatter',
                name: '',
                line: {
                    dash: 'dashdot',
                    width: 4,
                    shape: 'hv'
                },
                mode: 'lines',
            }],
            Mode : [{
                responsive: true,
                modeBarButtonsToRemove: ['sendDataToCloud', 'autoScale2d', 'select2d', 'lasso2d', 'toImage'],
                displaylogo: false,
                showTips: true
            }],
            init : function (layout, modebar, callback) {
                Plotly.newPlot('PlotterArea', TcHmiEx.Plotter.Layout[layout], TcHmiEx.Plotter.Mode[0]);
                callback()
            },
            collectData : function () {
                for (let a = 0; a < TcHmiEx.Plotter.TestData.length; a++) {
                    TcHmiEx.Plotter.DataCollection.x[a] = TcHmiEx.Plotter.TestData[a].Timestamp;
                    TcHmiEx.Plotter.DataCollection.y[a] = TcHmiEx.Plotter.TestData[a].Value;
                }
                TcHmiEx.Plotter.drawData(TcHmiEx.Plotter.DataCollection, 0, 0, 0);
            },
            drawData : function (Data, traceType, layout, modebar) {
                TcHmiEx.Plotter.PlotAreas[0] = document.getElementById("PlotterArea");
                TcHmiEx.Plotter.PlotData[0] = TcHmiEx.Plotter.TraceTypes[traceType];
                TcHmiEx.Plotter.PlotData[0].x = Data.x;
                TcHmiEx.Plotter.PlotData[0].y = Data.y;
                TcHmiEx.Plotter.PlotData[0].name = TcHmiEx.Plotter.TestData[0].Name;
                Plotly.newPlot(TcHmiEx.Plotter.PlotAreas[0], [TcHmiEx.Plotter.PlotData[0]], TcHmiEx.Plotter.Layout[layout], TcHmiEx.Plotter.Mode[modebar]);
            },
            TestData : [
                { "Name": "TK1", "Value": 20.75, "Timestamp": "2019-10-09 08:01", "Unit": "°C" },
                { "Name": "TK1", "Value": 20.85, "Timestamp": "2019-10-10 08:02", "Unit": "°C" },
                { "Name": "TK1", "Value": 20.95, "Timestamp": "2019-10-11 08:03", "Unit": "°C" },
                { "Name": "TK1", "Value": 21.05, "Timestamp": "2019-10-12 08:04", "Unit": "°C" },
                { "Name": "TK1", "Value": 21.15, "Timestamp": "2019-10-13 08:05", "Unit": "°C" },
                { "Name": "TK1", "Value": 21.25, "Timestamp": "2019-10-14 08:06", "Unit": "°C" },
                { "Name": "TK1", "Value": 21.35, "Timestamp": "2019-10-15 08:07", "Unit": "°C" },
                { "Name": "TK1", "Value": 21.45, "Timestamp": "2019-10-16 08:08", "Unit": "°C" },
                { "Name": "TK1", "Value": 21.55, "Timestamp": "2019-10-17 08:09", "Unit": "°C" },
                { "Name": "TK1", "Value": 21.65, "Timestamp": "2019-10-18 08:10", "Unit": "°C" },
                { "Name": "TK1", "Value": 21.75, "Timestamp": "2019-10-19 08:11", "Unit": "°C" },
                { "Name": "TK1", "Value": 21.85, "Timestamp": "2019-10-20 08:12", "Unit": "°C" },
                { "Name": "TK1", "Value": 21.95, "Timestamp": "2019-10-21 08:13", "Unit": "°C" },
                { "Name": "TK1", "Value": 22.05, "Timestamp": "2019-10-22 08:14", "Unit": "°C" },
                { "Name": "TK1", "Value": 22.15, "Timestamp": "2019-10-23 08:15", "Unit": "°C" },
                { "Name": "TK1", "Value": 22.25, "Timestamp": "2019-10-24 08:16", "Unit": "°C" },
                { "Name": "TK1", "Value": 22.35, "Timestamp": "2019-10-25 08:17", "Unit": "°C" },
                { "Name": "TK1", "Value": 22.45, "Timestamp": "2019-10-26 08:18", "Unit": "°C" },
                { "Name": "TK1", "Value": 22.55, "Timestamp": "2019-10-27 08:19", "Unit": "°C" },
                { "Name": "TK1", "Value": 22.65, "Timestamp": "2019-10-28 08:20", "Unit": "°C" },
                { "Name": "TK1", "Value": 22.75, "Timestamp": "2019-10-29 08:21", "Unit": "°C" },
                { "Name": "TK1", "Value": 22.85, "Timestamp": "2019-10-30 08:22", "Unit": "°C" },
                { "Name": "TK1", "Value": 22.95, "Timestamp": "2019-10-31 08:23", "Unit": "°C" },
                { "Name": "TK1", "Value": 23.05, "Timestamp": "2019-11-01 08:24", "Unit": "°C" },
                { "Name": "TK1", "Value": 23.15, "Timestamp": "2019-11-02 08:25", "Unit": "°C" },
                { "Name": "TK1", "Value": 23.25, "Timestamp": "2019-11-03 08:26", "Unit": "°C" },
                { "Name": "TK1", "Value": 23.35, "Timestamp": "2019-11-04 08:27", "Unit": "°C" },
                { "Name": "TK1", "Value": 23.45, "Timestamp": "2019-11-05 08:28", "Unit": "°C" },
                { "Name": "TK1", "Value": 23.55, "Timestamp": "2019-11-06 08:29", "Unit": "°C" },
                { "Name": "TK1", "Value": 23.65, "Timestamp": "2019-11-07 08:30", "Unit": "°C" },
                { "Name": "TK1", "Value": 23.75, "Timestamp": "2019-11-08 08:31", "Unit": "°C" },
                { "Name": "TK1", "Value": 23.85, "Timestamp": "2019-11-09 08:32", "Unit": "°C" },
                { "Name": "TK1", "Value": 23.95, "Timestamp": "2019-11-10 08:33", "Unit": "°C" },
                { "Name": "TK1", "Value": 24.05, "Timestamp": "2019-11-11 08:34", "Unit": "°C" },
                { "Name": "TK1", "Value": 24.15, "Timestamp": "2019-11-12 08:35", "Unit": "°C" },
                { "Name": "TK1", "Value": 24.25, "Timestamp": "2019-11-13 08:36", "Unit": "°C" },
                { "Name": "TK1", "Value": 24.35, "Timestamp": "2019-11-14 08:37", "Unit": "°C" },
                { "Name": "TK1", "Value": 24.45, "Timestamp": "2019-11-15 08:38", "Unit": "°C" },
                { "Name": "TK1", "Value": 24.55, "Timestamp": "2019-11-16 08:39", "Unit": "°C" },
                { "Name": "TK1", "Value": 24.65, "Timestamp": "2019-11-17 08:40", "Unit": "°C" },
                { "Name": "TK1", "Value": 24.75, "Timestamp": "2019-11-18 08:41", "Unit": "°C" },
                { "Name": "TK1", "Value": 24.85, "Timestamp": "2019-11-19 08:42", "Unit": "°C" },
                { "Name": "TK1", "Value": 24.95, "Timestamp": "2019-11-20 08:43", "Unit": "°C" },
                { "Name": "TK1", "Value": 25.05, "Timestamp": "2019-11-21 08:44", "Unit": "°C" },
                { "Name": "TK1", "Value": 25.15, "Timestamp": "2019-11-22 08:45", "Unit": "°C" },
                { "Name": "TK1", "Value": 25.25, "Timestamp": "2019-11-23 08:46", "Unit": "°C" },
                { "Name": "TK1", "Value": 25.35, "Timestamp": "2019-11-24 08:47", "Unit": "°C" },
                { "Name": "TK1", "Value": 25.45, "Timestamp": "2019-11-25 08:48", "Unit": "°C" },
                { "Name": "TK1", "Value": 25.55, "Timestamp": "2019-11-26 08:49", "Unit": "°C" },
                { "Name": "TK1", "Value": 25.65, "Timestamp": "2019-11-27 08:50", "Unit": "°C" },
                { "Name": "TK1", "Value": 25.75, "Timestamp": "2019-11-28 08:51", "Unit": "°C" },
                { "Name": "TK1", "Value": 25.85, "Timestamp": "2019-11-29 08:52", "Unit": "°C" },
                { "Name": "TK1", "Value": 25.95, "Timestamp": "2019-11-30 08:53", "Unit": "°C" },
                { "Name": "TK1", "Value": 26.05, "Timestamp": "2019-12-01 08:54", "Unit": "°C" },
                { "Name": "TK1", "Value": 26.15, "Timestamp": "2019-12-02 08:55", "Unit": "°C" },
                { "Name": "TK1", "Value": 26.25, "Timestamp": "2019-12-03 08:56", "Unit": "°C" },
                { "Name": "TK1", "Value": 26.35, "Timestamp": "2019-12-04 08:57", "Unit": "°C" },
                { "Name": "TK1", "Value": 26.45, "Timestamp": "2019-12-05 08:58", "Unit": "°C" },
                { "Name": "TK1", "Value": 26.55, "Timestamp": "2019-12-06 08:59", "Unit": "°C" },
                { "Name": "TK1", "Value": 26.65, "Timestamp": "2019-12-07 09:00", "Unit": "°C" },
                { "Name": "TK1", "Value": 26.75, "Timestamp": "2019-12-08 09:01", "Unit": "°C" },
                { "Name": "TK1", "Value": 26.85, "Timestamp": "2019-12-09 09:02", "Unit": "°C" },
                { "Name": "TK1", "Value": 26.95, "Timestamp": "2019-12-10 09:03", "Unit": "°C" },
                { "Name": "TK1", "Value": 27.05, "Timestamp": "2019-12-11 09:04", "Unit": "°C" },
                { "Name": "TK1", "Value": 27.15, "Timestamp": "2019-12-12 09:05", "Unit": "°C" },
                { "Name": "TK1", "Value": 27.25, "Timestamp": "2019-12-13 09:06", "Unit": "°C" },
                { "Name": "TK1", "Value": 27.35, "Timestamp": "2019-12-14 09:07", "Unit": "°C" },
                { "Name": "TK1", "Value": 27.45, "Timestamp": "2019-12-15 09:08", "Unit": "°C" },
                { "Name": "TK1", "Value": 27.55, "Timestamp": "2019-12-16 09:09", "Unit": "°C" },
                { "Name": "TK1", "Value": 27.65, "Timestamp": "2019-12-17 09:10", "Unit": "°C" },
                { "Name": "TK1", "Value": 27.75, "Timestamp": "2019-12-18 09:11", "Unit": "°C" },
                { "Name": "TK1", "Value": 27.85, "Timestamp": "2019-12-19 09:12", "Unit": "°C" },
                { "Name": "TK1", "Value": 27.95, "Timestamp": "2019-12-20 09:13", "Unit": "°C" },
                { "Name": "TK1", "Value": 28.05, "Timestamp": "2019-12-21 09:14", "Unit": "°C" },
                { "Name": "TK1", "Value": 28.15, "Timestamp": "2019-12-22 09:15", "Unit": "°C" },
                { "Name": "TK1", "Value": 28.25, "Timestamp": "2019-12-23 09:16", "Unit": "°C" },
                { "Name": "TK1", "Value": 28.35, "Timestamp": "2019-12-24 09:17", "Unit": "°C" },
                { "Name": "TK1", "Value": 28.45, "Timestamp": "2019-12-25 09:18", "Unit": "°C" },
                { "Name": "TK1", "Value": 28.55, "Timestamp": "2019-12-26 09:19", "Unit": "°C" },
                { "Name": "TK1", "Value": 28.65, "Timestamp": "2019-12-27 09:20", "Unit": "°C" },
                { "Name": "TK1", "Value": 28.75, "Timestamp": "2019-12-28 09:21", "Unit": "°C" },
                { "Name": "TK1", "Value": 28.85, "Timestamp": "2019-12-29 09:22", "Unit": "°C" },
                { "Name": "TK1", "Value": 28.95, "Timestamp": "2019-12-30 09:23", "Unit": "°C" },
                { "Name": "TK1", "Value": 29.05, "Timestamp": "2019-12-31 09:24", "Unit": "°C" },
                { "Name": "TK1", "Value": 29.15, "Timestamp": "2020-01-01 09:25", "Unit": "°C" },
                { "Name": "TK1", "Value": 29.25, "Timestamp": "2020-01-02 09:26", "Unit": "°C" },
                { "Name": "TK1", "Value": 29.35, "Timestamp": "2020-01-03 09:27", "Unit": "°C" },
                { "Name": "TK1", "Value": 29.45, "Timestamp": "2020-01-04 09:28", "Unit": "°C" },
                { "Name": "TK1", "Value": 29.55, "Timestamp": "2020-01-05 09:29", "Unit": "°C" },
                { "Name": "TK1", "Value": 29.65, "Timestamp": "2020-01-06 09:30", "Unit": "°C" },
                { "Name": "TK1", "Value": 29.75, "Timestamp": "2020-01-07 09:31", "Unit": "°C" },
                { "Name": "TK1", "Value": 29.85, "Timestamp": "2020-01-08 09:32", "Unit": "°C" },
                { "Name": "TK1", "Value": 29.95, "Timestamp": "2020-01-09 09:33", "Unit": "°C" },
                { "Name": "TK1", "Value": 30.05, "Timestamp": "2020-01-10 09:34", "Unit": "°C" },
                { "Name": "TK1", "Value": 30.15, "Timestamp": "2020-01-11 09:35", "Unit": "°C" },
                { "Name": "TK1", "Value": 30.25, "Timestamp": "2020-01-12 09:36", "Unit": "°C" },
                { "Name": "TK1", "Value": 30.35, "Timestamp": "2020-01-13 09:37", "Unit": "°C" },
                { "Name": "TK1", "Value": 30.45, "Timestamp": "2020-01-14 09:38", "Unit": "°C" },
                { "Name": "TK1", "Value": 30.55, "Timestamp": "2020-01-15 09:39", "Unit": "°C" },
                { "Name": "TK1", "Value": 30.65, "Timestamp": "2020-01-16 09:40", "Unit": "°C" }
            ]
        }        
        return Plotter;

    })(TcHmiExSettings) || {};
    TcHmiEx.ThreeJS = (function (TcHmiExSettings) {
        var ThreeJS = {};
        return ThreeJS;
    })(TcHmiExSettings) || {};
    return TcHmiEx;
})(TcHmiExSettings);