// Sticky scroll height
let mycontent = document.getElementById('toc-wrapper');
function changeKofiPosition() {
    let kofiWrapper = $('#kofi-wrapper');
    kofiWrapper.css({'top': 134 + mycontent.offsetHeight});
}
changeKofiPosition();
new ResizeObserver(changeKofiPosition).observe(mycontent)