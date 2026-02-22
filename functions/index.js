const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.getBoard = onRequest((request, response) => {
  response.set("Access-Control-Allow-Origin", "https://capernaum-ua.web.app");
  response.set("Access-Control-Allow-Methods", "GET, POST");
  try {
    const documentId = "1Fm_1Voawd6W3mJfFY-9i6tkYQ0GcPZ83CP8yai31J0g";
    const apiKey = process.env.API_KEY_VLAD;
    const RANGE = "B9";

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${documentId}/values/${RANGE}?key=${apiKey}`;
    const options = {};
    fetch(url, options)
        .then((data) => data.json())
        .then((data) => {
          console.log(data, "data");
          const number = data && data.values && data.values[0][0];
          console.log(number, "fetched data from doc");

          if (!Number.isNaN(number)) {
            response.send(number);
          } else {
            response.send(0);
          }
        });
  } catch (e) {
    console.error("Error getting selled socks", e);
  }
});
