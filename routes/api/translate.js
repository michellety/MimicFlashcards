const router = require("express").Router();
const {Translate} = require('@google-cloud/translate');

// Matches with "/api/translate"
router.route("/")
 
  .post(async function (req, res) {
      console.log(req.body)
    // Imports the Google Cloud client library
   const projectId = 'mimic-1559172589981';
      
    const { text, target } = req.body;
    // Instantiates a client
    const translate = new Translate({projectId});
      
    // Translates some text into the targeted language 
    const [translation] = await translate.translate(text, target);
    res.json(translation);
    // console.log(translation);
  });

module.exports = router;
