import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.use('/usuarios')

app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
     
})

app.post('/usuarios', (req, res) => {
    users.push(req.body)
    res.status(201).send('Usuario cadastrado com sucesso!')

})
app.listen(4040)

