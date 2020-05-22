const sequelize = require('../').sequelize
const User = require('../').User


const reset = () => {
  sequelize.query(`DELETE FROM Genres`)
  sequelize.query(`DELETE FROM Articles`)
  sequelize.query(`DELETE FROM Tags`)
  sequelize.query(`DELETE FROM ArcTags`)
  sequelize.query(`DELETE FROM Users`)
}

reset()

describe('user model', () => {
  it('create', async () => {
    User
      .findAll()
      .then(users => expect(users).toHaveLength(0))

    await User.create({
      email: 'admin',
      password: 'admin'
    })

    const users = await User.findAll()

    expect(users).toHaveLength(1)
    expect(users[0].email).toEqual('admin')
    expect(users[0].password).not.toEqual('admin')
    expect(await users[0].validPassword('admin')).toBe(true)
  })
})
