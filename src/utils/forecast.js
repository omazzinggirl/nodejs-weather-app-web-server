const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const forecastURL = 'http://api.weatherstack.com/current?access_key=e9976ce3f33c5dba146394e164769b16&query='+latitude+','+longitude+'&units=m'

    request({ url: forecastURL, json:true}, (error, response) => {
        if(error){
            callback('Unable to connect to forecast services!', undefined)
        } else if(response.body.error){
            callback(undefined, response.body.error.info)
        } else {
            callback(undefined, response.body.current.temperature)
        }
    })

}

module.exports = forecast