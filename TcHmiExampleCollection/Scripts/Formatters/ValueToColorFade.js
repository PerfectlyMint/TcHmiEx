// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

/**
    * Converts value to shade color scale
    * @name ValueToColorFade
    * @function
    * @kind Framework Function
    * @param {Number} Value Value to use
    * @param {Number} StartColor Shading start color
    * @param {Number} EndColor Shading end color
    * @param {Number} StartValueScale Value scaling start point
    * @param {Number} EndValueScale Value scaling end point
    * @returns {TcHmi.Color}
*/
(function (TcHmi) {

    var ValueToColorFade = function (Value, StartColor, EndColor, StartValueScale, EndValueScale) {
        StartColor = StartColor.color.replace("rgba(", "").replace(")", "");
        StartColor = StartColor.split(",");
        EndColor = EndColor.color.replace("rgba(", "").replace(")", "");
        EndColor = EndColor.split(",");
        
        var ScaledColor = [];
        for (let i = 0; i < StartColor.length; i++) {
            ScaledColor[i] = TcHmiEx.Utilities.TwoPointScaling(Value, StartValueScale, EndValueScale, StartColor[i], EndColor[i])
        }

        var OutputColor = { "color": "rgba(" + Number(ScaledColor[0]).toFixed(0) + "," + Number(ScaledColor[1]).toFixed(0) + "," + Number(ScaledColor[2]).toFixed(0) + "," + Number(ScaledColor[3]).toFixed(8) + ")" };
        return OutputColor;
    };
    
    TcHmi.Functions.registerFunction('ValueToColorFade', ValueToColorFade);
})(TcHmi);