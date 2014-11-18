var sprintf = require('sprintf').sprintf;

module.exports = function(grunt) {
  grunt.initConfig({});

  grunt.registerTask('install', []);
  grunt.registerTask('test', []);
  grunt.registerTask('build', ['test']);
  grunt.registerTask('start', 'Start a web server', function() {
    var port = Number(process.env.PORT || 8000);
    var done = this.async();
    grunt.log.writeln(sprintf('Starting web server on port %s.', port));
    require('./server.js').listen(port).on('close', done);
  });
}
