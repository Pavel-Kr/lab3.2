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
  if(name!=""){
    setCookie("name",name,expire);
    setCookie("visits",1,expire);
  }
  let hello=document.getElementById("hello");
  hello.innerHTML="Привет "+getCookie("name");
  let visit=document.getElementById("visits");
  visit.innerHTML="Количество посещений: "+getCookie("visits");
  document.getElementById("form").name.value=" ";
}
function Obnul(){
  let today=new Date();
  let expire=new Date();
  expire.setTime(today.getTime()+1000*3600);
  setCookie("visits",0,expire);
  let visit=document.getElementById("visits");
  visit.innerHTML="Количество посещений: "+getCookie("visits");
}
function Hello(){
  let name=getCookie("name");
  let visits=getCookie("visits");
  visits++;
  let hello=document.getElementById("hello");
  let visit=document.getElementById("visits");
  hello.innerHTML="Привет "+name;
  visit.innerHTML="Количество посещений: "+visits;
  let today=new Date();
  let expire=new Date();
  expire.setTime(today.getTime()+1000*3600);
  setCookie("visits",visits,expire);
  let lastVisit=new Date(getCookie("time"));
  console.log(lastVisit);
  let hours=today.getHours()-lastVisit.getHours();
  let minutes=today.getMinutes()-lastVisit.getMinutes();
  if(minutes<0){
    hours--;
    minutes+=60;
  }
  let seconds=today.getSeconds()-lastVisit.getSeconds();
  if(seconds<0){
    minutes--;
    seconds+=60;
  }
  let time=document.getElementById("time");
  time.innerHTML="Последний раз вы были на странице " + hours + " часов, " + minutes
      + " минут, "+seconds+" секунд назад";
  setCookie("time",today,expire);
}
window.onload=Hello();
