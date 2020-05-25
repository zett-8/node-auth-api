const request = require('supertest')
const reset = require('../../models/__tests__/_reset')
const app = require('../../app')

describe('users route', () => {
  reset()

  const user = {
    email: 'admin1234@gmail.com',
    password: 'admin5678',
  }

  it('create user', async () => {
    const res = await request(app).post('/users/signup').send(user)

    expect(res.statusCode).toEqual(200)
  })

  it('login', async () => {
    await request(app)
      .post('/users/login')
      .send(user)
      .then((res) => expect(res.statusCode).toEqual(200))

    await request(app)
      .post('/users/login')
      .send({
        email: 'admin12',
        password: 'admin12',
      })
      .then((res) => expect(res.statusCode).toEqual(404))
  })
})
