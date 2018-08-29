import Player from "./player";
import Map from "./map";

export default {
    init() {
        this.map = Map.getMap();
        this.player = new Player(this.map.getStartPos(), this.map);
    },

    update() {
        this.player.update();
    },

    render() {
        // TODO get raycasting working. For now, we have a 2d map
        this.map.render();
        this.player.render();
    }
}
