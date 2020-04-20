// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

/**
    * Function to remove Variable from Trend Chart holder
    * @name RemoveFromTrendChart
    * @function
    * @kind Framework Function
    * @param {String} VariableToAdd Symbol to remove from the list
    * @param {Object} TrendChartListT rend Chart variable container
    * @returns {Boolean}
*/
(function (TcHmi) {

    var RemoveFromTrendChart = function (SymbolToRemove,TrendChartList) {
        if (SymbolToRemove != null) {
            var symbol = SymbolToRemove.symbol.replace("%s%", "").replace("%/s%", "");
            var DrawList = TcHmi.Symbol.readEx(TrendChartList.__symbol.__expression.__expression);

            for (var a = 0; a < DrawList.YAxisList.length; a++) {
                if (DrawList.XAxisList[a].symbol == symbol) {
                    DrawList.YAxisList.splice(a, 1);
                    DrawList.XAxisList.splice(a, 1);
                break;
            }
        }

            TcHmi.Symbol.writeEx(TrendChartList.__symbol.__expression.__expression, DrawList);
        }
    };
    
    TcHmi.Functions.registerFunction('RemoveFromTrendChart', RemoveFromTrendChart);
})(TcHmi);