const config = require('../config.json');

function getUrlPillow() {
  let url;
  url = config.url.webPillow;
  return url;
}

function getUrlTravel() {
  let url;
  url = config.url.webTravel;
  return url;
}

module.exports = {
  getUrlPillow: getUrlPillow,
  getUrlTravel: getUrlTravel
}