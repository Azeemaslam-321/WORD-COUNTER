let textbox=document.getElementById("textbox");
textbox.addEventListener('input',function(){
    var text =this.value;
    let char=text.length;
    document.getElementById("char").innerHTML=char;
   text.trim();
   let words=text.split(" ");
   let cleanList=words.filter(function(elm){
 return elm !="";
   })
//    console.log(words);
   document.getElementById("word").innerHTML= cleanList.length;

})