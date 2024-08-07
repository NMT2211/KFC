//khuyến mãi
const khuyenmai = [
    {
        ten: "Cơm Gà Viên Nanban",
        gia: '30.000',
        moTa: "01 Cơm Gà Viên Nanban",
        hinhAnh: "assets/mm1.jpg",
        giaCu: '39.000'
    },
]


let km = ''
for (let i = 0; i < khuyenmai.length; i++) { 

    km += `<div class="combo">
                <a href="chitietsp.html" onclick='chitietsp(this)'; return false;>
                    <div class="combo-hinh"><img src="${khuyenmai[i].hinhAnh}" alt="Combo Gà KFC"></div>
                    <div class="info">
                        <h4 class="h4">${khuyenmai[i].ten}</h4><br>
                        <h4 class="giaht">${khuyenmai[i].giaCu}₫</h4>

                        <h4 class="gia-cb">${khuyenmai[i].gia}₫</h4><br><br>
                        <p>${khuyenmai[i].moTa}</p>
                        
                    </div>
                </a>
                <button onclick="themvaogiohang(this)"><strong>Thêm</strong></button>
            </div> `

}

document.getElementById('uu-Dai-content').innerHTML = km

let countdown = setInterval(
    function(){
        let saleDateInput = new Date("2024-08-10 13:31:00").getTime()// Ngày kết thúc sale (thay
        
        let newDate = new Date().getTime()// Ngày hiện tại
        let timeKM = saleDateInput - newDate;
        // Tính thời gian còn lại (tính bằng mili giây)
        let days = Math.floor(timeKM / (1000 * 60 * 60 * 24)); // Số ngày còn lại
        let hours = Math.floor(timeKM  / (1000 * 60 * 60)); 1
        let minutes = Math.floor(timeKM / (1000 * 60)); // Số phút còn lại
        let seconds = Math.floor(timeKM / 1000); // Số giây còn lại

        //
        
        hours %= 24; // Lấy phần dư sau khi đã trừ đi số giờ còn lại trong ngày
        minutes %= 60; // Lấy phần dư sau khi đã trừ đi số phút còn lại trong giờ
        seconds %= 60; // Lấy phần dư sau khi đã trừ đi số giây còn lại trong phút
        // Hiển thị thời gian còn lại trên trang web (thay '#countdown' bằng ID của phần tử hiển thị thời gian còn lại)

        document.getElementById("ngay").innerHTML = days 
        document.getElementById("gio").innerHTML = hours
        document.getElementById("phut").innerHTML = minutes
        document.getElementById("giay").innerHTML = seconds

        console.log(timeKM);
        

        if(timeKM < 0){
            clearInterval(countdown)
            document.getElementById("ngay").innerHTML = '00'
            document.getElementById("gio").innerHTML = '00'
            document.getElementById("phut").innerHTML = '00'
            document.getElementById("giay").innerHTML = '00'
        }

    },1000
)


//Món Mới
const monmoi = [
    {
        ten: "Cơm Gà Viên Nanban",
        gia: '39.000',
        moTa: "01 Cơm Gà Viên Nanban",
        hinhAnh: "assets/mm1.jpg"
    },
    {
        ten: "COMBO CƠM GÀ VIÊN NANBAN HDA",
        gia: '160.000',
        moTa: "01 Cơm Gà Viên Nanban + 01 Miếng Gà Rán + 01 Pepsi lon",
        hinhAnh: "assets/mm2.jpg"
    },
    {
        ten: "Combo Cơm Gà Viên Nanban HDB",
        gia: '167.000',
        moTa: "01 Cơm Gà Viên Nanban + 03 Miếng Gà Rán + 01 Khoai tây chiên (vừa)/ 01 Khoai tây nghiền & 01 Bắp cải trộn (vừa) + 02 Pepsi lon",
        hinhAnh: "assets/mm3.jpg"
    },
    {
        ten: "2 Gà Rán Tenders Vị Nguyên Bản",
        gia: '28.000',
        moTa: "2 Gà Rán Tenders Vị Nguyên Bản",
        hinhAnh: "assets/mm4.jpg"
    },
    {
        ten: "3 Gà Rán Tenders Vị Nguyên Bản",
        gia: '41.000',
        moTa: "3 Gà Rán Tenders Vị Nguyên Bản",
        hinhAnh: "assets/mm5.jpg"
    },
    {
        ten: "5 Gà Rán Tenders Vị Nguyên Bản",
        gia: '66.000',
        moTa: "5 Gà Rán Tenders Vị Nguyên Bản",
        hinhAnh: "assets/mm6.jpg"
    },
    {
        ten: "10 Gà Rán Tenders Vị Nguyên Bản",
        gia: '129.000',
        moTa: "10 Gà Rán Tenders Vị Nguyên Bản",
        hinhAnh: "assets/mm7.jpg"
    }
];

