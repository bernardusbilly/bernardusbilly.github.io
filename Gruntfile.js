module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'assets/css/style.css' : 'assets/sass/style.scss'
				}
			}
		},
		cssmin: {
			dist: {
				src: 'assets/css/style.css',
				dest: 'assets/css/style.min.css',
			},
		},
		uglify: {
			dist: {
				files: {
			        'assets/js/script.min.js': ['assets/js/script.js'],
			    },	
			},
		},
		watch: {
			css: {
				files: ['assets/sass/*.scss','assets/sass/pages/*.scss'],
				tasks: ['sass:dist']
			},
			cssmin: {
				files: ['assets/css/style.css'],
				tasks: ['cssmin:dist']	
			},
			js: {
				files: ['assets/js/script.js'],
				tasks: ['uglify:dist']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}