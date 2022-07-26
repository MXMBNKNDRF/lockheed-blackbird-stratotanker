// Если результат оператора не используется, а нужно только увеличить/уменьшить переменную, 
// тогда без разницы, какую форму использовать:
let counter = 0;
counter++;
++counter;
alert( counter ); // 2, обе строки сделали одно и то же

// Если хочется тут же использовать результат, то нужна префиксная форма
let counter_one = 0;
alert( ++counter_one ); // 1

// Если нужно увеличить и при этом получить значение переменной до увеличения – нужна постфиксная форма
let counter_two = 0;
alert( counter_two++ ); // 0
