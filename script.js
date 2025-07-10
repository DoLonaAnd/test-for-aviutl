function al3(){
  alert("外部スクリプト！");
}

function writeIn(num) {
  try{
    const p = document.getElementById("input-shower");
    const inp = document.getElementById("in" + num).value;
    p.innerHTML = inp;
    alert(inp);
  }catch(e) {
    alert(e);
  }
}

  document.getElementById("in2").addEventListener("change", (event) => {
    writeIn(2);
  });
