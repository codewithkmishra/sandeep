let slide = document.querySelectorAll('.slide')
// console.log(slide.length)
let slidecount = 0;
slide.forEach((slide, index) => {
    // console.log(slide)
    slide.style.left = ` ${index * 200}% `
});
let p = document.getElementById('btnp')
// console.log(p)
p.addEventListener("click", function () {
    // alert()
    if (slidecount < 0) {
        slidecount = 5;
        slidecount--
        sl()
    }
    else {
        slidecount--
        sl()
    }
    // slidecount--
    // sl()
    // console.log(slidecount)
})
let n = document.getElementById('btnn')
// console.log(n)
n.addEventListener("click", function () {
    if (slidecount >= 4) {
        slidecount = 0;
        slidecount++
        sl()
    }
    else {
        slidecount++
        sl()
    }
    // slidecount++
    // sl()
    // console.log(slidecount)
})
let sl = function () {
    slide.forEach((slide, index) => {
        slide.style.transform = `translatex(-${slidecount * 200}%) `
        // console.log(slide)
    });
}
setInterval(() => {
    if (slidecount >= 4) {
        slidecount = 0;
        slidecount++
        sl()
    }
    else {
        slidecount++
        sl()
    }
}, 5000);