'use strict'

const questions = [
    "Какой город объявлен официальной родиной русского Деда Мороза?",
    "Что проводит боксер, наносящий удар противнику снизу?",
    "К кому первому обратились за помощью дед и бабка, не справившись с репкой?",
    "Кого нет среди смешариков?",
    "Как называется ближайшая к Земле звезда?"
];

class Answer
{
    constructor(text, isTrue)
    {
        this.text = text;
        this.isTrue = isTrue;
    }
}

const answers = [
    [
        new Answer("Малая Вишера", false), 
        new Answer("Великий Устюг", true), 
        new Answer("Вышний Волочек", false), 
        new Answer("Нижний Новгород", false)
    ],
    [
        new Answer("Свинг", false), 
        new Answer("Хук", false), 
        new Answer("Джэб", false), 
        new Answer("Апперкот", true)
    ],
    [
        new Answer("К внучке", true), 
        new Answer("К Жучке", false), 
        new Answer("К дочке", false), 
        new Answer("К залу", false)
    ],
    [
        new Answer("Барана", false), 
        new Answer("Коня", true), 
        new Answer("Свиньи", false), 
        new Answer("Лося", false)
    ],
    [
        new Answer("Проксиома Центавра", false), 
        new Answer("Полярная", false), 
        new Answer("Солнце", true), 
        new Answer("Сириус", false)
    ]
];

class Play
{
    constructor(question, answers)
    {
        this.question = question;
        this.answers = answers;
    }
}

let plays = [];

for(let i = 0; i < questions.length; i++)
{
    plays.push(new Play(questions[i], answers[i]));
}