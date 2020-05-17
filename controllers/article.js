const Genre = require('../models').Genre
const Article = require('../models').Article
const Tag = require('../models').Tag

module.exports = {
  add(req, res) {
    return Article
      .create({
        article_name: req.body.article_name,
        article_content: req.body.article_content,
        genre_id: req.body.genre_id
      })
      .then(article => res.status(201).send(article))
      .catch(error => res.status(400).send(error))
  }
}
