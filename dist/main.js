const render = new renderer
const tempmanager = new TempManager




const loadPage = async () => {
    await tempmanager.getDataFromDB()
    render.rendererData(tempmanager.cityData)
}

loadPage()

$("#show").on("click", function () {
    handleSearch()
})

const handleSearch = async function () {
    let input = $("#city-input").val()
    await tempmanager.getCityData(input)
    render.rendererData(tempmanager.cityData)
    
}

$("#data").on("click", "#saveCity", function(){
    let cityName =  $(this).closest(".city").find("#cityName").text()
    console.log(cityName)
    tempmanager.saveCity(cityName)

})

$("#data").on("click", "#deletCity", function(){
    let cityName =  $(this).closest(".city").find("#cityName").text()
    tempmanager.removeCity(cityName)
    render.rendererData(tempmanager.cityData)
})

