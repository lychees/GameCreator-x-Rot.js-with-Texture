/**
 * 该文件为GameCreator编辑器自动生成的代码，请勿修改
 */

/**
 * 1-标题界面 [BASE]
 */
class GUI_1 extends GUI_BASE {
   标题背景:UIBitmap;
   半透明框:UIBitmap;
   苍之羽标志:UIBitmap;
   游戏标题:UIString;
   开始游戏按钮:UIButton;
   读取存档按钮:UIButton;
   退出游戏按钮:UIButton;
   constructor(){
      super(1);
   }
}
class ListItem_1 extends UIListItemData {
   标题背景:string;
   半透明框:string;
   苍之羽标志:string;
   游戏标题:string;

}

/**
 * 2-读档界面 [BASE]
 */
class GUI_2 extends GUI_BASE {
   半透明背景:UIBitmap;
   界面框背景:UIBitmap;
   界面框内衬:UIBitmap;
   界面标题背景:UIBitmap;
   界面标题:UIString;
   list:UIList; // Item=1001
   关闭读档界面按钮:UIButton;
   constructor(){
      super(2);
   }
}
class ListItem_2 extends UIListItemData {
   半透明背景:string;
   界面框背景:string;
   界面框内衬:string;
   界面标题背景:string;
   界面标题:string;
   list:UIListItemData[];

}

/**
 * 3-菜单界面 [BASE]
 */
class GUI_3 extends GUI_BASE {
   半透明背景:UIBitmap;
   背包按钮:UIButton;
   存档按钮:UIButton;
   读档按钮:UIButton;
   设置按钮:UIButton;
   返回标题界面按钮:UIButton;
   返回游戏按钮:UIButton;
   constructor(){
      super(3);
   }
}
class ListItem_3 extends UIListItemData {
   半透明背景:string;

}

/**
 * 4-背包界面 [BASE]
 */
class GUI_4 extends GUI_BASE {
   半透明背景:UIBitmap;
   道具框背景:UIBitmap;
   说明栏背景:UIBitmap;
   货币栏背景:UIBitmap;
   list:UIList; // Item=1002
   itemName:UIString;
   itemIntro:UIString;
   货币文本:UIString;
   玩家金币数:UICustomGameNumber;
   关闭背包界面按钮:UIButton;
   constructor(){
      super(4);
   }
}
class ListItem_4 extends UIListItemData {
   半透明背景:string;
   道具框背景:string;
   说明栏背景:string;
   货币栏背景:string;
   list:UIListItemData[];
   itemName:string;
   itemIntro:string;
   货币文本:string;

}

/**
 * 5-存档界面 [BASE]
 */
class GUI_5 extends GUI_BASE {
   半透明背景:UIBitmap;
   界面框背景:UIBitmap;
   界面框内衬:UIBitmap;
   界面标题背景:UIBitmap;
   界面标题:UIString;
   list:UIList; // Item=1001
   关闭存档界面按钮:UIButton;
   constructor(){
      super(5);
   }
}
class ListItem_5 extends UIListItemData {
   半透明背景:string;
   界面框背景:string;
   界面框内衬:string;
   界面标题背景:string;
   界面标题:string;
   list:UIListItemData[];

}

/**
 * 6-系统设置 [BASE]
 */
class GUI_6 extends GUI_BASE {
   半透明背景:UIBitmap;
   设置框背景:UIBitmap;
   背景音乐焦点:UIButton;
   环境音效音量焦点:UIButton;
   音效音量焦点:UIButton;
   语音音量焦点:UIButton;
   bgmSlider:UISlider;
   bgsSlider:UISlider;
   seSlider:UISlider;
   tsSlider:UISlider;
   背景音乐音量文本:UIString;
   环境音效音量文本:UIString;
   音效音量文本:UIString;
   语音音量文本:UIString;
   关闭系统设置界面按钮:UIButton;
   constructor(){
      super(6);
   }
}
class ListItem_6 extends UIListItemData {
   半透明背景:string;
   设置框背景:string;
   bgmSlider:number;
   bgsSlider:number;
   seSlider:number;
   tsSlider:number;
   背景音乐音量文本:string;
   环境音效音量文本:string;
   音效音量文本:string;
   语音音量文本:string;

}

/**
 * 7-文本输入界面 [BASE]
 */
class GUI_7 extends GUI_BASE {
   界面背景:UIBitmap;
   输入框背景:UIBitmap;
   input:UIInput;
   提交文本输入按钮:UIButton;
   constructor(){
      super(7);
   }
}
class ListItem_7 extends UIListItemData {
   界面背景:string;
   输入框背景:string;
   input:string;

}

