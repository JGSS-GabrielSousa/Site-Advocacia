document.querySelector("#contact").addEventListener("click", async e => {

    
    //https://api.whatsapp.com/send?phone=5583996032551&text=Ol%C3%A1%20em%20que%20podemos%20ajudar?

    const { value: msg } = await Swal.fire({
        title: "Digite sua mensagem",
        inputLabel: "Logo entraremos em contato para lhe atender",
        input: "text",
        inputValue: "Olá, estou com dúvidas",
        showCancelButton: true,
    });

    if(msg){
        const url = `https://api.whatsapp.com/send?phone=9900123456789&text=${msg}`;
        window.open(url, '_blank').focus();
    }
});