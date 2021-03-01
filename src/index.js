import twttr from 'twitter-text'
import axios from 'axios'
import b64 from 'base64-arraybuffer'

const getbase64FromUrl = async (theUrl) => {
  try {
    const response = await axios.get(theUrl, { responseType: 'arraybuffer' })
    return b64.encode(response.data)
  } catch (error) {
    console.log(error)
    throw error
  }
}

const tweet2svg = async (tweetData) => {
  if (!tweetData) throw new Error('No data supplied')
  if (typeof tweetData !== 'object') throw new Error('No object supplied')
  if (!tweetData.extended_tweet) throw new Error('No extended tweet data found')
  if (!tweetData.extended_tweet.entities) throw new Error('No extended tweet entity data found')
  if (!tweetData.extended_tweet.full_text) throw new Error('No extended tweet full_text data found')

  const extendedTweetEntities = tweetData.extended_tweet.entities
  const extendedTweetFullText = tweetData.extended_tweet.full_text

  const avatarB64 = await getbase64FromUrl(tweetData.user.profile_image_url_https)
  const tweetUrl = `https://twitter.com/${tweetData.user.screen_name}/status/${tweetData.id_str}`
  const nameFull = tweetData.user.name
  const nameUser = tweetData.user.screen_name
  // let bodyHtml = parseTags(extendedTweetFullText, extendedTweetEntities)
  const bodyHtml = twttr.autoLinkWithJSON(extendedTweetFullText, extendedTweetEntities)

  const date = new Date(tweetData.created_at.replace(/( \+)/, ' UTC$1'))
  const dateIso = date.toISOString()
  const dateHuman = tweetData.created_at
  let mediaHtml

  if (extendedTweetEntities.media) {
    for (const mediaEntity of extendedTweetEntities.media) {
      if (mediaEntity.type === 'photo') {
        let mediaEntityUrl = mediaEntity.media_url_https
        let mediaEntityBase64 = await getbase64FromUrl(mediaEntityUrl)
        let mediaEntityHeight = mediaEntity.sizes.small.h
        let mediaEntityWidth = mediaEntity.sizes.small.w
        let mediaEntityAlt = mediaEntity.ext_alt_text || null
        mediaHtml += `<a href="${tweetUrl}"><img class="media-tweetsvg" width="${mediaEntityWidth}" src="data:image/jpeg;base64,${mediaEntityBase64}" alt="${mediaEntityAlt}"/></a>`
      }
    }
  }

  return `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" width="20em">
    <foreignObject x="0" y="0" width="20em" height="100%" fill="#eade52">
      <style>
        .tweetsvg{clear: none;}
        a.tweetsvg{color: rgb(27, 149, 224); text-decoration:none;}
        blockquote.tweetsvg{margin:0; background-color:#fefefe; border-radius:2%; border-style:solid; border-width:.1em; border-color:#ddd; padding:1em; font-family:sans; width:17rem}
        .avatar-tweetsvg{float:left; width:4rem; height:4rem; border-radius:50%;margin-right:.5rem;;margin-bottom:.5rem;border-style: solid; border-width:.1em; border-color:#ddd;}
        h1.tweetsvg{margin:0;font-size:1rem;text-decoration:none;color:#000;}
        h2.tweetsvg{margin:0;font-size:1rem;font-weight:normal;text-decoration:none;color:rgb(101, 119, 134);}
        p.tweetsvg{font - size:1rem; clear:both;}
        hr.tweetsvg{color:#ddd;}
        .media-tweetsvg{border - radius:2%; max-width:100%;border-radius: 2%; border-style: solid; border-width: .1em; border-color: #ddd;}
        time.tweetsvg{font - size:.9rem; font-family:sans; margin:0; padding-bottom:1rem;color:rgb(101, 119, 134);text-decoration:none;}
      </style>
      <blockquote class="tweetsvg" xmlns="http://www.w3.org/1999/xhtml">
        <img class="avatar-tweetsvg" alt="" src="data:image/jpeg;base64,${avatarB64}" />
        <a class="tweetsvg" href="${tweetUrl}"><h1 class="tweetsvg">${nameFull}</h1></a>
        <a class="tweetsvg" href="${tweetUrl}"><h2 class="tweetsvg">@${nameUser}</h2></a>
        <p class="tweetsvg">${bodyHtml}</p>
        ${mediaHtml}
        <a class="tweetsvg" href="${tweetUrl}">
          <time class="tweetsvg" datetime="${dateIso}">${dateHuman}</time>
        </a>
      </blockquote>
    </foreignObject>
  </svg>
`
}

export default tweet2svg
