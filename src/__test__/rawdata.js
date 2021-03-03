const rawData = { // from https://gist.github.com/justinlittman/bb488bfa86b7b2965ef5b44e408cbd83
  "contributors": null,
  "truncated": true,
  "text": "@justin_littman Some of the changes went live. This is going to be an example for a blog post I'm writing that will… https://t.co/Hq4h61I3FX",
  "is_quote_status": false,
  "in_reply_to_status_id": 839526473534959600,
  "id": 847804888365117400,
  "favorite_count": 0,
  "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
  "retweeted": false,
  "coordinates": null,
  "timestamp_ms": "1490967411496",
  "entities": {
    "user_mentions": [
      {
        "id": 481186914,
        "indices": [
          0,
          15
        ],
        "id_str": "481186914",
        "screen_name": "justin_littman",
        "name": "Justin Littman"
      }
    ],
    "symbols": [],
    "hashtags": [],
    "urls": [
      {
        "url": "https://t.co/Hq4h61I3FX",
        "indices": [
          117,
          140
        ],
        "expanded_url": "https://twitter.com/i/web/status/847804888365117440",
        "display_url": "twitter.com/i/web/status/8…"
      }
    ]
  },
  "in_reply_to_screen_name": "justin_littman",
  "id_str": "847804888365117440",
  "display_text_range": [
    16,
    140
  ],
  "retweet_count": 0,
  "in_reply_to_user_id": 481186914,
  "favorited": false,
  "user": {
    "follow_request_sent": null,
    "profile_use_background_image": true,
    "default_profile_image": true,
    "id": 2875189485,
    "verified": false,
    "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_0_normal.png",
    "profile_sidebar_fill_color": "DDEEF6",
    "profile_text_color": "333333",
    "followers_count": 0,
    "profile_sidebar_border_color": "C0DEED",
    "id_str": "2875189485",
    "profile_background_color": "C0DEED",
    "listed_count": 3,
    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
    "utc_offset": null,
    "statuses_count": 21,
    "description": null,
    "friends_count": 0,
    "location": null,
    "profile_link_color": "1DA1F2",
    "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_0_normal.png",
    "following": null,
    "geo_enabled": true,
    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
    "name": "Justin Littman dev",
    "lang": "en",
    "profile_background_tile": false,
    "favourites_count": 0,
    "screen_name": "jlittman_dev",
    "notifications": null,
    "url": null,
    "created_at": "Thu Nov 13 15:49:55 +0000 2014",
    "contributors_enabled": false,
    "time_zone": null,
    "protected": false,
    "default_profile": true,
    "is_translator": false
  },
  "geo": null,
  "in_reply_to_user_id_str": "481186914",
  "possibly_sensitive": false,
  "lang": "en",
  "extended_tweet": {
    "display_text_range": [
      16,
      156
    ],
    "entities": {
      "user_mentions": [
        {
          "id": 481186914,
          "indices": [
            0,
            15
          ],
          "id_str": "481186914",
          "screen_name": "justin_littman",
          "name": "Justin Littman"
        }
      ],
      "symbols": [],
      "hashtags": [],
      "urls": [
        {
          "url": "https://t.co/MfQy5wTWBc",
          "indices": [
            133,
            156
          ],
          "expanded_url": "https://gwu-libraries.github.io/sfm-ui/posts/2017-03-31-extended-tweets",
          "display_url": "gwu-libraries.github.io/sfm-ui/posts/2…"
        }
      ]
    },
    "full_text": "@justin_littman Some of the changes went live. This is going to be an example for a blog post I'm writing that will be available at: https://t.co/MfQy5wTWBc"
  },
  "created_at": "Fri Mar 31 13:36:51 +0000 2017",
  "filter_level": "low",
  "in_reply_to_status_id_str": "839526473534959617",
  "place": null
}

module.exports = rawData
