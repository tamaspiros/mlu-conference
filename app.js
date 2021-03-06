'use strict';

var express = require('express');
var app = express();
var router = express.Router();
var routes = require('./routes');

app.set('port', 3000);
app.use('/public', express.static(__dirname + '/public'));
app.use('/vendor', express.static(__dirname + '/vendor'));
app.use('/', router);

router.route('/').get(routes.index);
router.route('/image/:uri').get(routes.showCharacterImage);

router.route('/api/characters').get(routes.showAllCharacters);
router.route('/api/character/:uri').get(routes.showOneCharacter);
router.route('/api/search/:searchQuery').get(routes.search);


app.listen(app.get('port'), function() {
  console.log('Magic happens on port ' + app.get('port'));
});
