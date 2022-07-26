let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;

// Обратные же кавычки имеют расширенную функциональность. Они позволяют нам встраивать выражения в строку, 
// заключая их в ${…}. Например:

let name = "Иван";

// Вставим переменную
alert( `Привет, ${name}!` ); // Привет, Иван!

// Вставим выражение
alert( `результат: ${1 + 2}` ); // результат: 3

// Выражение внутри ${…} вычисляется, и его результат становится частью строки. Мы можем положить туда всё, 
// что угодно: переменную name, или выражение 1 + 2, или что-то более сложное.
