module.exports = function(grunt){
    //����
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

    //����concat��uglify������ֱ���ںϲ���ѹ��
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //ע������
    grunt.registerTask('default', ['concat', 'uglify']);

};