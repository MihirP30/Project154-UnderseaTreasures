AFRAME.registerComponent("terrain", {
    schema:{
        speed: {type:"number", default:0}
    },
    init: function(){
        window.document.addEventListener("keydown", (e)=>{
            if (e.key === "a" || e.key === "ArrowLeft"){
                if (this.data.speed > -0.3){
                    this.data.speed -= 0.05;
                }
            }
            else if (e.key === "d" || e.key === "ArrowRight"){
                if (this.data.speed < 0.3){
                    this.data.speed += 0.05;
                }
            }
        });
        window.document.addEventListener("keyup", (e)=>{
            this.data.speed = 0;
        });
    },
    tick: function(){
        var map_rotation = this.el.getAttribute("rotation");
        map_rotation.y += this.data.speed;
        this.el.setAttribute("rotation", {
            x: map_rotation.x,
            y: map_rotation.y,
            z: map_rotation.z
        });
    }
});