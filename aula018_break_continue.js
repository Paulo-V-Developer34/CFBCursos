function breakTest() {
    for(let i = 0; i < 20; i++) {
      console.log(i)
      if(i%2!=1) {
        break
      }
    }
  }
  function continueTest() {
    for(let i = 0; i < 20; i++) {
      console.log(i)
      if(i%2!=1) {
        continue
      }
      console.log(i + " é um número impar")
    }
  }