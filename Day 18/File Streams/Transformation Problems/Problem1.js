// Node.js Stream Transformation Program that reads numbers from a file, 
// multiplies them by 4 using a custom Transform stream, and writes the modified numbers into another file

const fs=require('fs')
const {Transform}= require('stream')
class TransformNumber extends Transform{

    constructor(){
        super();
    }


_transform(chunk,encoding,callback){
    let data=chunk.toString();
    const chnagedNum=data
    .split('\n')
    .map(line=>{
        const num=parseFloat(line.trim());
        if(!isNaN(num)){
            return num*4
        }
        return line
    })
    .join('\n');
    this.push(chnagedNum);
    callback();
}
}

const inputFile='input.txt'
const outFile='output.txt'

const readStream=fs.createReadStream(inputFile,{encoding:'utf8'})
const transformStream= new TransformNumber()
const writeStream=fs.createWriteStream(outFile)

readStream
.pipe(transformStream)
.pipe(writeStream)
.on('finis',()=>{
    console.log('Numebrs are modified')
});