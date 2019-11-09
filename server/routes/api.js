const express = require('express')
const router = express.Router()
const City = require('../models/City')
const request = require("request")


router.get('/test', function (req, res) {
    res.send("Hello")
})


router.get('/city/:cityName', function (req, res) {
    let cityName = req.params.cityName


    request(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=7d830ccd5402469d00c752bbe6ac4ffb`, function (err, response) {


        let weatherData = JSON.parse(response.body)
        let nameCheck = weatherData.name || weatherData.message
        if (nameCheck === weatherData.message) {
            console.log(`The name ${cityName} does not make sense!!`)
            return
        }
        let filteredData = {
            name: nameCheck,
            temperature: Math.round(weatherData.main.temp),
            condition: weatherData.weather[0].description,
            conditionPic: weatherData.weather[0].icon
        }
        res.send(filteredData)

    })
})


router.get('/cities', async function (req, res) {
    const cities = await City.find({})
    res.send(cities)
})


router.post('/city', async function (req, res) {
    let body = req.body
    let c1 = new City(body)
    await c1.save()
    res.send(`City ${c1.name} saved in DB`)
})


router.delete('/city/:cityName', async function (req, res) {
    let cityName = req.params.cityName
    let deleteCity = await City.findOneAndDelete({
        name: cityName
    })
    res.send(`city ${deleteCity.name} deleted from DB`)
})




module.exports = router   