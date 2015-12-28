var fs = require('fs');
var path = require('path');

module.exports = function (grunt) {
	grunt.loadNpmTasks('gruntify-eslint');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		eslint: {
			src: [
				'./src',
				'gruntfile.js',
				'webpack.config.js'
			]
		}
	});

	grunt.registerTask('copy', 'Will copy all file dependencies into dist', function () {
		var files = [
			{
				from: './src/index.html',
				to: './dist/index.html'
			}
		];

		files.forEach(function (f) {
			var from = path.join(__dirname, f.from);
			var to = path.join(__dirname, f.to);

			grunt.file.copy(from, to);

			console.log(from + ' -> ' + to);
		});
	});

	grunt.registerTask('webpack', '', function () {
	});

	grunt.registerTask('default', [
		'eslint',
		'webpack',
		'copy'
	]);
};
