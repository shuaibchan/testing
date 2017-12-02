var user = {}

user.post = function(request, response) {
  var body = request.body
  var name = body.name

  if (!name) {
    return response.status(400).json({
      message: "name is required"
    })
  } else if (!name.trim()) {
     return response.status(400).json({
      message: "name must not empty"
    })
  }
	return response.status(200).json({
    name: name
  })
}

module.exports = user