describe('Greeting', () => {
  it('says hello to the given name', () => {
    const name = "Lorena"
    result = greet(name)
    expect(result).toEqual("Hello, Lorena.")
  })

  it('says hello to a stranger, but politely', () => {
    result = greet()
    expect(result).toEqual('Hello, my friend.')
  })

  it('shouts when the name is in uppercase', () => {
    const uppercaseName = 'CARLOS'
    const result = greet(uppercaseName)
    expect(result).toEqual('HELLO CARLOS!')
  })
})

const APPELLATIVE = 'my friend'

function greet(name=APPELLATIVE) {
  let result
  if (isInUppercase(name)){
    result = 'HELLO ' + name + '!'
  } else {
    result =  `Hello, ${name}.`
  }
  return result
}

function isInUppercase(name) {
  return name.toUpperCase() === name
}
