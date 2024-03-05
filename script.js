
function StartTime() {
    var date = new Date
    document.getElementById('clock').innerHTML= date.toLocaleTimeString();
    setTimeout(function() {StartTime()}, 1000)
    
}
