const inquirer = require('inquirer')
const config   = require('./config/config')
const question = require('./partials/question') 
const scrap    = require('./partials/scraper')

inquirer.prompt(question).then( (value) => {
    
   scrap( value )
   
});
