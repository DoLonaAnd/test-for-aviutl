function al3(){
  alert("外部スクリプト！");
}

function writeIn(num) {
    const p = document.getElementById("input-shower");
    const inp = document.getElementById("in" + num).value;
    p.innerHTML = inp;
    alert(inp);
    alert(e);
}
