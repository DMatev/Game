var InputHandler = (function () {
    function InputHandler() {
    }
    InputHandler.prototype.init = function (turnRight, turnLeft, slowDown, speedUp, scope) {
        this.turnRight = turnRight;
        this.turnLeft = turnLeft;
        this.slowDown = slowDown;
        this.speedUp = speedUp;
        this.gameEngineScope = scope;
        this.eventListenr = this.processInput.bind(this);
    };
    InputHandler.prototype.assignListeners = function () {
        window.addEventListener('keydown', this.eventListenr, false);
    };
    InputHandler.prototype.removeListeners = function () {
        window.removeEventListener('keydown', this.eventListenr, false);
    };
    InputHandler.prototype.processInput = function (e) {
        if (e.keyCode == 39) {
            this.turnRight.apply(this.gameEngineScope);
        }
        if (e.keyCode == 37) {
            this.turnLeft.apply(this.gameEngineScope);
            ;
        }
        if (e.keyCode == 38) {
            this.slowDown.apply(this.gameEngineScope);
            ;
        }
        if (e.keyCode == 40) {
            this.speedUp.apply(this.gameEngineScope);
            ;
        }
    };
    return InputHandler;
}());
//# sourceMappingURL=InputHandler.js.map