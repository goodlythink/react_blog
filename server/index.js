const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const renderer = require('./renderer')
const paths = require('../config/paths')

const app = express()
app.use(favicon(path.resolve(paths.public,'favicon.ico')))
app.use(express.static(paths.public))
app.use(renderer)
app.listen(8000, () => {
  console.warn('ready at http://localhost:8000')  
})