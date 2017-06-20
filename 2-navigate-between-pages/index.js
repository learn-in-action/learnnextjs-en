var getMdPage = require('../helper').getMdPage
var path = require('path')
var fs = require('fs')

module.exports = {
  title: 'Navigate between pages',
  steps: [
    {
      title: 'Navigate between pages',
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
      title: 'Using Link',
      page: getUrl('2-using-link.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            return fs.existsSync(tpath)
          },
          message: 'file learnnextjs-demo/pages/index.js not found',
        },
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            var content = fs.readFileSync(tpath).toString()
            return /Link/.test(content)
          },
          message: '<Link>  not found in index.js',
        }
      ]
    },
    {
      title: 'Client side history support',
      page: getUrl('3-client-side-history-support.md')
    },
    {
      title: 'Styling a link',
      page: getUrl('4-styling-a-link.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            return fs.existsSync(tpath)
          },
          message: 'file learnnextjs-demo/pages/index.js not found',
        },
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            var content = fs.readFileSync(tpath)
            return /fontSize/.test(content)
          },
          message: 'fontSize not found in index.js',
        }
      ]
    },
    {
      title: 'HOC',
      page: getUrl('5-link-is-just-a-higher-order-component-hoc.md')
    },
    {
      title: 'Link with a button',
      page: getUrl('6-link-with-a-button.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            return fs.existsSync(tpath)
          },
          message: 'file learnnextjs-demo/pages/index.js not found',
        },
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            var content = fs.readFileSync(tpath)
            return /button/.test(content)
          },
          message: 'button not found in index.js',
        }
      ]
    },
    {
      title: 'Link works with anything',
      page: getUrl('7-link-works-with-anything.md')
    },
    {
      title: 'Link is simple but powerful',
      page: getUrl('8-link-is-simple-but-powerful.md')
    },
  ]
}

function getUrl(filePath){
  return getMdPage(path.join(__dirname,filePath))
}