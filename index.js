document.getElementById("btn_01").onclick = function () {
  console.log("ボタンが押されました");

  document.getElementById("btn_01").style.backgroundColor = "#ffc9f9";
  document.getElementById("btn_02").style.backgroundColor = "#fff";
  document.getElementById("btn_03").style.backgroundColor = "#fff";
  document.getElementById("btn_04").style.backgroundColor = "#fff";
  document.getElementById("btn_05").style.backgroundColor = "#fff";

  document.getElementById("bg_01").style.display = "block";
  document.getElementById("bg_02").style.display = "none";
  document.getElementById("bg_03").style.display = "none";
  document.getElementById("bg_04").style.display = "none";
  document.getElementById("bg_05").style.display = "none";
};

document.getElementById("btn_02").onclick = function () {
  console.log("ボタンが押されました");

  document.getElementById("btn_01").style.backgroundColor = "#fff";
  document.getElementById("btn_02").style.backgroundColor = "#ffc9f9";
  document.getElementById("btn_03").style.backgroundColor = "#fff";
  document.getElementById("btn_04").style.backgroundColor = "#fff";
  document.getElementById("btn_05").style.backgroundColor = "#fff";

  document.getElementById("bg_01").style.display = "none";
  document.getElementById("bg_02").style.display = "block";
  document.getElementById("bg_03").style.display = "none";
  document.getElementById("bg_04").style.display = "none";
  document.getElementById("bg_05").style.display = "none";
};

document.getElementById("btn_03").onclick = function () {
  console.log("ボタンが押されました");

  document.getElementById("btn_01").style.backgroundColor = "#fff";
  document.getElementById("btn_02").style.backgroundColor = "#fff";
  document.getElementById("btn_03").style.backgroundColor = "#ffc9f9";
  document.getElementById("btn_04").style.backgroundColor = "#fff";
  document.getElementById("btn_05").style.backgroundColor = "#fff";

  document.getElementById("bg_01").style.display = "none";
  document.getElementById("bg_02").style.display = "none";
  document.getElementById("bg_03").style.display = "block";
  document.getElementById("bg_04").style.display = "none";
  document.getElementById("bg_05").style.display = "none";
};

document.getElementById("btn_04").onclick = function () {
  console.log("ボタンが押されました");

  document.getElementById("btn_01").style.backgroundColor = "#fff";
  document.getElementById("btn_02").style.backgroundColor = "#fff";
  document.getElementById("btn_03").style.backgroundColor = "#fff";
  document.getElementById("btn_04").style.backgroundColor = "#ffc9f9";
  document.getElementById("btn_05").style.backgroundColor = "#fff";

  document.getElementById("bg_01").style.display = "none";
  document.getElementById("bg_02").style.display = "none";
  document.getElementById("bg_03").style.display = "none";
  document.getElementById("bg_04").style.display = "block";
  document.getElementById("bg_05").style.display = "none";
};

document.getElementById("btn_05").onclick = function () {
  console.log("ボタンが押されました");

  document.getElementById("btn_01").style.backgroundColor = "#fff";
  document.getElementById("btn_02").style.backgroundColor = "#fff";
  document.getElementById("btn_03").style.backgroundColor = "#fff";
  document.getElementById("btn_04").style.backgroundColor = "#fff";
  document.getElementById("btn_05").style.backgroundColor = "#ffc9f9";

  document.getElementById("bg_01").style.display = "none";
  document.getElementById("bg_02").style.display = "none";
  document.getElementById("bg_03").style.display = "none";
  document.getElementById("bg_04").style.display = "none";
  document.getElementById("bg_05").style.display = "block";
};
