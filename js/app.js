/**
 * Created by Asus on 5/31/2019.
 */
var header = new Vue({
    el: "#header",
    data: {
        title: "وبسایت من"
    },
})

var footer = new Vue({
    el: "#footer",
    data: {
        address: "تهران- ونک",
        tell : "0211234567",
        email : "info.me@gmail.com"
    },
})

var navbar = new Vue({
    el: '#navbar',
    data: {
        menu: [
            { href:'#header', item: 'خانه' },
            { href:'#about', item: 'درباره ما' },
            { href:'#contact', item: 'تماس با ما' }
        ]
    }
})

var about = new Vue({
    el: '#about',
    data: {
        isHidden: true
    }
})

var social = new Vue({
    el: '#social',
    data:{
        pinterest: 'https://www.pinterest.com',
        twitter: 'https://www.twitter.com',
        youtube: 'https://www.youtube.com',
        facebook: 'https://www.facebook.com',
    }

})