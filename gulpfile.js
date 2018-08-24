const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('babel', () =>
	gulp.src('js/script.js')
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(gulp.dest('compiled/'))
);


const postcss = require('postcss');
const cssvariables = require('postcss-css-variables');
const autoprefixer = require('gulp-autoprefixer');
const fs = require('fs');

gulp.task('css-variables-autoprefixer', () => {
	const css = fs.readFileSync('css/style.css', 'utf8');
	const output = postcss([cssvariables()])
		.process(css)
		.css;

	fs.writeFileSync('compiled/css-variables/style.css', output);

	gulp.src('compiled/css-variables/style.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('compiled/'))
});


gulp.task('watch', () => {
	gulp.watch('js/script.js', ['babel']);
	gulp.watch('css/style.css', ['css-variables-autoprefixer'])
});