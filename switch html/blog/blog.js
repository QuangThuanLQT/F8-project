const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
console.log(document.URL)

// header focus on inputelement and click information
const headerInputElement = $('.header__search-wrap input')
const rootElement = $('.app__wrap')
const bellBtn = $('.header__information-notify')
const boxNotify = $('.header__information-notify-box');
const inforImg = $('.header__information-img');
const boxUser = $('.header__information-user-box')


bellBtn.onclick = function() {
    boxNotify.classList.toggle('isopen')
}

bellBtn.addEventListener('click',function(e) {
    e.stopPropagation()
})

boxNotify.addEventListener('click', function(e) {
    e.stopPropagation()
})

headerInputElement.onfocus = function () {
    $('.header__search-wrap').style.border = '1px solid var(--primary-color)';
    
}
rootElement.onclick = function () {
    $('.header__search-wrap').style.border = '1px solid rgba(0, 0, 0, 0.1)'
    // Close boxNotify when click app
    boxNotify.classList.remove('isopen')
    // Close userBox when click app
    boxUser.classList.remove('isopen')
    // Close addBox
    addIcon.classList.remove('isrotate');
    boxAdd.classList.remove('isopen')
}

headerInputElement.addEventListener('click', function(e) {
    e.stopPropagation()
})

// Click infor
inforImg.onclick = function() {
    boxUser.classList.toggle('isopen')
}

inforImg.addEventListener('click', function(e) {
    e.stopPropagation()
})

boxUser.addEventListener('click', function(e) {
    e.stopPropagation()
})


// Add js

const addBtn = $('.page__sidebar-add-item-link')
const addIcon = $('.page__sidebar-add-item-icon')
const boxAdd = $('.page__sidebar-add-box')

addBtn.onclick = function() {
    addIcon.classList.toggle('isrotate');
    boxAdd.classList.toggle('isopen')
}

addBtn.addEventListener('click', function(e) {
    e.stopPropagation()
})

boxAdd.addEventListener('click', function(e) {
    e.stopPropagation()
})



// App
const blogsList = document.querySelector('.page__blog-content-main')

