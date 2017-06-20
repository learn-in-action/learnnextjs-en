var getMdPage = require('../helper').getMdPage
var path = require('path')
var fs = require('fs')

module.exports = {
  title: 'Server side support for clean urls',
  steps: [
    {
      title: 'Introduce',
      page: getUrl('README.md')
    },
    {
      title: 'Setup',
      page: getUrl('1-setup.md'),
      validate: [
        {
          command: 'cd learnnextjs-demo',
          message: 'folder learnnextjs-demo not found',
        },
      ]
    },
    {
      title: 'Create a custom server',
      page: getUrl('2-create-a-custom-server.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','server.js')
            return fs.existsSync(tpath)
          },
          message: 'file server.js not found',
        }
      ]
    },
    {
      title: 'create our custom route',
      page: getUrl('3-create-our-custom-route.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','server.js')
            var content = fs.readFileSync(tpath)
            return content.toString().indexOf('getRequestHandler')>=0
          },
          message: 'route masking with app.getRequestHandler not found in server.js',
        }
      ]
    },
    {
      title: 'Information on url',
      page: getUrl('4-information-on-url.md')
    },
    {
      title: 'Finally',
      page: getUrl('5-finally.md')
    },
  ]
}

function getUrl(filePath){
  return getMdPage(path.join(__dirname,filePath))
}