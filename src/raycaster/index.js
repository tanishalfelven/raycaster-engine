import r from "../renderer";
import Player from "./player";
import Map from "./map";

export default {
    init() {
        this.player = new Player();
        this.map = Map.getMap();
    },

    update() {
        this.player.update();
    },

    render() {
        
    }
}
