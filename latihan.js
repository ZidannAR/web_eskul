const arraySaya = ['semangka','anggur','pisang','jeruk','alpukat']

newArray = Array.from(arraySaya)

newArray[0] = 'aduhaiii'

console.log({arraySaya})
console.log({newArray})


// array multifungsi

const multiArray = ['zidan', 12, {tomato : true} , ['qwerty','tomat'] , {banana: function(){
       console.log('ini pisang')
}}]

multiArray[4].banana()