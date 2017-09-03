const Table    = require('cli-table2')
const color    = require('cli-color')
const axios    = require('axios')
const ora      = require('ora')

const spinner  = ora('Fetching Data')

const config   = require('../config/config')


module.exports = async ( value ) => {
    spinner.start()

    let param       = {
        params: value
    }

    try{
        
        const data      = await axios.get( config.url, param)
        
        spinner.succeed(" Successfuly Fetching Data ")
        spinner.stop()
        
        let table       = new Table({
            head: [ "Domain", "Status" ],
        })

        resp            = data.data.data


        data.data.data.map( (item) => {
            table.push([ color.cyan.bold(item) , color.green("Available !") ])
        } )

        console.log( table.toString() )
        console.log( color.red(`\n (c) 2017 - Ayat Maulana \n `)   )

    } catch( err )
    {
        console.log( err )
    }
    

}
