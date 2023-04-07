export default function ehMaiorDeIdade(campo){
    const dataNascimento = new Date(campo.value);

    if(!validarIdade(dataNascimento)){
        campo.setCustomValidity("O usuário não é maior de idade");
    } else {
        campo.setCustomValidity("");
    }
}

function validarIdade(data){
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    console.log(dataMais18)

    return dataAtual >= dataMais18;
}