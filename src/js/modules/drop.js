import { postData } from "../services/requests";

const drop = () => {
    //drag *
    //dragend * 
    //dragenter - obekt nad dropArea
    //dragexit *
    //dragleave - obetk za predelami dropArea
    //dragover - obekt zavisaet nad dropArea
    //dragstart *
    //drop - obekt otpravlen dropArea

    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) {
        item.closest('.file_upload').style.border = '5px solid yellow';
        item.closest('.file_upload').style.backgroundColor = 'rgba (0 0 0 .7)';
    }

    function unhighlight(item) {
        item.closest('.file_upload').style.border = 'none';
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = '#fff';
        } else {
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dost;
            const arr = input.files[0].name.split('.');

            arr[0].length > 6 ? dost = '...' : dost = '.';
            const name = arr[0].substring(0, 6) + dost + arr[1];
            input.previousElementSibling.textContent = name;
            console.log(name);

            if (input.dataset.auto === 'send') {
                const form = document.querySelector('[data-auto]');
                const formData = new FormData(form);

                postData('assets/server.php', formData)
                    .then(res => console.log(res, 'My s vami svyajemsya'))
                    .catch(() => console.log('Chto to poshlo ne tak...'))
                    .finally(() => input.value = '');
            }
        });
    });
};

export default drop;