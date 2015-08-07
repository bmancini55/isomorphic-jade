let express   = require('express');
let srvStatic = require('serve-static');
let path      = require('path');
let app       = express();

app.use('/public', srvStatic(path.join(__dirname, '../client')));
app.use('/public/libs', srvStatic(path.join(__dirname, '../bower_components')));


app.use(require('server/home'));

app.listen(8000, function() {
  console.log('Listening on port 8000');
});
