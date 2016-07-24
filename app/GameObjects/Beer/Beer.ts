class Beer extends GameObject {
    constructor(gamesettings: GameSettings) {
        let image = document.createElement('img');
        image.setAttribute('src', 'assets/img/beer.png');
        super();
        this.width = 51;
        this.height = 51;
        this.left = Math.floor((Math.random() * (gamesettings.mainScreenWidth - this.width)) + 1);
        this.top = 0;
        this.img = image;
    }
}