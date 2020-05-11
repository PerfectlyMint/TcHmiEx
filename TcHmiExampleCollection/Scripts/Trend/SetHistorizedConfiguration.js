// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {
    /**
    * Set Historized symbols' Configuration
    * @name SetHistorizedConfiguration
    * @function
    * @kind Framework Function
    * @param {Object} Configuration Configuration to save
    * @returns null
    */
    var SetHistorizedConfiguration = function (Configuration) {
        var request = {
            'requestType': 'ReadWrite',
            'commands': []
        };
        for (var i = 0; i < Configuration.length; i++) {
            var reqTemplate = {};
            reqTemplate.writeValue = {
                interval: Configuration[i].interval,
                maxEntries: Configuration[i].maxEntries,
                recordingEnabled: Configuration[i].recordingEnabled,
                rowLimit: Configuration[i].rowLimit
            }
            reqTemplate.symbol = 'TcHmiSqliteHistorize.Config::historizedSymbolList::' + Configuration[i].symbol;
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
                
            }
        });
    };
    
    TcHmi.Functions.registerFunction('SetHistorizedConfiguration', SetHistorizedConfiguration);
})(TcHmi);