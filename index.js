const fs = require('fs')

const fileName = 'employees.json'
const employee = { name: 'Employee 1 Name', salary: 2000 }

/* STEP 1: WRITE */
fs.writeFile(fileName, JSON.stringify(employee),  (err) => {
  if (err) console.error(err.message)

  /* STEP 2: READ */
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) console.error(err.message)
    console.log(data)

    /* STEP 3: UPDATE */
    const parsedData = JSON.parse(data)
    parsedData.name = 'Ali Veli'
    fs.writeFile(fileName, JSON.stringify(parsedData), (err) => {
      if (err) console.error(err)

      /* STEP 4: DELETE */
      fs.unlink(fileName, (err) => {
        if (err) console.error(err.message)
      })
    })
  })
})
