var getMdPage = require('../helper').getMdPage
var path = require('path')
var fs = require('fs')

module.exports = {
  title: 'Create dynamic pages',
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
      title: 'Adding a list of posts',
      page: getUrl('2-adding-a-list-of-posts.md'),
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
            var content = fs.readFileSync(tpath).toString()
            return /PostLink/.test(content)
          },
          message: 'PostLink not found in index.js',
        }
      ]
    },
    {
      title: 'passing data via query strings',
      page: getUrl('3-passing-data-via-query-strings.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','post.js')
            return fs.existsSync(tpath)
          },
          message: 'file not found pages/post.js',
        },
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','post.js')
            var content = fs.readFileSync(tpath).toString()
            return /props\.url\.query\.title/.test(content)
          },
          message: 'props.url.query.title not found in post.js',
        }
      ]
    },
    {
      title: 'Special prop url',
      page: getUrl('4-special-prop-url.md')
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