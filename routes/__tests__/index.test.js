const request = require('supertest')
const app = require('../../app')
const sequelize = require('../../models').sequelize

beforeEach(() => {
  sequelize.query(`DELETE FROM Genres`)
  sequelize.query(`DELETE FROM Articles`)
  sequelize.query(`DELETE FROM Tags`)
  sequelize.query(`DELETE FROM ArcTags`)
})

describe('route test', () => {
  it('create', async () => {
    const res = await request(app).post('/api/genre').send({
      genre_name: 'test'
    })
    expect(res.statusCode).toEqual(200)
    expect(res.body.genre_name).toEqual('test')
  })

  it('get', async () => {
    const res = await request(app).get('/api/genre')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveLength(0)
  })
})
