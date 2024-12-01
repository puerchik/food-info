document.addEventListener('DOMContentLoaded', () => {
    const openPopupButtons = document.querySelectorAll('.question-forms__button')
    const popups = document.querySelectorAll('.popup-bg')

    openPopupButtons.forEach(button => {
        button.addEventListener('click', function () {
            const popupId = this.getAttribute('data-popup')
            document.getElementById(popupId).classList.remove('popup-hide')
        })
    })

    popups.forEach(popup => {
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.classList.add('popup-hide')
            }
        })
    })
})
