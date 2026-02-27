class Patient {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const patient1 = new Patient("佐藤さん", 30);
console.log(`名前: ${patient1.name}, 年齢: ${patient1.age}`);