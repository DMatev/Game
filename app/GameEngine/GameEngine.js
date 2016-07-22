var GameEngine = (function () {
    function GameEngine() {
        this.init();
    }
    GameEngine.prototype.init = function () {
        this.gameSettings = new GameSettings();
        this.timer = new Timer(this.gameSettings);
        this.drawer = new Drawer(this.gameSettings);
        this.player = new Player(this.gameSettings);
        this.inputHandler = new InputHandler();
    };
    GameEngine.prototype.mainLoop = function () {
        this.timer.increment();
        //Game.spawnTree();
        this.updateScreen();
        this.updateScore();
        this.interactionManager();
    };
    GameEngine.prototype.updateScreen = function () {
        this.drawer.clearScreen();
        this.drawer.drawBackground();
        this.drawer.drawGameObject(this.player);
        // for (var i = 0; i < Game.Trees.length; i++) {
        //     Game.Trees[i].draw();
        // }
        this.drawer.drawScore(this.player.score);
        this.drawer.drawTimer(this.timer);
        this.drawer.drawHealthBar(this.player);
    };
    GameEngine.prototype.updateScore = function () {
        this.player.score += this.gameSettings.scoreScale;
    };
    GameEngine.prototype.interactionManager = function () {
        // for(var i=0; i<Game.Trees.length; i++){
        // 	//moving trees
        // 	if((Game.Trees[i].top - Game.TreeSpeed) >= 0){
        // 		Game.Trees[i].updatePosition(Game.Trees[i].left, Game.Trees[i].top - Game.TreeSpeed);
        // 	} else {
        // 		Game.Trees.splice(i,1);
        // 		if(i > 0){
        // 			i--;
        // 		} else {
        // 			break;
        // 		}
        // 	}
        // 	//detecting tree hit a player
        // 	if(Game.detectCollision(Game.Trees[i], Game.Player)){
        // 		Game.Trees.splice(i,1);
        // 		Game.playerTakeDmg(1);
        // 		if(i > 0){
        // 			i--;
        // 		} else {
        // 			break;
        // 		}
        // 	}
        // }
    };
    GameEngine.prototype.detectCollision = function (obj1, obj2) {
        var hit = ((obj1.top < (obj2.top + obj2.height)) &&
            ((obj1.left + obj1.width) > obj2.left) && ((obj1.left + obj1.width) < (obj2.left + obj2.width))) ||
            ((obj1.top < (obj2.top + obj2.height)) &&
                (obj1.left > obj2.left) && (obj1.left < (obj2.left + obj2.width)));
        return hit;
    };
    GameEngine.prototype.turnRightHandler = function () {
        if ((this.player.left + this.player.width + this.player.speed) <= this.gameSettings.mainScreenWidth) {
            this.player.updatePosition(this.player.left + this.player.speed, this.player.top);
            if (!this.player.LastMoveRight) {
                this.player.turnRight();
            }
        }
    };
    GameEngine.prototype.turnLeftHandler = function () {
        if ((this.player.left - this.player.speed) >= 0) {
            this.player.updatePosition(this.player.left - this.player.speed, this.player.top);
            if (this.player.LastMoveRight) {
                this.player.turnLeft();
            }
        }
    };
    GameEngine.prototype.slowDownHandler = function () {
        if (this.gameSettings.scoreScale > 5) {
            // this.TreeSpeed -= 1;
            this.gameSettings.scoreScale -= 5;
        }
    };
    GameEngine.prototype.speedUpHandler = function () {
        // this.TreeSpeed += 1;
        this.gameSettings.scoreScale += 5;
    };
    GameEngine.prototype.playerTakeDmg = function (dmg) {
        if ((this.player.currentHealth - dmg) > 0) {
            this.player.currentHealth--;
        }
        else {
            this.gameOver();
        }
    };
    GameEngine.prototype.gameOver = function () {
        this.gameSettings.isGameOver = true;
        clearInterval(this.gameInterval);
        this.inputHandler.removeListeners(); // window.removeEventListener('keydown', this.trackPlayerMove, false);
        // Game.saveScore();
        this.drawer.drawGameOver();
        // startBtn.show();
        // pauseBtn.hide();
        // pBestScore.innerHTML = ('Best score is: ' + SnowGame.getBestScore());
    };
    GameEngine.prototype.gameStart = function () {
        if (this.gameSettings.isGameOver) {
            this.inputHandler.init(this.turnRightHandler, this.turnLeftHandler, this.slowDownHandler, this.speedUpHandler);
            this.inputHandler.assignListeners(); // window.addEventListener('keydown', Game.trackPlayerMove, false);
            this.init();
            this.gameInterval = setInterval(function () {
                this.mainLoop();
            }, this.gameSettings.refreshTimeMs);
        }
    };
    return GameEngine;
}());
//# sourceMappingURL=GameEngine.js.map