/**
 * 8-数字输入界面 [BASE]
 */
class GUI_8 extends GUI_BASE {
   界面背景:UIBitmap;
   输入框背景:UIBitmap;
   input:UIInput;
   提交数字输入按钮:UIButton;
   constructor(){
      super(8);
   }
}
class ListItem_8 extends UIListItemData {
   界面背景:string;
   输入框背景:string;
   input:string;

}

/**
 * 9-密码输入界面 [BASE]
 */
class GUI_9 extends GUI_BASE {
   界面背景:UIBitmap;
   输入框背景:UIBitmap;
   input:UIInput;
   提交密码输入按钮:UIButton;
   constructor(){
      super(9);
   }
}
class ListItem_9 extends UIListItemData {
   界面背景:string;
   输入框背景:string;
   input:string;

}

/**
 * 10-游戏结束界面 [BASE]
 */
class GUI_10 extends GUI_BASE {
   半透明背景:UIBitmap;
   苍之羽标志:UIBitmap;
   GameOver文本:UIString;
   constructor(){
      super(10);
   }
}
class ListItem_10 extends UIListItemData {
   半透明背景:string;
   苍之羽标志:string;
   GameOver文本:string;
}

/**
 * 11-商店界面 [BASE]
 */
class GUI_11 extends GUI_BASE {
   bg:UIBitmap;
   goodsListBox:UIBitmap;
   文本_商品名称:UIString;
   文本_价格:UIString;
   文本_数量:UIString;
   文本_持有数量:UIString;
   goodsList:UIList; // Item=1003
   sellItemList:UIList; // Item=1003
   图片:UIBitmap;
   界面标题背景:UIBitmap;
   界面标题:UIString;
   itemBox:UIBitmap;
   itemName:UIString;
   itemIntro:UIString;
   buyBox:UIRoot;
   buyBoxArea:UIRoot;
   buyNum_text:UIString;
   sellNum_text:UIString;
   buyNum_text2:UIString;
   subNumBtn:UIButton;
   addNumBtn:UIButton;
   maxNumBtn:UIButton;
   购买数量背景纹路:UIBitmap;
   buyNum:UIString;
   sureBtn:UIButton;
   cancelBtn:UIButton;
   货币栏背景:UIBitmap;
   goldBox:UIBitmap;
   gold_sign:UIString;
   goldNum:UICustomGameNumber;
   closeBtn:UIButton;
   typeTab:UITabBox;
   constructor(){
      super(11);
   }
}
class ListItem_11 extends UIListItemData {
   bg:string;
   goodsListBox:string;
   文本_商品名称:string;
   文本_价格:string;
   文本_数量:string;
   文本_持有数量:string;
   goodsList:UIListItemData[];
   sellItemList:UIListItemData[];
   图片:string;
   界面标题背景:string;
   界面标题:string;
   itemBox:string;
   itemName:string;
   itemIntro:string;
   buyNum_text:string;
   sellNum_text:string;
   buyNum_text2:string;
   购买数量背景纹路:string;
   buyNum:string;
   货币栏背景:string;
   goldBox:string;
   gold_sign:string;
   typeTab:string;
}

/**
 * 12- [BASE]
 */
class GUI_12 extends GUI_BASE {

   constructor(){
      super(12);
   }
}
class ListItem_12 extends UIListItemData {

}

/**
 * 13- [BASE]
 */
class GUI_13 extends GUI_BASE {

   constructor(){
      super(13);
   }
}
class ListItem_13 extends UIListItemData {

}

/**
 * 14- [BASE]
 */
class GUI_14 extends GUI_BASE {

   constructor(){
      super(14);
   }
}
class ListItem_14 extends UIListItemData {

}

/**
 * 15- [BASE]
 */
class GUI_15 extends GUI_BASE {

   constructor(){
      super(15);
   }
}
class ListItem_15 extends UIListItemData {

}

/**
 * 1001-档案_Item [BASE]
 */
class GUI_1001 extends GUI_BASE {
   图片:UIBitmap;
   screenshotImg:UIBitmap;
   mapName:UIString;
   dateStr:UIString;
   no:UIString;
   delBtn:UIButton;
   gameTimeStr:UIString;
   constructor(){
      super(1001);
   }
}
class ListItem_1001 extends UIListItemData {
   图片:string;
   screenshotImg:string;
   mapName:string;
   dateStr:string;
   no:string;
   gameTimeStr:string;
}

