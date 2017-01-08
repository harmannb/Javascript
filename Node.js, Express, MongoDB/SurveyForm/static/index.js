module.exports = function Static(app) {
  app.get('/', function(request, response){
    response.render('index');
  })

  app.post('/result', function(request, response){
    user_info = {
      name: request.body.name,
      location: request.body.location,
      langauge: request.body.language,
      comment: request.body.language
    };
    response.render('result', {user_data: user_info})
  })
}
