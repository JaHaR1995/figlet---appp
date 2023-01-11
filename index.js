

let figlet  = require('figlet')

figlet ('Intocode',  function (err, data){
  if(err){
    console.log('now intocode')
    console.log(err)
    return 
  }
  console.log(data)
})