// Add your custom JavaScript for storefront pages here.
$('.tabs').click((e) => {
    console.log('just click')
    console.log(e)
    if (e.target && e.target.dataset && e.target.dataset.tab) {
        const league = e.target.dataset.tab
        const tabs = $('.tabs-container .tabs .tab')
        for (tabO in tabs) {
            let tab = tabs[tabO]
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
        for (tabO in tabs) {
            let tab = tabs[tabO]
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