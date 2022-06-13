$(document).ready(function {
    let weatherViewModel = {city: ko.observable()}
        ko.applyBindings(weatherViewModel),
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather",
        data: {
        q: $("weatherViewModel.city").val(),
        APPID: 'b2b1df463182c3cca5276e9d3267cc95'
    },
    sucess: function (data) {
        let dataViewModel = {
            data.
        }
        
    }

})
    
    
    