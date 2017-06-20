const path = require('path')

module.exports = {
  title: 'learn next.js',
  dependences: [],
  chapters: [
    {
      title: 'Prerequisition',
      steps: [
        {
          title:'NodeJS',
          desc: 'if you do not have NodeJS installed back to the course list and follow the NodeJS one first',
          page: path.join(__dirname,'resources','nodejs.html'), 
          validate: [            
            {
              cmd: 'node -v',
              errorMsg: 'node is not working', 
            },
            {
              cmd: 'npm -v',
              errorMsg: 'npm is not working', 
            },
          ],
        },
      ]
    },    
  ].concat(require('./chapters'))
}
