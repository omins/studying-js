const express = require("express");
const app = express()

app.get('/', (req, res) => {
  res.send('This is the home page!!!')
})

// pattern matching -> Can destructure w/req.params
app.get('/r/:subreddit',(req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>This is r/${subreddit}</h1>`);
})

app.get('/r/:subreddit/comments/:postId',(req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing the comments of ${postId} in r/${subreddit}</h1>`);
})

app.get('/cats', (req, res) => {
  res.send('Meow!!');
})

app.post('/cats', (req, res) => {
  res.send('Post to /cats')
})

app.get('/dogs', (req, res) => {
  res.send('Woof');
})

app.get('/search', (req, res) => {
  const { q } = req.query;

  if (!q) {
    res.send('There is no result')
  } else {
    res.send(`Search for: ${q}`)
  }

})

app.get('*', (req, res) => {
  res.send("I don't know this path");
})

app.listen(8080, () => {
  console.log('Listening')
})