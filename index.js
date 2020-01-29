var uglifier = require('uglify-js');
var fs = require('fs');
var path = require('path');


var Minifier = (function(){

    var basePath;
    var regExp;
    var fileSystem;
    var path;
    function Minifier({basePath,regExp,fileSystem,path}){
        basePath = basePath,
        outputPath = outputPath,
        regExp = regExp,
        fileSystem = fileSystem,
        path = path;
    }
    Minifier.prototype.setBasePath = function(basePath){
        basePath = basePath;
    }
    Minifier.prototype.setFileExp = function(regExp){
        regExp = regExp;
    }
    Minifier.prototype.runTask = function(){
        fs.
    }

    return Minifier;
})();
module.exports = {
    Minifier : Minifier


}

