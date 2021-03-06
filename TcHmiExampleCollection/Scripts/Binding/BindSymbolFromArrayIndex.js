﻿// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

/**
    * Function to bind single array index from array
    * @name BindSymbolFromArrayIndex
    * @function
    * @kind Framework Function
    * @param {Ctx} ctx Context object
    * @param {Symbol} ArraySymbol Array symbol
    * @param {Number} Index Array index number to bind
    * @param {Control} Control Control to bind into
    * @param {Property} Property Property of control to bind into
    * @returns {ctx}
*/
(function (TcHmi) {
    var BindSymbolFromArrayIndex = function (ctx,ArraySymbol,Index,Control,Property) {
		// Just editing the symbol expression
        ArraySymbol.__symbol.__expression.__content = ArraySymbol.__symbol.__expression.__content + "[" + Index + "]";
        ArraySymbol.__symbol.__expression.__expression = ArraySymbol.__symbol.__expression.__expression.replace("%/s%", "") + "[" + Index + "]%/s%";
        ArraySymbol.__symbol.__expression.__name = ArraySymbol.__symbol.__expression.__name + "[" + Index + "]";

        // Check if control exists
        if (Control) {
            // Bind
            TcHmi.Binding.createEx2(ArraySymbol.__symbol.__expression.__expression, Property, Control);
            ctx.success("Result");
        }
        else {
            ctx.error(TcHmi.Errors.ERROR);
        }
    };

    TcHmi.Functions.registerFunction('BindSymbolFromArrayIndex', BindSymbolFromArrayIndex);
})(TcHmi);