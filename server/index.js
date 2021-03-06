const massive = require('massive');
const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller');

const connectionString='postgres://vhzaqgeraqdnqb:7a88163c55f0315516a93d9d3415f4ed679c5c625ab2433510cd3b489407eee9@ec2-107-22-175-33.compute-1.amazonaws.com:5432/d5e2jq9ev8likl?ssl=true'

const app = express();
app.use(bodyParser.json());

const port = 3030;



app.post('/login', ctrl.login) //if they do not have a matching username and password in the db, it will return an empty array.
app.post('/register', ctrl.register) 
app.get('/QA/:id', ctrl.getQuestions)
app.put('/QA/A', ctrl.answerA)
app.put('/QA/B', ctrl.answerB)
app.get('/Result', ctrl.getComments)
app.get('/Result:id', ctrl.getQuestions)
app.delete('/Result/delete/:id', ctrl.deleteComment)
app.post('/Result/comment', ctrl.addComment)










massive(connectionString).then(db => {
    app.set('db', db);
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})