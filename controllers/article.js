const Genre = require('../models').Genre
const Article = require('../models').Article
const Tag = require('../models').Tag

module.exports = {
  list(req, res) {
    return Article
      .findAll()
      .then(articles => res.status(200).send(articles))
      .catch(() => res.status(400).send({
        message: 'Not found'
      }))
  },

  withChildren(req, res) {
    return Article
      .findAll({
        include: [{
          model: Genre,
          as: 'genre'
        },{
          model: Tag,
          as: 'tags'
        }]
      })
      .then(articles => res.status(200).send(articles))
      .catch(() => res.status(400).send({
        message: 'Not found'
      }))
  },

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
