const { Sequelize } = require('sequelize');

const db = new Sequelize('hresendizsuarez_nft', '264748', 'Hr300820A', {
  host: 'mysql-hresendizsuarez.alwaysdata.net',
  dialect: 'mysql',
  logging: false,
});

const dbConnect = async () => {
  try {
    await db.authenticate();
    console.log('!DB online!');
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
    db,
    dbConnect
};
