var GUI_Manager = (function () {
    function GUI_Manager() {
    }
    GUI_Manager.standardList = function (list, useItemClickSe) {
        if (useItemClickSe === void 0) { useItemClickSe = true; }
        list.on(EventObject.CHANGE, this, function (list, state) {
            if (state == 0)
                list.scrollTo(list.selectedIndex, true, true, 300, Ease.strongOut);
        }, [list]);
        if (useItemClickSe) {
            list.on(UIList.ITEM_CLICK, this, function (list) {
                GameAudio.playSE(ClientWorld.data.sureSE);
            }, [list]);
        }
    };
    GUI_Manager.regHitAreaFocusList = function (area, list, playSureSE, onFocus, thisPtr) {
        if (playSureSE === void 0) { playSureSE = true; }
        if (onFocus === void 0) { onFocus = null; }
        if (thisPtr === void 0) { thisPtr = null; }
        list.on(UIList.ITEM_CREATE, this, hitAreaFocusListCallback);
        function hitAreaFocusListCallback(ui, data, index) {
            ui.on(EventObject.MOUSE_DOWN, this, function (e) { e.stopPropagation(); });
        }
        area.on(EventObject.MOUSE_DOWN, GUI_Manager, function (list, playSureSE) {
            onFocus && onFocus.apply(thisPtr);
            GUI_Manager.focusList(list, playSureSE);
        }, [list, playSureSE]);
    };
    GUI_Manager.focusList = function (list, playSureSE) {
        if (playSureSE === void 0) { playSureSE = true; }
        if (UIList.focus == list)
            return;
        UIList.focus = list;
        for (var i = 0; i < list.length; i++) {
            var itemBox = list.getItemUI(i);
            if (itemBox.mouseX >= 0 && itemBox.mouseX <= list.itemWidth && itemBox.mouseY >= 0 && itemBox.mouseY <= list.itemHeight) {
                list.selectedIndex = i;
                break;
            }
        }
        if (playSureSE)
            GameAudio.playSE(WorldData.sureSE);
    };
    return GUI_Manager;
}());
//# sourceMappingURL=GUI_Manager.js.map