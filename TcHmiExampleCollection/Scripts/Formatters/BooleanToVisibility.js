// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

/**
    * Convert Boolean to visibility
    * @name BooleanToVisibility
    * @function
    * @kind Framework Function
    * @param {Boolean} Input Base64 data
    * @returns {TcHmi.Visibility}
*/
(function (TcHmi) {

    var BooleanToVisibility = function (Input) {
        if (TCHMI_ENABLE_DESIGNER_MODE_MASTER == true) {
            return "Visible";
        }
        if (Input == true) {
            return "Visible";
        }
        else {
            return "Collapsed";
        }
    };
    
    TcHmi.Functions.registerFunction('BooleanToVisibility', BooleanToVisibility);
})(TcHmi);