cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-pedometer/www/pedometer.js",
        "id": "cordova-plugin-pedometer.Pedometer",
        "pluginId": "cordova-plugin-pedometer",
        "clobbers": [
            "pedometer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-pedometer": "0.4.1",
    "cordova-plugin-whitelist": "1.2.2-dev"
}
// BOTTOM OF METADATA
});