numberArr = [];

function themSo() {
  var numberValue = document.getElementById("numberTxt").value * 1;
  numberArr.push(numberValue);
  document.getElementById("arrayValue").innerHTML =
    "Các số trong mảng: " + numberArr;
}

function tinhTongSoDuong() {
  var soDuongArr = timSoDuong(numberArr);
  var sum = 0;
  for (var i = 0; i < soDuongArr.length; i++) {
    sum += soDuongArr[i];
  }
  document.getElementById("ketquaTxt").innerHTML = "Tổng số dương là: " + sum;
}

function demSoDuong() {
  var soDuong = timSoDuong(numberArr);
  document.getElementById("ketquaTxt").innerHTML =
    "Số lượng số dương trong mảng là: " + soDuong.length;
}

function timSoNhoNhat() {
  var minNumber = numberArr[0];
  for (var i = 0; i < numberArr.length; i++) {
    if (minNumber > numberArr[i]) {
      minNumber = numberArr[i];
    }
  }
  document.getElementById("ketquaTxt").innerHTML =
    "Số nhỏ nhất trong mảng là: " + minNumber;
}

function timSoDuong(arr) {
  var soDuongArr = arr.filter(function (n) {
    return n >= 0;
  });
  return soDuongArr;
}
function timSoAm(arr) {
  var soAmArr = arr.filter(function (n) {
    return n < 0;
  });
  return soAmArr;
}

function timSoDuongNhoNhat() {
  var soDuongArr = timSoDuong(numberArr);
  var minNumber = numberArr[0];
  for (var i = 0; i < soDuongArr.length; i++) {
    if (minNumber > soDuongArr[i]) {
      minNumber = soDuongArr[i];
    }
  }
  document.getElementById("ketquaTxt").innerHTML =
    "Số dương nhỏ nhất trong mảng là: " + minNumber;
}

function timSoChanCuoiCung() {
  var soChanArr = numberArr.filter(function (n) {
    return n % 2 == 0;
  });
  var SoChanCuoiMang = soChanArr.pop();
  document.getElementById("ketquaTxt").innerHTML =
    "Số chẵn cuối cùng của mảng là: " + SoChanCuoiMang;
}

function sapXepTheoThuTuTangDan() {
  numberArr.sort();
  document.getElementById("ketquaTxt").innerHTML =
    "Số theo thứ tự tăng dần trong mảng: " + numberArr;
}

function soSanhSoDuongSoAm() {
  var soAmArr = timSoAm(numberArr);
  var soDuongArr = timSoDuong(numberArr);
  if (soAmArr.length > soDuongArr.length) {
    document.getElementById("ketquaTxt").innerHTML = `
      Số Âm: ${soAmArr.length} - Số Dương: ${soDuongArr.length}
      <br /> <br />
      Số Âm nhiều hơn Số Dương
    `;
  } else if (soAmArr.length < soDuongArr.length) {
    document.getElementById("ketquaTxt").innerHTML = `
      Số Âm: ${soAmArr.length} - Số Dương: ${soDuongArr.length}
      <br /> <br />
      Số Dương nhiều hơn Số Âm
    `;
  } else {
    document.getElementById("ketquaTxt").innerHTML = `
    Số Âm: ${soAmArr.length} - Số Dương: ${soDuongArr.length}
    <br /> <br />
    Số Dương và Số Âm bằng nhau
    `;
  }
}

function timSoNguyenTo(n) {
  var o = 1;
  if (n < 2) {
    return (o = 0);
  }
  let i = 2;
  while (i < n) {
    if (n % i == 0) {
      o = 0;
      break;
    }
    i++;
  }
  return o;
}

function timSoNguyenToDauTien() {
  for (var i = 0; i < numberArr.length; i++) {
    if (timSoNguyenTo(numberArr[i]) == true) {
      document.getElementById("ketquaTxt").innerHTML = `
      Số nguyên tố đầu tiên của mảng là: ${numberArr[i]}
      `;
    }
  }
}
