function clickMe() {
  var name = prompt("nhập điều ước của em vào đây nha, sẽ không ai biết đâu em :D");
  if (name != null) {
    switch (name) {
      case "":
        document.getElementById("name").innerHTML =
          "Xin gửi năng lượng yêu thương đến em <3";
        break;
      default:
        document.getElementById("name").innerHTML =
          "Xin gửi năng lượng yêu thương đến em <3";
        break;
    }
  } else {
    document.getElementById("name").innerHTML =
      "Xin gửi năng lượng yêu thương đến em <3";
  }
  document.getElementById("img").style.display = "block";
  document.getElementById("content").style.display = "block";
  document.getElementById("button").style.display = "none";
  document.getElementById("link").style.display = "block";
}
