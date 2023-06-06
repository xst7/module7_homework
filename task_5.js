class Equpment {
    constructor() {
        this.type = 'ручной инструмент'
        this.voltage = 220
    }
}
class OnOff extends Equpment {
    constructor(name, watt) {
        super('ручной инструмент');
        this.name = name;
        this.watt = watt;
        this.on = function (on){
            if (on){
                this.onWatt = watt;
            }else {
                this.onWatt = 0
            }
        }
    }

}
const drill = new OnOff('Дрель', 1000);
const fraser = new OnOff('Фрезер', 1200);
const loopMachine = new OnOff('Шлейф машина', 800);

drill.on(false);
fraser.on(true);
loopMachine.on(true);

console.log(`Суммарная мощность влюченых электроприборов равна ${(drill.onWatt + fraser.onWatt + loopMachine.onWatt) / 1000} кВт`)
console.log(drill);
console.log(fraser);
console.log(loopMachine);
