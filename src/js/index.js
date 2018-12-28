ajax({
    url: "../mock/list.json",
    dataType: 'json',
    success: function(res) {
        console.log(res)
    }
})
var scroll = new BScroll('.main', {
    probeType: 2,
    click: true
})