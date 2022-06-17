const fs = require('fs');

class Model {
  constructor(path) {
    this.path = path;
    this.arrThemes = []
  }

  getThemes() {
    return new Promise((res, rej) => {
      fs.readdir('./topics', (err, themes) => {
        if (!err) {
          this.arrThemes = themes;
          res(themes.map((el) => this.getFirstWord(el)));

        } else {
          rej('Не удалось прочитать темы');
        };
      });
    });
  };


  getFiles(fileNum) {
    return new Promise((resolve, rejects) => {
      const fileName = this.arrThemes[fileNum - 1];
      fs.readFile(`${this.path}/${fileName}`, 'utf-8', (error, questions) => {
        if (!error) {
          questions = questions.split('\n\n').map((el) => this.getQuestionsAnswer(el))
          resolve(questions)
        } else {
          rejects('Не удалось прочитать файлы')
        }
      });
    });
  };

  getFirstWord(word) {
    return word.split('_')[0];
  }

  getQuestionsAnswer(questions) {
    return {
      question: questions.split('\n')[0],
      answer: questions.split('\n')[1],
    }
  }
};

// const model = new Model('./topics')
// model.getFiles('./topics/Блатной_flashcard_data.txt')
//   .then((data) => console.log(data))

// model.getThemes()
//   .then(data => console.log(data));

module.exports = Model
