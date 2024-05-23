const gallery = () => {
    function ClearClass (off) {
        for (const item of off) {
            item.classList.remove('active')
            
        }
    }
    let slaids = document.querySelectorAll ('.slaid')
    for (const slaid of slaids) {
        slaid.addEventListener('click', () => {
            ClearClass(slaids)
            slaid.classList.add('active')
        })
    
    }
}
gallery()