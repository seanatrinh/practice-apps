const mongoose = require("mongoose");
// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Successfully connected to mongoDB');
});

const glossarySchema = new mongoose.Schema({
  word: {type: String, unique: true},
  definition: String
});

const Glossary = mongoose.model('Glossary', glossarySchema);

module.exports = {
  Glossary: Glossary,
  save: function(reqObj) {
    const document = new Glossary({
      word: reqObj.word,
      definition: reqObj.definition
    })
    document.save();
  }
};
