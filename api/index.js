import fs from 'fs'
import path from 'path'
import express from 'express'
import cors from 'cors'

import {article} from './article.js'
import {landing} from './landing.js'

const app = express()

app.use(cors())

//app.use('/source', express.static(path.join(__dirname, 'source')));
//app.use('/views', express.static(path.join(__dirname, 'views')));
//app.use(express.static(path.join(__dirname, 'public')));



app.get('/api/landing', function (req, res) {
    res.json(landing)
})
app.get('/api/article', function (req, res) {
    res.json(article)
})

app.get('/*', function (req, res) {
    const html = fs.readFileSync('./public/index.html').toString()
    res.send(html)
})

app.listen(3000)