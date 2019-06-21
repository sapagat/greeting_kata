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
})

function greet(name='my friend') {
  return `Hello, ${name}.`
}
