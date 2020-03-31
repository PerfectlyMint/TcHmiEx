// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {

    var AddToTrendChart = function (VariableToAdd) {
        VariableToAdd = VariableToAdd.replace("%s%", "").replace("%/s%", "");
        if (TcHmiEx.Trendline.checkVariale(VariableToAdd)) {
            var XaxisList = TcHmiEx.Trendline.XAxisList;
            var YaxisList = TcHmiEx.Trendline.YAxisList;

            var rgba = { "color": TcHmiEx.Trendline.generateColor() };

            var XaxisTemplate = Object.assign({}, TcHmiEx.Trendline.XAxisTemplate);
            XaxisTemplate.symbol = VariableToAdd;
            XaxisTemplate.yAxisId = XaxisList.length;
            XaxisTemplate.lineColor = rgba;
            XaxisTemplate.pointDotFillColor = rgba;
            XaxisTemplate.pointDotStrokeColor = rgba;

            XaxisList[XaxisList.length] = XaxisTemplate;

            var YaxisTemplate = Object.assign({}, TcHmiEx.Trendline.YAxisTemplate);
            YaxisTemplate.id = YaxisList.length;
            YaxisTemplate.labelFontColor = rgba;
            YaxisTemplate.axisColor = rgba;
            YaxisTemplate.axisName = VariableToAdd;
            YaxisTemplate.axisNameFontColor = rgba;

            YaxisList[YaxisList.length] = YaxisTemplate;

            TcHmiEx.Trendline.XAxisList = XaxisList;
            TcHmiEx.Trendline.YAxisList = YaxisList;
        }
        else {
            return;
        }
        TcHmiEx.Trendline.refresh();
    };
    
    TcHmi.Functions.registerFunction('AddToTrendChart', AddToTrendChart);
})(TcHmi);