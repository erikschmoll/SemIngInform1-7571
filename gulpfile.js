
var gulp = require("gulp"),
	concat = require("gulp-concat"),
	uglify = require("gulp-uglify"),
	typescript = require("gulp-tsc");

var pathScriptslib = ['./bower_components/jquery/dist/jquery.js',
					  './bower_components/angular/angular.js'
						],
    pathScripts    = ['./client/dest/*.js']
    pathtypeScript = ['./client/app/**/*.ts'];

/*task*/
gulp.task('uglify-lib', function(){
	gulp.src(pathScriptslib)
	.pipe(concat('bundle.lib.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./client/'))
});
gulp.task('uglify', function(){
	gulp.src(pathScripts)
	.pipe(concat('bundle.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./client/'))
});

gulp.task('compile', function(){
  gulp.src(pathtypeScript)
    .pipe(typescript())
    .pipe(gulp.dest('dest/'))
});

/*watch*/
gulp.task('watch', function(){
	/*compile files typescript*/
	gulp.watch(pathtypeScript)
	.on("change", function(file){
	     gulp.src(file.path)
	    .pipe(typescript())
	    .pipe(gulp.dest('dest/'))

	     gulp.src('dest/*')
		.pipe(concat('bundle.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./client/'))
	})

	/*bundle and uglify files javascripts*/
	/*gulp.watch(pathScripts)
	.on("change", function(file){
		 gulp.src(file.path)
		.pipe(concat('bundle.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./client/'))	
	})*/
});
