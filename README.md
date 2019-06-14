# TwinCAT HMI Samples
My collection of TwinCAT HMI Sample material. I try to stash here the most asked and most useful scripts and parts of project for everyones use.
Everything here is "use at your own risk" type of code. I take no responsibility if it makes or brakes something.

## Contents
### Keyboard
- Layout file: Keyboard/Keyboard.content is the keyboard that becomes visible
- Script file: Scripts/TcHmiExampleCollection.Utilities.AutoKeyboard.js 
  - AutoHideOnEnter Whether to hide keyboard on enter press
  - AutoOpenOnInput Whether to open when input field is selected
  - AutoSelectInputContent Whether to select all text in input field on selection
  
### Devices
Selection of different kind of (process) device templates

#### Actuator
- Actuator.usercontrol : Simple actuator template with icon, value and parameter popup
- ActuatorPopup.usercontrol : Simple actuator popup template with parameters

### Popup
- PopupOpen.js : Framework Function to open popups
- PopupCloseThis.js : Framework Function to close popups

### Trend
- Trendline.content : Layout file for trend
- AddToTrendChart.js : Framework Function to add symbols to trendline
- AddToTrendChartFromUC.js : Framework Function to check itself which symbol to add to trendline 
- GetHistorizedToComboBox.js : Framework Function to collect historized symbols to a combobox
- RemoveFromTrendChart.js : Framework Function to remove symbol from trendline
- TcHmiExampleCollection.Trendline.js : Templates, holders and internal use scripts for trendline functionality

### Scripts
General collection of useful stuff
DecimalFormatter.js : Framework Function to format decimals of numbers
DegreesToRotation.js : Framework Function to turn numbers to transform-list
WriteToSymbolProperty.js : Framework Function to write value to (struct) symbols property
TcHmiExampleCollection.Utilities.js : 
- dragElement : Make element draggable
- String prototypes : Useful string functions
- switchView : Swicht view
- getClickPressCoordinates : Get coordinates where user clicked
- generateUuidv4 : Generate Uuids
