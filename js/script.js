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

    document.querySelectorAll('.info-bar__input').forEach(input => {
        input.addEventListener('change', function () {
            document.querySelectorAll('.popup-info').forEach(popup => {
                popup.classList.remove('popup-info-show')
            })

            document.querySelectorAll('.info-bar__item').forEach(item => {
                item.classList.remove('info-bar__item_active')
                item.querySelector('.info-bar__label').classList.remove('info-bar__label_active')
            })

            if (this.checked) {
                const item = this.closest('.info-bar__item')
                const popup = item.querySelector('.popup-info')

                popup.classList.add('popup-info-show')
                item.classList.add('info-bar__item_active')
                item.querySelector('.info-bar__label').classList.add('info-bar__label_active')
            }
        })
    })

    document.addEventListener('click', function (event) {
        const popups = document.querySelectorAll('.popup-info')
        const inputs = document.querySelectorAll('.info-bar__input')
        let clickedInsidePopup = false

        popups.forEach(popup => {
            if (popup.contains(event.target)) {
                clickedInsidePopup = true
            }
        })

        inputs.forEach(input => {
            if (input.contains(event.target) || input.nextElementSibling.contains(event.target)) {
                clickedInsidePopup = true
            }
        })

        if (!clickedInsidePopup) {
            inputs.forEach(input => {
                if (input.checked) {
                    input.checked = false
                    const item = input.closest('.info-bar__item')
                    const popup = item.querySelector('.popup-info')
                    popup.classList.remove('popup-info-show')
                    item.classList.remove('info-bar__item_active')
                    item.querySelector('.info-bar__label').classList.remove('info-bar__label_active')
                }
            })
        }
    })
})
