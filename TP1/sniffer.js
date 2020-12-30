const fetch = require("node-fetch");

module.exports = async (app) => {
  for (let i = 3000; i <= 4000; i++) {
    const response = await fetch(`http://localhost:${i}/ping`).catch(() =>
      console.log(`sniffing: ${i} is inactive`)
    );

    if (response) {
      console.log(`sniffing: ${i} is an active port`);
      break;
    }
  }
};
