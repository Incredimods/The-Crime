var app=new function(){this.name="The Crime", this.version="1", this.date="2024", this.folder="asset-v1/", this.looptime=6400, this.bpm=150, this.totalframe=306, this.nbpolo=7, this.nbloopbonus=2, this.bonusloopA=!0, this.bonusendloopA=!0, this.recmaxloop=68, this.recminloop=4, this.recmintime=Math.round(this.looptime/1e3)*this.recminloop, this.spritepolo="polo-sprite.png", this.spritepicto="game-picto.png", this.colBck="#40131b", this.col0="#330716", this.col1="#1f060c", this.col2="#330716", this.col3="#470a1e", this.col4="#21040b", this.animearray=[{name:"1_zane",color:"378e46",uniqsnd:!0},{name:"2_kneehitter",color:"378e46",uniqsnd:!0},{name:"3_flicker",color:"378e46",uniqsnd:!0},{name:"4_tristan",color:"378e46",uniqsnd:!0},{name:"5_freestyler",color:"378e46",uniqsnd:!1},{name:"6_carl",color:"45618a",uniqsnd:!1},{name:"7_ray",color:"45618a",uniqsnd:!0},{name:"8_hooper",color:"45618a",uniqsnd:!0},{name:"9_price",color:"45618a",uniqsnd:!0},{name:"10_remy",color:"45618a",uniqsnd:!0},{name:"11_adrian",color:"7e2132",uniqsnd:!0},{name:"12_waylen",color:"7e2132",uniqsnd:!0},{name:"13_terry",color:"7e2132",uniqsnd:!0},{name:"14_headend",color:"7e2132",uniqsnd:!0},{name:"15_sammi",color:"7e2132",uniqsnd:!0},{name:"16_silentboss",color:"ffffff",uniqsnd:!1},{name:"17_bryan",color:"ffffff",uniqsnd:!0},{name:"18_jason",color:"ffffff",uniqsnd:!1},{name:"19_spytraitor",color:"ffffff",uniqsnd:!1},{name:"20_fallen",color:"ffffff",uniqsnd:!0}],this.bonusarray=[{name:"Memories",src:"b1-memories-hb.mp4",code:"1,2,6,11,18",sound:"bonus-memories",aspire:"aspire-memories"}];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};
