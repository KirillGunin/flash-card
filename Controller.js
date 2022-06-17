class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async run() {
    const listThemes = await this.model.getThemes();
    let themesUsersChoosed;
    let score = 0;

    do {
      themesUsersChoosed = await this.view.getTopics(listThemes);
      if (themesUsersChoosed === 'Отмена') {
        this.view.viewClose()
        return;
      }
    }
    while (!this.checkThemes(listThemes, themesUsersChoosed));

    const questions = await this.model.getFiles(themesUsersChoosed);

    for (let arrQuestion of questions) {
      let userAnswer = await this.view.showQuestion(arrQuestion.question)

      this.view.viewResult(userAnswer.toLowerCase() == arrQuestion.answer.toLowerCase(), arrQuestion.answer);

      if (userAnswer.toLowerCase() == arrQuestion.answer.toLowerCase()) {
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
    return +themesUsersChoosed <= listThemes.length && +themesUsersChoosed > 0;
  }

}

module.exports = Controller;
