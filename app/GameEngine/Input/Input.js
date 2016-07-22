var InputHandler = (function () {
    function InputHandler() {
    }
    InputHandler.prototype.init = function (turnRight, turnLeft, slowDown, speedUp) {
        this.turnRight = turnRight;
        this.turnLeft = turnLeft;
        this.slowDown = slowDown;
        this.speedUp = speedUp;
    };
    InputHandler.prototype.assignListeners = function () {
        window.addEventListener('keydown', this.processInput, false);
    };
    InputHandler.prototype.removeListeners = function () {
        window.removeEventListener('keydown', this.processInput, false);
    };
    InputHandler.prototype.processInput = function (e) {
        if (e.keyCode == 39) {
            this.turnRight();
        }
        if (e.keyCode == 37) {
            this.turnLeft();
        }
        if (e.keyCode == 38) {
            this.slowDown();
        }
        if (e.keyCode == 40) {
            this.speedUp();
        }
    };
    return InputHandler;
}());
//# sourceMappingURL=Input.js.map