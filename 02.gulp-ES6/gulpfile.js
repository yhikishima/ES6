//---------------------
// load plugin
//---------------------
// var gulp = require('gulp');
// var webpack = require('gulp-webpack');

//---------------------
// タスクの定義
//---------------------
// gulp.task('webpack', function() {
//   return gulp.src('src/js/**.js')
//     .pipe(webpack({
//       output: {
//         filename: '[name].js'
//       }
//     }))
//     .pipe(gulp.dest('dist/js/'));
// });

//---------------------
// タスクの実行
//---------------------
// 開発用









var requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });