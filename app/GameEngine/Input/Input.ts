class InputHandler {
    private turnRight: any;
    private turnLeft: any;
    private slowDown: any;
    private speedUp: any;

    init(turnRight: any, turnLeft: any, slowDown: any, speedUp: any) {
        this.turnRight = turnRight;
        this.turnLeft = turnLeft;
        this.slowDown = slowDown;
        this.speedUp = speedUp;
    }

    assignListeners() {
        window.addEventListener('keydown', this.processInput, false);
    }
    removeListeners() {
        window.removeEventListener('keydown', this.processInput, false);
    }

    processInput(e) {
        if (e.keyCode == 39) { //right
            this.turnRight();
            // if ((this.player.left + this.player.width + this.player.speed) <= this.gameSettings.mainScreenWidth) {
            //     this.player.updatePosition(this.player.left + this.player.speed, this.player.top)
            //     if (!this.player.LastMoveRight) {
            //         this.player.turnRight();
            //     }
            // }
        }
        if (e.keyCode == 37) { //left
            this.turnLeft();
            // if ((this.player.left - this.player.speed) >= 0) {
            //     this.player.updatePosition(this.player.left - this.player.speed, this.player.top);
            //     if (this.player.LastMoveRight) {
            //         this.player.turnLeft();
            //     }
            // }
        }
        if (e.keyCode == 38) { //up
            this.slowDown();
            // this.slowDown();
        }
        if (e.keyCode == 40) { //down
            this.speedUp();
            // this.speedUp();
        }
    }

}