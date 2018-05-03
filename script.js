const root = document.getElementById('root');

// tweets[i][
//   0: "created_at"
//   1: "id"
//   2: "id_str"
//   3: "text"
//   4: "truncated"
//   5: "entities"
//   6: "source"
//   7: "in_reply_to_status_id"
//   8: "in_reply_to_status_id_str"
//   9: "in_reply_to_user_id"
//   10: "in_reply_to_user_id_str"
//   11: "in_reply_to_screen_name"
//   12: "user"
//   13: "geo"
//   14: "coordinates"
//   15: "place"
//   16: "contributors"
//   17: "is_quote_status"
//   18: "retweet_count"
//   19: "favorite_count"
//   20: "favorited"
//   21: "retweeted"
//   22: "possibly_sensitive"
//   23: "lang"
// ]
// tweets[i]["entities"]["hashtags"]
// tweets[i]["entities"]["symbols"]
// tweets[i]["entities"]["user_mentions"]
// tweets[i]["entities"]["urls"][0]["url", "expanded_url", "display_url", "indices"[]]
// tweets[i]["entities"]["media"][0]["media_url"]
// tweets[i]["user"]["name", "screen_name", "profile_image_url"]
// tweets[i]["retweet_count"]
// tweets[i]["favourite_count"]

// Needs:
// Top bar
// Nav bar
// Timeline:
//   Tweet
// FAB
class User extends React.Component {

  render() {
    return(<div></div>)
  }
};

class Header extends React.Component {
  
  render() {
    return(<div></div>)
  }
};

class Nav extends React.Component {

  render() {
    return(
      <div>

      </div>
    )
  }
};

class Tweet extends React.Component {

  render() {
    return(
      <div class="row">
        <div class="col-xs-3 text-center">
          <img class="rounded-circle" src={this.props.profilepic} />
        </div>
        <div class="col-xs-8 twit-content">
          <p><span class="name">{this.props.name}</span> @{this.props.screenName} {this.props.dateDiff}</p>
          <p>{this.props.text}</p>
          <p><i class="fas fa-comment"></i> {this.props.numReplies} <i class="fas fa-retweet"></i> {this.props.numRetweets} <i class="fas fa-heart"></i> {this.props.numFavourites}</p>
        </div>
        <div class="col-xs-1">
        </div>
      </div>
    )
  }
};

class Timeline extends React.Component {

  render() {
    let listOfTweets = tweets.map(
      (tweet, index) => {
        let now = new Date();
        let origin = new Date(tweet["created_at"]);
        let dateDiff = Math.ceil((now - origin) / 3600000);
        if (dateDiff > 24) {
          let originDateArray = origin.toDateString().split(' ');
          dateDiff = parseInt(originDateArray[2]) + ' ' + originDateArray[1];
        };
        return <Tweet 
          profilepic={tweet["user"]["profile_image_url"]}
          name={tweet["user"]["name"]}
          text={tweet["text"]}
          screenName={tweet["user"]["screen_name"]}
          dateDiff={dateDiff}
          numReplies={0}
          numRetweets={tweet["retweet_count"]}
          numFavourites={tweet["favorite_count"]} 
        />
      }
    )

    return(
      <div>
        {listOfTweets}
      </div>
    )
  }
};

class FAB extends React.Component {

};

ReactDOM.render(
  <Timeline />,
  root
);