const mask=(selector)=>{
    function createMask(event) {
        let matrix = '+38 (0__) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),//380
            val = this.value.replace(/\D/g, '');//380
            

        if (def.length >= val.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });
 

        if (event.type === 'blur') {
            if (this.value.length <= 6) {
                this.value = '';
            }
        } else {
            // setCursorPosition(this.value.length, this);
        }
    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    });
}
export default mask;