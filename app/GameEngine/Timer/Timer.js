var Timer = (function () {
    function Timer(gameSettings) {
        this.time = 0;
        this.refreshTimeMS = gameSettings.refreshTimeMs;
    }
    Timer.prototype.increment = function () {
        this.time += this.refreshTimeMS;
    };
    return Timer;
}());
//# sourceMappingURL=Timer.js.map