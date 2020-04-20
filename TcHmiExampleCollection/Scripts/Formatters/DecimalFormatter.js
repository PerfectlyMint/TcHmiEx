﻿// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

/**
    * Format decimal count
    * @name DecimalFormatter
    * @function
    * @kind Framework Function
    * @param {Number} Value Value to format
    * @param {Number} Decimals Decimal count
    * @returns {TcHmi.Visibility}
*/
(function (TcHmi) {

    var DecimalFormatter = function (Value, Decimals) {
        return Value.toFixed(Decimals);
    };
    
    TcHmi.Functions.registerFunction('DecimalFormatter', DecimalFormatter);
})(TcHmi);