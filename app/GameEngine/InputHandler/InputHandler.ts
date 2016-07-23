class InputHandler {
    private turnRight: any;
    private turnLeft: any;
    private slowDown: any;
    private speedUp: any;
    private gameEngineScope: any;

    init(turnRight: any, turnLeft: any, slowDown: any, speedUp: any, scope: any) {
        this.turnRight = turnRight;
        this.turnLeft = turnLeft;
        this.slowDown = slowDown;
        this.speedUp = speedUp;
        this.gameEngineScope = scope;
    }

    assignListeners() {
        window.addEventListener('keydown', this.processInput.bind(this), false);
    }
    removeListeners() {
        window.removeEventListener('keydown', this.processInput.bind(this), false);
    }

    processInput(e) {
        if (e.keyCode == 39) { //right
            this.turnRight.apply(this.gameEngineScope);
        }
        if (e.keyCode == 37) { //left
            this.turnLeft.apply(this.gameEngineScope);;
        }
        if (e.keyCode == 38) { //up
            this.slowDown.apply(this.gameEngineScope);;
        }
        if (e.keyCode == 40) { //down
            this.speedUp.apply(this.gameEngineScope);;
        }
    }

}