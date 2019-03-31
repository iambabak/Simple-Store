const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/p/:address', (req, res) => {
    const actualPage = '/post'
    const queryParams = { address: req.params.address }
    app.render(req, res, actualPage, queryParams)
})
server.get('/search/:address', (req, res) => {
  const actualPage = '/search'
  const queryParams = { address: req.params.address }
  app.render(req, res, actualPage, queryParams)
})
server.get('/category/:address', (req, res) => {
  const actualPage = '/category'
  const queryParams = { address: req.params.address}
  app.render(req, res, actualPage, queryParams)
})
server.get('/category/:address', (req, res) => {
  const actualPage = '/category'
  console.log('req,res',req,res)
  // const queryParams = { address: req.params.address, filter:req.params.filter, field_2MHtJcq4KP:req.params.field_2MHtJcq4KP, priceOrigin: req.params.priceFilter}
  const mergedQuery = Object.assign({}, req.query, req.params)
  app.render(req, res, actualPage, mergedQuery)
})

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})