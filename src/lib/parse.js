import replaceBetween from './replace-between'

const parseTags = (rawHtml, extendedTweetEntities) => {
  // Deal with entities. Need to create links.
  let replacements = []

  // for all hashtags.
  if (extendedTweetEntities.hashtags) {
    for (const hashtagEntity of extendedTweetEntities.hashtags) {
      const replacedUrl = {}
      replacedUrl.start = hashtagEntity.indices[0]
      replacedUrl.end = hashtagEntity.indices[1]
      replacedUrl.replacement = `<a href="https://twitter.com/hashtag/${hashtagEntity.text}">#${hashtagEntity.text}</a>`
      replacements.push(replacedUrl)
    }
  }

  // for all URLs
  if (extendedTweetEntities.urls) {
    for (const urlEntity of extendedTweetEntities.urls) {
      const replacedUrl = {}
      replacedUrl.start = urlEntity.indices[0]
      replacedUrl.end = urlEntity.indices[1]
      replacedUrl.replacement = `<a href="${urlEntity.expanded_url}">${urlEntity.display_url}</a>`
      replacements.push(replacedUrl)
    }
  }

  // for all user mentions
  if (extendedTweetEntities.user_mentions) {
    for (const userEntity of extendedTweetEntities.user_mentions) {
      const replacedUrl = {}
      replacedUrl.start = userEntity.indices[0]
      replacedUrl.end = userEntity.indices[1]
      replacedUrl.replacement = `<a href="https://twitter.com/${userEntity.text}">@${userEntity.text}</a>`
      replacements.push(replacedUrl)
    }
  }


  // for all media - remove and handle separately
  if (extendedTweetEntities.symbols) {
    for (const mediaEntity of extendedTweetEntities.symbols) {
      const replacedUrl = {}
      replacedUrl.start = mediaEntity.indices[0]
      replacedUrl.end = mediaEntity.indices[1]
      replacedUrl.replacement = ''
      replacements.push(replacedUrl)
    }
  }

  // reverse sort replacements by start location: we have to do this backwards
  replacements.sort((a, b) => parseFloat(b.start) - parseFloat(a.start))


  // for each object in replacements array, substitute characters at
  // item.start and item.end with item.replacement
  // doing it in reverse, so shouldn't change start indexes

  let newHtml = ''
  for (const item of replacements) {
    newHtml = replaceBetween(rawHtml, item.start, item.end, item.replacement)
  }

  return newHtml
}

export default parseTags
