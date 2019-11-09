const render = new renderer
const tempmanager = new TempManager


const loadPage = async () => {
    await tempmanager.getDataFromDB()
    render.rendererData(tempmanager.cityData)
}



$("#show").on("click", function () {
    let input = $("#city-input").val()
    let cityExist = tempmanager.cityData.some(x => x.name && (x.name.toLowerCase() == input.toLowerCase()));
    if (cityExist == true) {
        alert(`${input} already exist`); //לא יאפשר להציג את אותה עיר יותר מפעם אחת
    } else {
        handleSearch(input)
    }
})

const handleSearch = async function (input) {
    await tempmanager.getCityData(input)
    render.rendererData(tempmanager.cityData)
    $("#city-input").val("")
}




$("#data").on("click", "#saveCity", function () {
    let cityName = $(this).closest(".city").find("#cityName").text()
    console.log(cityName)
    tempmanager.saveCity(cityName)
    alert(`${cityName} saved in DB`)

})


$("#data").on("click", "#deletCity", function () {
    let cityName = $(this).closest(".city").find("#cityName").text()
    tempmanager.removeCity(cityName)
    render.rendererData(tempmanager.cityData)
})


loadPage()  

