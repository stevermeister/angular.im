module.exports = function(grunt) {
  grunt.initConfig({
    server: {
      options: {
        server: './server.js',
        port: Number(process.env.PORT || 8000)
      }
    }
  });

  grunt.registerTask('install', []);
  grunt.registerTask('test', []);
  grunt.registerTask('build', ['test']);
  grunt.registerTask('server', 'Start a web server', function() {
    var name = this.name;
    grunt.config.requires([name, 'options', 'server']);
    var port = Number(grunt.config([name, 'options', 'port']) || 8000);
    var done = this.async();
    grunt.log.writeln('Starting web server on port ' + port + '.');
    require(grunt.config([name, 'options', 'server'])).listen(port).on('close', done);
  });
  grunt.registerTask('start', ['server']);
}
