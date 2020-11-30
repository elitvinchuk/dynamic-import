// Host application

console.log('hey from host');

// todo: avoid installing as a dependency?

// import('@plugins/first')

['first', 'second'].forEach(pluginName => {
  console.log(pluginName)
  // const plugin = import(`@plugin/${pluginName}`)
  const plugin = import(`../../plugins/${pluginName}/index.js`)
})
