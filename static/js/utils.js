function ajax(type,url,data,callback) {


    //创建XHR对象
     let Ajax=null;
    if(window.XMLHttpRequest){
        Ajax=new window.XMLHttpRequest();


    }else {
        Ajax=new ActiveXObject();
    }


    //规定请求方式 文件在服务器中的位置url 和是否异步


    //如果请求方式是 get 需要对url进行格式化（转换为常见get时的url）
    if(type=='GET'){ //遍历json对象的每个key/value对,k为key
  for(k in  data){
      // console.log(data);
      // console.log(k);
      // console.log(data[k]);
      // console.log(data.k); 不显示

      url=addURLParam(url,k,data[k]);
      // console.log(url);

  }
        Ajax.open(type,url,true);
        Ajax.send(null);
    }
    else if(type=='POST') {
        Ajax.open(type,url,true);
        //请求方式是POST时，数据放在
        Ajax.setRequestHeader("Content-type","application/json;charset=utf-8");

        Ajax.send(JSON.parse(data))//转化为json字符串再发送给服务器
    }
//服务器响应过程
    Ajax.onreadystatechange=function(){
        try{
            if(Ajax.readyState==4){

                if(Ajax.status>=200 && Ajax.status<300 || Ajax.status==304){
                    var result=JSON.parse(Ajax.responseText);
                    callback(result);
                }else{
                    callback(null);
                }
            }
        }catch (error){
            console.log(error.message);
            callback(null);
        }
    };
    
}

//    url格式化函数--单次只能添加一个键值对，所以一般是循环使用-----------------
function addURLParam(url,name,value) {
    url+=(url.indexOf("?")==-1)?"?":"&";
    url+=encodeURIComponent(name)+"="+encodeURIComponent(value);
    return url;
}