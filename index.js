import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

// Create new user 
// POST /api/users
// return {username, _id}
//
// Get users
// GET /api/users
// return users = [...{username, _id}]
//
// Create new exercise
// POST /api/users/:_id/exercises
// return user{} += exercise field
//
// Get exercise log for any user
// GET /api/users/:_id/logs
// return userObject += log[]



const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
