var firstNumber = "";
var secondNumber = "";
var thirdNumber = "";

const numberElement1 = document.getElementById('number1');
const numberElement2 = document.getElementById('number2');
const numberElement3 = document.getElementById('number3');


const milisecondsInDay = 1000 * 60 * 60 * 24;
const timeZoneOffset = -3 * 60;
const dataAtual = new Date(new Date().getTime() + timeZoneOffset * 60000);
const firstDate = new Date('2024-10-20T00:00:00.000Z');
const principalDate = new Date('2024-11-06T00:00:00.000Z');
const theDay = new Date('2024-10-14T00:00:00.000Z');

const diffPrincipalDays = Math.floor((principalDate - dataAtual) / milisecondsInDay);
const diffFirstDays = Math.floor((firstDate - dataAtual) / milisecondsInDay);
const diffTheDay = Math.floor((theDay - dataAtual) / milisecondsInDay);

firstNumber = Math.abs(diffPrincipalDays).toString() + " Days";
secondNumber = Math.abs(diffFirstDays).toString() + " Days";
thirdNumber = Math.abs(diffTheDay).toString() + " Days";


numberElement1.textContent = firstNumber;
numberElement2.textContent = secondNumber;
numberElement3.textContent = thirdNumber;