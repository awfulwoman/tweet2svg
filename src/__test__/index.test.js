import tweet2svg from '../index'
import rawData from './rawdata'

describe('Checking the basics', () => {
  test('Reject empty tweetdata field', () => {
    expect(tweet2svg()).toBe(false)
  })
  test('Reject tweetdata field that is not an object', () => {
    expect(tweet2svg('sdfsdfs')).toBe(false)
  })

  // test('Accept tweetdata field that is an object', () => {
  //   expect(tweet2svg({})).toBe()
  // })
})

describe('Checking the basics', () => {
  test('Read data', () => {
    expect(tweet2svg(rawData)).toBe(false)
  })

})

