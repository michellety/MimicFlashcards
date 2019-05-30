async function quickstart(
    projectId = "mimic-1559172589981" // Your GCP Project Id
) {
    // Imports the Google Cloud client library
    const { Translate } = require('@google-cloud/translate');

    // Instantiates a client
    const translate = new Translate({ projectId });

    // The text to translate
    //the value of the input form, word
    const text = 'Hello, world!';

    // The target language
    // target will equal the value of the radio button selected
    const target = 'es';

    // Translates some text into spanish
    const [translation] = await translate.translate(text, target);
    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
};
