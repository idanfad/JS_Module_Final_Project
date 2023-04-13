import { DB } from "./database.js";
export class renderHTML {
    constructor() {}
    printMeetings() {
        let db = new DB();
        let records = db.getRecords();

        let htmlBlock;
        htmlBlock = document.createElement("div");
        htmlBlock.setAttribute("class","records");
        records.forEach((record)=>{
            let newRecord = document.createElement("div");
            newRecord.innerText = `
                Appointment Details:
                
                Appointment ID: ${record.id}
                Client: ${record.name}
                Phone Number: ${record.phone}
                Date: ${record.time} 
                Time ${record.date}
                TotalCost: ${record.description}ILS
            `;
            htmlBlock.appendChild(newRecord);
        });

        return htmlBlock;
    }
    printMeetingsToDelete() {
        let db = new DB();
        let records = db.getRecords();

        let htmlBlock;
        htmlBlock = document.createElement("div");
        htmlBlock.setAttribute("class","records");
        records.forEach((record)=>{
            let newRecord = document.createElement("div");
            newRecord.innerText = `                             
                Appointment Details:

                Appointment ID: ${record.id}
                Client: ${record.name}
                Phone Number: ${record.phone}
                Date: ${record.time} 
                Time ${record.date}
                TotalCost: ${record.description}ILS
                
            `;
            let deleteBtn = document.createElement('button');
           
            deleteBtn.innerText = 'Cancel';
            deleteBtn.addEventListener("click",()=>{
                db.deleteRecord(record.id);
                // newRecord.innerText += 'Appointment Canceled.';
                newRecord,deleteBtn.remove();
                location.reload();
            });

            newRecord.appendChild(deleteBtn)

            htmlBlock.append(newRecord);
            // htmlBlock.appendChild(deleteBtn);

            
        });

        return htmlBlock;
    }
}