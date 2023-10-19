alert('click OK to allow ip tracking and cookies')
function changeHeader(){
    var x = true
    var headerelement = document.getElementById("mainHeader")
    x = !x;
    if (x) { 
        headerelement.innerHTML="hello"
    }else{
        headerelement.innerHTML="bye bye"
    }

} 