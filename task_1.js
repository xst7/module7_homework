function keys(obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(key);
        }
    }
}
let week = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
}
keys(week);