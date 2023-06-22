const TalleresDAO = require('../models/dao/talleresDAO')

class TalleresController {
  constructor(db) {
    this.talleresDao = new TalleresDAO(db);
    this.renderHome = this.renderHome.bind(this);
    //this.renderSingleTalleres = this.renderSingleTalleres.bind(this);
    //this.renderTalleresCreationForm = this.renderArticleCreationForm.bind(this)
    //this.renderTalleresCreationForm.bind(this);
    //this.renderTalleresUpdateForm = this.renderTalleresUpdateForm.bind(this);
    //this.insertAndRenderTalleres = this.insertAndRenderTalleres.bind(this);
    //this.updateAndRenderTalleres = this.updateAndRenderTalleres.bind(this);
    //this.deleteTalleresAndRenderResponse =
    //this.deleteTalleresAndRenderResponse.bind(this);
    this.renderTalleres = this.renderTalleres.bind(this);
  }

  renderHome(req, res) {
    res.render("index");
  }

  
  async renderTalleres(req, res) {
    const talleres = await this.talleresDao.getAll();
    res.render("taller", {
      talleres
    });
  }
}

module.exports = TalleresController 