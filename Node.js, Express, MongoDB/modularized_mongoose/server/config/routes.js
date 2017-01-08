var pigs = require('../controllers/pigs.js');
module.exports = function(app){
  // INDEX
  app.get('/', pigs.index);
  // POST NEW
  app.post('/pigs', pigs.create);
  // SHOW
  app.get('/:id/', pigs.show);
  // EDIT
  app.get('/:id/edit/', pigs.edit);
  // UPDATE
  app.post('/pigs/:id', pigs.update);
  // DELETE
 app.post('/:id/delete', pigs.delete)
}
