
const imgg = document.querySelectorAll('.imgg');

imgg.forEach((a) => {

    a.addEventListener('click', () => {

        // if (a.classList.contains('selectimg')) {
        //     a.classList.remove('selectimg');
        // }
        // else { a.classList.add('selectimg'); }

        for (i of imgg) {
            i.classList.remove('selectimg');

        }
        a.classList.add('selectimg');

    })

})

