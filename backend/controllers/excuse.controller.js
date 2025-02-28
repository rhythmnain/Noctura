const excuses = require("../utils/excuseGenerator");

exports.getRandomExcuse = (req, res) => {
  const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
  res.json({ excuse: randomExcuse });
};
