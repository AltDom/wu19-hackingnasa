// function isNEOPage() {
//     if(window.location.href.includes('neomisses')) {
//         return 'active'
//     } else {
//         return
//     }
// }

function isAstroPage() {
    if(!window.location.href.includes('neomisses')) {
        return 'active'
    } else {
        return
    }
}

export default isAstroPage;