const emailSendler = require('gsendler');

async function enviarFormulario(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('msg').value;
    alert(`${name} ${email} ${msg}`);

    enviarParaServidorDeEmail(nome, email, msg)
    .then( (sucesso)=>{
        document.getElementById('modalEnvioDeFormularioComSucesso').style.display = "block";        
    })
    .catch( err => formularioComErro(err));
};

async function enviarParaServidorDeEmail(nome, email, msg){
    return await emailSendler.send({
        to: email,
        theme: nome,
        body: msg
    });    
};

formularioComErro(){
    document.getElementById('modalEnvioDeFormularioComErro').value = err;
    document.getElementById('modalEnvioDeFormularioComErro').style.display = "block";
}

closeModal(id){
    document.getElementById(id).style.display = "none"
}