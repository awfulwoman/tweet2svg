import parseTags from './lib/parse'

const tweet2svg = (tweetData) => {
  if (!tweetData) return false
  if (typeof tweetData !== 'object') return false
  if (!tweetData.extended_tweet) return false
  if (!tweetData.extended_tweet.entities) return false
  if (!tweetData.extended_tweet.full_text) return false
  // if tweetData is not an object
  // if tweetData is not a twitter object (check for required properties)

  let extendedTweetEntities = Object.assign(tweetData.extended_tweet.entities)
  let extendedTweetFullText = tweetData.extended_tweet.full_text

  let avatarB64 = ''
  let tweetUrl = ''
  let nameFull = ''
  let nameUser = ''
  let bodyHtml = parseTags(extendedTweetFullText,extendedTweetEntities )
  let dateIso = ''
  let dateHuman = ''
  let mediaHtml = ''

  return `
  <svg xmlns="http://www.w3.org/2000/svg"
    xmlns: xlink="http://www.w3.org/1999/xlink"
    width="20em">
    <foreignObject x="0" y="0"
      width="20em" height="100%"
      fill="#eade52">
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
