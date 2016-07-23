var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Baby = (function (_super) {
    __extends(Baby, _super);
    function Baby(gamesettings) {
        var image = document.createElement('img');
        image.setAttribute('src', 'assets/img/baby.png');
        _super.call(this);
        this.width = 75;
        this.height = 73;
        this.left = Math.floor((Math.random() * (gamesettings.mainScreenWidth - this.width)) + 1);
        this.top = 0;
        this.img = image;
    }
    return Baby;
}(GameObject));
//# sourceMappingURL=Baby.js.map