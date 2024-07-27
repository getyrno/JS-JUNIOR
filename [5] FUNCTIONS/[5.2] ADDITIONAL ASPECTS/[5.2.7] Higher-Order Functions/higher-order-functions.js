/**
 * Полное руководство по функциям для Junior JS Developer
 *
 * Глава: Дополнительные аспекты
 * Подглава: Функции высшего порядка
 */

/**
 * Введение
 *
 * Функции высшего порядка (Higher-Order Functions) - это функции, которые могут принимать другие функции
 * в качестве аргументов или возвращать функции в качестве результатов. Они являются основным элементом
 * функционального программирования и позволяют создавать более абстрактный и гибкий код.
 */

/**
 * Функции высшего порядка, принимающие функции в качестве аргументов
 *
 * Такие функции могут обрабатывать другие функции и вызывать их по мере необходимости.
 *
 * Пример:
 */
function applyOperation(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(applyOperation(5, 3, add)); // Вывод: 8
console.log(applyOperation(5, 3, multiply)); // Вывод: 15

/**
 * Функции высшего порядка, возвращающие функции
 *
 * Такие функции создают и возвращают новые функции, позволяя создавать специализированные функции.
 *
 * Пример:
 */
function createMultiplier(multiplier) {
    return function(num) {
        return num * multiplier;
    };
}

const double = createMultiplier(2);
console.log(double(5)); // Вывод: 10

const triple = createMultiplier(3);
console.log(triple(5)); // Вывод: 15

/**
 * Использование функций высшего порядка с массивами
 *
 * В JavaScript есть несколько встроенных функций высшего порядка для работы с массивами, таких как `map`,
 * `filter` и `reduce`.
 *
 * Примеры:
 */

// `map` для преобразования элементов массива
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Вывод: [2, 4, 6, 8, 10]

// `filter` для фильтрации элементов массива
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Вывод: [2, 4]

// `reduce` для агрегирования значений массива
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Вывод: 15

/**
 * Каррирование (Currying)
 *
 * Каррирование - это техника, когда функция, которая принимает несколько аргументов, преобразуется
 * в последовательность функций, каждая из которых принимает один аргумент. Это позволяет создавать
 * более специализированные и гибкие функции.
 *
 * Пример:
 */
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

function sumThree(a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sumThree);

console.log(curriedSum(1)(2)(3)); // Вывод: 6
console.log(curriedSum(1, 2)(3)); // Вывод: 6
console.log(curriedSum(1, 2, 3)); // Вывод: 6

/**
 * Заключение
 *
 * Функции высшего порядка предоставляют мощный способ абстрагирования и обобщения кода в JavaScript.
 * Понимание их использования помогает писать более чистый, гибкий и переиспользуемый код.
 */