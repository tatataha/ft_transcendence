function selectItem(element) {
    var items = document.getElementsByClassName('history-item');
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove('new-cool');
    }
    element.classList.add('new-cool');
}
