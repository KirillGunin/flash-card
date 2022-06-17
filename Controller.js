class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
  }

  async run() {
    const listThemes = await this.model.getThemes()
    let themesUsersChoosed;
    let score = 0;

    do {
      menu = await this.view.getThemes(themesList)
      if (menu === 'Выход') {
        this.view.close()
        return
      }
    }
    while (!this.checkThemes(listThemes, themesUsersChoosed))
    const questions = await this.model.getQuestionsAnswer(themesUsersChoosed);
    for (let arrQuestion of questions) {
      let userAnswer = await this.view.getAnswer(arrQuestion.question)
      this.view.viewResult(userAnswer.toLowerCase() == arrQuestion.answers)
      if (userAnswer.toLowerCase() == arrQuestion.answers) {
        score += 10
      } else {
        score -= 10
      }
    }

    const isNewGame = await this.view.showFinalResult(score)
    if (isNewGame.toLowerCase() === 'да') {
      this.run()
    } else {
      this.view.showEnd()
    }
  }

  checkThemes(listThemes, themesUsersChoosed) {
    return +themesUsersChoosed <= listThemes.length && +themesUsersChoosed > 0
  }

}

module.exports = Controller
