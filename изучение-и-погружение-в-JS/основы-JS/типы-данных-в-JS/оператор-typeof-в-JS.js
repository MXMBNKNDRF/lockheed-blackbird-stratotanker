typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

// Результатом вызова typeof null является "object". Это официально признанная ошибка в typeof, ведущая начало с времён 
// создания JavaScript и сохранённая для совместимости. Конечно, null не является объектом. Это специальное значение с
// отдельным типом.
