import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { helloWorld } from './db/db.js'

const app = new Hono()

helloWorld()
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
