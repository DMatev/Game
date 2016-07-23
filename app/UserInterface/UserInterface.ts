class UserInterface {
    private startBtn: any;
    private pauseBtn: any;
    private gameEngine: GameEngine;

    constructor() {
        this.startBtn = $('#StartBtn');
        this.pauseBtn = $('#PauseBtn');
    }

    init(){
        this.pauseBtn.hide();
        this.gameEngine = new GameEngine();
		this.assignListeners();
    }

    gameStart() {
        this.startBtn.hide();
        this.pauseBtn.show();
        this.gameEngine.init();
        this.gameEngine.gameStart();
    }
    gameOver() {
        this.startBtn.show();
        this.pauseBtn.hide();
        // pBestScore.innerHTML = ('Best score is: ' + SnowGame.getBestScore());
    }

    assignListeners(){
        let me = this;
        this.startBtn.on('click', function() {
            me.gameStart();
		});
		this.pauseBtn.on('click', function() {
			if(!me.gameEngine.isGameOver()){
				if(this.innerHTML == 'Pause'){
					this.innerHTML = 'Resume';
					} else {
					this.innerHTML = 'Pause';
					}
				me.gameEngine.togglePause();
			}
		});
    }
}