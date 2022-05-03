//4. Написать функцию внутри объекта, которая выполняет работу JSON.stringify. 
//При отправлении туда объекта или примитивных значений превращает все это в формат JSON. Нельзя пользоваться JSON.stringify / JSON.parse.
// При отправке объекта предполагаем, что внутри будут только примитивные значения (boolean, number, string, undefined, null), методы и вложенные объекты не будут проверяться! 
//Функция должна возвращать строку и при выводе в консоль должен выходить одинаковый результат с методом stringify объекта JSON. 
//Пример вызова функции и ее вывода можете увидеть в приложенной картинке (рис.4)
function StringifyJSON(obj){
    
    let jsonString = "";
    for (const prop in obj) {
        if(obj[prop] == undefined){
            continue;
        }
        typeof obj[prop] === 'string' ? jsonString += `\"${prop}\":\"${obj[prop]}\",` : jsonString += `\"${prop}\": ${obj[prop]},`
    }
    console.log(`{${jsonString.substring(0,jsonString.length-1)}}`);
}
const obj = {
    name: 'Senan',
    age: 28,
    12: false,
    13: undefined
}
StringifyJSON(obj);