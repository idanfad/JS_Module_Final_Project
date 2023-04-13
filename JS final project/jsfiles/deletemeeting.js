import { renderHTML } from "./renderHTML.js";
class runDelete {
    constructor() {
        this.render();
    }
    render() {
        let newRender = new renderHTML();
        let htmlBlock = newRender.printMeetingsToDelete();
        document.getElementById('card').appendChild(htmlBlock);
    }
}
let newRun = new runDelete();