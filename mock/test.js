
const list = [
  {
    nike: 'Aa',
    phone: '12345678901',
    name: '小A',
    subject: '语文',
    job: 'web',
    year: '10',
    updateTime: '2020-09-10'
  },
  {
    nike: 'Bb',
    phone: '12345678901',
    name: '小B',
    subject: '语文',
    job: 'web',
    year: '12',
    updateTime: '2020-09-10'
  },
  {
    nike: 'Cc',
    phone: '12345678901',
    name: '小C',
    subject: '语文',
    job: 'web',
    year: '8',
    updateTime: '2020-09-10'
  }
]
module.exports = [
  {
    url: '/vue-admin-template/test/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: list.length,
          items: list
        }
      }
    }
  }
]
