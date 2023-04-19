// NASA PIC API
fetch('https://api.nasa.gov/planetary/apod?api_key=zfHhKMgvbXkwzU4eQ3nAMQmz5K9X0AuHU8ve0Wul')
    .then(res => res.json())
    .then(data => {
        console.log(data.hdurl)
        document.getElementById('thePic').src = data.hdurl
        
    })
