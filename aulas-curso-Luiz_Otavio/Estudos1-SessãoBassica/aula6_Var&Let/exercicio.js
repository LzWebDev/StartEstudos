var a = 'A'
var b = 'B'
var c = 'C'


var ac = a
var a = b
var b = c
var c = ac

console.log('assim '+a,b,c)

var va = 'A'
var vb = 'B'
var vc = 'C'

[va, vb, vc] = [vb, vc, va]   

console.log('e assim(da na mesma merda)'+ a, b, c)