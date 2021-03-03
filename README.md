# tweet2svg

Inspired by [Terrance Eden's tweet2svg](https://gitlab.com/edent/tweet2svg/-/blob/master/svg.php) here comes... tweet2svg. But for node.

Given a Tweet object this module will return an SVG containing the tweet, with all media base64 encoded. 

Very useful for preserving tweets, or embedding in pages.

"WHY NOT USE OEMBED???" I hear you scream through my bathroom door as I sit on my toilet, smoking.

Well, yes, you can use oembed. I'm not stopping you. It's always nice to have the basic HTML on a page and then have it progressively enhanced to the full version. But because the pure HTML and post-JS tweets are so very different from each other it can cause layout to be reflowed. It also relies on Twitter's JS actually being available (it's often blocked, either by browsers, or by Twitter itself on VPNs).

So maybe this SVG is better? Find out for yourself!
## Installation

```shell
npm i @whalecoiner/tweet2svg
```

## Usage

The module exposes its only function as a default and accepts only a [Tweet object](https://developer.twitter.com/en/docs/twitter-api/v1/data-dictionary/object-model/tweet).

```javascript
import tweet2svg from '@whalecoiner/tweet2svg'

let tweetObject = {...}

tweet2svg(tweetObject)
// returns a giant svg string
```

**NOTE:** *You will need to obtain the Tweet object from elsewhere.* This module doesn't handle all that Twitter authentication gubbins.

## Contributions

It's always lovely to receive ideas and code, isn't it?
