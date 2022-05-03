//1. Написать функцию, которая принимает один числовой параметр - количество секунд.
// В ответ функция возвращает мне объект, в котором записаны количество лет, месяцев, дней, часов, минут и секунд, которые равны отправленному количеству секунд.
// К примеру, если отправить туда 86500, то в ответе я получу объект с значениями years = 0, months = 0, days = 1, hours = 0, minutes = 1, seconds = 40. 
//Потому что 86400 это ровно 24 часа, то есть сутки, поэтому 1 день, а 100 секунд это одна минута и остаются 40 секунд. Нельзя пользоваться объектом Date

const calculateDate = function (num) {
    const objDate = {
        year: 0,
        month: 0,
        day: 0,
        hours: 0,
        minute: 0,
        second: 0,
    }
    if (num > 0) {
        const second = num;
        let year = 0; // these are counters, since they change, it is impossible to declare a constant))
        let month = 0;
        let day = 0;
        let hours = 0;
        let minute = 0;
        if (second >= 60) {
            minute = Math.trunc(second / 60);
        }
        if (minute >= 60) {
            hours = Math.trunc(minute / 60);
        }
        if (hours >= 24) {
            day = Math.trunc(hours / 24)
        }
        if (day >= 30) {
            month = Math.trunc(day / 30);
        }
        if (month >= 12) {
            year = Math.trunc(month / 12);
        }
        objDate.year = year; 
        objDate.second = second - minute * 60; 
        objDate.minute = minute - hours * 60;
        objDate.hours = hours - day * 24; 
        objDate.day = day - month * 30;
        objDate.month = month - year * 12;
        //did it from the first,but when one of the specified ones was 0, it returned NaN. So rewrote.
        //     objDate.month = month % year;
        //     objDate.day = day % month;
        //     objDate.hours = hours % day;  
        //     objDate.minute = minute % hours;
        //     objDate.second = second % minute;
    } else {
        console.log('not found');
    }
    console.log(objDate);
}
const inPut = 234523;
calculateDate(inPut);