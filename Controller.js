class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
  }

  async run() {
    const themesList = await this.model.getThemes()
    let menu;
    let numberOfMenu = 0;

    do {
      menu = await this.view.getThemes(themesList)
      if (menu === 'Выход') {
        this.view.close()
        return
      }
    } 
    while ();

  }



    // Просим экземпляр класса модели прочитать папку со всеми темами и составить меню.
    // Попутно передаем метод контроллера this.printTopicsController,
    // так как нам нужно отправить сформинованное меню на вывод в экземпляр класса view
    // после того, как завершится асинхронная операция чтения папки
    // Здесь this.printTopicsController — является callback'ом  
    //this.model.readTopics(this.printTopicsController)
  }

// printTopicsController(topicsMenu) {
//   // Тут нужно попросить экземпляр класса view вывести меню пользователю, 
//   // а также дождаться ответа последнего
// }


}

module.exports = Controller
