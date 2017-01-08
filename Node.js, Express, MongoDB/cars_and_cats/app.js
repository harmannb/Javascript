var http = require('http');
var fs = require('fs');
server = http.createServer(function (request,response){
  console.log('client request URL:', request.url);

  if (request.url === '/'){
    fs.readFile('./views/index.html', 'utf8', function (errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }

  else if (request.url === '/cars.html'){
    fs.readFile('./views/cars.html', 'utf8', function (errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }

  else if(request.url === '/images/car1.jpeg'){
    fs.readFile('./images/car1.jpeg', function(errors, contents){
        response.writeHead(200, {'Content-Type': 'image/jpeg'});
        response.write(contents);
        response.end();
    });
  }

  else if(request.url === '/cats.html'){
    fs.readFile('./views/cats.html', function(errors, contents){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(contents);
        response.end();
    });
  }

  else if(request.url === '/images/cat1.jpeg'){
    fs.readFile('./images/cat1.jpeg', function(errors, contents){
        response.writeHead(200, {'Content-Type': 'image/jpeg'});
        response.write(contents);
        response.end();
    });
  }

  else if(request.url === '/cars/new.html'){
    fs.readFile('./views/new.html', function(errors, contents){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(contents);
        response.end();
    });
  }

  else{
    response.end('Files not found!!!')
  }
});

server.listen(7707);
console.log('running on localhost at port 7707')
