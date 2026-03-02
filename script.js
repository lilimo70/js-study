class Reservation {
    constructor(patientName, daysSinceLastVisit) {
        this.patientName = patientName;
        this.daysSinceLastVisit = daysSinceLastVisit;
    }
    judgeStatus() {
        if (this.daysSinceLastVisit >= 14) {
            return "症状が戻っている可能性があるため、すぐに来院してください";
        } else {
            return "順調です。3日後に経過を見せに来てください";
        }
    }
    printMessage() {
        console.log(`${this.patientName}様、${this.judgeStatus()}`);
    }
}

const patient1 = new Reservation("佐藤さん", 30);
patient1.printMessage();

const patient2 = new Reservation("鈴木さん", 80);
patient2.printMessage();