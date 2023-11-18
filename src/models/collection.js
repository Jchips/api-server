'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async create(json) {
    // creates a new model instance
    try {
      const record = await this.model.create(json);
      return record;
    } catch (err) {
      console.error('error in collection');
      return err;
    }
  }

  // id as a default parameter equals null
  async read(id = null) {
    // fetches all model instances or perhaps one model.
    try {
      if(!id) {
        const records = await this.model.findAll();
        return records;
      } else {
        const record = await this.model.findOne({
          where: {
            id: id,
          },
        });
        return record;
      }
    } catch (err) {
      console.error('error in collection');
      return err;
    }
  }

  async update(json, id) {
    // updates a model instance in our SQL database
    try {
      const updatedFood = await this.model.update(json, {
        where: {
          id: id,
        },
        returning: true,
        plain: true,
      });
      return updatedFood;
    } catch (err) {
      console.error('error in collection');
      return err;
    }
  }

  async delete(id) {
    // removes a model instance from SQL database
    try {
      await this.model.destroy({
        where: {
          id: id,
        },
      });
      return 'deleted record';
    } catch (err) {
      console.error('error in collection');
      return err;
    }
  }
}

module.exports = Collection;