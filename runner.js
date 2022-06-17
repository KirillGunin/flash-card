const Controller = require("./Controller");
const Model = require("./Model");
const showQuiz = require("./View");

const model = new Model('./topics')
const view = new showQuiz()
const controller = new Controller(model, view)

controller.run()
