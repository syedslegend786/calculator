function btnAction(number) {
    var result = document.getElementById("result");
    result.value += number;
}
function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
}
function finalResult() {

    var result=document.getElementById("result");
    result.value=eval(result.value);

}

