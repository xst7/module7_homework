function Equpment(){
    this.type = 'ручной инструмент'
    this.voltage = 220
}
function OnOff(name, watt){
    this.name = name
    this.watt = watt
}
OnOff.prototype = new Equpment();
OnOff.prototype.on = function(on, watt){
    if(on === 1){
        this.onWatt = watt
    }else {
        this.onWatt = 0
    }
}

const drill = new OnOff('Дрель', 1000);
const fraser = new OnOff('Фрезер', 1200);
const loopMachine = new OnOff('Шлейф машина', 800);

// Для включения прибора в розетку передайте значение 1 для выключения передайте 0
drill.on(1, drill.watt);
fraser.on(0, fraser.watt);
loopMachine.on(1, loopMachine.watt);

console.log(`Суммарная потребляемая мощность всех включенных в сеть приборов равна ${(drill.onWatt + fraser.onWatt + loopMachine.onWatt) / 1000} кВт`);
console.log(drill);
console.log(fraser);
console.log(loopMachine);