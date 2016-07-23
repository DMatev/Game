var UserInterface = (function () {
    function UserInterface() {
        this.startBtn = $('#StartBtn');
        this.pauseBtn = $('#PauseBtn');
    }
    UserInterface.prototype.init = function () {
        this.pauseBtn.hide();
        this.gameEngine = new GameEngine();
        this.assignListeners();
    };
    UserInterface.prototype.gameStart = function () {
        this.startBtn.hide();
        this.pauseBtn.show();
        this.gameEngine.init();
        this.gameEngine.gameStart();
    };
    UserInterface.prototype.gameOver = function () {
        this.startBtn.show();
        this.pauseBtn.hide();
        // pBestScore.innerHTML = ('Best score is: ' + SnowGame.getBestScore());
    };
    UserInterface.prototype.assignListeners = function () {
        var me = this;
        this.startBtn.on('click', function () {
            me.gameStart();
        });
        this.pauseBtn.on('click', function () {
            if (!me.gameEngine.isGameOver()) {
                if (this.innerHTML == 'Pause') {
                    this.innerHTML = 'Resume';
                }
                else {
                    this.innerHTML = 'Pause';
                }
                me.gameEngine.togglePause();
            }
        });
    };
    return UserInterface;
}());
//# sourceMappingURL=UserInterface.js.map