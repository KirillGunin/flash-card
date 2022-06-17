class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
  }

  async run() {
    const listThemes = await this.model.getThemes()
    let themesUsersChoosed;
    let numberOfMenu = 0;

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
      let userAnswer = await this.view.getAnswer(arrQuestion.answer)
    }

  }
  checkThemes(listThemes, themesUsersChoosed) {
    return +themesUsersChoosed <= listThemes.length && +themesUsersChoosed > 0
  }

}

module.exports = Controller
