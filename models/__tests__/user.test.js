const reset = require('./_reset')
const User = require('../').User

describe('user model', () => {
  reset()

  it('create', async () => {
    User.findAll().then((users) => expect(users).toHaveLength(0))

    await User.create({
      email: 'admin@gmail.com',
      password: 'admin',
    })

    const users = await User.findAll()

    expect(users).toHaveLength(1)
    expect(users[0].email).toEqual('admin@gmail.com')
    expect(users[0].password).not.toEqual('admin')
    expect(await users[0].validPassword('admin')).toBe(true)
  })
})
