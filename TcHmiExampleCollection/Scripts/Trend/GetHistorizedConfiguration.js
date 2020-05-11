// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {
    /**
    * Get Historized symbols' Configuration
    * @name GetHistorizedConfiguration
    * @function
    * @kind Framework Function
    * @param {TcHmiDatagrid} resultTarget Target grid for return data
    * @returns null
*/
    var GetHistorizedConfiguration = function (resultTarget) {
        TcHmi.Symbol.readEx2('%s%TcHmiSqliteHistorize.Config::historizedSymbolList%/s%', function (data) {
            if (data.error === TcHmi.Errors.NONE) {
                var request = {
                    'requestType': 'ReadWrite',
                    'commands': []
                };
                for (property in data.value) {
                    var reqTemplate = {};
                    reqTemplate.symbol = 'TcHmiSqliteHistorize.Config::historizedSymbolList::' + property;
                    request.commands.push(reqTemplate);
                }
                TcHmi.Server.requestEx(request, { timeout: 2000 }, function (data) {
                    // Callback handling.
                    if (data.error !== TcHmi.Errors.NONE) {
                        // Handle TcHmi.Server class level error here.
                        return;
                    }
                    var response = data.response;
                    if (response.error !== undefined) {
                        // Handle TwinCAT HMI Server response level error here.
                        return;
                    }
                    var commands = response.commands;
                    if (commands === undefined) {
                        return;
                    }
                    var result = [];
                    for (var i = 0, ii = commands.length; i < ii; i++) {
                        var command = response.commands[i];
                        if (command === undefined) {
                            return;
                        }
                        if (command.error !== undefined) {
                            // Handle TwinCAT HMI Server command level error here.
                            return;
                        }
                        // Handle result...
                        command.readValue.symbol = command.symbol.split('TcHmiSqliteHistorize.Config::historizedSymbolList::')[1];
                        result.push(command.readValue);
                    }
                    resultTarget.setSrcData(result);
                });
            } else {
                // Handle error... 
            }
        });
    };
    
    TcHmi.Functions.registerFunction('GetHistorizedConfiguration', GetHistorizedConfiguration);
})(TcHmi);