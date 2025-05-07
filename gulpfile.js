const { task, series, parallel, src, dest, watch } = require('gulp');
const log = require('fancy-log');
const connect = require('gulp-connect');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const rename =  require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const csso = require('gulp-csso');
const sourcemaps = require('gulp-sourcemaps');

task('compile-code', () =>
  browserify(Object.assign({ entries: 'src/ui.js' }, { debug: true }))
    .bundle()
    .pipe(source('astrobench.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist')));

task('minify-code', () =>
  src('dist/astrobench.js')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .on('error', log.error)
    .pipe(rename({ extname: '.min.js' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist')));

task('code', series('compile-code', 'minify-code'))

task('copy-style', () =>
  src('src/style.css')
    .pipe(rename('astrobench.css'))
    .pipe(dest('dist')));

task('minify-style', () =>
  src('dist/astrobench.css')
    .pipe(sourcemaps.init())
    .pipe(csso())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist')));

task('style', series('copy-style', 'minify-style'))

task('default', parallel('code', 'style'));

task('serve', done => {
  connect.server({
    root: '.',
    livereload: true
  }, function () {
    this.server.on('close', done);
  });
});

const reload = () =>
  src(['dist/*'], { read: false })
    .pipe(connect.reload());

const reloadExample = file => {
  log(`Reloading ${file}`);
  src(file, { read: false })
    .pipe(connect.reload());
};

task('watch', done => {
  const watchers = [
    watch(['examples/**/*']).on('change', reloadExample),
    watch(['src/**/*.js', 'src/**/*.html'], series('compile-code', reload)),
    watch('src/**/*.css', series('copy-style', reload))
  ];
  process.on('SIGINT', () => {
    console.log();
    watchers.forEach(watcher => watcher.close());
    done();
  });
});

task('start', parallel('compile-code', 'copy-style', 'serve', 'watch'));