const blogApp = {
    blogs: [
        {
            name: 'Long Nguyen',
            userImg: 'https://avatar-redirect.appspot.com/google/115663409059082752836?size=400',
            heading: '[Ph???n 1]Routing trong reactjs',
            content: 'H??m nay ch??ng ta s??? c??ng nhau t??m hi???u c??ch routing trong reactjs qua th?? vi???n react-router-dom. Hy v???ng ???????c th???o lu???n c??ng anh em f8 ??ang h???c reactjs. Kh??ng ??...',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1027/6174b331c4b4f.png',
            date: 3,
            time: 5,
        },
        {
            name: 'Long Nguyen',
            heading: 'L???p tr??nh h?????ng ?????i t?????ng oop',
            userImg: 'https://avatar-redirect.appspot.com/google/115663409059082752836?size=400',
            content: 'H??m nay m??nh s??? chia s??? 1 ch??? ????? v?? c??ng quen thu???c v???i h???u h???t c??c l???p tr??nh vi??n - L???p tr??nh h?????ng ?????i t?????ng(?????nh ngh??a, 4 t??nh ch???t oop, v?? d??? demo). Hy v???ng...',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1021/6173be68944ad.jpg',
            date: 4,
            time: 9,
        },
        {
            name: 'S??n ?????ng',
            heading: '[Vlog] Review t???t c??? ????? m??nh s??? d???ng cho F8',
            userImg: 'https://cdn.fullstack.edu.vn/f8-learning/user_avatars/1/615f31cb28848.jpg',
            content: 'Ch??o c??c b???n, m??nh m???i ra video gi???i thi???u v??? c??c ????? ?????c m??nh c?? s??? d???ng ph???c cho vi???c l??m video tr??n...',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/989/616fc1ee52039.jpg',
            date: 7,
            time: 2,
        },
        {
            name: 'Long Nguyen',
            userImg: 'https://avatar-redirect.appspot.com/google/115663409059082752836?size=400',
            heading: '[C?? b???n] Life cycle c???a Component trong Reactjs',
            content: 'Ch??o anh S??n v??...',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/923/6169a3eaa8c07.png',
            date: 12,
            time: 3,
        },
        {
            name: 'L?? Th??nh Trung',
            userImg: 'https://cdn.fullstack.edu.vn/f8-learning/user_avatars/74901/6172af710d6d3.jpg',
            heading: 'T???ng h???p c??c t??i li???u h???c Flutter - T??? h???c',
            content: 'Hello c??c b???n, n???u nh?? b???n ??ang ch??n l??m m???ng dev web ho???c mu???n ?????i gi?? qua m???ng dev mobile. M??nh ngh?? b???n c?? th??? th??? s??? d??ng...',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/773/6163ef9124d20.png',
            date: 15,
            time: 4,
        },
        {
            name: 'Name H',
            userImg: 'https://cdn.fullstack.edu.vn/f8-learning/user_avatars/101984/6165c2447dd50.jpg',
            heading: 'Nh???ng c??ch ????? ti???n b??? v?????t b???c trong l??nh v???c IT ????',
            content: 'Hi, xin ch??o c??c b??c l???i l?? m??nh ????y, d???o n??y h??i b???n r???n c??ng vi???c n??n c??ng ko c?? nhi???u th???i gian ????? vi???t blog ????',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/881/61647ca915ede.png',
            date: 16,
            time: 4,
        },
        {
            name: 'Minh Nguyen Quang',
            userImg: 'https://cdn.fullstack.edu.vn/f8-learning/user_avatars/4557/6163be5db7611.png',
            heading: 'L???ch s??? ra ?????i "k?? l???" c???a Javascript?',
            content: 'M???t sai l???m m?? nhi???u ng?????i ??ang m???c ph???i khi nghe ?????n c??i t??n JAVAscript ???? l?? ngh?? r???ng, gi???a JS v?? Java c?? s??? t????ng ?????ng n??o ????....',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/859/6163bd0aa40ca.jpg',
            date: 16,
            time: 12,
        },
        {
            name: 'V?? Minh Kha',
            userImg: 'https://cdn.fullstack.edu.vn/f8-learning/user_avatars/18159/61643a2b36731.jpg',
            heading: 'Ecommerce Website Part  3 ( Mern Stack Project ): X??y d???ng Signup v?? Signin (Backend)',
            content: 'Ch??o c??c b???n, c??ng m???t th???i gian kh?? l??u r???i h??m nay l???i l??n F8 vi???t ti???p Part 3 chia s??? v???i m???i ng?????i. M??nh l?? Kha, m???t th??nh...',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/811/6162b8c6b1e31.png',
            date: 17,
            time: 7,
        },
        {
            name: 'Tien Pham Ngoc',
            userImg: 'https://avatar-redirect.appspot.com/google/110021593610685676732?size=400',
            heading: 'H???c nh?? th??? n??o l?? ph?? h???p ?',
            content: 'M??nh xin chia s??? c??ch h???c hi???u qua c???a m??nh khi h???c ??? F8 m???t th???i gian !',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/791/615de64e3f449.jpg',
            date: 21,
            time: 4,
        },
        {
            name: 'V??n Kh???i',
            userImg: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            heading: 'C??c ????n v??? trong CSS',
            content: 'xin ch??o m???i ng?????i nha, l???i l?? KiMiDev ????y, h??m nay m??nh xin chia s??? cho m???i ng?????i m???t ch??c ki???n th???c v??? c??c ????n v???...',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/785/615d79ff4a068.jpg',
            date: 21,
            time: 4,
        },
        {
            name: 'V?? Minh Kha',
            userImg: 'https://cdn.fullstack.edu.vn/f8-learning/user_avatars/18159/61643a2b36731.jpg',
            heading: 'Ecommerce Website Part 2 ( Mern Stack Project ): K???t n???i v???i MongoDB',
            content: 'Ch??o c??c b???n tr??n c???ng ?????ng F8, m??nh l?? Kha m???t th??nh vi??n trong c???ng ?????ng H???c l???p tr??nh web (F8 - Fullstack.edu.vn). H??m nay m??nh...',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/761/615b03b8310d5.png',
            date: 23,
            time: 4,
        }
    ],

    render: function() {
        const blogHtmls = this.blogs.map(function(data) {
            return `
            <div class="page__blog-content-main-item">
                <div class="page__blog-content-main-item-header">
                    <div class="page__blog-content-main-item-header-left">
                        <img src="${data.userImg}" alt="" class="page__blog-content-main-item-header-user">
                        <strong>${data.name}</strong>
                    </div>

                    <div class="page__blog-content-main-item-header-right">
                        <i class="far fa-bookmark"></i>
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>

                <div class="page__blog-content-main-item-content">
                    <div class="page__blog-content-main-item-content-heading">
                        <h3>${data.heading}</h3>
                        <span>${data.content}</span>
                    </div>
                    <div class="page__blog-content-main-item-img">
                        <img src="${data.img}" alt="">
                    </div>
                </div>


                <div class="page__blog-content-main-item-footer">
                    <span>${data.date} ng??y tr?????c</span>
                    <span>${data.time} ph??t ?????c</span>
                </div>
            </div>
            `
        })

        blogsList.innerHTML = blogHtmls.join('')
    },

    start: function() {
        this.render()
    }
}

