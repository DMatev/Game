class GameEngine {
    private timer: Timer;
    private gameSettings: GameSettings;
    private player: Player;
    private drawer: Drawer;
    private gameInterval: any;

    constructor() {
        this.gameSettings = new GameSettings();
        this.timer = new Timer(this.gameSettings);
        this.drawer = new Drawer(this.gameSettings);
        this.player = new Player(this.gameSettings);
    }

    mainLoop() {
        this.timer.increment();
        //Game.spawnTree();
        this.updateScreen();
        this.updateScore();
        this.interactionManager();
    }
    updateScreen() {
        this.drawer.clearScreen();
        this.drawer.drawBackground();
        this.drawer.drawGameObject(this.player);

        // for (var i = 0; i < Game.Trees.length; i++) {
        //     Game.Trees[i].draw();
        // }

        this.drawer.drawScore(this.player.score);
        this.drawer.drawTimer(this.timer);
        this.drawer.drawHealthBar(this.player);
    }
    updateScore() {
        this.player.score += this.gameSettings.scoreScale;
    }
    interactionManager() {
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
    }

    speedUp() {
        // this.TreeSpeed += 1;
        this.gameSettings.scoreScale += 5;
    }

    slowDown() {
        if (this.gameSettings.scoreScale > 5) {
            // this.TreeSpeed -= 1;
            this.gameSettings.scoreScale -= 5;
        }
    }

    detectCollision(obj1: GameObject, obj2: GameObject) {
        var hit = ((obj1.top < (obj2.top + obj2.height)) &&
            ((obj1.left + obj1.width) > obj2.left) && ((obj1.left + obj1.width) < (obj2.left + obj2.width))) ||
            ((obj1.top < (obj2.top + obj2.height)) &&
                (obj1.left > obj2.left) && (obj1.left < (obj2.left + obj2.width)));
        return hit;
    }

    trackPlayerMove(e) {
        if (e.keyCode == 39) { //right
            if ((this.player.left + this.player.width + this.player.speed) <= this.gameSettings.mainScreenWidth) {
                this.player.updatePosition(this.player.left + this.player.speed, this.player.top)
                if (!this.player.LastMoveRight) {
                    this.player.turnRight();
                }
            }
        }
        if (e.keyCode == 37) { //left
            if ((this.player.left - this.player.speed) >= 0) {
                this.player.updatePosition(this.player.left - this.player.speed, this.player.top);
                if (this.player.LastMoveRight) {
                    this.player.turnLeft();
                }
            }
        }
        if (e.keyCode == 38) { //up
            this.slowDown();
        }
        if (e.keyCode == 40) { //down
            this.speedUp();
        }
    }

    playerTakeDmg(dmg: number) {
        if ((this.player.currentHealth - dmg) > 0) {
            this.player.currentHealth--;
        } else {
            this.gameOver();
        }
    }
    gameOver() {
        this.gameSettings.isGameOver = true;
        clearInterval(this.gameInterval);
        window.removeEventListener('keydown', this.trackPlayerMove, false);
        // Game.saveScore();
        this.drawer.drawGameOver();
        // startBtn.show();
        // pauseBtn.hide();
        // pBestScore.innerHTML = ('Best score is: ' + SnowGame.getBestScore());
    }
}