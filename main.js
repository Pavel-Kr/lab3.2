function setCookie(name, value, expire) {
	document.cookie = name + "=" + escape(value) +
    ((expire == null) ? "" : ("; expires=" + expire.toGMTString()))
}

function getCookie(Name) {
	var search = Name + "="
	if (document.cookie.length > 0) {
		offset = document.cookie.indexOf(search)
		if (offset != -1) {
			offset += search.length
			end = document.cookie.indexOf(";", offset)
			if (end == -1)
				end = document.cookie.length
			return unescape(document.cookie.substring(offset, end))
		}
	}
}
function Login(){
  let name=document.getElementById("form").name.value;
  let today=new Date();
  let expire=new Date();
  expire.setTime(today.getTime()+1000*3600);
  if(name!="")
    setCookie("name",name,expire);
  let hello=document.getElementById("hello");
  hello.innerHTML="Привет "+getCookie("name");
  alert(document.cookie);
}
function print(){
  alert(document.cookie);
}
function hello(){
  let name=getCookie("name");
  console.log(name);
  let hello=document.getElementById("hello");
  hello.innerHTML="Привет "+name;
}
window.onload=hello();
