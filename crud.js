const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')

// Define file path
const dataFilePath = 'data.json'

// Read initial data from file or create empty array
let data = []
if (fs.existsSync(dataFilePath)) {
  const rawData = fs.readFileSync(dataFilePath)
  data = JSON.parse(rawData)
}

// Create HTTP server
const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true)

  if (req.method === 'GET') {
    // Read operation
    if (reqUrl.pathname === '/data') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(data))
    }
  } else if (req.method === 'POST') {
    // Create operation
    if (reqUrl.pathname === '/data') {
      let requestBody = ''
      req.on('data', (chunk) => {
        requestBody += chunk.toString()
      })
      req.on('end', () => {
        const newData = JSON.parse(requestBody)
        data.push(newData)
        fs.writeFileSync(dataFilePath, JSON.stringify(data))
        res.writeHead(201, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(newData))
      })
    }
  } else if (req.method === 'PUT') {
    // Update operation
    if (reqUrl.pathname === '/data') {
      let requestBody = ''
      req.on('data', (chunk) => {
        requestBody += chunk.toString()
      })
      req.on('end', () => {
        const updatedData = JSON.parse(requestBody)
        data = updatedData
        fs.writeFileSync(dataFilePath, JSON.stringify(data))
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(updatedData))
      })
    }
  } else if (req.method === 'DELETE') {
    // Delete operation
    if (reqUrl.pathname === '/data') {
      data = []
      fs.writeFileSync(dataFilePath, JSON.stringify(data))
      res.writeHead(204)
      res.end()
    }
  } else {
    // Unsupported method
    res.writeHead(405)
    res.end()
  }
})

// Start the server
const PORT = 3000
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
