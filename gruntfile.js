module.exports = function(grunt) {
  grunt.initConfig({
    express: {
      server: {  
        options: {
          server: 'server.js',
          port: Number(process.env.PORT || 8000)
        }
      }
    },
    copy: {
       dev: {
         files: [
           {src: 'bower_components/angular/angular.js', dest:'public/javascript/libs/angular.js'},
           {src: 'bower_components/bootstrap-css-only/css/bootstrap.min.css', dest:'public/styles/libs/bootstrap.min.css'},
           {src: 'bower_components/less/dist/less.min.js', dest:'public/javascript/libs/less.min.js'},
           {src: 'bower_components/ng-facebook/ngFacebook.js', dest:'public/javascript/libs/ngFacebook.js'},
           {src: 'bower_components/jquery/dist/jquery.min.js', dest:'public/javascript/libs/jquery.min.js'}       
         ]
       }
    },
    less: {
      development: {
        files: {
          "public/styles/main.css": "public/styles/main.less"
        }
      }
    },
    html2js: {
      options: {
        base: 'public/javascript/app/',
        module: 'app-templates'
      },
      main: {
        src: ['public/javascript/app/views/**/*.html'],
        dest: 'public/javascript/app/templates.js'
      }
    },
    watch: {
      templates: {
        files:['public/javascript/app/views/**/*.html'],
        tasks: ['html2js']
      },
      less: {
        files:['public/styles/*.less'], 
        tasks: ['less:development']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-express');
  grunt.registerTask('install', ['copy', 'less', 'html2js']);
  grunt.registerTask('test', []);
  grunt.registerTask('build', ['install', 'test']);
  grunt.registerTask('start', ['express', 'express-keepalive']);
}