let monMoi = ''
for (let i = 0; i < monmoi.length; i++) { 
    monMoi += `<div class="combo">
                        <a href="chitietsp.html" onclick='chitietsp(this)'; return false;>
                            <div class="combo-hinh"><img src="${monmoi[i].hinhAnh}" alt="Combo Gà KFC"></div>
                            <div class="info">
                                <h4 class="h4">${monmoi[i].ten}</h4>
                                <h4 class="gia-cb">${monmoi[i].gia}₫</h4><br><br><br><br>
                                <p>${monmoi[i].moTa}</p>
                                
                            </div>
                        </a>
                        <button onclick="themvaogiohang(this)"><strong>Thêm</strong></button>
                    </div> `
}

document.getElementById('monmoi-content').innerHTML = monMoi



//Combo 1 Người
const combo1ng = [
    {
        ten: "Combo Gà Rán 1",
        gia: '59.000',
        moTa: "1 Miếng Gà + 1 Khoai Tây Chiên / 1 Khoai Tây Nghiền & Bắp Cải Trộn + 1 Pepsi (lớn)",
        hinhAnh: "assets/cbo1ng-1.jpg"
    },
    {
        ten: "Combo Gà Rán 2",
        gia: '89.000',
        moTa: "2 Miếng Gà + 1 Khoai Tây Chiên / 1 Khoai Tây Nghiền & Bắp Cải Trộn + 1 Pepsi (lớn)",
        hinhAnh: "assets/cbo1ng-2.jpg"
    },
    {
        ten: "Combo Gà Quay",
        gia: '117.000',
        moTa: "1 Đùi Gà Quay Flava + 1 Salad Hạt + 1 Lipton (lớn)",
        hinhAnh: "assets/cbo1ng-3.jpg"
    },
    {
        ten: "Combo Phi-lê Gà Quay",
        gia: '84.000',
        moTa: "1 Phi-Lê Gà Quay Flava + 1 Salad Hạt + 1 Lipton (lớn)",
        hinhAnh: "assets/cbo1ng-4.jpg"
    },
    {
        ten: "Combo Burger Tôm",
        gia: '67.000',
        moTa: "1 Burger Tôm + 1 Khoai Tây Chiên (vừa) + 1 Pepsi (lớn)",
        hinhAnh: "assets/cbo1ng-5.jpg"
    },
    {
        ten: "Combo Burger Zinger",
        gia: '77.000',
        moTa: "1 Burger Zinger + 1 Khoai Tây Chiên (vừa) + 1 Pepsi (lớn)",
        hinhAnh: "assets/cbo1ng-6.jpg"
    },
    {
        ten: "Combo Burger Phi-lê Gà Quay",
        gia: '77.000',
        moTa: "1 Burger Flava + 1 Khoai Tây Chiên (vừa) + 1 Pepsi (lớn)",
        hinhAnh: "assets/cbo1ng-7.jpg"
    },
    {
        ten: "COMBO MÌ Ý GÀ VIÊN",
        gia: '47.000',
        moTa: "1 Mì Ý Popcorn + 1 Pepsi (lớn)",
        hinhAnh: "assets/cbo1ng-8.jpg"
    }
];

let combo1Ng = ''
for (let i = 0; i < combo1ng.length; i++) { 
    combo1Ng += `<div class="combo">
                        <a href="chitietsp.html" onclick='chitietsp(this)'; return false;>
                            <div class="combo-hinh"><img src="${combo1ng[i].hinhAnh}" alt="Combo Gà KFC"></div>
                            <div class="info">
                                <h4 class="h4">${combo1ng[i].ten}</h4>
                                <h4 class="gia-cb">${combo1ng[i].gia}₫</h4><br><br><br><br>
                                <p>${combo1ng[i].moTa}</p>
                                
                            </div>
                        </a>
                        <button onclick="themvaogiohang(this)"><strong>Thêm</strong></button>
                    </div>
    
    `
}

