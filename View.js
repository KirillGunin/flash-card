const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

class showQuiz {
  getTopics(arrayOfTopics) {
    return new Promise((resolve) => {
      console.clear();
      console.log('💖QUIZ WITH LOVE FROM ELBRUS💖');
      console.log('LET\'S GO!');
      console.log('\n');
      console.log('⏪1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟⏩');
      console.log('\n');
      console.log('Темы вопросов:');

      console.log(arrayOfTopics.map((topic, index) => `${index + 1}. ${topic}`).join('\n'));

      readline.question('\nВыбери тему, затем введи число или напиши Отмена): ', (chosenTopic) => {
        resolve(chosenTopic);
        // readline.close()
      });
    });
  }

  showQuestion(question) {
    return new Promise((resolve) => {
      console.log('❓❔❓❔❓❔❓❔❓❔❓❔❓❔❓❔');
      console.log(`\n${question}`);
      readline.question('\nВведи ответ: ', (userAnswer) => {
        resolve(userAnswer);
      });
    });
  }

  showResults(result) {
    console.log(' 🥳 🎉 🎊🥳 🎉 🎊🥳 🎉 🎊', '\nОТЛИЧНАЯ ИГРА!\n', ' 🥳 🎉 🎊🥳 🎉 🎊🥳 🎉 🎊');
    console.log(`\n💪💪💪ТВОЙ РЕЗУЛЬТАТ: ${result} баллов!💪💪💪`);
    readline.close();
  }

  showEnd() {
    console.log('\n😐😐😐Понято, принято!😐😐😐\n');
    readline.close();
  }

  showFinalResult(finalResult) {
    console.log(`\n🎉🎉🎉ПОЗДРАВЛЯЮ!🎉🎉🎉\n
ВИКТОРИНА ЗАКОНЧЕНА.`);
    console.log(`\n💪💪💪ТВОЙ РЕЗУЛЬТАТ: ${finalResult} баллов!💪💪💪`);
    return new Promise((resolve) => {
      readline.question('\n🙂🙂🙂Cыграем еще раз? Введи ДА если согласен/на:🙂🙂🙂\n\n', (userAnswer) => {
        resolve(userAnswer);
      });
    });
  }

  viewResult(userAnswer, correctAnswer) {
    if (userAnswer) {
      console.log('🔥🔥🔥Это верный ответ! +100 баллов🔥🔥🔥');
    } else {
      console.log('🤡🤡🤡Неверный ответ! -100 баллов🤡🤡🤡');
      console.log(`\nПравильный ответ: ${rightAnswer}`);
    }
    return new Promise((resolve) => {
      readline.question('\n😃😃😃Хотите сыграть еще? Введите ДА если согласны: 😃😃😃\n\n', (user_answer) => {
        resolve(user_answer);
      });
    });
  }

  viewClose() {
    console.log('Всего хорошего!!!!!!!');
    readline.close();
  }
}

module.exports = showQuiz;
