module.exports = function(grunt) {
  var name, latest, bannerContent, devRelease, minRelease,
      sourceMap, sourceMapUrl, lDevRelease, lMinRelease,
      lSourceMapMin;
 
  latest = '<%= pkg.name %>';
  name = '<%= pkg.name %>-v<%= pkg.version%>';
  bannerContent = '/*! <%= pkg.name %> v<%= pkg.version %> - ' +
    '<%= grunt.template.today("yyyy-mm-dd") %> \n' +
    ' *  License: <%= pkg.license %> */\n';
  devRelease = 'dist/'+name+'.js';
  minRelease = 'dist/'+name+'.min.js';
  sourceMapMin = 'dist/'+name+'.min.js.map';
  sourceMapUrl = name+'.min.js.map';
 
  lDevRelease = 'dist/'+latest+'.js';
  lMinRelease = 'dist/'+latest+'.min.js';
  lSourceMapMin = 'dist/'+latest+'.min.js.map';
   
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	//run buster task when ever a file in this paths changes
    watch: {
      files: ['Gruntfile.js','buster.js','src/**/*.js'],
      tasks: 'buster'
    },
    //configure the buster task
    buster: {
      test: {
        //path to the buster config file
        config: 'buster.js'
      },
      server: {
        port: 1111
      }
    },
	// configure copy task
    copy: {
      development: {
        src: devRelease,
        dest: lDevRelease
      },
      minified: {
        src: minRelease,
        dest: lMinRelease
      },
      smMinified: {
        src: sourceMapMin,
        dest: lSourceMapMin
      }
    },
    // configure uglify task
    uglify:{
      options: {
        banner: bannerContent,
        sourceMapRoot: '../',
        sourceMap: sourceMapMin,
        sourceMappingURL: sourceMapUrl
      },
      target: {
        src: ['lib/jtypes-2.1.0.js','src/**/*.js', '!src/**/*.spec.js'],
        dest: minRelease
      }
    },
    // configure concat task
    concat: {
      options: {
        banner: bannerContent
      },
      target: {
        src: ['lib/jtypes-2.1.0.js','src/**/*.js', '!src/**/*.spec.js'],
        dest: devRelease
      }
    },
    // configure jshint task
    jshint: {
      options: {
        trailing: true,
        eqeqeq: true
      },
      target: {
        src: ['src/**/*.js', 'test/**/*.js']
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');  
  grunt.loadNpmTasks('grunt-buster');
  
  
 
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'copy']);
  //grunt.registerTask('test' ['buster']);
};
