const tweet2svg = require('../index')
const rawData = require('./rawdata')

describe('Checking the basics', () => {
  test('Reject empty tweetdata field', async () => {
    await expect(tweet2svg()).rejects.toThrow('No data supplied')
  })

  test('Reject tweetdata field that is not an object', async () => {
    await expect(tweet2svg('sdfsdfs')).rejects.toThrow('No object supplied')
  })

  test('Reject tweetdata field that is an empty object', async () => {
    await expect(tweet2svg({})).rejects.toThrow('No extended tweet data found')
  })
})

describe('Checking the basics', () => {
  test('Read data', async () => {
    await expect(tweet2svg(rawData)).resolves.toContain('<svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" width="20em">')
    await expect(tweet2svg(rawData)).resolves.toContain('<a class="tweetsvg" href="https://twitter.com/jlittman_dev/status/847804888365117440"><h1 class="tweetsvg">Justin Littman dev</h1></a>')
    await expect(tweet2svg(rawData)).resolves.toContain('<a class="tweetsvg" href="https://twitter.com/jlittman_dev/status/847804888365117440"><h2 class="tweetsvg">@jlittman_dev</h2></a>')
    await expect(tweet2svg(rawData)).resolves.toContain('<time class="tweetsvg" datetime="2017-03-31T13:36:51.000Z">Fri Mar 31 13:36:51 +0000 2017</time>')
    await expect(tweet2svg(rawData)).resolves.toContain(`<p class="tweetsvg">@<a class="tweet-url username" href="https://twitter.com/justin_littman" data-screen-name="justin_littman" rel="nofollow">justin_littman</a> Some of the changes went live. This is going to be an example for a blog post I'm writing that will be available at: <a href="https://t.co/MfQy5wTWBc" title="https://gwu-libraries.github.io/sfm-ui/posts/2017-03-31-extended-tweets" rel="nofollow"><span class='tco-ellipsis'><span style='position:absolute;left:-9999px;'>&nbsp;</span></span><span style='position:absolute;left:-9999px;'>https://</span><span class='js-display-url'>gwu-libraries.github.io/sfm-ui/posts/2</span><span style='position:absolute;left:-9999px;'>017-03-31-extended-tweets</span><span class='tco-ellipsis'><span style='position:absolute;left:-9999px;'>&nbsp;</span>…</span></a></p>`)
    await expect(tweet2svg(rawData)).resolves.toContain('iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAwFBMVEXM1t3K1dy5xc2xvca7xs+KmaVrfYtld4agrrhneYhoeoiksbufrbegrbe7xs66xs6Dk5+/ytKdqrWElKCDk6Byg5HG0NjEz9bH0dlqfIprfIuAkJ2ir7nJ09p1hpN0hZO9yNDH0tmbqbTBzNOzv8iqtsCotL6ntL7L1dy3w8yjsLqVpK+Onam8x9CRn6ttf43CzdWMm6dmeIeLmqauusSwvMVxgpCToa29ydFneIeRoKzK1Nttfo2yvseZp7KHl6OOgUPZAAAA80lEQVR4Ae3SA5oDQRgE0Aortm1zNub9T7Xm4O/+uMo7w8O/duNyezxuF3R5fX4+8vu80BII8lUoDA0RfhKFUizIT4JxqCT4RQIKSZokIUvRJAVZmiYZyLI0yUIWpEkQohwtcpDkaZGHpECLAkRFmpQgK9OkDFmFJhXIqjV+Ua9CoZHlJ9kGlJqtLF9lW01oaXe6vX6308aPMRiOxpPJeDQcQMd0Nuer+WwKlcXS4CfG3QKi1Zwm8xUEAYMWRkAZSbvT2qAtYw1bzQ0dbJqws6WjLWzs9nS038HqQMEBFscTBacjzDoUnWF2oegCsytFV7x6ADhgICRy9ELGAAAAAElFTkSuQmCC')
  })
})
