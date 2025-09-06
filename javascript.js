let isPromoApplied = false;



const changeTheme = () => {
    isPromoApplied = !isPromoApplied
    document.body.classList.toggle("sesaonal-promo")

    if(isPromoApplied) {
        document.querySelector("#seasonal-promo-img").setAttribute("src", "./assets/images/irish.jpg")
    }
}

// &&(AND) ||(OR) !(NOT)