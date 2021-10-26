function Login(){
  let name=document.getElementById("form").name.value;
  let today=new Date();
  let expire=new Date();
  expire.setTime(today.getTime()+1000*3600);
  if(name!="")
    document.cookie="name="+escape(name)+"; expires="+expire.toGMTString();
  let hello=document.getElementById("hello");
  hello.innerHTML="Привет "+name;
  alert(document.cookie);
}
function print(){
  alert(document.cookie);
}
window.onload=function hello(){
  let search="name=";
  let name;
  if(document.cookie.length>0){
    let offset=document.cookie.indexOf(search);
    if(offset!=-1){
      offset+=search.length;
      end=document.cookie.indexOf(";",offset);
      if(end==-1) end=document.cookie.length;
      else name=unescape(document.cookie.substring(offset,end));
    }
  }
  let hello=document.getElementById("hello");
  hello.innerHTML="Привет "+name;
}
