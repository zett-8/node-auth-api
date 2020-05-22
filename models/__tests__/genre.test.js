const Genre = require('../').Genre

describe('Genre model', () => {
  beforeEach(() => Genre.destroy({ truncate: true }))

  it('create test', async () => {
    const current = await Genre.findAll()
    expect(current).toHaveLength(0)

    await Genre.create({ genre_name: 'test' })
    const genres = await Genre.findAll()
    expect(genres).toHaveLength(1)
    expect(genres[0].genre_name).toBe('test')
  })

  it('modify test', async () => {
    await Genre.create({ genre_name: 'test' })
    await Genre
      .findOne({ where: { genre_name: 'test' }})
      .then(genre => genre.update({ genre_name: 'modified' }))

    const modifiedGenre = await Genre.findAll()
    expect(modifiedGenre[0].genre_name).toBe('modified')
  })

  it('delete test', async () => {
    await Genre.create({ genre_name: 'test' })
    await Genre.findOne({ where: { genre_name: 'test'}}).then(genre => genre.destroy())

    const genres = await Genre.findAll()
    expect(genres).toHaveLength(0)
  })
})
