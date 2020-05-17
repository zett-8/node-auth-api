const Genre = require('../models').Genre
const Article = require('../models').Article

module.exports = {
  list(req, res) {
    return Genre
      .findAll({
        include: [{
          model: Article,
          as: 'articles'
        }]
      })
      .then(genre => res.status(200).send(genre))
      .catch(error => res.status(400).send(error))
  },

  add(req, res) {
    return Genre
      .create({
        genre_name: req.body.genre_name
      })
      .then(genre => res.status(200).send(genre))
      .catch(error => res.status(400).send(error))
  },

  delete(req, res) {
    return Genre
      .findByPk(req.params.id)
      .then(genre => {
        if (!genre) {
          return res.status(400).send({
            message: 'not found'
          })
        }
        return genre
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error))
      })
  }
}
