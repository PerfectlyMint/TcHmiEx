﻿// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

/**
    * Destroys object around it is called from
    * @description Used to destroy User Control Hosts from inside user control
    * @name PopupCloseThis
    * @function
    * @kind Framework Function
    * @param {Control} objectAround Control to destroy
    * @returns {void}
*/
(function (TcHmi) {

    var PopupCloseThis = function (objectAround) {
        TcHmi.Controls.get(String(objectAround.__parent.__id)).destroy();
    };
    
    TcHmi.Functions.registerFunction('PopupCloseThis', PopupCloseThis);
})(TcHmi);