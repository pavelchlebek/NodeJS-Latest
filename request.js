const axios = require("axios")

axios
  .get("https://www.google.com")
  .then((response) => {
    console.log(Object.keys(response))
  })
  .catch((err) => console.log(err))
  .then(() => console.log("ALL DONE"))
