
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.initConfig({
    jade: {
      compile: {
        options: {
          client: true,
          pretty: true,
          processName: function(filename) {
            return filename
              .replace('server/', '')
              .replace('.iso.jade', '')
              .replace('/', '_');
          },
          namespace: 'Templates'
        },
        files: {
          'client/js/templates.js': ['server/**/*.iso.jade']
        }
      }
    }
  });

  grunt.registerTask('build', ['jade']);

};
