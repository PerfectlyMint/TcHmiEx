// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

/**
    * Function to add Variable to Trend Chart holder
    * @name AddToTrendChart
    * @function
    * @kind Framework Function
    * @param {String} VariableToAdd Symbol to add to the list
    * @param {Object} TrendChartListT rend Chart variable container
    * @returns {Boolean}
*/
(function (TcHmi) {
    
    var AddToTrendChart = function (VariableToAdd,TrendChartList) {
        VariableToAdd = VariableToAdd.replace("%s%", "").replace("%/s%", "");
        var DrawList = TcHmi.Symbol.readEx(TrendChartList.__symbol.__expression.__expression);

        if (TcHmiEx.Trendline.checkVariale(VariableToAdd)) {
            if (DrawList.XAxisList.length > 0) {
                for (let i; i < DrawList.XAxisList.length; i++) {
                    if (DrawList.XAxisList[i].symbol == VariableToAdd) {
                        return;
                    }
                }
            }


            var rgba = { "color": TcHmiEx.Trendline.generateColor() };

            var XaxisTemplate = Object.assign({}, TcHmiEx.Trendline.XAxisTemplate);
            XaxisTemplate.symbol = VariableToAdd;
            XaxisTemplate.yAxisId = DrawList.XAxisList.length;
            XaxisTemplate.lineColor = rgba;
            XaxisTemplate.pointDotFillColor = rgba;
            XaxisTemplate.pointDotStrokeColor = rgba;

            DrawList.XAxisList.push(XaxisTemplate);

            var YaxisTemplate = Object.assign({}, TcHmiEx.Trendline.YAxisTemplate);
            YaxisTemplate.id = DrawList.YAxisList.length;
            YaxisTemplate.labelFontColor = rgba;
            YaxisTemplate.axisColor = rgba;
            YaxisTemplate.axisName = VariableToAdd;
            YaxisTemplate.axisNameFontColor = rgba;

            DrawList.YAxisList.push(YaxisTemplate);

            TcHmi.Symbol.writeEx(TrendChartList.__symbol.__expression.__expression, DrawList);
        }
        else {
            return;
        }
    };
    
    TcHmi.Functions.registerFunction('AddToTrendChart', AddToTrendChart);
})(TcHmi);