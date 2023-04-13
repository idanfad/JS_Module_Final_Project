export class DB {
    dbname;
    constructor() {
        this.dbname = "Appointments";
        this.initDB();
    }
    addRecord(record) {
        let existingRecords = this.getRecords();
        let newId;
        
        if (existingRecords.length == 0) {
            newId = 0;
        } else {
            existingRecords.forEach((lastRecord,index)=>{
                if(existingRecords.length-1 == index) {
                    newId = lastRecord.id+1;
                    console.log(newId);
                }
            });
        }
        console.log('כשאני רוצה לשים בDB'+newId);
        record.id = newId;

        existingRecords.push(record);
        localStorage.setItem(this.dbname, JSON.stringify(existingRecords));
        return true;
    }
    deleteRecord(deletionId) {
        let existingRecords = this.getRecords();
        existingRecords.forEach((record, index)=>{
            if(record.id == deletionId) {
                existingRecords.splice(index, 1);
            }
        });
        localStorage.setItem(this.dbname, JSON.stringify(existingRecords));
    }
    getRecords() {
        let records;
        records = localStorage.getItem(this.dbname);
        records = JSON.parse(records);
        return records;
    }
    initDB() {
        if (localStorage.getItem(this.dbname) == null) {
            localStorage.setItem(this.dbname, "[]");
        }
    }
}