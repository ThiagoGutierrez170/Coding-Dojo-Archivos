var like1=0;
var like2=0;
var like3=0;
document.getElementById("like1").addEventListener("click", () => {
    const p = document.getElementById("element1");
    like1++;
    p.textContent=like1+" like(s)";
});
document.getElementById("like2").addEventListener("click", () => {
    const p = document.getElementById("element2");
    like2++;
    p.textContent=like2+" like(s)";
});
document.getElementById("like3").addEventListener("click", () => {
    const p = document.getElementById("element3");
    like3++;
    p.textContent=like3+" like(s)";
});