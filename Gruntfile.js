'use strict'

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mochaTest: {
      src: ['test/*.js'],
      test: {
        options: {
          reporter: 'spec',
        },
      },
    },
    browserify: {
      client: {
        src: ['src/index.js'],
        dest: 'dist/cheers-client.js',
        options: {
          browserifyOptions: {
            standalone: 'cheers',
          },
        },
      },
    },
    uglify: {
      options: {
        banner: '/* <%= pkg.name %> <%= pkg.version %> */',
      },
      build: {
        src: 'dist/cheers-client.js',
        dest: 'dist/<%= pkg.name %>.min.js',
      }
    }
  });

  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['mochaTest', 'browserify', 'uglify']);
}