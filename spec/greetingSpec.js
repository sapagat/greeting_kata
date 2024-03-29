describe('Greeting', () => {
  it('says hello to the given name', () => {
    const name = "Lorena"
    result = greet(name)
    expect(result).toEqual("Hello, Lorena.")
  })

  it('says hello with an appellative when no name given', () => {
    result = greet()
    expect(result).toEqual('Hello, my friend.')
  })

  it('shouts when the name is in uppercase', () => {
    const uppercaseName = 'CARLOS'
    const result = greet(uppercaseName)
    expect(result).toEqual('HELLO CARLOS!')
  })

  it('allows to greet two names in one greeting', () => {
    const twoNames = ['Laura', 'Leo']
    const result = greet(twoNames)
    expect(result).toEqual('Hello, Laura and Leo.')
  })
})

const APPELLATIVE = 'my friend'
const FIRST = 0
const SECOND = 1

function greet(name=APPELLATIVE) {
  let greeting
  if (isMultiple(name)) {
    const names = name
    greeting = buildMultipleGreeting(names)
  } else {
    greeting = buildSingleGreeting(name)
  }
  return greeting
}

function buildSingleGreeting(name) {
  let greeting
  if (isInUppercase(name)){
    greeting = buildShoutingGreeting(name)
  }
  else {
    greeting = buildDefaultGreeting(name)
  }
  return greeting
}

function buildShoutingGreeting(name) {
  return `HELLO ${name}!`
}

function buildDefaultGreeting(name) {
  return `Hello, ${name}.`
}

function buildMultipleGreeting(names) {
  return `Hello, ${names[FIRST]} and ${names[SECOND]}.`
}

function isInUppercase(name) {
  return name.toUpperCase() === name
}

function isMultiple(name) {
  return Array.isArray(name)
}
