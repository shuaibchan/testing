var user = {}
var db = require("../helpers/db")

user.post = function(request, response) {
  var body = request.body
  var name = body.name

  if (!name) {//validate
    return response.status(400).json({
      message: "name is required"
    })
  } else if (!name.trim()) {
     return response.status(400).json({
      message: "name must not empty"
    })
  }

  db('users').insert({//insert
    name: name,
    lastname: "abc"
  })
    .returning(['id', 'name', 'lastname'])
    .then(function(data) {
      console.log(data)
      var user = data[0]
      return response.status(200).json({
        name: user.name,
        lastname: user.lastname
      })
    })
    .catch(function(error) {
      console.log(error)
    })


}

module.exports = user