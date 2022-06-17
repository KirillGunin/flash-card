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


}

// const model = new Model ('./topics')
// model.getThemes()
//   .then((data)=> console.log(data))

module.exports = Model