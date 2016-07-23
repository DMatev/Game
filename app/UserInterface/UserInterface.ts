class UserInterface {
    private startBtn: any;
    private pauseBtn: any;
    private gameEngine: GameEngine;

    constructor() {
        this.startBtn = document.getElementById('StartBtn');
        this.pauseBtn = document.getElementById('PauseBtn');
    }

    init() {
        this.pauseBtn.style.display = 'none';
        this.gameEngine = new GameEngine(this);
        this.assignListeners();
    }

    gameStart() {
        this.startBtn.style.display = 'none';
        this.pauseBtn.style.display = 'block';
        this.gameEngine.init();
        this.gameEngine.gameStart();
    }
    
    gameOver() {
        this.startBtn.style.display = 'block';
        this.pauseBtn.style.display = 'none';
    }

    assignListeners() {
        let me = this;
        this.startBtn.addEventListener('click', function () {
            me.gameStart();
        });
        this.pauseBtn.addEventListener('click', function () {
            if (!me.gameEngine.isGameOver()) {
                if (this.innerHTML == 'Pause') {
                    this.innerHTML = 'Resume';
                } else {
                    this.innerHTML = 'Pause';
                }
                me.gameEngine.togglePause();
            }
        });
    }
}