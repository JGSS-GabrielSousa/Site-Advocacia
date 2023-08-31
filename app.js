async function whatsappChat(){
    const { value: msg } = await Swal.fire({
        title: "Digite sua mensagem",
        inputLabel: "Logo entraremos em contato para lhe atender",
        input: "text",
        inputValue: "Olá, estou com dúvidas",
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
    });

    if(msg){
        const url = `https://api.whatsapp.com/send?phone=9900123456789&text=${msg}`;
        window.open(url, '_blank').focus();
    }
}

document.querySelector("#contact").addEventListener("click", whatsappChat);
document.querySelector("#whatsapp-contact").addEventListener("click", whatsappChat);