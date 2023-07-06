const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

//select tab content item
function selectItem(e){
    //remove all show and border class
    removeBorder()
    removeShow()
    //add a border to the current tab
    this.classlist.add('tab-border')
    //grab content item fromDOm
    const tabContentItem = document.querySelector('#${this.id}-content')
    //add showclass
    tabContentItem.classlist.add('show')
}

//remove bottom border dinges from all
function removeBorder(){
    tabItems.forEach(item=>{
        item.classList.remove('tab-border')
    })
}
//remove show class from all content itemssssssss
function removeShow(){
    //clear btn too
    tabContentItems.forEach(item=>{
        item.classList.remove('show')
    })
}
//hoor items click
tabItems.forEach(item=>{
    item.addEventListener('click',selectItem)
})