document.getElementById('cb-1-nguoi-content').innerHTML = combo1Ng


//Combo Nhóm
const combonhom = [
    {
        ten: "Combo nhóm 2",
        gia: '127.000',
        moTa: "2 Miếng Gà + 1 Burger Zinger + 2 Pepsi (lớn)",
        hinhAnh: "assets/D-CBO-Bucket-1.jpg"
    },
    {
        ten: "Combo nhóm 3",
        gia: '160.000',
        moTa: "3 Miếng Gà + 1 Mì Ý Popcorn + 1 Khoai Tây Chiên (vừa) + 2 Pepsi (lớn)",
        hinhAnh: "assets/D-CBO-Bucket-2.jpg"
    },
    {
        ten: "Combo nhóm 4",
        gia: '167.000',
        moTa: "4 Miếng Gà + 1 Khoai Tây Múi Cau (vừa) + 2 Pepsi (lớn)",
        hinhAnh: "assets/D-CBO-Bucket-3.jpg"
    },
    {
        ten: "Combo nhóm 5",
        gia: '205.000',
        moTa: "5 Miếng Gà + 1 Khoai Tây Chiên (vừa) + 3 Pepsi (lớn)",
        hinhAnh: "assets/D-CBO-Bucket-4.jpg"
    },
    {
        ten: "Combo nhóm 6",
        gia: '275.000',
        moTa: "6 Miếng Gà + 1 Mì Ý Popcorn + 1 Khoai Tây Múi Cau (vừa) + 4 Pepsi (lớn)",
        hinhAnh: "assets/D-CBO-Bucket-5.jpg"
    }
];

let comboNhom = ''
for (let i = 0; i < combonhom.length; i++) { 
    comboNhom += `<div class="combo">
                        <a href="chitietsp.html" onclick='chitietsp(this)'; return false;>
                            <div class="combo-hinh"><img src="${combonhom[i].hinhAnh}" alt="Combo Gà KFC"></div>
                            <div class="info">
                                <h4 class="h4">${combonhom[i].ten}</h4>
                                <h4 class="gia-cb">${combonhom[i].gia}₫</h4><br><br><br><br>
                                <p>${combonhom[i].moTa}</p>
                                
                            </div>
                        </a>
                        <button onclick="themvaogiohang(this)"><strong>Thêm</strong></button>
                    </div>
    
    `
}

document.getElementById('cbonhom-content').innerHTML = comboNhom


//GÀ RÁN - GÀ QUAY
const gaRan = [
    {
        ten: "1 Miếng Gà Rán",
        gia: '35.000',
        moTa: "1 Miếng Gà Giòn Cay/Gà Truyền Thống/Gà Giòn Không Cay",
        hinhAnh: "assets/garanquay1.jpg"
    },
    {
        ten: "2 Miếng Gà Rán",
        gia: '70.000',
        moTa: "2 Miếng Gà Giòn Cay/Gà Truyền Thống/Gà Giòn Không Cay",
        hinhAnh: "assets/garanquay2.jpg"
    },
    {
        ten: "3 Miếng Gà Rán",
        gia: '104.000',
        moTa: "3 Miếng Gà Giòn Cay/Gà Truyền Thống/Gà Giòn Không Cay",
        hinhAnh: "assets/garanquay3.jpg"
    },
    {
        ten: "6 Miếng Gà Rán",
        gia: '204.000',
        moTa: "6 Miếng Gà Giòn Cay/Gà Truyền Thống/Gà Giòn Không Cay",
        hinhAnh: "assets/garanquay4.jpg"
    },
    {
        ten: "1 Miếng Đùi Gà Quay",
        gia: '75.000',
        moTa: "1 Miếng Đùi Gà Quay Giấy Bạc/Đùi Gà Quay Tiêu",
        hinhAnh: "assets/garanquay5.jpg"
    },
    {
        ten: "1 Miếng Phi-lê Gà Quay",
        gia: '39.000',
        moTa: "1 Miếng Phi-lê Gà Quay Flava/Phi-lê Gà Quay Tiêu",
        hinhAnh: "assets/garanquay6.jpg"
    },
    {
        ten: "3 Cánh Gà Hot Wings",
        gia: '54.000',
        moTa: "3 Cánh Gà Hot Wings",
        hinhAnh: "assets/garanquay7.jpg"
    },
    {
        ten: "5 Cánh Gà Hot Wings",
        gia: '85.000',
        moTa: "5 Cánh Gà Hot Wings",
        hinhAnh: "assets/garanquay8.jpg"
    },
    {
        ten: "Gà Viên (Vừa)",
        gia: '38.000',
        moTa: "Gà Viên (Vừa)",
        hinhAnh: "assets/garanquay9.jpg"
    },
    {
        ten: "Gà Viên (Lớn)",
        gia: '64.000',
        moTa: "Gà Viên (Lớn)",
        hinhAnh: "assets/garanquay10.jpg"
    },
    {
        ten: "3 Gà Miếng Nuggets",
        gia: '27.000',
        moTa: "3 Gà Miếng Nuggets",
        hinhAnh: "assets/garanquay11.jpg"
    },
    {
        ten: "5 Gà Miếng Nuggets",
        gia: '40.000',
        moTa: "5 Gà Miếng Nuggets",
        hinhAnh: "assets/garanquay12.jpg"
    },
    {
        ten: "10 Gà Miếng Nuggets",
        gia: '75.000',
        moTa: "10 Gà Miếng Nuggets",
        hinhAnh: "assets/garanquay13.jpg"
    }
];

