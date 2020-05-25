const reset = require('./_reset')
const Genre = require('../').Genre

describe('Genre model', () => {
  beforeEach(() => reset())
  it('create test', async () => {
    const current = await Genre.findAll()
    expect(current).toHaveLength(0)

    await Genre.create({ genre_name: 'test' })
    const genres = await Genre.findAll()
    expect(genres).toHaveLength(1)
    expect(genres[0].genre_name).toBe('test')
  })

  it('modify test', async () => {
    const genre = await Genre.create({ genre_name: 'test' })
    const genre_modified = await Genre.findOne({ where: { genre_name: 'test' } }).then((genre) =>
      genre.update({ genre_name: 'modified' })
    )

    // const modifiedGenre = await Genre.findAll()
    expect(genre_modified.genre_name).toBe('modified')
    expect(genre.updatedAt).not.toEqual(genre_modified.updatedAt)
  })

  it('delete test', async () => {
    await Genre.create({ genre_name: 'test' })
    await Genre.findOne({ where: { genre_name: 'test' } }).then((genre) => genre.destroy())

    const genres = await Genre.findAll()
    expect(genres).toHaveLength(0)
  })
})
