function checkingTheProperty(a, obj){
    if (a in obj){
        console.log(true);
    }else {
        console.log(false)
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
checkingTheProperty('a', week);