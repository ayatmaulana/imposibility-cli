#!/usr/bin/env node

const inquirer = require('inquirer')
const question = require('./partials/question') 
const scrap    = require('./partials/scraper')

inquirer.prompt(question).then( (value) => {
    
   scrap( value )
   
});
