

// Đổi slider show
const sliders = [
    {banner:'assets/km2.jpg'},
    {banner:'assets/km1.jpg'},
    {banner:'assets/km4.jpg'},
    {banner:'assets/km5.jpg'}
] 
let slide = ''
    for (let i = 0; i < sliders.length; i++) { 
        slide += `<img src="${sliders[i].banner}" >`
    }
    document.getElementById('slider').innerHTML = slide


//slider show
var listImg = document.querySelector('.slider')
var imgs = document.querySelectorAll('#banner .slider img')
let current = 0
function nextSlide() {

    if (current == imgs.length - 1 ) { 
        current = 0
        let width = imgs[0].offsetWidth
        listImg.style.transform = `translateX(0px)`
    } else {
        current ++
        let width = imgs[0].offsetWidth
        listImg.style.transform = `translateX(${width * -1 * current}px)`
    }
}

function prevSlide() { 
    if (current == imgs.length - 1 ) { 
        current = 0
        let width = imgs[0].offsetWidth
        listImg.style.transform = `translateX(0px)`
    } else {
        current ++
        let width = imgs[0].offsetWidth
        listImg.style.transform = `translateX(-${width * current}px)`
    }
}

setInterval(nextSlide, 4000);



//Danh mục món ăn
const danhmucs = [
    { ten: "Món mới >", hinh: "assets/MONMOI.jpg" , id: "monmoi" },
    { ten: "Combo 1 người >", hinh: "assets/COMBO1NGUOI.jpg",  id: "cb-1-nguoi" },
    { ten: "Combo Nhóm >", hinh: "assets/COMB_NHOM.jpg" ,  id: "cbonhom" },
    { ten: "Gà Rán - Gà Quay >", hinh: "assets/GA_ran_ga_quay.jpg" , id: "ga_ran_ga_quay" },
    { ten: "Burger - Cơm - Mì Ý >", hinh: "assets/BURGER.jpg" , id: "BURGER_COM_MIY" },
    { ten: "Thức Ăn Nhẹ >", hinh: "assets/MON_AN_NHE.jpg" , id: "thuc-an-nhe" },
    { ten: "Thức Uống & Tráng Miệng >", hinh: "assets/TRANG_MIENG.jpg" , id: "trangmieng" },
]
let danhMuc = ''
    for (let i = 0; i < danhmucs.length; i++) { 
        danhMuc += `<div class="danhmuc-item">
                        <a href="thucdon.html#${danhmucs[i].id}">
                            <img src="${danhmucs[i].hinh}" alt="Thức Uống & Tráng Miệng" />
                            <h3 class="overlay-text">${danhmucs[i].ten}</h3>
                        </a>
                    </div>`
    }
    document.getElementById('danhmuc').innerHTML = danhMuc



// món yêu thích "CÓ THỂ BẠN SẼ THÍCH MÓN NÀY"
const combos = [
    {
        hinh: "assets/D-CBO-Bucket-1.jpg",
        alt: "Combo Gà KFC",
        ten: "Combo nhóm 2",
        gia: "127.000",
        moTa: "2 Miếng Gà + 1 Burger Zinger + 2 Pepsi (lớn)"
    },
    {
        hinh: "assets/D-CBO-Bucket-2.jpg",
        alt: "Combo Gà KFC",
        ten: "Combo nhóm 3",
        gia: "160.000",
        moTa: "3 Miếng Gà + 1 Mì Ý Popcorn + 1 Khoai Tây Chiên (vừa) + 2 Pepsi (lớn)"
    },
    {
        hinh: "assets/D-CBO-Bucket-3.jpg",
        alt: "Combo Gà KFC",
        ten: "Combo nhóm 4",
        gia: "167.000",
        moTa: "4 Miếng Gà + 1 Khoai Tây Múi Cau (vừa) + 2 Pepsi (lớn)"
    },
    {
        hinh: "assets/D-CBO-Bucket-4.jpg",
        alt: "Combo Gà KFC",
        ten: "Combo nhóm 5",
        gia: "205.000",
        moTa: "5 Miếng Gà + 1 Khoai Tây Chiên (vừa) + 3 Pepsi (lớn)"
    },
    {
        hinh: "assets/D-CBO-Bucket-5.jpg",
        alt: "Combo Gà KFC",
        ten: "Combo nhóm 6",
        gia: "275.000",
        moTa: "6 Miếng Gà + 1 Mì Ý Popcorn + 1 Khoai Tây Múi Cau (vừa) + 4 Pepsi (lớn)"
    }
];

let combo = '';
for (let i = 0; i < combos.length; i++) { 
    combo += `
        <div class="combo">
            <a href="chitietsp.html" onclick='chitietsp(this); return false;'>
                <div class="combo-hinh"><img src="${combos[i].hinh}" alt="${combos[i].alt}"></div>
                <div class="info">
                    <h4 class="h4">${combos[i].ten}</h4>
                    <h4 class="gia-cb">${combos[i].gia}₫</h4><br><br><br><br>
                    <p>${combos[i].moTa}</p>
                </div>
            </a>
            <button onclick="themvaogiohang(this)"><strong>Thêm</strong></button>
        </div>
    `;
}
document.getElementById('menu-combo2').innerHTML = combo;




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

    let sospgiohang = giohang.length
    
    document.getElementById('so_sp_giohang').innerHTML = sospgiohang
    
}

let giohang = JSON.parse(localStorage.getItem('giohang')) || [];
let sospgiohang = giohang.length
document.getElementById('so_sp_giohang').innerHTML = sospgiohang


    







