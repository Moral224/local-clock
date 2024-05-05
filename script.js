
function StartTime() {
    var date = new Date
    document.getElementById('clock').innerHTML= date.toLocaleTimeString();
    document.getElementById('date').innerHTML=date.toLocaleDateString();
    setTimeout(function() {StartTime()}, 1000)
    
}
