AFRAME.registerComponent("coin", {
    init: function(){
        for (var i=0; i<15; i++){
            var id = `coin${i}`;

            var posX = (Math.random()*150+(-80));
            var posY = (Math.random()*150+(-80));
            var posZ = (Math.random()*10+(70));
            var position = {x:posX, y:posY, z:posZ};

            this.create_coins(id, position);
        }
    },
    create_coins(id, position){
        var ocean = document.querySelector("#ocean");

        var coin = document.createElement("a-entity");
        coin.setAttribute("id", id);
        coin.setAttribute("position", position);

        coin.setAttribute("rotation", {x:180, y:0, z:0});
        coin.setAttribute("animation", {
            property: "rotation",
            to: "180 0 360",
            loop: "true",
            easing: "linear",
            dur: 5000,
        });

        var scale = 0.25;
        coin.setAttribute("scale", {x:scale, y:scale, z:scale});

        coin.setAttribute("gltf-model", "./assets/Coin/Coin.glb");

        ocean.appendChild(coin);
    }
});