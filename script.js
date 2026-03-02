class Reservation {
    constructor(patientName, daysSinceLastVisit, age) {
        this.patientName = patientName;
        this.daysSinceLastVisit = daysSinceLastVisit;
        this.age = age;
    }
    judgeStatus() {
        if (this.daysSinceLastVisit >= 14) {
            return "症状が戻っている可能性があるため、すぐに来院してください";
        } else {
            return "順調です。3日後に経過を見せに来てください";
        }
    }
    judgeAge() {
        if (this.age < 18) {
            return 800;
        } else {
            return 1000;
        }
    }

    printMessage() {
        console.log(`${this.patientName}様、${this.judgeStatus()}。料金は${this.judgeAge()}円です。`);
    }
}

const patient1 = new Reservation("佐藤さん", 30, 10);
patient1.printMessage();

const patient2 = new Reservation("鈴木さん", 80, 20);
patient2.printMessage();