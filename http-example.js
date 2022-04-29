// const { get } = require("https")
import { get } from 'https'; // "type": "module" added to package.json

const chunks = []
get("https://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`Data chunk: ${chunk}`)
    chunks.push(chunk)
  })
  res.on("end", () => {
    console.log("No more data!", chunks.join("").length)
  })
})
