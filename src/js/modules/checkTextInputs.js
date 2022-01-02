const checkTextInputs = (selector) => {
    const textInputs = document.querySelectorAll(selector);

    textInputs.forEach(item => {
        item.addEventListener('keypress', (e) => {
            item.replace(/\W/g, '');
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }

        });
    });

};

export default checkTextInputs;