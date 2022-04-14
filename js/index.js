
function HienGioHang() {
    var check = document.getElementById('container2');
    if(check.style.display == 'none') {
        check.style.display = 'block';
    } 
    else {
        check.style.display = 'none';
    }
}
function matHang(hinh, ten, gia, loai) {
  this.hinh = hinh;
  this.ten = ten;
  this.gia = gia;
  this.loai = loai;
  this.soLuong = 1;
  this.TongGia = this.gia * this.soLuong;
}

var TongTien = 0;

var ItemsArr = new Array();

function themMatHang(hinh, ten, gia, loai) {
  var check = true;
  // Kiểm tra đã có hàng trong giỏ hàng chưa
  for (var i = 0; i < ItemsArr.length; i++) {
    if (loai == ItemsArr[i].loai) check = false;
  }
  // Nếu có thì thêm mặt hàng vào giỏ hàng
  if (check == true) {
    ItemsArr.push(new matHang(hinh, ten, gia, loai));
  } else {
    for (var i = 0; i < ItemsArr.length; i++) {
      if (loai == ItemsArr[i].loai) {
        if (ItemsArr[i].soLuong < 99) {
          ItemsArr[i].soLuong++;
          ItemsArr[i].TongGia = parseInt(ItemsArr[i].gia) * ItemsArr[i].soLuong;
        }
      }
    }
  }
  document.getElementById("gioMuaHang").innerHTML = "";
  // Xuất 
  for (var i = 0; i < ItemsArr.length; i++) {
    document.getElementById("gioMuaHang").innerHTML +=
      '<table><td><img src="' +
      ItemsArr[i].hinh +
      '" width="80" height="80"></td><td>' +
      ItemsArr[i].ten +
      "</td><td><span><b>" +
      ItemsArr[i].TongGia +
      '₫</b></span></td><td><div class="soLuong"><div class="nutThem"><img src="img/NutThemPNG.png" alt="" width="50px" height=""></div><div class="HienSo">' +
      ItemsArr[i].soLuong +
      '</div><div class="Tang" onclick="soLuongTang(\'' +
      ItemsArr[i].loai +
      '\')"></div><div class="Giam" onclick="soLuongGiam(\'' +
      ItemsArr[i].loai +
      '\')"></div></div></td><td><input type="button" value="Xóa khỏi giỏ hàng" class="Xoa" onclick="Xoa(\'' +
      ItemsArr[i].ten +
      "')\"></td></tr></table>";
  }

  // Xuất
  for (var i = 0; i < ItemsArr.length; i++) {
    TongTien += Number(ItemsArr[i].TongGia);
  }
  document.getElementById("tongTien").innerHTML =
    "Tổng tiền : " + parseInt(TongTien) + " ₫";

  // Reset Tổng tiền về 0
  TongTien = 0;
}

// Tăng số lượng 1 mặt hàng trong giỏ hàng
function soLuongTang(items) {
  for (var i = 0; i < ItemsArr.length; i++) {
    if (items == ItemsArr[i].loai) {
      if (ItemsArr[i].soLuong < 99) {
        ItemsArr[i].soLuong++;
        ItemsArr[i].TongGia = parseInt(ItemsArr[i].gia) * ItemsArr[i].soLuong;
      }
    }
  }

  document.getElementById("gioMuaHang").innerHTML = "";
  // document.getElementById("tongTien").innerHTML = "Tổng tiền : 0 ₫";
  for (var i = 0; i < ItemsArr.length; i++) {
    document.getElementById("gioMuaHang").innerHTML +='<table><tr><td><img src="' +ItemsArr[i].hinh +'" width="80px" height="80px"></td><td>' +ItemsArr[i].ten +"</td><td><span><b>" +ItemsArr[i].TongGia +'₫</b></span></td><td><div class="soLuong"><div class="nutThem"><img src="img/NutThemPNG.png" alt="" width="50px" height=""></div><div class="HienSo">' +ItemsArr[i].soLuong +'</div><div class="Tang" onclick="soLuongTang(\'' +ItemsArr[i].loai +'\')"></div><div class="Giam" onclick="soLuongGiam(\'' +ItemsArr[i].loai +'\')"></div></div></td><td><input type="button" value="Xóa khỏi giỏ hàng" class="Xoa" onclick="Xoa(\'' +ItemsArr[i].ten +"')\"></td></tr></table>";
  }
  for (var i = 0; i < ItemsArr.length; i++) {
    TongTien += Number(ItemsArr[i].TongGia);
  }
  document.getElementById("tongTien").innerHTML =
    "Tổng tiền : " + parseInt(TongTien) + " ₫";

  TongTien = 0;
}

