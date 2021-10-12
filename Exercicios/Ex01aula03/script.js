
function calca(){
    let v1 = parseFloat (document.getElementById("val1").value);
    let v2 = parseFloat(document.getElementById("val2").value);
    let op = document.getElementsByName("calc");
    let result = document.getElementById("result");
    if(op[0].checked == true){
        let r = v1 + v2;
        result.value = r;
    }
    if(op[1].checked == true){
        let r = v1 - v2;
        result.value = r;
    }
    if(op[2].checked == true){
        let r = v1 * v2;
        result.value = r;
    }
    if(op[3].checked == true){
        let r = v1 / v2;
        result.value = r;
    }

}