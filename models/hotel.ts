const { getSequelize, DataTypes} = require("./dbClient.ts")

const { BIGINT, STRING } = DataTypes;

const sequelize = getSequelize();

export const Hotel = sequelize.define("Hotel", {
  id: {
    type: BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  location: {
    type: STRING,
    allowNull: false
  }
},
  {
    tableName: "hotels",
    timestamps: false
  }
);

// export {
//   Hotel
// }

module.exports = {
  Hotel
}