
class TempManager {

    constructor() {
        this.cityData = []

    }

    async getDataFromDB() {
        const res = await $.get(`/cities`)
        this.cityData = res
    }

    async getCityData(cityName) {
        const res = await $.get(`/city/${cityName}`)
        this.cityData.unshift(res)
    }

    async saveCity(cityName) {
        const city = (this.cityData.find(c => c.name === cityName))
        if (city) {
            await $.post(`/city`, city)
        }}


        removeCity(cityName) {
            $.ajax({
                method: 'DELETE',
                url: "https://localhost:5000/city/" + cityName,
                type: JSON,
                success: function (url) {
                    console.log(url)
                },
                error: function (xhr, text, error) {
                    console.log(error)
                }
            }) 
        }
    }
                
