
var gulp = require("gulp"),
	gutil = require("gulp-util"),
	concat = require("gulp-concat"),
	uglify = require("gulp-uglify"),
	typescript = require("gulp-tsc"),
	clean = require('gulp-clean'),
	browserify = require('browserify'),
	source = require("vinyl-source-stream"),
	strip = require('gulp-strip-comments');


var pathScriptslib = ['./bower_components/jquery/dist/jquery.min.js',
					  './bower_components/angular/angular.js',
					  './bower_components/angular-sanitize/angular-sanitize.js',
					  './bower_components/ui-select/dist/select.js',
					  './bower_components/angular-ui-router/release/angular-ui-router.js',
					  './bower_components/angular-translate/angular-translate.js',
					  './bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
					  './bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
					  './bower_components/angular-translate-storage-local/angular-translate-storage-local.js',
					  './bower_components/bootstrap/dist/js/bootstrap.min.js',
					  './bower_components/bootstrap-material-design/dist/js/material.min.js'
					 // './bower_components/Materialize/dist/js/materialize.min.js'
						],
	pathClean = ['./client/js/', './client/css/', './client/fonts/', 'dest/'],
	pathFonts = [
	//'./bower_components/Materialize/dist/font/**/*'
	'./bower_components/bootstrap/dist/fonts/*'
	],
	pathStylelib =[
	'./bower_components/bootstrap/dist/css/bootstrap.min.css',
	'./bower_components/bootstrap-material-design/dist/css/bootstrap-material-design.css',
	'./bower_components/ui-select/dist/select.css'

	//'./bower_components/Materialize/dist/css/materialize.min.css'
	],
    pathScripts    = ['./dest/*/*.js','./dest/app.routers.js','./dest/app.config.js','./dest/app.module.js'],
    pathtypeScript = ['./client/app/**/*.ts'];

/*task*/
gulp.task('uglify-lib-css', function(){
	gulp.src(pathStylelib)
	.pipe(concat('style-lib.css'))
	//.pipe(uglify())
	.pipe(gulp.dest('./client/css/'))
});
gulp.task('uglify-lib', function(){
	gulp.src(pathScriptslib)
	.pipe(concat('bundle.lib.min.js'))
	//.pipe(uglify())
	.pipe(gulp.dest('./client/js/'))
});
gulp.task('fonts', function(){
	gulp.src(pathFonts).
	pipe(gulp.dest('./client/fonts/'))
});


gulp.task('uglify', function(){
	gulp.src(pathScripts)
	.pipe(concat('bundle.js'))
	//.pipe(uglify())
	.pipe(strip())
	.pipe(gulp.dest('./client/js/'))
});

gulp.task('compile', function(){
  return gulp.src(pathtypeScript)
    .pipe(typescript())
    .pipe(gulp.dest('dest/'));
});


gulp.task('clean', function(){
	return gulp.src(pathClean, {read: false})
		.pipe(clean());
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

gulp.task('browserify', function(){
	return gulp.src('client/app/app.module.ts')
		.pipe(exec('browserify client/app/app.module.ts -o bundle.js'));
});

gulp.task('ts', function(){
	browserify('./client/app/app.module.ts')
	.bundle()
	.on('error', function(e){
		gutil.log(e);
	})
	.pipe(source('bundle1.js'))
	.pipe(gulp.dest('./client/app/'))
});

//comile bundlelib

	gulp.task('bundlelib', ['uglify-lib','uglify-lib-css', 'fonts']);
	gulp.task('bundle', ['compile'], function(){ return gulp.run('uglify'); });
	gulp.task('generate', ['bundlelib', 'bundle']);

