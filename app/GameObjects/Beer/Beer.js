var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Beer = (function (_super) {
    __extends(Beer, _super);
    function Beer(gamesettings) {
        var image = document.createElement('img');
        image.setAttribute('src', 'assets/img/beer.png');
        _super.call(this);
        this.width = 51;
        this.height = 51;
        this.left = Math.floor((Math.random() * (gamesettings.mainScreenWidth - this.width)) + 1);
        this.top = 0;
        this.img = image;
    }
    return Beer;
}(GameObject));
//# sourceMappingURL=Beer.js.map