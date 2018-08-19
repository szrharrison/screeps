module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-screeps');

  grunt.initConfig({
    screeps: {
      options: {
        email: 's.z.r.harrison@gmail.com',
        password: 'Yes2no3maY',
        branch: 'master',
        ptr: false
      },
      dist: {
        src: ['dist/*.js']
      }
    }
  });
}