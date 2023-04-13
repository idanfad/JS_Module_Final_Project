import { renderHTML } from "./renderHTML.js";

class runIndex {
    constructor() {
        this.render();
    }
    render() {
        let newRender = new renderHTML();
        let htmlBlock = newRender.printMeetings();
        document.getElementById('screenCheck').appendChild(htmlBlock);

     
    }
}
let newRun = new runIndex();