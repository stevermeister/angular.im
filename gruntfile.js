module.exports = function(grunt) {
  grunt.initConfig({
    server: {
      options: {
        server: './server.js',
        port: Number(process.env.PORT || 8000)
      }
    },
    copy: {
       dev: {
         files: [
           {src: 'bower_components/angular/angular.js', dest:'public/javascript/libs/angular.js'},
           {src: 'bower_components/bootstrap-css-only/css/bootstrap.min.css', dest:'public/styles/libs/bootstrap.min.css'}
         ]
       }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('install', ['copy']);
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