/**
 * 1002-道具_Item [BASE]
 */
class GUI_1002 extends GUI_BASE {
   图片:UIBitmap;
   icon:UIBitmap;
   itemName:UIString;
   itemNum:UIString;
   constructor(){
      super(1002);
   }
}
class ListItem_1002 extends UIListItemData {
   图片:string;
   icon:string;
   itemName:string;
   itemNum:string;
}

/**
 * 1003-商品_Item [BASE]
 */
class GUI_1003 extends GUI_BASE {
   图片:UIBitmap;
   icon:UIBitmap;
   itemName:UIString;
   itemPrice:UIString;
   itemNum:UIString;
   ownNum:UIString;

   constructor(){
      super(1003);
   }
}
class ListItem_1003 extends UIListItemData {
   图片:string;
   icon:string;
   itemName:string;
   itemPrice:string;
   itemNum:string;
   ownNum:string;

}

/**
 * 1004- [BASE]
 */
class GUI_1004 extends GUI_BASE {

   constructor(){
      super(1004);
   }
}
class ListItem_1004 extends UIListItemData {

}

/**
 * 1005- [BASE]
 */
class GUI_1005 extends GUI_BASE {

   constructor(){
      super(1005);
   }
}
class ListItem_1005 extends UIListItemData {

}

/**
 * 1006- [BASE]
 */
class GUI_1006 extends GUI_BASE {

   constructor(){
      super(1006);
   }
}
class ListItem_1006 extends UIListItemData {

}

/**
 * 1007- [BASE]
 */
class GUI_1007 extends GUI_BASE {

   constructor(){
      super(1007);
   }
}
class ListItem_1007 extends UIListItemData {

}

/**
 * 1008-按钮选中效果样式1 [BASE]
 */
class GUI_1008 extends GUI_BASE {
   容器:UIRoot;
   target:UIBitmap;
   constructor(){
      super(1008);
   }
}
class ListItem_1008 extends UIListItemData {
   target:string;
}

/**
 * 1009-按钮选中效果样式2 [BASE]
 */
class GUI_1009 extends GUI_BASE {
   容器:UIRoot;
   target:UIBitmap;
   constructor(){
      super(1009);
   }
}
class ListItem_1009 extends UIListItemData {
   target:string;
}

/**
 * 1010- [BASE]
 */
class GUI_1010 extends GUI_BASE {

   constructor(){
      super(1010);
   }
}
class ListItem_1010 extends UIListItemData {

}

/**
 * 2001-启动载入界面 [BASE]
 */
class GUI_2001 extends GUI_BASE {
   loadingComp:UISlider;
   动画:UIAnimation;
   constructor(){
      super(2001);
   }
}
class ListItem_2001 extends UIListItemData {
   loadingComp:number;
   动画:number;
}

/**
 * 2002-新游戏载入界面 [BASE]
 */
class GUI_2002 extends GUI_BASE {
   图片:UIBitmap;
   constructor(){
      super(2002);
   }
}
class ListItem_2002 extends UIListItemData {
   图片:string;
}

/**
 * 2003-读档载入界面 [BASE]
 */
class GUI_2003 extends GUI_BASE {
   图片:UIBitmap;
   constructor(){
      super(2003);
   }
}
class ListItem_2003 extends UIListItemData {
   图片:string;
}

/**
 * 2004-场景载入界面 [BASE]
 */
class GUI_2004 extends GUI_BASE {
   图片:UIBitmap;
   constructor(){
      super(2004);
   }
}
class ListItem_2004 extends UIListItemData {
   图片:string;
}

/**
 * 2005- [BASE]
 */
class GUI_2005 extends GUI_BASE {

   constructor(){
      super(2005);
   }
}
class ListItem_2005 extends UIListItemData {

}

/**
 * 3001-我的自定义界面 [BASE]
 */
class GUI_3001 extends GUI_BASE {
   图片:UIBitmap;
   文本:UIString;
   按钮:UIButton;
   constructor(){
      super(3001);
   }
}
class ListItem_3001 extends UIListItemData {
   图片:string;
   文本:string;

}

/**
 * 3002- [BASE]
 */
class GUI_3002 extends GUI_BASE {

   constructor(){
      super(3002);
   }
}
class ListItem_3002 extends UIListItemData {

}

/**
 * 15001- [BASE]
 */
class GUI_15001 extends GUI_BASE {

