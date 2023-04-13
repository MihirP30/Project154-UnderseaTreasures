AFRAME.registerComponent("fish", {
    init: function(){
        for (var i=0; i<15; i++){
            var id = `fish${i}`;

            var posX = (Math.random()*150-80);
            var posY = (Math.random()*150-80);
            var posZ = (Math.random()*10+70);
            var position = {x:posX, y:posY, z:posZ};

            this.create_fishes(id, position);
        }
    },
    create_fishes(id, position){
        var ocean = document.querySelector("#ocean");

        var fish = document.createElement("a-entity");
        fish.setAttribute("id", id);
        fish.setAttribute("position", position);
        fish.setAttribute("rotation", {x: 180, y: 0, z: (Math.random()*360)})

        var scale = 15;
        fish.setAttribute("scale", {x:scale, y:scale, z:scale});

        fish.setAttribute("gltf-model", "./assets/Fish/fish2.glb");
        fish.setAttribute("animation-mixer", {});

        ocean.appendChild(fish)
    }
});