var Timer = (function () {
    function Timer(gameSettings) {
        this.time = 0;
        this.refreshTimeMs = gameSettings.refreshTimeMs;
    }
    Timer.prototype.increment = function () {
        this.time += this.refreshTimeMs;
    };
    return Timer;
}());
//# sourceMappingURL=Timer.js.map