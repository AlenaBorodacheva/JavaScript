'use strict'
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

let a = Number(prompt("Введите первое число: "));
let b = Number(prompt("Введите второе число: "));

alert("Сумма: "+ Addition(a, b) + "\n" +
"Разность: " + Subtraction(a, b) + "\n" +
"Произведение: " + Multiplication(a, b) + "\n" +
"Частное: " + Division(a, b))