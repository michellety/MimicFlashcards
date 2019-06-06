const router = require("express").Router();
const {Translate} = require('@google-cloud/translate');

// Matches with "/api/translate"
router.route("/")
 
  .post(async function (req, res) {
      console.log(req.body)
    // Imports the Google Cloud client library
   const projectId = "mimics-1559792721626";
      
    const { text, target } = req.body;
    // Instantiates a client
    const translate = new Translate({projectId});
      
    // Translates user enterd text into the targeted language selected by the radio button
    const [translation] = await translate.translate(text, target);
    res.json(translation);
  });

module.exports = router;
