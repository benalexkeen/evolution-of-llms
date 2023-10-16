import streamlit as st

custom_css_str = """
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css");


body > div {
  margin: 1em 0;
  transition: all 1s ease-in-out;
}
.btn-container {
  text-align: center;
  border: 1px solid #8ab5;
  padding: 1rem;
  border-radius: 5px;
  background: #ccc;
  display: none;
}
.btn-container.open {
  display: block;
}
.btn-container p {
  color: #666;
  margin-bottom: .5rem;
}
.btn-container button {
  padding: .5rem 1rem;
  background: #ddd;
  font-size: 16px;
  transition: background-color .3s ease-in-out;
}
.show-tweet:hover{ 
  background: #333;
  color: #ddd;
  transition: background-color .3s ease-in-out;
}

.tweet-container {
  background: #fdfdfd;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 2px rgba(0, 0, 0, .1);
  display: none;
  gap: .75em;
  border: 1px solid #8ab5;
  width: 80%;
  max-width: 600px;
}
.tweet-container.open {
  display: grid;
}
.tweet-container h2 {
  font-size: 16px;
  font-weight: 600;
  color: #444;
  letter-spacing: .25px;
}
h3 {
  font-size: 14px;
  color: #8ab;
  font-weight: 300;
}
p {
  font-size: 16px;
  color: #222;
}
.post-infos p {
  color: #888;
  font-size: 14px;
}
.date {
  color: #111;
  font-weight: 600;
}
a{
  font-weight: 600;
  color: #4ad;
}
a:hover {
  color: #47c;
}
.header, .userinfos, .post-infos {
  display: flex;
}
.header, .post-infos {
  justify-content: space-between;
  align-items: center;
}
.userinfos {
  flex-grow: 2;
  align-items: center;
}
figure {
  width: 50px;
  height: 50px;
  border: 1px solid #5af;
  border-radius: 50%;
  margin-right: .5rem;
}
.bi {
  transition: all.3s ease-in-out;
}
.bi-x {
  transform: scale(2);
}
.bi-x:hover {
  color: red;
  transform: scale(2.4);
}
.bi-hand-thumbs-up-fill {
  transform: scale(1.5);
}
.bi-hand-thumbs-up-fill:hover {
  transform: scale(1.75) rotate(-30deg);
}
.bi-hand-thumbs-up-fill.liked{
  color: #5af;
}
hr {
  border: 1px solid #8ab;
  border-radius: 10px;
}"""

def get_tweet_html(tweet_text):
    custom_html_str = f"""
    <div class="tweet-container open">
    <div class="header">
        <div class="userinfos">
        <img src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png" width=40px>
        <div class="name-username" style="margin-left: 1rem">
        <h2>Ben Keen</h2>
        <h3>@benalexkeen</h3>
        </div>
        </div>
    </div>
    <div class="textarea">
        <p>{tweet_text}</p>
    </div>
    </div>
    <p></p>
    """
    return custom_html_str


def create_tweet(tweet_text):
    css = f'<style>{custom_css_str}</style>'
    st.markdown(css, unsafe_allow_html=True)
    html = get_tweet_html(tweet_text)
    st.markdown(html, unsafe_allow_html=True)

