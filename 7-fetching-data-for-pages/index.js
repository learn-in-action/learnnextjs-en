var getMdPage = require('../helper').getMdPage
var path = require('path')
var fs = require('fs')

module.exports = {
  title: 'Fetching data for pages',
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
      title: 'Fetching batman shows',
      page: getUrl('2-fetching-batman-shows.md'),
      validate: [
        {
          command: 'cd learnnextjs-demo/node_modules/isomorphic-unfetch',
          message: 'run npm install isomorphic-unfetch in learnnextjs-demo first',
        },
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            return fs.existsSync(tpath)
          },
          message: 'file index.js not found',
        },
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            var content = fs.readFileSync(tpath)
            return content.toString().indexOf('getInitialProps')>=0
          },
          message: 'not using getInitialProps to ge prop in index.js',
        }        
      ]
    },
    {
      title: 'Only on the server',
      page: getUrl('3-only-on-the-server.md'),
    },
    {
      title: 'Implement the post page',
      page: getUrl('4-implement-the-post-page.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','post.js')
            return fs.existsSync(tpath)
          },
          message: 'file post.js not found ',
        },
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','post.js')
            var content = fs.readFileSync(tpath)
            return content.toString().indexOf('getInitialProps')>=0
          },
          message: 'not using getInitialProps to ge prop in post.js',
        }        
      ]
    },
    {
      title: 'Fetch data in client side',
      page: getUrl('5-fetch-data-in-client-side.md')
    },
    {
      title: 'Finally',
      page: getUrl('6-finally.md')
    },
  ]
}

function getUrl(filePath){
  return getMdPage(path.join(__dirname,filePath))
}