let garan = ''
for (let i = 0; i < gaRan.length; i++) { 
    garan += `<div class="combo">
                        <a href="chitietsp.html" onclick='chitietsp(this)'; return false;>
                            <div class="combo-hinh"><img src="${gaRan[i].hinhAnh}" alt="Combo Gà KFC"></div>
                            <div class="info">
                                <h4 class="h4">${gaRan[i].ten}</h4>
                                <h4 class="gia-cb">${gaRan[i].gia}₫</h4><br><br><br><br>
                                <p>${gaRan[i].moTa}</p>
                                
                            </div>
                        </a>
                        <button onclick="themvaogiohang(this)"><strong>Thêm</strong></button>
                    </div>
    
    `
}

document.getElementById('ga_ran_ga_quay-content').innerHTML = garan


//BURGER - CƠM - MÌ Ý
const burgerComMy = [
    {
        ten: "Burger Zinger",
        gia: '54.000',
        moTa: "1 Burger Zinger",
        hinhAnh: "assets/b-c-m-1.jpg"
    },
    {
        ten: "Burger Tôm",
        gia: '45.000',
        moTa: "1 Burger Tôm",
        hinhAnh: "assets/b-c-m-2.jpg"
    },
    {
        ten: "Burger Gà Quay Flava",
        gia: '54.000',
        moTa: "1 Burger Gà Quay Flava",
        hinhAnh: "assets/b-c-m-3.jpg"
    },
    {
        ten: "Cơm Gà Xiên Que",
        gia: '45.000',
        moTa: "1 Cơm Gà Xiên Que",
        hinhAnh: "assets/b-c-m-4.jpg"
    },
    {
        ten: "Cơm Gà Teriyaki",
        gia: '45.000',
        moTa: "1 Cơm Gà Teriyaki",
        hinhAnh: "assets/b-c-m-5.jpg"
    },
    {
        ten: "Cơm Gà Rán",
        gia: '48.000',
        moTa: "1 Cơm Gà Rán",
        hinhAnh: "assets/b-c-m-6.jpg"
    },
    {
        ten: "Cơm Phi-lê Gà Quay",
        gia: '47.000',
        moTa: "1 Cơm Phi-lê Gà Quay",
        hinhAnh: "assets/b-c-m-7.jpg"
    },
    {
        ten: "Cơm",
        gia: '12.000',
        moTa: "Cơm",
        hinhAnh: "assets/b-c-m-8.jpg"
    },
    {
        ten: "Mì Ý Gà Viên",
        gia: '40.000',
        moTa: "1 Mì Ý Gà Viên",
        hinhAnh: "assets/b-c-m-9.jpg"
    },
    {
        ten: "Mì Ý Gà Zinger",
        gia: '58.000',
        moTa: "1 Mì Ý Gà Zinger",
        hinhAnh: "assets/b-c-m-10.jpg"
    },
    {
        ten: "Mì Ý Phi-Lê Gà Quay",
        gia: '61.000',
        moTa: "1 Mì Ý Phi-Lê Gà Quay",
        hinhAnh: "assets/b-c-m-11.jpg"
    },
    {
        ten: "Mì Ý Gà Rán",
        gia: '64.000',
        moTa: "1 Mì Ý Gà Rán",
        hinhAnh: "assets/b-c-m-12.jpg"
    }
];

