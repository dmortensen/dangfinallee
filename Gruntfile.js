module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
        build: {
          src: ['./dist/styles/*', './dist/scripts/*.built.js']
        }
    },

    copy: {
      fonts: {
        files: [{
          expand: true,
          cwd: './node_modules/bootstrap-sass/assets/fonts/',
          src: ['bootstrap/*'],
          dest: './dist/fonts/',
          filter: 'isFile'
        }]
      }
    },

    sass: {
      options: {
        loadPath: ['./node_modules/bootstrap-sass/assets/stylesheets/', './node_modules/bootstrap-sass/assets/fonts/'],
        style: 'compressed',
        'sourcemap=none': true,
      },
      dist: {
        files: [{
          expand: true,
          cwd: './src/scss/',
          src: ['*.scss'],
          dest: './dist/styles',
          ext: '.built.css'
        }]
      },
      debug: {
        options: {
          style: 'expanded',
          lineNumbers: true
        },
        files: [{
          expand: true,
          cwd: './src/scss/',
          src: ['*.scss'],
          dest: './dist/styles',
          ext: '.built.css'
        }]
      }
    },

    autoprefixer: {
      options: {
        browsers: [
          'last 2 versions',
          'Explorer >= 8',
          'iOS >= 8.0'
        ]
      },
      dist: {
        files: [{
          src: './dist/styles/*.built.css',
          dest: this.src
        }]
      },
      debug: {
        files: [{
          src: './dist/styles/*.built.css',
          dest: this.src
        }]
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: './gruntfile.js'
      },
      src: {
        src: ['./src/js/*.js', './src/js/**/*.js']
      }
    },

    browserify: {
      dist: {
        files: [{
          expand: true,
          cwd: './src/js/',
          src: '*.js',
          dest: './dist/scripts/',
          rename: function (dest, src) {
            return dest + src.replace(/^([^\/]*)\/*.js/, '$1.built.js');
          }
        }]
      },
      debug: {
        options: {
          debug: true
        },
        files: [{
          expand: true,
          cwd: './src/js/',
          src: '*.js',
          dest: './dist/scripts/',
          rename: function (dest, src) {
            return dest + src.replace(/^([^\/]*)\/*.js/, '$1.built.js');
          }
        }]
      }
    },

    watch: {
      options: {
        // LiveReload on HTML/CSS files
        livereload: true
      },
      html: {
        files: ['*.html', '**/*.html'],
      },
      sass: {
        options: {
          // Monitor Sass files for changes and compile them, but don't reload the browser.
          livereload: false,
        },
        files: ['./src/scss/*.scss', './src/scss/**/*.scss'],
        tasks: ['sass:debug', 'autoprefixer:debug']
      },
      css: {
        files: ['./dist/styles/*.css'],
      },
      js_build: {
        files: ['./src/js/*.js', './src/js/lib/*.js'],
        tasks: ['browserify:debug']
      },
      js: {
        files: ['./dist/scripts/*.js']
      }
    }
  });

  // Load tasks from package.json devDependencies list
  require('load-grunt-tasks')(grunt);

  // Default/dist task
  grunt.registerTask('default', [
    'clean',
    'copy',
    'sass:dist',
    'autoprefixer:dist',
    'browserify:dist'
  ]);

  // Developer tasks
  grunt.registerTask('debug', [
    'clean',
    'copy',
    'sass:debug',
    'autoprefixer:debug',
    'browserify:debug',
    'watch'
  ]);

};
