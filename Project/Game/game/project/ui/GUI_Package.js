




var GUI_Package = (function (_super) {
    __extends(GUI_Package, _super);
    function GUI_Package() {
        var _this = this;
        _super.call(this);
        GUI_Manager.standardList(this.list);
        this.on(EventObject.DISPLAY, this, this.onDisplay);
        this.list.on(EventObject.CHANGE, this, this.refreshItemInfo);
        this.list.on(UIList.ITEM_CLICK, this, this.onItemClick);
        EventUtils.addEventListener(ProjectPlayer, ProjectPlayer.CHANGE_ITEM_NUMBER, Callback.New(function () {
            Callback.CallLaterBeforeRender(_this.refreshItems, _this, [0]);
        }, this));
        this.list.onCreateItem = Callback.New(this.onCreateItemUI, this);
    }
    GUI_Package.prototype.onDisplay = function () {
        UIList.focus = this.list;
        this.refreshItems(0);
        this.refreshItemInfo();
    };
    GUI_Package.prototype.onCreateItemUI = function (ui, data, index) {
        var itemDS = data.data;
        if (!itemDS)
            ui.alpha = 0;
    };
    GUI_Package.prototype.onItemClick = function () {
        var _this = this;
        if (this.useItemLock)
            return;
        var selectedItem = this.list.selectedItem;
        if (selectedItem && selectedItem.data) {
            var itemDS = selectedItem.data;
            var item = itemDS.item;
            if (item.isUse) {
                if (item.se)
                    GameAudio.playSE(item.se);
                this.useItemLock = true;
                var trigger = CommandPage.startTriggerFragmentEvent(item.callEvent, Game.player.sceneObject, Game.player.sceneObject, Callback.New(function () {
                    _this.useItemLock = false;
                }, this));
                if (!trigger)
                    this.useItemLock = false;
                if (item.isConsumables)
                    ProjectPlayer.changeItemNumber(item.id, -1);
            }
        }
    };
    GUI_Package.prototype.refreshItems = function (state) {
        if (state != 0)
            return;
        var arr = [];
        for (var i = 0; i < Game.player.data.package.length; i++) {
            var d = new ListItem_1002;
            var itemDS = Game.player.data.package[i];
            d.data = itemDS;
            d.icon = itemDS.item.icon;
            d.itemName = itemDS.item.name;
            d.itemNum = "x" + itemDS.number.toString();
            arr.push(d);
        }
        if (Game.player.data.package.length == 0) {
            var emptyItem = new ListItem_1002;
            emptyItem.icon = "";
            emptyItem.itemName = "";
            emptyItem.itemNum = "";
            arr.push(emptyItem);
        }
        this.list.items = arr;
    };
    GUI_Package.prototype.refreshItemInfo = function () {
        var selectedItem = this.list.selectedItem;
        if (!selectedItem || !selectedItem.data) {
            this.itemName.text = "";
            this.itemIntro.text = "";
        }
        else {
            var itemDS = selectedItem.data;
            this.itemName.text = itemDS.item.name;
            this.itemIntro.text = itemDS.item.intro;
        }
    };
    return GUI_Package;
}(GUI_4));
//# sourceMappingURL=GUI_Package.js.map