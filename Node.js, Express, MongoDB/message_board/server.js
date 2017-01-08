var express = require('express');

var app = express();

var mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost/message_board');

var Schema = mongoose.Schema;


var MessageSchema = new mongoose.Schema({
  message: {type: String, required: true},
  name: {type: String, required: true},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});

var CommentSchema = new mongoose.Schema({
  _message: {type: Schema.Types.ObjectId, ref: 'Message'},
  comment: {type: String, required: true},
  name: {type: String, required: true},
})

mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);

var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment')

var bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

  app.use(express.static(path.join(__dirname, './static')));

  app.set('views', path.join(__dirname, './views'));
  app.set('view engine', 'ejs');

// INDEX
  app.get('/', function(request, response){
    console.log("its getting here /", request.url);
    Message.find().populate('comments').exec(function(err, messages){
      if(err){
        console.log("erorr finding messages", err);
      } else {
        response.render('index', {messages: messages});
      }
    })
  });


// NEW
 app.get('/messages/new', function(request, response){
    Message.find({}, function(error, messages){
      if(error){
        console.log('something went wrong with message query', error);
      } else {
        console.log('successfully added a message!')
        response.render('index', {messages:messages})
      }
    });
  });


// POST
  app.post('/messages', function(request, response){
    console.log('POST DATA', request.body);

    var message = new Message({name: request.body.name, message: request.body.message});

    message.save(function(error){
      if(error){
        console.log('something went wrong posting the message', error);
      } else {
        console.log('successfully added a message!');
        response.redirect('/');
      }
    })
  })

// NEW COMMENT

app.post('/messages/:id', function(request,response){
  Message.findOne({_id: request.params.id}, function(error, message){
    console.log("found message");
    var comment = new Comment({name: request.body.name, comment: request.body.comment});
    comment._message = message._id;
    console.log("setting commment and comment._message");

    comment.save(function(error){
      if(error) {console.log('Error');}
      else{
        message.comments.push(comment);
        message.save(function(err){
          if(err){
            console.log("errors aving the database", err);
          }
          console.log("saving message succesfully")
          response.redirect('/');
        })
      }
    })
  })
})



app.listen(8000, function(){
  console.log('listening to port 8000');
});
