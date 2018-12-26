module.exports = function(sequelize, DataTypes) {
  var brewDB = sequelize.define(
    "breweries",
    {
      breweryName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      region: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fullAddress: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fullDescription: {
        type: DataTypes.STRING,
        allowNull: false
      },
      website: {
        type: DataTypes.STRING,
        allowNull: false
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      latitude: {
        type: DataTypes.STRING,
        allowNull: false
      },
      longitude: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );

  return brewDB;
};

// sequelize.query("SELECT * FROM breweries").then(myTableRows => {
//   console.log(myTableRows);
// });
// return brewDB;

// var brewDB = sequelize.query("SELECT * FROM breweries").then(myTableRows => {
//   console.log(myTableRows);
// });
// return brewDB;

// module.exports = function(sequelize, DataTypes) {
//   var Example = sequelize.define("Example", {
//     text: DataTypes.STRING,
//     description: DataTypes.TEXT
//   });
//   return Example;
// };
