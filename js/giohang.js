function hienThiGioHang() {
    let giohang = JSON.parse(localStorage.getItem('giohang')) || [];

    let sanpham = '';
    for (let i = 0; i < giohang.length; i++){
        let hinh = giohang[i].hinh;
        let ten = giohang[i].ten;
        let gia = giohang[i].gia;
        let mota = giohang[i].mota;
        let soLuong = giohang[i].soLuong;
        soLuong = parseInt(soLuong);
        let thanhTien = gia * soLuong;

        sanpham += `
                <div class="cart-items">
                
                    <img src="${hinh}" alt="" width="200px">
                    <div>
                        <h4>${ten}</h4>
                        <p>${formatTien(gia)}</p>
                        <p class='mota'>${mota}</p>
                        <p>Số lượng: 
                            <i class="fa-solid fa-minus" onclick="giamSoLuong(${i})"></i>
                            <input type="number" class="so-luong" min="1" value="${soLuong}" readonly onchange="capNhatSoLuong(this, ${i})">
                            <i class="fa-solid fa-plus" onclick="tangSoLuong(${i})"></i>
                        </p>
                        <p>Thành Tiền: <span class="thanh-tien">${formatTien(thanhTien)}</span></p>
                        
                    </div>
                    <button onclick="xoaSanPham(${i})">Xóa</button>
                </div>
            `;
    }

    document.getElementById('giohang').innerHTML = sanpham;
    tongtien();
    let soMon = giohang.length

    document.getElementById('soMon').innerHTML = soMon + ' '


}






function capNhatSoLuong(input, index) {
    let giohang = JSON.parse(localStorage.getItem('giohang')) || [];
    let soLuong = parseInt(input.value);

    console.log(input);
    
    
    if (soLuong > 0) {
        giohang[index].soLuong = soLuong;
        localStorage.setItem('giohang', JSON.stringify(giohang));
        hienThiGioHang();
    }


    

    
}

function tangSoLuong(index) {
    let giohang = JSON.parse(localStorage.getItem('giohang')) || [];
    giohang[index].soLuong += 1;
    localStorage.setItem('giohang', JSON.stringify(giohang));
    hienThiGioHang();
}

function giamSoLuong(index) {
    let giohang = JSON.parse(localStorage.getItem('giohang')) || [];
    if (giohang[index].soLuong > 1) {
        giohang[index].soLuong -= 1;
        localStorage.setItem('giohang', JSON.stringify(giohang));
        hienThiGioHang();
    }
}



function formatTien(tien) {
    // Sử dụng phương thức toLocaleString để định dạng số tiền theo kiểu tiền tệ của Việt Nam
    return tien.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}


function xoaSanPham(x) { 
    console.log(x);
    let giohang = JSON.parse(localStorage.getItem('giohang')) || [];
    console.log(giohang);
    giohang.splice(x, 1);
    localStorage.setItem('giohang', JSON.stringify(giohang))
    hienThiGioHang()
}


function tongtien() {
    let giohang = JSON.parse(localStorage.getItem('giohang')) || []
    let tong = 0
    for (let i = 0; i < giohang.length; i++) { 
        let thanhTien = giohang[i].gia * giohang[i].soLuong
        tong += thanhTien
    }
    document.getElementById('tongtien').innerHTML = formatTien(tong)
    let tongthanhtoan = tong + 10000
    document.getElementById('tongthanhtoan').innerHTML = formatTien(tongthanhtoan)
    document.getElementById('tongthanhtoanbtn').innerHTML = formatTien(tongthanhtoan)
}

function xoafull() { 
    let giohang = JSON.parse(localStorage.getItem('giohang')) || []
    giohang = []
    localStorage.setItem('giohang', JSON.stringify(giohang))
    hienThiGioHang()
}



// Hiển thị giỏ hàng khi trang được tải
hienThiGioHang();





