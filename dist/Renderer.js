
class renderer { 

    rendererData(allCityData ) { 
        $("#data").empty()
        const source = $("#result-template").html()
        const template = Handlebars.compile(source)
        const someHTML = template({ allCityData } )
        $("#data").append(someHTML)

    }
}


