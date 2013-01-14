/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:rangeslider.jquery.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> - <%= pkg.author.email %> - <%= pkg.author.website %>\n' +
        '* Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    concat: {
      js: {
        src: ['<banner:meta.banner>', '<file_strip_banner:src/<%= pkg.name %>.js>'],
        dest: 'dist/<%= pkg.name %>.js'
      },
      css: {
        src: 'src/*.css',
        dest: 'dist/<%= pkg.name %>.css'
      }
    },
    min: {
      js: {
        src: ['<banner:meta.banner>', '<config:concat.js.dest>'],
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    mincss: {
      compress: {
        files: {
          'dist/<%= pkg.name %>.min.css': ['<config:concat.css.dest>']
        }
      }
    },    
    qunit: {
      files: ['test/**/*.html']
    },
    lint: {
      files: ['grunt.js', 'src/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true
      }
    },
    uglify: {}
  });

  grunt.loadNpmTasks('grunt-contrib-mincss');

  // Default task.
  grunt.registerTask('default', 'lint qunit concat min mincss');

};
