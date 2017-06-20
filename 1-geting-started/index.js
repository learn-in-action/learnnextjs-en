var getMdPage = require('../helper').getMdPage
var path = require('path')
var fs = require('fs-extra')

module.exports = {
  title: 'Getting Started',
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
          command: 'cd hello-next/pages',
          message: 'folder hello-next/pages not found',
        },
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'hello-next','package.json')
            return fs.existsSync(tpath)
          },
          message: 'run `npm init` in folder hello-next',
        },
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'hello-next','package.json')
            var content = fs.readFileSync(tpath).toString()
            return /dev/.test(content)
          },
          message: ' "dev": "next"  not found in package.json ',
        }
      ],
    },
    {
      title: '404 Page',
      page: getUrl('2-404-page.md')
    },
    {
      title: 'First Page',
      page: getUrl('3-creating-our-first-page.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'hello-next','pages','index.js')
            return fs.existsSync(tpath)
          },
          message: 'index.js not found in hello-next/pages',
        }
      ]
    },
    {
      title: 'Handle Errors',
      page: getUrl('4-handling-errors.md')
    },
    {
      title: 'You are awesome',
      page: getUrl('5-you-are-awesome.md')
    },
  ]
}

function getUrl(filePath){
  return getMdPage(path.join(__dirname,filePath))
}