// Giảm số lượng 1 mặt hàng trong giỏ hàng
function soLuongGiam(items) {
  for (var i = 0; i < ItemsArr.length; i++) {
    if (items == ItemsArr[i].loai) {
      if (ItemsArr[i].soLuong > 1) {
        ItemsArr[i].soLuong--;
        ItemsArr[i].TongGia = parseInt(ItemsArr[i].gia) * ItemsArr[i].soLuong;
      }
    }
  }
  document.getElementById("gioMuaHang").innerHTML = "";

  for (var i = 0; i < ItemsArr.length; i++) {
    document.getElementById("gioMuaHang").innerHTML +='<table><tr><td><img src="' +ItemsArr[i].hinh +'" width="80px" height="80px"></td><td>' +ItemsArr[i].ten +"</td><td><span><b>" +ItemsArr[i].TongGia +'₫</b></span></td><td><div class="soLuong"><div class="nutThem"><img src="img/NutThemPNG.png" alt="" width="50px" height=""></div><div class="HienSo">' +ItemsArr[i].soLuong +'</div><div class="Tang" onclick="soLuongTang(\'' +ItemsArr[i].loai +'\')"></div><div class="Giam" onclick="soLuongGiam(\'' +ItemsArr[i].loai +'\')"></div></div></td><td><input type="button" value="Xóa khỏi giỏ hàng" class="Xoa" onclick="Xoa(\'' +ItemsArr[i].ten +"')\"></td></tr></table>";
  }
  for (var i = 0; i < ItemsArr.length; i++) {
    TongTien += Number(ItemsArr[i].TongGia);
  }
  document.getElementById("tongTien").innerHTML =
    "Tổng tiền : " + parseInt(TongTien) + " ₫";

  TongTien = 0;
}

// Xóa 1 Mặt hàng trong giỏ hàng
function Xoa(obj) {
  for (var i = 0; i < ItemsArr.length; i++) {
    if (obj == ItemsArr[i].ten) {
      ItemsArr.splice(i, 1); // Xóa 1 phần tử trong mảng
    }
  }

  document.getElementById("gioMuaHang").innerHTML = "";

  for (var i = 0; i < ItemsArr.length; i++) {
    document.getElementById("gioMuaHang").innerHTML +='<table><tr><td><img src="' +ItemsArr[i].hinh +'" width="80px" height="80px"></td><td>' +ItemsArr[i].ten +"</td><td><span><b>" +ItemsArr[i].TongGia +'₫</b></span></td><td><div class="soLuong"><div class="nutThem"><img src="img/NutThemPNG.png" alt="" width="50px" height=""></div><div class="HienSo">' +ItemsArr[i].soLuong +'</div><div class="Tang" onclick="soLuongTang(\'' +ItemsArr[i].loai +'\')"></div><div class="Giam" onclick="soLuongGiam(\'' +ItemsArr[i].loai +'\')"></div></div></td><td><input type="button" value="Xóa khỏi giỏ hàng" class="Xoa" onclick="Xoa(\'' +ItemsArr[i].ten +"')\"></td></tr></table>";
  }

  for (var i = 0; i < ItemsArr.length; i++) {
    TongTien += Number(ItemsArr[i].TongGia);
  }
  document.getElementById("tongTien").innerHTML =
    "Tổng tiền : " + parseInt(TongTien) + " ₫";

  TongTien = 0;
}

  // Dong ho
  var dh = null;
        function tg(){
            var now = new Date();
            var h = now.getHours();
            var m = now.getMinutes();
            var s = now.getSeconds();
            document.getElementById("dongho").innerHTML=h+ ":"+m+":"+s;
        }
        dh = setInterval("tg()",1000);
        function startstopDH(){
        if (dh==null) dh = setInterval("tg()",1000);        
        else {
            clearInterval(dh);
            dh=null;
            }
        }