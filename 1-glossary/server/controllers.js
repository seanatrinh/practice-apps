const database = require('./db.js');

module.exports = {
  test: function(req, res) {
    console.log('test')
    res.send({yeet: 'wow'})
  },
  getAllWords: function(req, res) {
    database.Glossary.find({})
      .then(result => res.send(result))
      .catch(error => console.log(error));
  },
  saveWord: function(req, res) {
    database.save(req.body)
    res.send({message: 'Word has been saved to database.'});
  },
  deleteWord: function(req, res) {
    console.log(req.body._id);
    database.Glossary.deleteOne({_id: req.body._id})
      .then(result => res.send(result))
      .catch(error => console.log(error));
  },
  editWord: function(req, res) {
    database.Glossary.updateOne(req.body.filter, req.body.update)
      .then(result => res.send(result))
      .catch(error => console.log(error));

  }

}
