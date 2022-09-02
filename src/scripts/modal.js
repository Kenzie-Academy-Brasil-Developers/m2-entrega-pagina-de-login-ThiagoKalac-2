class Modal {
    static showModal() {
        const btnSpanEsqueciSenha = document.querySelector('.btnRecoverPassword');
        btnSpanEsqueciSenha.addEventListener('click', () => { 
            const modal = document.querySelector('.modal_box');
            modal.classList.add('showModal');
        })
    }

    static closeModal() {
        const btnCloseModal = document.querySelector('.modal_close')
        btnCloseModal.addEventListener('click', () => { 
            const modal = document.querySelector('.modal_box');
            // modal.classList.toggle('showModal')
            modal.classList.remove('showModal');
            modal.classList.add('hidden');
    
        });
    }
}




Modal.showModal()
Modal.closeModal()