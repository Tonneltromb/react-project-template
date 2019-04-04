function _getPopup() {
    let popup = document.getElementById('Popup');
    if (popup) {
        return popup;
    }
}

export function show(message) {
    const popup = _getPopup();
    const _message = popup.getElementsByClassName('Popup__message')[0];
    _message.innerHTML = message;
    popup.style.display = 'flex';
}

export function hide() {
    _getPopup().style.display = 'none';
}