   constructor(){
      super(15001);
   }
}
class ListItem_15001 extends UIListItemData {

}
GameUI["__compCustomAttributes"] = {"UIRoot":["enabledLimitView","scrollShowType","hScrollBar","hScrollBg","vScrollBar","vScrollBg","scrollWidth","slowmotionType","enabledWheel","hScrollValue","vScrollValue"],"UIButton":["label","image1","grid9img1","image2","grid9img2","image3","grid9img3","fontSize","color","overColor","clickColor","bold","italic","smooth","align","valign","letterSpacing","font","textDx","textDy","textStroke","textStrokeColor"],"UIBitmap":["image","grid9","flip","pivotType"],"UIString":["text","fontSize","color","bold","italic","smooth","align","valign","leading","letterSpacing","font","wordWrap","overflow","shadowEnabled","shadowColor","shadowDx","shadowDy","stroke","strokeColor","onChangeFragEvent"],"UIVariable":["varID","fontSize","color","bold","italic","smooth","align","valign","leading","letterSpacing","font","wordWrap","overflow","shadowEnabled","shadowColor","shadowDx","shadowDy","stroke","strokeColor","onChangeFragEvent"],"UICustomGameNumber":["customData","previewNum","previewFixed","fontSize","color","bold","italic","smooth","align","valign","leading","letterSpacing","font","wordWrap","overflow","shadowEnabled","shadowColor","shadowDx","shadowDy","stroke","strokeColor"],"UICustomGameString":["customData","inEditorText","fontSize","color","bold","italic","smooth","align","valign","leading","letterSpacing","font","wordWrap","overflow","shadowEnabled","shadowColor","shadowDx","shadowDy","stroke","strokeColor"],"UIAvatar":["avatarID","scaleNumberX","scaleNumberY","orientationIndex","avatarFPS","playOnce","isPlay","avatarFrame","actionID","avatarHue"],"UIStandAvatar":["avatarID","actionID","scaleNumberX","scaleNumberY","flip","playOnce","isPlay","avatarFrame","avatarFPS","avatarHue"],"UIAnimation":["animationID","scaleNumberX","scaleNumberY","aniFrame","playFps","playType","showHitEffect","silentMode"],"UIInput":["text","fontSize","color","bold","italic","align","leading","font","wordWrap","restrict","inputMode","maxChars","shadowEnabled","shadowColor","shadowDx","shadowDy","onInputFragEvent","onEnterFragEvent"],"UICheckBox":["selected","image1","grid9img1","image2","grid9img2","onChangeFragEvent"],"UISwitch":["selected","image1","grid9img1","image2","grid9img2","previewselected","onChangeFragEvent"],"UITabBox":["selectedIndex","itemImage1","grid9img1","itemImage2","grid9img2","itemWidth","itemHeight","items","rowMode","spacing","labelSize","labelColor","labelFont","labelBold","labelItalic","smooth","labelAlign","labelValign","labelLetterSpacing","labelSelectedColor","labelDx","labelDy","labelStroke","labelStrokeColor","onChangeFragEvent"],"UISlider":["image1","bgGrid9","image2","blockGrid9","image3","blockFillGrid9","step","min","max","value","transverseMode","blockFillMode","blockPosMode","fillStrething","onChangeFragEvent"],"UIGUI":["guiID","instanceClassName","dpWidth"],"UIList":["itemModelGUI","previewSize","selectEnable","repeatX","itemWidth","itemHeight","spaceX","spaceY","scrollShowType","hScrollBar","hScrollBg","vScrollBar","vScrollBg","scrollWidth","selectImageURL","selectImageGrid9","selectedImageAlpha","selectedImageOnTop","overImageURL","overImageGrid9","overImageAlpha","overImageOnTop","overSelectMode","slowmotionType"],"UIComboBox":["itemLabels","selectedIndex","bgSkin","bgGrid9","fontSize","color","bold","italic","smooth","align","valign","letterSpacing","font","textDx","textStroke","textStrokeColor","displayItemSize","listScrollBg","listScrollBar","listAlpha","itemHeight","listBgColor","itemFontSize","itemColor","itemBold","itemItalic","itemAlign","itemValign","itemLetterSpacing","itemFont","itemOverColor","itemOverBgColor","itemTextDx","itemTextDy","itemTextStroke","itemTextStrokeColor","onChangeFragEvent"],"UIVideo":["videoURL","playType","volume","playbackRate","currentTime","muted","loop","pivotType","flip","onLoadedFragEvent","onErrorFragEvent","onCompleteFragEvent"]};
