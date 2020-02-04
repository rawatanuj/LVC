function jfun1(){
    
    if(form1.t1.value=="" || form1.t2.value==""|| form1.t3.value==""|| form1.t4.value==""){
        alert("marks are not filled");
        return false;
        }
        else {
    var a=parseInt(document.getElementById("txt1").value);
    var b=parseInt(document.getElementById("txt2").value);
    var c=parseInt(document.getElementById("txt3").value);
    var d=parseInt(document.getElementById("txt4").value);
    var tm1=a+b+c+d;
    var per=(tm1/400)*100;
    var hg;
    if(a>b && a>c && a>d)
    hg=a;
    else if(b>c && b>d)
    hg=b;
    else if(c>d)
    hg=c;
    else 
    hg=d;
    document.getElementById("tm").value=tm1;
    document.getElementById("pr").value=per;
    document.getElementById("hs").value=hg;
        }
    }

function jfun2(){
    window.open("welcome.html", width="40%" ,height="40%");
}    
function jfun3(){
    if(form1.txt1.value==""){
    alert("Name must be filled");
    return false;
}
}
function jfun4(){
    alert("Know your test scores");
}
function jfun5(){
alert("thanks");
}
function jfun6(){
    alert("For Office Use Only");
    document.getElementById("nm").focus();
}
function jfun7(){
    form5.rg.value=" ";
}
function jfun8(){
    var a=document.getElementById("slt2").value;
    document.getElementById("c1").value="You Selected: "+a;
}
function jfun9(){
    var a=document.getElementsByName("n1");
    var b=document.getElementsByName("j1");
    var cnt=0;
    if(a[0].checked)
    cnt+=2;
    if(b[1].checked)
    cnt+=2;
    alert("You scored: "+cnt+" marks.");
}
function jfun10(){
var name=window.prompt("Your name:", "");
document.write("Hello "+name);
}
function jfun11(){
    var a=document.getElementsByName("ch1");
    var cnt=0;
    for(var i=0;i<a.length;i++){
        if(a[i].checked)cnt++;
    }
    if(cnt<3)
    alert("Select AtLeast 3");
    else
    alert("Good");
}
function jfun12(){
    var l1=document.getElementById("sl").value;
    var l2=document.getElementById("sl2").value;
    window.open(l1+l2);
}
function jfun13(){
    var v=document.getElementById("vd").value;
    if(v.length<4)
    document.getElementById("nm1").innerHTML="Invalid Length";
    else
    document.getElementById("nm1").innerHTML="";
}