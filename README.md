# isomorphic-jade
Testing server and client rendering with the same templates using Jade.

## Getting Started
1.  npm install
2.  bower install
3.  grunt build
4.  npm start
5.  http://localhost:8000

##How it works
Shared templates have the .iso.jade suffix. This is done so that some templates can be used on the 
server side exclusively. The build process uses `grunt-contrib-jade` and creates JavaScript functions under the
`Templates` namespace. These templates are compiled into `client/js/templates.js` and are simply called with the
data they need to render.
