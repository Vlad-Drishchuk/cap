const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});

exports.getBoard = onRequest((request, response) => {
    try {
        response.set('Access-Control-Allow-Origin', 'https://capernaum-ua.web.app');
        response.set('Access-Control-Allow-Methods', 'GET, POST');
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

                if (number) {
                    response.send(JSON.stringify({ data: number }));
                } else {
                    response.send(JSON.stringify({ data: 0 }));
                }
            });
    } catch (e) {
        console.error("Error getting selled socks", e);
    }
});

// const {google} = require("googleapis");

// exports.getBoard = onRequest(async (req, res) => {
//   // This automatically uses the Firebase service account credentials
//   const auth = new google.auth.GoogleAuth({
//     scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
//   });

//   const sheets = google.sheets({version: "v4", auth});

//   try {
//     const range = "Sheet1!B9";
//     const response = await sheets.spreadsheets.values.get({
//       spreadsheetId: "1Fm_1Voawd6W3mJfFY-9i6tkYQ0GcPZ83CP8yai31J0g",
//       range: range,
//     });
//     res.send(response.data);
//   } catch (err) {
//     console.error("The API returned an error: " + err);
//     res.status(500).send(err);
//   }
// });
