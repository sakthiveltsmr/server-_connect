const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

// Middleware
app.use(bodyParser.json())

// Dummy data - simulate a database
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
]

// GET all items
app.get('/items', (req, res) => {
  const data = res.json(items)
  return res.send(data).status(200)
})

// GET single item by ID
app.get('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id)
  const item = items.find((item) => item.id === itemId)

  if (!item) {
    return res.status(404).json({ message: 'Item not found' })
  }

  return res.json(item)
})

// POST a new item
app.post('/items', (req, res) => {
  const newItem = req.body
  items.push(newItem)
  res.status(201).json(newItem)
})

// PUT (update) an existing item
app.put('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id)
  const updatedItem = req.body
  let itemIndex = items.findIndex((item) => item.id === itemId)

  if (itemIndex === -1) {
    return res.status(404).json({ message: 'Item not found' })
  }

  items[itemIndex] = { ...items[itemIndex], ...updatedItem }
  res.json(items[itemIndex])
})

// DELETE an item
app.delete('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id)
  items = items.filter((item) => item.id !== itemId)
  res.sendStatus(204)
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
