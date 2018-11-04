document.querySelector('.inpu').onclick=function (event) {

  let aa=document.querySelectorAll('.right-content .inpu > div');
  for (let i of aa){
    i.style="border: #edf1f2 1px solid"
  }
  if(event.target.className=='phone1'){
    document.querySelector('.right-content .user-telephone').style="border: #2698e4 1px solid;box-sizing: border-box;"
  }else if(event.target.className=='check2'){
    document.querySelector('.message-check').style="border: #2698e4 1px solid;box-sizing: border-box;"
  }
  else if(event.target.className=='check1'){
    document.querySelector('.user-check').style="border: #2698e4 1px solid;box-sizing: border-box;"
  }

};