let burgercommy = ''
for (let i = 0; i < burgerComMy.length; i++) { 
    burgercommy += `<div class="combo" >
                        <a href="chitietsp.html" onclick='chitietsp(this)'; return false;>
                            <div class="combo-hinh"><img src="${burgerComMy[i].hinhAnh}" alt="Combo Gà KFC"></div>
                            <div class="info">
                                <h4 class="h4">${burgerComMy[i].ten}</h4>
                                <h4 class="gia-cb">${burgerComMy[i].gia}₫</h4><br><br><br><br>
                                <p>${burgerComMy[i].moTa}</p>
                                
                            </div>
                        </a>
                        <button onclick="themvaogiohang(this)"><strong>Thêm</strong></button>
                    </div>
    
    `
}

document.getElementById('BURGER_COM_MIY-content').innerHTML = burgercommy




//Thức Ăn Nhẹ
const thucAnNhe = [
    {
        ten: 'Salad Hạt',
        gia: '38.000',
        moTa: '1 Salad Hạt',
        hinhAnh: 'assets/tan1.jpg'
    },
    {
        ten: 'Salad Pop',
        gia: '45.000',
        moTa: '1 Salad Hạt Gà Viên Popcorn',
        hinhAnh: 'assets/tan2.jpg'
    },
    {
        ten: '3 Cá Thanh',
        gia: '40.000',
        moTa: '3 Cá Thanh',
        hinhAnh: 'assets/tan3.jpg'
    },
    {
        ten: '2 Xiên Que',
        gia: '40.000',
        moTa: '2 Xiên Que',
        hinhAnh: 'assets/tan4.jpg'
    },
    {
        ten: '4 Phô Mai Viên',
        gia: '36.000',
        moTa: '4 Phô Mai Viên',
        hinhAnh: 'assets/tan5.jpg'
    },
    {
        ten: '6 Phô Mai Viên',
        gia: '49.000',
        moTa: '6 Phô Mai Viên',
        hinhAnh: 'assets/tan6.jpg'
    },
    {
        ten: 'Khoai Tây Chiên (Vừa)',
        gia: '19.000',
        moTa: 'Khoai Tây Chiên (Vừa)',
        hinhAnh: 'assets/tan7.jpg'
    },
    {
        ten: 'Khoai Tây Chiên (Lớn)',
        gia: '28.000',
        moTa: 'Khoai Tây Chiên (Lớn)',
        hinhAnh: 'assets/tan8.jpg'
    },
    {
        ten: 'Khoai Tây Chiên (Đại)',
        gia: '38.000',
        moTa: 'Khoai Tây Chiên (Đại)',
        hinhAnh: 'assets/tan9.jpg'
    },
    {
        ten: 'Khoai Tây Múi Cau (Vừa)',
        gia: '23.000',
        moTa: 'Khoai Tây Múi Cau (Vừa)',
        hinhAnh: 'assets/tan10.jpg'
    },
    {
        ten: 'Khoai Tây Múi Cau (Lớn)',
        gia: '43.000',
        moTa: 'Khoai Tây Múi Cau (Lớn)',
        hinhAnh: 'assets/tan11.jpg'
    },
    {
        ten: 'Khoai Tây Nghiền (Vừa)',
        gia: '12.000',
        moTa: 'Khoai Tây Nghiền (Vừa)',
        hinhAnh: 'assets/tan12.jpg'
    },
    {
        ten: 'Khoai Tây Nghiền (Lớn)',
        gia: '22.000',
        moTa: 'Khoai Tây Nghiền (Lớn)',
        hinhAnh: 'assets/tan13.jpg'
    },
    {
        ten: 'Khoai Tây Nghiền (Đại)',
        gia: '31.000',
        moTa: 'Khoai Tây Nghiền (Đại)',
        hinhAnh: 'assets/tan14.jpg'
    },
    {
        ten: 'Bắp Cải Trộn (Vừa)',
        gia: '12.000',
        moTa: 'Bắp Cải Trộn (Vừa)',
        hinhAnh: 'assets/tan15.jpg'
    },
    {
        ten: 'Bắp Cải Trộn (Lớn)',
        gia: '22.000',
        moTa: 'Bắp Cải Trộn (Lớn)',
        hinhAnh: 'assets/tan16.jpg'
    },
    {
        ten: 'Bắp Cải Trộn (Đại)',
        gia: '31.000',
        moTa: 'Bắp Cải Trộn (Đại)',
        hinhAnh: 'assets/tan17.jpg'
    },
    {
        ten: 'Súp Rong Biển',
        gia: '19.000',
        moTa: 'Súp Rong Biển',
        hinhAnh: 'assets/tan18.jpg'
    }
];

