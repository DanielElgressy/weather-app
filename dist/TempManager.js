
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
        for (let city of this.cityData) {
            console.log(city)
            if (city.name === cityName) {
                await $.post(`/city`, city)
            }
        }
    }



    removeCity(cityName) {
        $.ajax({
            method: 'DELETE',
            url: "/city/" + cityName,
            type: "json",
            success: function (result) {
                console.log(result)
            },
            error: function (xhr, text, error) {
                console.log(error)
            }
        })
    }
}

