//3. Написать функцию, которая принимает нынешнюю дату и возвращает объекты таким образом,
// чтобы я мог по цепочке вызвать следующий метод и настроить отправленную мной первоначально дату (год, месяц и т.д.).
// Конкретный пример можно посмотреть на приложенной картинке (рис.3). 
//Если я не отправляю никакого значения, то у меня должно остаться нынешнее значение. 
//То есть если я в метод года ничего не отправлю, то год остается 2022
//function setDate(){
function SetDate(date = new Date()) {
    return {

        year(year = date.getFullYear()) {
            const year2 = date.setFullYear(year);

            return {
                month(month = date.getMonth()) {
                    const month2 = date.setMonth(month - 1);
                    return {
                        day(day = date.getDate()) {
                            const day2 = date.setDate(day);
                            return {
                                hour(hour = date.getHours()) {
                                    const hour2 = date.setHours(hour);
                                    return {
                                        minute(minute = date.getMinutes()) {
                                            const minute2 = date.setMinutes(minute);
                                            return {
                                                second(second = date.getSeconds()) {
                                                    const second2 = date.setSeconds(second);
                                                    return year2, month2, day2, hour2, minute2, second2;

                                                }

                                            };

                                        },
                                    };

                                },

                            };
                        },
                    };
                },

            };
        },
    };
}
const date = new Date();
SetDate(date).year(1995).month(12).day(2).hour(23).minute(12).second(34);
console.log(date);