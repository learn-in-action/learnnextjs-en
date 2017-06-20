var getMdPage = require('../helper').getMdPage
var path = require('path')
var fs = require('fs')

module.exports = {
  title: 'Clean urls with route masking',
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
          message: '没有创建目录learnnextjs-demo',
        },
      ]
    },
    {
      title: 'Route masking',
      page: getUrl('2-route-masking.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            return fs.existsSync(tpath)
          },
          message: 'file pages/index.js not found',
        },
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            var content = fs.readFileSync(tpath)
            return content.toString().indexOf('/p/${props.id}')>=0
          },
          message: 'Link with attribue as={`/p/${props.id}`} not found in index.js',
        }
      ]
    },
    {
      title: 'History awareness',
      page: getUrl('3-history-awareness.md')
    },
    {
      title: 'Reload',
      page: getUrl('4-reload.md')
    },
    {
      title: '404 Page',
      page: getUrl('5-404.md')
    },
  ]
}

function getUrl(filePath){
  return getMdPage(path.join(__dirname,filePath))
}