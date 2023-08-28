const { Sequelize,DataTypes } = require('sequelize');
const sequelize = require('../database');

const MedDetails = sequelize.define('meddetails', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dosageForm: {
      type: DataTypes.STRING,
      allowNull: false
    },
    packingForm: {
      type: DataTypes.STRING,
      allowNull: false
    },
    packingDisplay: {
      type: DataTypes.STRING,
      allowNull: false
    },
    packingSize: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    care: {
      type: DataTypes.STRING,
      defaultValue: 'false'
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false
    },
    saltGroup: {
      type: DataTypes.STRING,
      allowNull: false
    },
    conditions: {
      type: DataTypes.STRING,
      allowNull: false
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mrp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    discount: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tax: {
      type: DataTypes.STRING,
      allowNull: false
    },
    superSpeciality: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hsn: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prescription: {
      type: DataTypes.STRING,
      defaultValue: 'false'
    },
    abcd: {
      type: DataTypes.STRING,
      allowNull: false
    },
    visibility: {
      type: DataTypes.STRING,
      defaultValue: 'false'
    },
    stock: {
      type: DataTypes.STRING,
      defaultValue: 'false'
    }
  }, {
    timestamps: true,
  });
  
  module.exports = MedDetails;