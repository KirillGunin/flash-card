const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

class showQuiz {
  getTopics(arrayOfTopics) {
    return new Promise((res) => {
      console.clear();
      console.log('💖QUIZ WITH LOVE FROM ELBRUS💖');
      console.log('LET\'S GO!');
      console.log('\n');
      console.log('🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴');
      console.log('\n');
      console.log('Темы вопросов:');

      console.log(arrayOfTopics.map((topic, index) => `${index + 1}. ${topic}`).join('\n'));

      readline.question('\nВыберите тему, затем введите число или напишите \'Отмена\'): ', (chosenTopic) => {
        resolve(chosenTopic);
        // readline.close()
      });
    });
  }

  getAnswer(answer) {
    return new Promise((resolve) => {
      console.log('❓❔❓❔❓❔❓❔❓❔❓❔❓❔❓❔');
      readline.question('\n:восклицательный_знак:Введите ответ: ', (userAnswer) => {
        resolve(userAnswer);
      });
    });
  }

//   showResults(result) {
// //     console.log(' 🥳 🎉 🎊🥳 🎉 🎊🥳 🎉 🎊', `\nПОЗДРАВЛЯЮ!\n
// // ВИКТОРИНА ЗАКОНЧЕНА.`, ' 🥳 🎉 🎊🥳 🎉 🎊🥳 🎉 🎊');
//     // console.log('👇', `\nТВОЙ РЕЗУЛЬТАТ: ${result} баллов!`, '💪💪💪💪💪💪💪💪💪💪');
//     readline.close();
//   }

}

module.exports = View;
