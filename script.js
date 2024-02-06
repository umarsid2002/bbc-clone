$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    touchDrag: false,
    mouseDrag: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})



let source = document.getElementsByTagName('video')

let videolist = document.querySelector('.videolist')
let videoItems = videolist.querySelectorAll('.item')
Array.from(videoItems).forEach((item) => {
    item.addEventListener('click', () => {
        let vidSrc = item.getElementsByTagName('input')[0].value
        let myVid = document.getElementsByTagName('video')[0]
        myVid.src = vidSrc
    })
})