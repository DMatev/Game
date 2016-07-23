class Baby extends GameObject {
    constructor(gamesettings: GameSettings) {
        let image = document.createElement('img');
        image.setAttribute('src', 'assets/img/baby.png');
        super();
        this.width = 75;
        this.height = 73;
        this.left = Math.floor((Math.random() * (gamesettings.mainScreenWidth - this.width)) + 1);
        this.top = 0;
        this.img = image;
    }
}