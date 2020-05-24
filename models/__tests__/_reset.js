const User = require('../index').User
const Genre = require('../index').Genre

module.exports = () => {
  if (process.env.NODE_ENV === 'test') {
    User.destroy({ truncate: true })
    Genre.destroy({ truncate: true })
  }
}

describe('___', () => {
  it('reset fn exists', () => {
    expect(User).toBeDefined()
    expect(Genre).toBeDefined()
  })
})
