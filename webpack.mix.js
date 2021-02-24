let mix = require('laravel-mix');
mix.js('src/js/app.js', 'dist/js');
mix.copy('src/index.html', 'dist/index.html');
mix.setPublicPath('dist');
