var UserInterface = (function () {
    function UserInterface() {
        this.startBtn = document.getElementById('StartBtn');
        this.pauseBtn = document.getElementById('PauseBtn');
    }
    UserInterface.prototype.init = function () {
        this.pauseBtn.style.display = 'none';
        this.gameEngine = new GameEngine(this);
        this.assignListeners();
    };
    UserInterface.prototype.gameStart = function () {
        this.startBtn.style.display = 'none';
        this.pauseBtn.style.display = 'block';
        this.gameEngine.init();
        this.gameEngine.gameStart();
    };
    UserInterface.prototype.gameOver = function () {
        this.startBtn.style.display = 'block';
        this.pauseBtn.style.display = 'none';
    };
    UserInterface.prototype.assignListeners = function () {
        var me = this;
        this.startBtn.addEventListener('click', function () {
            me.gameStart();
        });
        this.pauseBtn.addEventListener('click', function () {
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