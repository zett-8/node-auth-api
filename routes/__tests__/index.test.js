const request = require('supertest')
const app = require('../../app')
const sequelize = require('../../models').sequelize

const reset = () => {
  sequelize.query(`DELETE FROM Genres`)
  sequelize.query(`DELETE FROM Articles`)
  sequelize.query(`DELETE FROM Tags`)
  sequelize.query(`DELETE FROM ArcTags`)
  sequelize.query(`DELETE FROM Users`)
}

describe('protected route', () => {
  reset()

  let cookie
  let token

  it('unauthorized', () => {
    request(app)
      .get('/api/genre')
      .then(res => expect(res.statusCode).toEqual(401))
  })

  it('authorized after login', async () => {
    await request(app)
      .post('/users/signup')
      .send({ email: 'admin', password: 'admin'})

    const res = await request(app)
      .post('/users/login')
      .send({ email: 'admin', password: 'admin'})

    cookie = res.headers['set-cookie']
    token = res.body.token

    await request(app)
      .get('/api/genre?token='+token)
      .set('cookie', cookie)
      .then(res => expect(res.statusCode).toEqual(200))
  })

  it('create', async () => {
    const res = await request(app)
      .post('/api/genre?token='+token)
      .set('cookie', cookie)
      .send({
        genre_name: 'test'
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body.genre_name).toEqual('test')
  })

  it('get', async () => {
    const res = await request(app).get('/api/genre?token='+token).set('cookie', cookie)
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveLength(1)
  })
})
