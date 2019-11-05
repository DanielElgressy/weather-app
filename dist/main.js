const render = new renderer
const tempmanager = new TempManager




const loadPage = async () => {
    await tempmanager.getDataFromDB()
    render.rendererData(tempmanager.cityData)
}

loadPage()


const handleSearch = async function () {
    let input = $("#city-input").val()

    await tempmanager.getCityData(input)
    render.rendererData(tempmanager.cityData)

}

