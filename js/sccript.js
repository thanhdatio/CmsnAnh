function clickMe() {
  var name = prompt("Gõ tên em vào đây nha, bất ngờ đấy!");
  if (name != null) {
    switch (name) {
      case "":
        document.getElementById("name").innerHTML =
          "Gửi lời chúc thân ái và quyết thắng đến em yêu của của anh <3";
        break;
      default:
        document.getElementById("name").innerHTML =
          "Gửi lời chúc thân ái và quyết thắng đến em yêu của của anh <3";
        break;
    }
  } else {
    document.getElementById("name").innerHTML =
      "Gửi lời chúc thân ái và quyết thắng đến em yêu của của anh <3";
  }
  document.getElementById("img").style.display = "block";
  document.getElementById("content").style.display = "block";
  document.getElementById("button").style.display = "none";
  document.getElementById("link").style.display = "block";
}
