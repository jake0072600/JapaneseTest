module.exports = function(grunt){
    //配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            domop: {
                src: ['js/jquery-2.1.3.min.js', 'js/pixi.min.js','js/pixi-spine.js','js/TweenLite.js','js/view.js'],
                dest: 'js/justDoIt.js'
            }
        },
        uglify: {
            options: {
                banner: '\n'
            },
            bulid: {
                src: 'js/justDoIt.js',
                dest: 'js/justDoIt.min.js'
            }
        }
    });

    //载入concat和uglify插件，分别对于合并和压缩
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //注册任务
    grunt.registerTask('default', ['concat', 'uglify']);

};