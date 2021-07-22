namespace Roguelike {
    export var Main = {
        display: null,
        map: null,
        engine: null,
        level: null,
        player: null,
        exit: null,
        pedro: null,

        // 返回主菜单
        back_to_title: function() {
            document.removeEventListener("keydown", Main.player);        
            document.body.removeChild(this.display.getContainer());        
            GameUI.show(1);
        },

        start_level: function(w: number, h: number) {
                              
            this.map = new Map(w, h);                      
            this.map.gen();
            //this.map.draw();
                    
            /*var scheduler = new ROT.Scheduler.Simple();
                
            for (let a of this.map.agents) {
                console.log(a);            
                scheduler.add(a, true);
            }

            this.engine = new ROT.Engine(scheduler);
            this.engine.start();*/
        }
    };
}
