import {
    DB
} from "./database.js";
import {
    Record
} from "./record.js";


class runAddMeeting {
    constructor() {
        this.render();
    }
    render() {
        let addMeetingButton = document.getElementById('goBtn');
        addMeetingButton.addEventListener("click", this.addRecordFromHTML);
    }
    addRecordFromHTML() {
        let newDb = new DB();

        let haircut = document.getElementById('Man');
        let haircutBeard = document.getElementById('haircutBeard');
        let newDate = document.getElementById('getDate').value;
        let name = document.getElementById('userName').value;
        let userPhone = document.getElementById('getUserPhone').value;

        if (haircut.checked) {
            let newRecord = new Record(newDate.split("T")[0], newDate.split("T")[1], name, 60, userPhone);
            let check = newDb.addRecord(newRecord);
            if (check == true) {
               let getBlock = document.getElementById('appointmentsContainer');

               let newBlock = document.createElement('div');
               let newText = document.createTextNode('Thank you for choosing us! Appointment Booked!');

               newBlock.appendChild(newText);
               getBlock.appendChild(newBlock);

               newBlock.style.height = "45px";
               newBlock.style.backgroundColor = "black";
               newBlock.style.width = "430px";
               newBlock.style.textAlign = "center";
               newBlock.style.paddingTop = "20px";
               newBlock.style.margin = "5px";
               newBlock.style.borderRadius = "15px";
               newBlock.style.color = "#17DB1E";
                              
            } else {
                let getBlock = document.getElementById('appointmentsContainer');

                let newBlock = document.createElement('div');
                let newText = document.createTextNode('Something went wrong in the proccess');
 
                newBlock.appendChild(newText);
                getBlock.appendChild(newBlock);
 
                newBlock.style.height = "45px";
                newBlock.style.backgroundColor = "black";
                newBlock.style.width = "430px";
                newBlock.style.textAlign = "center";
                newBlock.style.paddingTop = "20px";
                newBlock.style.margin = "5px";
                newBlock.style.borderRadius = "15px";
                newBlock.style.color = "#17DB1E";
               
                
               
            }
        } else if (haircutBeard.checked) {
            let newRecord = new Record(newDate.split("T")[0], newDate.split("T")[1], name, 80, userPhone);
            let check = newDb.addRecord(newRecord);
            if (check == true) {
                let getBlock = document.getElementById('appointmentsContainer');

                let newBlock = document.createElement('div');
                let newText = document.createTextNode('Thank you for choosing us! Appointment Booked!');
 
                newBlock.appendChild(newText);
                getBlock.appendChild(newBlock);
 
                newBlock.style.height = "45px";
                newBlock.style.backgroundColor = "black";
                newBlock.style.width = "430px";
                newBlock.style.textAlign = "center";
                newBlock.style.paddingTop = "20px";
                newBlock.style.margin = "5px";
                newBlock.style.borderRadius = "15px";
                newBlock.style.color = "#17DB1E";
                
             } else {

                let getBlock = document.getElementById('appointmentsContainer');

                let newBlock = document.createElement('div');
                let newText = document.createTextNode('Something went wrong in the proccess');
 
                newBlock.appendChild(newText);
                getBlock.appendChild(newBlock);
 
                newBlock.style.height = "45px";
                newBlock.style.backgroundColor = "black";
                newBlock.style.width = "430px";
                newBlock.style.textAlign = "center";
                newBlock.style.paddingTop = "20px";
                newBlock.style.margin = "5px";
                newBlock.style.borderRadius = "15px";
                newBlock.style.color = "#17DB1E";
               
             }
        }

        // let time = document.getElementById('time').value;
        // let date = document.getElementById('date').value;
        // let name = document.getElementById('meetingName').value;
        // let description = document.getElementById('description').value;
        // let newRecord = new Record(time, date, name, description);
        // let check = newDb.addRecord(newRecord);
        // if (check == true) {
        //     document.getElementById('appointmentsContainer').innerText = 'הפגישה התווספה בהצלחה למסד הנתונים.';
        // } else {
        //     document.getElementById('appointmentsContainer').innerText = 'משהו השתבש בתהליך של הוספת הפגישה למסד הנתונים.';
        // }
    }
}
let newRun = new runAddMeeting();