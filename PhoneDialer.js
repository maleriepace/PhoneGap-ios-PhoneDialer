var PhoneDialer = function () {

}

PhoneDialer.prototype.dial = function (phnum, error) {
    cordova.exec(null, error, "PhoneDialer", "dialPhone", [phnum]);
};

if (!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.phoneDialer) {
    window.plugins.phoneDialer = new PhoneDialer();
}