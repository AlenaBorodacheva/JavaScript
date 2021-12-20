'use strict'

// Пыталась добавить функции через импорт - не получилось.

/**
 * Функция складывает два переданных числа.
 * @param {number} num1 Первое слагаемое.
 * @param {number} num2 Второе слагаемое.
 * @return {number} Результат сложения двух чисел. 
 */
function Addition (num1, num2)
{
    return num1 + num2;
}

/**
 * Функция вычитает из первого переданного числа второе переданное число.
 * @param {number} num1 Уменьшаемое.
 * @param {number} num2 Вычитаемое.
 * @returns {number} Результат разности двух чисел.
 */
function Subtraction (num1, num2)
{
    return num1 - num2;
}

/**
 * Функция умножает два переданных числа.
 * @param {number} num1 Первый множитель.
 * @param {number} num2 Второй множитель.
 * @returns {number} Результат произведения двух чисел.
 */
const Multiplication = function(num1, num2) 
{
    return num1 * num2;
}

/**
 * Функция делит первое переданное число на второе переданное число.
 * @param {number} num1 Делимое.
 * @param {number} num2 Делитель.
 * @returns {number} Результат частного двух чисел.
 */
const Division = (num1, num2) => 
{
    return num1 / num2;
}

/**
 * Функция выполняет одну из переданных арифметических операций.
 * @param {number} arg1 Первое значение аргумента.
 * @param {number} arg2 Второе значение аргумента.
 * @param {*} operation Строка с названием операции. 
 * @returns {number} Результат вычисления. 
 */
function MathOperation(arg1, arg2, operation)
{
    let result = null;
    operation = operation.toLowerCase();
    switch(operation)
    {
        case "сумма":
            result = Addition(arg1, arg2);
            break;
        case "разность":
            result = Subtraction(arg1, arg2);
            break;
        case "умножение":
            result = Multiplication(arg1, arg2);
            break;
        case "деление":
            result = Division(arg1, arg2);
            break;
        default:
            throw new Error("Неверное название операции: " + operation);
    }
    return result;
}

let arg1 = Number(prompt("Введите первое число: "));
let arg2 = Number(prompt("Введите второе число: "));
let operation = prompt("Введите название операции (сумма, разность, умножение, деление): ");
alert("Результат: " + MathOperation(arg1, arg2, operation));