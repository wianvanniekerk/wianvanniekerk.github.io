const initApp = () => {
    const mobileBtn = document.getElementById('mobile-open-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileAbout = document.getElementById('mobile-hide');
    const form = document.querySelector('form');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        mobileAbout.classList.toggle('hidden');
    }

    mobileBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const res = Object.fromEntries(formData);
        const payload = JSON.stringify(res);
        console.log(payload);

        for (item of formData) {
            console.log(item[0], item[1]);
        };

        fetch('https://httpbin.org/anything', {
            method: "POST",
            body: payload,
            header: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => console.log(res));
        
         
    })
}

document.addEventListener('DOMContentLoaded', initApp)