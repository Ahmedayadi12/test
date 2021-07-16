function f1(){
     document.getElementById('one').style.display='none'
}
function f2(){
    document.getElementById('one').style.display='block';
}
function count(){
    var a = document.getElementById('count').textContent;
    var b = parseInt(a)
    while(b>=0){
        document.getElementById('count').textContent = b+1

    }
}