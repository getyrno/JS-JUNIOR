/**
 * Полное руководство по функциям для Junior JS Developer
 *
 * Глава: Дополнительные аспекты
 * Подглава: Замыкания
 */

/**
 * Введение
 *
 * Замыкания (Closures) в JavaScript позволяют функции запоминать область видимости, в которой
 * она была создана, даже после того, как эта область видимости перестала существовать.
 * Это делает возможным создание функций с "приватными" переменными и реализацию различных
 * функциональных паттернов.
 */

/**
 * Основы замыканий
 *
 * Замыкание создается, когда внутренняя функция имеет доступ к переменным из внешней функции
 * даже после завершения выполнения внешней функции.
 *
 * Пример:
 */
function outerFunction() {
    let outerVariable = 'Я внешняя переменная';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction(); // Вывод: Я внешняя переменная

/**
 * Приватные переменные с использованием замыканий
 *
 * Замыкания позволяют создавать функции с "приватными" переменными, которые не доступны
 * вне функции.
 *
 * Пример:
 */
function createCounter() {
    let count = 0;

    return function() {
        count += 1;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Вывод: 1
console.log(counter()); // Вывод: 2
console.log(counter()); // Вывод: 3

/**
 * Использование замыканий в циклах
 *
 * Замыкания могут быть полезны для сохранения значений переменных в циклах.
 *
 * Пример:
 */
function createFunctions() {
    let functions = [];

    for (let i = 0; i < 3; i++) {
        functions.push(function() {
            return i;
        });
    }

    return functions;
}

const funcs = createFunctions();
console.log(funcs[0]()); // Вывод: 0
console.log(funcs[1]()); // Вывод: 1
console.log(funcs[2]()); // Вывод: 2

/**
 * Использование замыканий для создания модулей
 *
 * Замыкания могут быть использованы для реализации модульного паттерна, где данные и методы
 * инкапсулированы внутри функции.
 *
 * Пример:
 */
const Module = (function() {
    let privateVariable = 'Приватная переменная';

    function privateMethod() {
        console.log(privateVariable);
    }

    return {
        publicMethod: function() {
            privateMethod();
        }
    };
})();

Module.publicMethod(); // Вывод: Приватная переменная

/**
 * Пример замыкания с функцией высшего порядка
 *
 * Замыкания часто используются в функциях высшего порядка для создания специализированных функций.
 *
 * Пример:
 */
function createAdder(x) {
    return function(y) {
        return x + y;
    };
}

const add5 = createAdder(5);
console.log(add5(10)); // Вывод: 15

/**
 * Заключение
 *
 * Замыкания являются мощным инструментом в JavaScript, который позволяет создавать функции с
 * приватными переменными и реализовывать различные функциональные паттерны. Понимание замыканий
 * помогает писать более эффективный и безопасный код.
 */