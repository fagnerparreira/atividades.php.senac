// Valida nome

var nomeCompleto = document.getElementById('nome'); 

nomeCompleto.addEventListener('blur', function(){
  var expNome = /^([^0-9]){3,50}$/g;
  var nomeValido = expNome.exec(nomeCompleto.value);
  console.log(nomeValido);
  var msgNome = '';

  if(!nomeValido === null){
    alert('Digite o nome completo');
  }
  
  nomeCompleto.setCustomValidity(msgNome);

})

// valida Cpf
var cpfCompleto = document.getElementById('cpf');

cpf.addEventListener('blur', function(){ 
  var expCpf = /(\d{3})(\d{3})(\d{3})(\d{2})/g; 
  var cpfValido = expCpf.exec(cpfCompleto.value); 
  var msgCpf = ''; 
  if(!cpfValido){ 
    msgCpf = 'Digite apenas números. Sem pontos ou traços'; 
    alert(msgCpf); 
    console.log(msgCpf); } 

  // var cpfComPontos = cpfCompleto.value.replace(expCpf, function( valorRegex, argumento1, argumento2, argumento3, argumento4 ) { return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4; }) 
  
  cpfCompleto.setCustomValidity(msgCpf); 

  // cpf.value = cpfComPontos;

})

// valida data de Nascimento

  var dataNascimento = document.querySelector('#nascimento');

    dataNascimento.addEventListener('blur', (evento)=>{
      validaDataNascimento(evento.target);
    })

    function validaDataNascimento(input){
      var dataRecebida = new Date(input.value.getFullYear);
      console.log(dataRecebida);
      var dataHoje = new Date();
      console.log(dataHoje);
      var dataMaior16 = new Date(dataRecebida.getFullYear() + 16, dataRecebida.getMonth(), dataRecebida.getDay());
      console.log(dataMaior16);
      var msgNascimento = '';

      if(dataMaior16 <= dataHoje){
        msgNascimento = 'Você precisa ser maior de 16 anos.';
      }

      input.setCustomValidity(msgNascimento);
    }

    var sexo = document.querySelector('#sexo');
    sexo.addEventListener('blur',function (){
      var verificaSexo = sexo.value;
      var msgSexo = '';

      if(verificaSexo === '0'){
        msgSexo = 'Você precisa selecionar o sexo.';
      }
      sexo.setCustomValidity(msgSexo);
    })

    var emailCompleto = document.querySelector('#email')

    emailCompleto.addEventListener('blur',function () {
      var expEmail = /^(\[w_.]*)@([\w-.]*)\.([a-z]){3,6}$/g;
      var verificaEmail = expEmail.exec(emailCompleto.value);
      var msgEmail = '';

      if(verificaEmail === null){
        msgEmail = 'Digite um e-mail válido';
      }
      
      emailCompleto.setCustomValidity(msgEmail);
      
    })

    //valida telefone

    var telCompleto = document.querySelector('#telefone');
    