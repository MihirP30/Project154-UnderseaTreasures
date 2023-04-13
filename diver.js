AFRAME.registerComponent("rotate-diver", {
    schema:{
        rotation: {type:"number", default:0},
        position: {type:"number", default:0}
    },
    init: function(){
        this.data.rotation = this.el.getAttribute("rotation");
        this.data.position = this.el.getAttribute("position");
        var rotate = this.data.rotation;
        var position = this.data.position

        window.document.addEventListener("keydown", (e)=>{
            if (e.key === "w" || e.key === "ArrowUp"){
                if (rotate.x > -40){
                    rotate.x-= 0.5;
                    position.y+= 0.025;
                    this.el.setAttribute("rotation", rotate);
                }
            }
            if (e.key === "s" || e.key === "ArrowDown"){
                if (rotate.x < 20){
                    rotate.x+= 0.5;
                    position.y-= 0.025;
                    this.el.setAttribute("rotation", rotate);
                }
            }
            if (e.key === "a" || e.key === "ArrowLeft"){
                if (rotate.z > -10){
                    rotate.z-= 0.5;
                    rotate.y+= 0.5;
                    this.el.setAttribute("rotation", rotate);
                }
            }
            if (e.key === "d" || e.key === "ArrowRight"){
                if (rotate.z < 10){
                    rotate.z+= 0.5;
                    rotate.y-= 0.5;
                    this.el.setAttribute("rotation", rotate);
                }
            }
        });
    }
});