let thucannhe = ''
for (let i = 0; i < thucAnNhe.length; i++) { 
    thucannhe += `<div class="combo">
                        <a href="chitietsp.html" onclick='chitietsp(this)'; return false;>
                            <div class="combo-hinh"><img src="${thucAnNhe[i].hinhAnh}" alt="Combo Gà KFC"></div>
                            <div class="info">
                                <h4 class="h4">${thucAnNhe[i].ten}</h4>
                                <h4 class="gia-cb">${thucAnNhe[i].gia}₫</h4><br><br><br><br>
                                <p>${thucAnNhe[i].moTa}</p>
                                
                            </div>
                        </a>
                        <button onclick="themvaogiohang(this)"><strong>Thêm</strong></button>
                    </div>
    
    `
}

document.getElementById('thuc-an-nhe-content').innerHTML = thucannhe



//THỨC UỐNG & TRÁNG MIỆNG
const thucUongTrangMieng = [
    {
        ten: '1 Bánh Trứng',
        gia: '18.000',
        moTa: '1 Bánh Trứng',
        hinhAnh: 'assets/trangmieng1.jpg'
    },
    {
        ten: '4 Bánh Trứng',
        gia: '58.000',
        moTa: '4 Bánh Trứng',
        hinhAnh: 'assets/trangmieng2.jpg'
    },
    {
        ten: '2 Viên Khoai Môn Kim Sa',
        gia: '26.000',
        moTa: '2 Viên Khoai Môn Kim Sa',
        hinhAnh: 'assets/trangmieng3.jpg'
    },
    {
        ten: '3 Viên Khoai Môn Kim Sa',
        gia: '34.000',
        moTa: '3 Viên Khoai Môn Kim Sa',
        hinhAnh: 'assets/trangmieng4.jpg'
    },
    {
        ten: '5 Viên Khoai Môn Kim Sa',
        gia: '54.000',
        moTa: '5 Viên Khoai Môn Kim Sa',
        hinhAnh: 'assets/trangmieng5.jpg'
    },
    {
        ten: '2 Thanh Bí Phô Mai',
        gia: '29.000',
        moTa: '2 Thanh Bí Phô Mai',
        hinhAnh: 'assets/trangmieng6.jpg'
    },
    {
        ten: '3 Thanh Bí Phô Mai',
        gia: '42.000',
        moTa: '3 Thanh Bí Phô Mai',
        hinhAnh: 'assets/trangmieng7.jpg'
    },
    {
        ten: '5 Thanh Bí Phô Mai',
        gia: '65.000',
        moTa: '5 Thanh Bí Phô Mai',
        hinhAnh: 'assets/trangmieng8.jpg'
    },
    {
        ten: 'Pepsi Lon',
        gia: '19.000',
        moTa: 'Pepsi Lon',
        hinhAnh: 'assets/trangmieng9.jpg'
    },
    {
        ten: '7Up Lon',
        gia: '19.000',
        moTa: '7Up Lon',
        hinhAnh: 'assets/trangmieng10.jpg'
    },
    {
        ten: 'Aquafina 500ml',
        gia: '15.000',
        moTa: 'Aquafina 500ml',
        hinhAnh: 'assets/trangmieng11.jpg'
    },
    {
        ten: 'Trà Đào',
        gia: '24.000',
        moTa: 'Trà Đào',
        hinhAnh: 'assets/trangmieng12.jpg'
    },
    {
        ten: '1 Sô-cô-la Sữa Đá',
        gia: '20.000',
        moTa: '1 Sô-cô-la Sữa Đá',
        hinhAnh: 'assets/trangmieng13.jpg'
    },
    {
        ten: '1 Sô-cô-la Sữa Nóng',
        gia: '20.000',
        moTa: '1 Sô-cô-la Sữa Nóng',
        hinhAnh: 'assets/trangmieng14.jpg'
    },
    {
        ten: 'Trà Chanh Lipton (Lớn)',
        gia: '17.000',
        moTa: 'Trà Chanh Lipton (Lớn)',
        hinhAnh: 'assets/trangmieng15.jpg'
    },
    {
        ten: 'Trà Chanh Lipton (Vừa)',
        gia: '12.000',
        moTa: 'Trà Chanh Lipton (Vừa)',
        hinhAnh: 'assets/trangmieng16.jpg'
    },
    {
        ten: 'Pepsi Không Calo Lon',
        gia: '19.000',
        moTa: 'Pepsi Không Calo Lon',
        hinhAnh: 'assets/trangmieng17.jpg'
    }
];

