
$(document).ready(function(){


  var playlist = [{
    //   title:"Hidden",
    //   artist:"Miaow",
    //   mp3:"http://demo.lanrenzhijia.com/2014/music0917/images/i1.mp3",
    //   // mp3:"http://47.113.84.149/1345318197.mp3"
    //   poster: "http://33.media.tumblr.com/0b35eb42176eedbf4a96e52efa760875/tumblr_mxp7a0v3fr1rqx86wo1_500.png"
    // },{
    //   title:"Cro Magnon Man",
    //   artist:"The Stark Palace",
    //   mp3:"http://demo.lanrenzhijia.com/2014/music0917/images/i2.mp3",
    //   poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    // },{
    //   title:"Bubble",
    //   m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
    //   oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg",
    //   poster: "http://31.media.tumblr.com/810b1125a8b9e9f192d009ef58dceb07/tumblr_nbe8wsmKuz1rknpqyo1_500.jpg"
    // },{
      title: "i-love-it",
      mp3: "https://link.hhtjim.com/163/1345318197.mp3",
      artist: "Oscar Enestad",
      poster :"http://p1.music.126.net/SDteiqCAosaL8AcdUn6XwQ==/109951164357030841.jpg"
      },{title:"circles",mp3:"https://link.hhtjim.com/163/1387574419.mp3",artist:"Post Malone",poster:"http://p2.music.126.net/42XFi2UPHDLCkKGHWmiGEQ==/109951164332836092.jpg"
      },{title:"1999",mp3:"https://summerhzf.xyz/music/images/1999.mp3",artist:"Troye Sivan",poster:"http://p2.music.126.net/b7WyInzyJxF5oHkAok1FbA==/109951163586538233.jpg"}];

  
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  
  var options = {
    swfPath: "http://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3"
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  
});
