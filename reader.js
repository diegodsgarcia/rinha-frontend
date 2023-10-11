

export default function reader(file) {
  return new Promise((resolve, reject) => {
    if (file.type !== 'application/json') {
      return reject()
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      const parse = JSON.parse(event.target.result)
      resolve(parse)
    }
    reader.readAsText(file)
   })
}