let thucuongtrangmieng = ''

for (let i = 0; i < thucUongTrangMieng.length; i++) { 
    thucuongtrangmieng += `<div class="combo">
                        <a href="chitietsp.html" onclick='chitietsp(this)'; return false;>
                            <div class="combo-hinh"><img src="${thucUongTrangMieng[i].hinhAnh}" alt="Combo Gà KFC"></div>
                            <div class="info">
                                <h4 class="h4">${thucUongTrangMieng[i].ten}</h4>
                                <h4 class="gia-cb">${thucUongTrangMieng[i].gia}₫</h4><br><br><br><br>
                                <p>${thucUongTrangMieng[i].moTa}</p>
                                
                            </div>
                        </a>
                        <button onclick="themvaogiohang(this)"><strong>Thêm</strong></button>
                    </div>
    
    `
}

document.getElementById('trangmieng-content').innerHTML = thucuongtrangmieng



// Hàm chi tiết sản phẩm
function chitietsp(x) { 
    // Ngăn không cho liên kết mặc định hoạt động
    event.preventDefault();

    // Tìm phần tử cha gần nhất có lớp "combo"
    let comboElement = x.closest('.combo');

    // Lấy thông tin từ các phần tử con của phần tử comboElement
    let imgSrc = comboElement.querySelector('.combo-hinh img').src
    let ten = comboElement.querySelector('.info .h4').innerText;
    let gia = comboElement.querySelector('.info .gia-cb').innerText;
    let moTa = comboElement.querySelector('.info p').innerText;

    // Hiển thị thông tin trong console
    console.log(imgSrc);
    console.log('Tên:', ten);
    console.log('Giá:', gia);
    console.log('Mô tả:', moTa);

    // Lưu thông tin vào localStorage hoặc thực hiện các thao tác khác tùy theo yêu cầu của bạn
    const chitietSP = [imgSrc, ten, gia, moTa];
    localStorage.setItem('sanphamct',JSON.stringify(chitietSP))
    
    location.href = "chitietsp.html"
}


function themvaogiohang(x) { 
    var combo = x.parentElement;
    let img = combo.querySelector('.combo-hinh img').src;
    let ten = combo.querySelector('.info .h4').innerText;
    let gia = combo.querySelector('.info .gia-cb').innerText; // Giữ nguyên dưới dạng chuỗi
    let mota = combo.querySelector('.info p').innerText;
    let soLuong = 1; // số lượng mặc định là 1

    gia = parseFloat(gia.replace('₫', '').replace(/\./g, '')); // Loại bỏ ký tự '₫' và ',' và chuyển đổi thành số thực

    let sanpham = {
        hinh: img,
        ten: ten,
        gia: gia,
        mota: mota,
        soLuong: soLuong
    };

    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    let giohang = JSON.parse(localStorage.getItem('giohang')) || [];

    
        let check = true; // check xem sp da co trong gio hang chua
        for (let i = 0; i < giohang.length; i++) {
            if (giohang[i].ten === sanpham.ten) {
                check = false;
                giohang[i].soLuong += sanpham.soLuong; // Cập nhật số lượng sản phẩm trong giỏ hàng
                break;
            }
        }

        if(check){
            giohang.push(sanpham);// them sp vao gio hang
        }

    // Lưu giỏ hàng đã cập nhật vào localStorage dưới dạng chuỗi JSON
    localStorage.setItem('giohang', JSON.stringify(giohang));
    
    // alert('Sản phẩm đã được thêm vào giỏ hàng!');


}

