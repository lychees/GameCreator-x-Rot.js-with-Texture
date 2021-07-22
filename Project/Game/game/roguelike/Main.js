var Roguelike;
(function (Roguelike) {
    Roguelike.Main = {
        display: null,
        map: null,
        engine: null,
        level: null,
        player: null,
        exit: null,
        pedro: null,
        back_to_title: function () {
            document.removeEventListener("keydown", Roguelike.Main.player);
            document.body.removeChild(this.display.getContainer());
            GameUI.show(1);
        },
        start_level: function (w, h) {
            this.map = new Roguelike.Map(w, h);
            this.map.gen();
        }
    };
})(Roguelike || (Roguelike = {}));
//# sourceMappingURL=Main.js.map