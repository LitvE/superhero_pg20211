'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    static associate(models) {
     
    }
  }
  Superhero.init({
    nickname: DataTypes.STRING,
    real_name: DataTypes.STRING,
    origin_description: DataTypes.STRING,
    superpowers: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    catch_phrase: DataTypes.STRING,
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue:[],
    }
  }, {
    sequelize,
    modelName: 'Superhero',
  });
  return Superhero;
};