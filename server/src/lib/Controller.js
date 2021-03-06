const { MagicError } = require("../lib/ErrorHandler");

class Controller {
  constructor(model) {
    this.model = model;
    this.error = MagicError;

    this.index = this.index.bind(this);
    this.create = this.create.bind(this);
    this.show = this.show.bind(this);
    this.update = this.update.bind(this);
    this.destroy = this.destroy.bind(this);
  }

  async index(req, res, next) {
    try {
      const data = await this.model.fetchAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const data = [];
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  async show(req, res, next) {
    try {
      const data = [];
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const data = [];
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  async destroy(req, res, next) {
    try {
      const { id } = req.params;
      await this.model.where({ id: Number(id) }).destroy();
      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
