fizzbuzzIt = (N) =>[...Array(N).keys()].map(i => (i+1)%3===0?(i+1)%5===0?'fizzbuzz':'fizz':(i+1)%5==0?'buzz':(i+1)).join(' ')

module.exports = {
	fizzbuzzIt
}