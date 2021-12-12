let text = document.getElementById("floatingTextarea");
let btn1 = document.getElementById("encode");
let btn2 = document.getElementById("encrypt");

let toput = document.getElementById("code");

btn1.onclick = function () {
  let orgvalue = text.value;
  orgvalue = btoa(orgvalue);
  toput.value = orgvalue;
};

btn2.onclick = function () {
  let encrypted = toput.value;
  let ans = "";
  for (let i = 0; i < encrypted.length; i++) {
    if (encrypted[i] >= "a" && encrypted[i] <= "z")
      ans += encrypted[i].toUpperCase();
    else if (encrypted[i] >= "A" && encrypted[i] <= "Z")
      ans += encrypted[i].toLowerCase();
    else ans += encrypted[i];
  }

  toput.value = ans;
};
