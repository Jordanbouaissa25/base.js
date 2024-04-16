var data = {
    music: [],
    video: [],
    podcast: []
}

var min = 1451
var max = 54596


for (var i = 0; i < 500; i++){
    var language = "FR"
    if(i%2 !== 0)
    language = "EN"

       data.music.push ({
       titre: "Hello" + i,
       artiste: "HelloArtiste" + i,
       studio: "HelloMusic" + i,
       language: language,
       time: Math.round(Math.random() * (max - min) + min ), // Permet de generer un nombre entre max et min
       DateRelease: 1324423 + i,
       album: "HelloAlbum" + i
       })
}

for (var i = 0; i < data.music.length; i++)  {
console.log (`titre: ${data.music[i].titre} / Artiste : ${data.music[i].artiste} / language : ${data.music[i].language} / time : ${data.music[i].time}`)


}
