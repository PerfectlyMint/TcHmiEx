// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

/**
    * Gets Mapped Symbols Of Specified Type
    * @name GetMappedSymbolsOfType
    * @function
    * @kind Framework Function
    * @param {String} Type String
    * @returns {Array}
*/
(function (TcHmi) {

    var GetMappedSymbolsOfType = function (Type) {
        TcHmi.Symbol.readEx2('%s%ListSymbols%/s%', function (data) {
            if (data.error === TcHmi.Errors.NONE) {
                let keys = Object.keys(data.value);
                Result = [];
                for (let i = 0; i < keys.length; i++) {
                    if (data.value[keys[i]].SCHEMA["$ref"] != null) {
                        if (data.value[keys[i]].SCHEMA["$ref"] == Type) {
                            Result.push(keys[i]);
                        }
                    }
                }
            } else {
                return [];
            }
            return Result;
        });
    };
    
    TcHmi.Functions.registerFunction('GetMappedSymbolsOfType', GetMappedSymbolsOfType);
})(TcHmi);