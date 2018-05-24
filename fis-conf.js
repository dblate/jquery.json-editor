fis.match('*.js', {
    // optimizer: fis.plugin('uglify-js'),
    preprocessor: fis.plugin('js-require-css', {
        mode: 'inline'
    })
});

fis.match('index.html', {
    release: false
});

fis.match('README.md', {
    release: false
});

fis.media('dist')
    .match('(*).js', {
        optimizer: fis.plugin('uglify-js'),
        preprocessor: fis.plugin('js-require-css', {
            mode: 'inline'
        }),
        release: '$1.min.js'
    })
    .match('(*).css', {
        optimizer: fis.plugin('clean-css'),
        release: '$1.min.css'
    });

