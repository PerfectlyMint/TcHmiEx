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
    * @param {Number} ActuatorType Actuators type for other use
    * @returns {TcHmi.Color}
*/
(function (TcHmi) {

    var ValueToColorFadeWithMotorEnable = function (Value, StartColor, EndColor, StartValueScale, EndValueScale, ActuatorType) {
        if (ActuatorType == 2) {
            ValueToColorFade = TcHmi.Functions.getFunction("ValueToColorFade");
            return ValueToColorFade(Value, StartColor, EndColor, StartValueScale, EndValueScale);
        }
    };
    
    TcHmi.Functions.registerFunction('ValueToColorFadeWithMotorEnable', ValueToColorFadeWithMotorEnable);
})(TcHmi);