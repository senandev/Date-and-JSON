//2. Написать функцию, которая принимает один числовой параметр - количество секунд.
// Функция должна каждую секунду выводить в консоль корректное время в формате ЧАСЫ : МИНУТЫ : СЕКУНДЫ. 
//Если одно из этих значений меньше 10, то выводится 0 перед значением. Например 09, 08 и т.д. 
//Функция выводит это в консоль в течение того времени, которое мы определяем через параметр.
// Например, если вызвать функцию и отправить туда 10, то вывод будет такой, как на вложенной картинке (рис.1) в течении 10 секунд.
// Вывод происходит каждую секунду, а не одновременно. Нельзя пользоваться setTimeout, setInterval или темами, которые мы еще не прошли.
// Можно использовать объект Date и работать с ним. 
//Можете также упомянутый пример посмотреть на видео, которое во вложении (рис.2)

let date = Date.now() + 1000;

function DateSet(timecount) {
    const counter = timecount;
    const plusCounter = 2 * timecount;
    for (let i = 0; i < counter;) {
        if (timecount < plusCounter) {
            if (Date.now() > date) {
                timecount++;
                let date2 = new Date();
                console.log('Time: ' + String(date2.getHours()).padStart(2, '0') + ':' + String(date2.getMinutes()).padStart(2, '0') + ':' + String(date2.getSeconds()).padStart(2, '0'))
                date = Date.now() + 1000;
            }
        } else {
            console.log(`Timer stopped after ${timecount/2}`);
            break;
        }
    }
}
const inPut = 5;
DateSet(inPut);
//Samir eto bila ocen slojno iz za zanatosti ,no ya postaralsa kak to osuwestvit ego.Da kod ocen ne citabelniy no eto vse cto ya mog pridumat)).
//Esli budet vrema budu rad posluwat kak sdelat