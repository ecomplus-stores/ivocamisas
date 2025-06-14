// Add your custom JavaScript for storefront pages here.
$('.tabs').click((e) => {
    console.log('just click')
    console.log(e)
    if (e.target && e.target.dataset && e.target.dataset.tab) {
        const league = e.target.dataset.tab
        const tabs = $('.tabs-container .tabs .tab')
        for (let tab0 in tabs) {
            let tab = tabs[tab0]
            if (tab.childNodes) {
                const dataTab = tab.childNodes[0] && tab.childNodes[0].dataset && tab.childNodes[0].dataset.tab
                if (tab.classList) {
                if (dataTab === league) {
                    tab.classList.add('active')
                    document.querySelector(`.${dataTab}`).classList.remove('d-none')
                    document.querySelector(`.${dataTab}`).classList.add('d-flex')
                } else {
                    tab.classList.remove('active')
                    document.querySelector(`.${dataTab}`).classList.add('d-none')
                    document.querySelector(`.${dataTab}`).classList.remove('d-flex')
                }
              }
            }
        }
    }
})
$('#col-leagues .stamps').click((e) => {
    console.log('clink na stamp')
    if (e.target && e.target.dataset && e.target.dataset.liga) {
        const league = e.target.dataset.liga
        const tabs = $('.tabs-container .tabs .tab')
        console.log(tabs)
        for (let tab0 in tabs) {
            let tab = tabs[tab0]
            if (tab.childNodes) {
                const dataTab = tab.childNodes[0] && tab.childNodes[0].dataset && tab.childNodes[0].dataset.tab
                console.log(dataTab)
                if (tab.classList) {
                    if (dataTab === league) {
                        tab.classList.add('active')
                        document.querySelector(`.${dataTab}`).classList.remove('d-none')
                        document.querySelector(`.${dataTab}`).classList.add('d-flex')
                    } else {
                        tab.classList.remove('active')
                        document.querySelector(`.${dataTab}`).classList.add('d-none')
                        document.querySelector(`.${dataTab}`).classList.remove('d-flex')
                    }
              }
            }
        }
    }
});


$(`body`).on(`click`, `button[data-tab]`, function(){
    let tab_id = $(this).attr(`data-tab`);
    let block = $(this).closest(`.apx-tab-banners, .apx-tab-products`)
    console.log(tab_id)
    block.find(`[data-tab]`).removeClass(`active`)
    $(this).addClass(`active`)
    block.find(`[data-tab-content]`).hide()
    block.find(`[data-tab-content="${tab_id}"]`).show()
});


if($(`#page-home #col-leagues`).length > 0 && window.innerWidth < 990){
    $(`#page-home #col-leagues`).closest(`.html-clearfix`).addClass(`apx-clearfix`)
    $(`#page-home #col-leagues`).find(`.stamps`).wrap(`<div class="Logolist-Slider"></div>`);
    // let clone = $(`#page-home #col-leagues`).find(`.stamps`).clone()
    // $(`#page-home #col-leagues`).find(`.stamps`).after(clone)
    // $(`#page-home #col-leagues`).find(`.stamps`).addClass(`apx_banners-stripe`).addClass(`animate_true`)
    let list = $(`#page-home #col-leagues`).find(`.stamps`).html()
    $(`#page-home #col-leagues`).find(`.stamps`).html(list + list + list + list + list + list + list + list + list + list)
    
    $(`#page-home #col-leagues`).find(`.stamps`).addClass(`Logolist-Content`)
    $(`#page-home #col-leagues`).find(`.stamps`).find(`li`).addClass(`logolist`)
    $(`#page-home #col-leagues`).find(`.stamps`).toggleClass(`stamps`)
}
