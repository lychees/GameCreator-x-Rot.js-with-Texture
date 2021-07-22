var CustomCondition;
(function (CustomCondition) {
    function f1(trigger, p) {
        var so = ProjectClientScene.getSceneObjectBySetting(p.soType, p.soIndex, p.useVar, p.soIndexVarID, trigger);
        if (!so)
            return;
        if (p.type != 13 && !(so instanceof ProjectSceneObject_1))
            return false;
        if (p.type == 0)
            return so.inScene;
        if (p.type == 1)
            return so.fixOri;
        if (p.type == 2)
            return so.selectEnabled;
        if (p.type == 3)
            return so.bridge;
        if (p.type == 4)
            return so.through;
        if (p.type == 5)
            return so.moveAutoChangeAction;
        if (p.type == 6)
            return so.ignoreCantMove;
        if (p.type == 7)
            return so.autoPlayEnable;
        if (p.type == 8)
            return so.isMoving;
        if (p.type == 9)
            return so.isJumping;
        if (p.type == 10)
            return so.repeatedTouchEnabled;
        if (p.type == 11)
            return so.onlyPlayerTouch;
        if (p.type == 12)
            return so.waitTouchEvent;
        if (p.type == 13)
            return so[p.soCustomAttrName] ? true : false;
    }
    CustomCondition.f1 = f1;
    function f2(trigger, p) {
        if (p.checkType == 0) {
            if (p.useVarID) {
                var uiID = Game.player.variable.getVariable(p.uiIDVarID);
            }
            else {
                uiID = p.uiID;
            }
        }
        else {
            uiID = p.uiComp.uiID;
        }
        var ui = GameUI.get(uiID);
        if (!ui) {
            if (p.checkType == 0 && p.type == 3)
                return true;
            return false;
        }
        if (p.checkType == 1) {
            var comp = ui.compsIDInfo[p.uiComp.compID];
            if (!comp)
                return false;
            var value = comp[p.uiComp.varName];
            return value ? true : false;
        }
        if (p.type == 0)
            return true;
        if (p.type == 1)
            return false;
        if (p.type == 2)
            return ui.stage ? true : false;
        if (p.type == 3)
            return ui.stage ? false : true;
        if (p.type == 4)
            return Game.layer.uiLayer.getChildAt(Game.layer.uiLayer.numChildren - 1) == ui;
    }
    CustomCondition.f2 = f2;
    function f3(trigger, p) {
        if (p.type == 0)
            return !WorldData.menuEnabled;
        if (p.type == 1)
            return !Controller.inSceneEnabled;
        if (p.type == 2)
            return Game.pause;
        if (p.type == 3)
            return GameDialog.isInDialog;
        if (p.type == 4)
            return WorldData[p.worldAttrName] ? true : false;
        if (p.type == 5)
            return Browser.onMobile;
        if (p.type == 6)
            return os.platform == 3;
        if (p.type == 7) {
            if (!ProjectUtils.keyboardEvent)
                return false;
            var systemKeyName = GUI_Setting.SYSTEM_KEYS[p.systemKey];
            var systemKeyboardInfo = GUI_Setting.KEY_BOARD[systemKeyName];
            return systemKeyboardInfo.keys.indexOf(ProjectUtils.keyboardEvent.keyCode) != -1;
        }
    }
    CustomCondition.f3 = f3;
})(CustomCondition || (CustomCondition = {}));
//# sourceMappingURL=CustomCondition.js.map