blogApp.start()


var testLink = document.getElementsByTagName('a')

const testWarn = document.querySelector('.test-warn')
// testLink = [testLink]
console.log(testLink.length)
for(let i = 0; i < testLink.length; i++) {
    const testLinks = testLink[i]
    if(testLinks.getAttribute('href') === "undefined" || testLinks.getAttribute('href') === "") {
        testLinks.setAttribute("href", "#")
        testLinks.addEventListener('click', function(e) {
            e.preventDefault()
        })
    }

    testLinks.onclick = function() {
        if(testLinks.getAttribute('href') === '#') {
            // testWarn.style.display = 'block'
            // setTimeout(function() {
            // testWarn.style.display = 'none'

            // },3000)
            alert()
        }
    }
}


// const pageContent = document.querySelector('.page__content')
// var testLink = pageContent.getElementsByTagName('a')

// const noticeWarn = document.querySelector('#notice')
// for(let i = 0; i < testLink.length; i++) {
//     const testLinks = testLink[i]
//     if(testLinks.getAttribute('href') === "undefined" || testLinks.getAttribute('href') === "") {
//         testLinks.setAttribute("href", "#")
//         testLinks.addEventListener('click', function(e) {
//             e.preventDefault()
//         })
//     }

//     testLinks.onclick = function() {
//         if(testLinks.getAttribute('href') === '#') {
//             const warning = document.createElement('div')
//             warning.classList.add('notice__warn');
//             warning.innerHTML = `
//                 <div class="notice__warn-icon">
//                     <i class="fas fa-exclamation-circle"></i>
//                 </div>
//                 <div class="notice__warn-content">
//                     <h3 class="notice__warn-heading">Th??ng b??o</h3>
//                     <span class="notice__warn-message">N???i dung ??ang trong qu?? tr??nh ho??n thi???n !</span>
//                 </div>
//             `
//             noticeWarn.appendChild(warning)

//             setTimeout(function() {
//                 noticeWarn.removeChild(warning)
//             },2500)
//         }
//     }
// }


const menuRespon = document.querySelector('.header__icon-menu')
const sidebarRespon = document.querySelector('.side__bar-respon')
const sidebarLeft = document.querySelector('.side__bar-respon-left')
const exitSibar = document.querySelector('.side__bar-respon-right')

menuRespon.onclick = function() {
    sidebarRespon.classList.add('iscover-fill');
    sidebarLeft.classList.add('isopen-sidebar-respon')
}

exitSibar.onclick = function() {
    sidebarRespon.classList.remove('iscover-fill');
    sidebarLeft.classList.remove('isopen-sidebar-respon')
}