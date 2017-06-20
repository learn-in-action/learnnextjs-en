var getMdPage = require('../helper').getMdPage
var path = require('path')
var fs = require('fs')

module.exports = {
  title: 'Styling components',
  steps: [
    {
      title: 'Introduce',
      page: getUrl('README.md')
    },
    {
      title: 'Setup',
      page: getUrl('1-setup.md')
    },
    {
      title: 'Styling our home page',
      page: getUrl('2-styling-our-home-page.md'),
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
            return /style\s+jsx/.test(content)
          },
          message: '<style jsx> not found in index.js',
        }
      ]
    },
    {
      title: 'Styles template strings',
      page: getUrl('3-styles-template-strings.md')
    },
    {
      title: 'Styles and nested components',
      page: getUrl('4-styles-and-nested-components.md')
    },
    {
      title: 'No effect for nested components',
      page: getUrl('5-no-effect-for-nested-components.md')
    },
    {
      title: 'Global styles',
      page: getUrl('6-global-styles.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','post.js')
            return fs.existsSync(tpath)
          },
          message: 'file pages/post.js not found',
        },
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','post.js')
            var content = fs.readFileSync(tpath).toString()
            return /style\s+jsx\s+global/.test(content)
          },
          message: '<style jsx global> not found in post.js',
        }
      ]
    },
    {
      title: 'Global styles work',
      page: getUrl('7-global-styles-work.md')
    },
    {
      title: 'What next',
      page: getUrl('8-what-next.md')
    },
  ]
}

function getUrl(filePath){
  return getMdPage(path.join(__dirname,filePath))
}