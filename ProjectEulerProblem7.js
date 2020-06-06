const prime = {}
let n = 0 
for (var i = 2; n < 10001; i++) {
  if (prime[i]){
    prime[i].forEach((p) => {
      const list = prime[p + i] || []
      list.push(p)
      prime[p + i] = list
    })
  } else {
    prime[i * i] = [i]
    n++
  }
}
console.log(i - 1)