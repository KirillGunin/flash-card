const { rejects } = require('assert');
const fs = require('fs');

class Model {
  constructor(path) {
    this.path = path;
    this.arrThemes = []
  }
  
  getThemes () {
    return new Promise((res, rej) => {
      fs.readdir('./topics', ( err, data) => {
        if(err) {
          rej('Не удалось прочитать темы')
        } else {
          this.arrThemes = data;
          res(data.map((el) => this.getFirstWord(el)))
          // console.log(data);
        }
      })
    })
  }

  getFirstWord (word) {
    return word.split('_')[0]
  }

  getFiles(fileNum) {
    return new Promise((resolve, rejects) => {
      for (let i = 0; i < this.arrThemes.length; i++){
      fs.readFile(`${this.path}/${this.arrThemes[i]}${fileNum}`, 'utf-8', (error, files) => {
        if(error) {
          rejects('Не удалось прочить файлы')
        } else {
          // files = files.split('\n\n').map((el) => this.getQuestionAnswer(el))
          resolve(files)
        }

      })
    }
    })
  }

  // getQuestionsAnswer(questions) {
  //   return {
  //     question: questions.split('\n')[0],
  //     answer: questions.split('\n')[1],
  //   }
  // }

}


const model = new Model ('./topics')
// model.getThemes()
//   .then(result => console.log(result))

model.getFiles('_flashcard_data.txt')
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

module.exports = Model