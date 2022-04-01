var fs =requier('fs')
var myfile =process.argv[2]


fs.readFile(myfile, function(err, x){
    var nline =x.toString().split('\n').length -1
    console.log(nline)
})