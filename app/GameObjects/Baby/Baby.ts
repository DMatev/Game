class Baby extends GameObject {
    constructor(gamesettings: GameSettings) {
        super();
        this.width = 75;
        this.height = 73;
        this.left = Math.floor((Math.random()*(gamesettings.mainScreenWidth - this.width))+1);
        this.top = gamesettings.mainScreenHeight - this.height;
        this.img = $('<img src="assets/img/baby.png" />')[0];
    }
}