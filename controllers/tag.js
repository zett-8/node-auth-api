const Tag = require('../models').Tag

module.exports = {
  list(req, res) {
    return Tag.findAll()
      .then((tags) => res.status(200).send(tags))
      .catch(() =>
        res.status(400).send({
          message: 'Not found',
        })
      )
  },

  add(req, res) {
    return Tag.create({
      tag_name: req.body.tag_name,
    })
      .then((tag) => res.status(200).send(tag))
      .catch((error) =>
        req.status(400).send({
          message: error,
        })
      )
  },
}
