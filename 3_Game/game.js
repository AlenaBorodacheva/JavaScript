'use strict'

let game = {
    /**
     * Запускает игру.
     */
    run() {        
        let scope = 0;
        let finish = false;
        for(let i = 0; i < questions.length; i++)
        {
            console.clear();
            console.log(plays[i].question);
            console.log("1. " + plays[i].answers[0].text);
            console.log("2. " + plays[i].answers[1].text);
            console.log("3. " + plays[i].answers[2].text);
            console.log("4. " + plays[i].answers[3].text);

            let rightAnswer = "";
            for(let j = 0; j < 4; j++)
            {
                if(plays[i].answers[j].isTrue)
                {
                    rightAnswer = plays[i].answers[j].text;
                }
            }

            let userAnswer = parseInt(prompt("Введи номер правильного ответа. Для выхода из игры введи 0: "));
            console.log("\n");

            if(userAnswer == 0)
            {
                console.clear();
                alert("До встречи!");
                finish = true;
                break;
            }
            else if(plays[i].answers[userAnswer - 1].isTrue)
            {
                alert("Правильный ответ!");
                scope++;
            }
            else
            {
                alert("Ответ неверный. Правильный ответ: " + rightAnswer);
            }
        }
        if(!finish)
        {
            console.log("Игра окончена! Твой счет: " + scope);
            console.log("Хочешь сыграть заново? Если да, набери game.run() и нажми Enter.");
        }
    },

    // Этот метод выполняется при открытии страницы.
    init() {
        console.log('Привет, дорогой друг! Не хочешь сыграть в игру "Кто хочет стать миллионером"?');
        // Отображаем нашу игру.
        console.log("Чтобы начать игру набери game.run() и нажми Enter.");
    }
};

game.init();