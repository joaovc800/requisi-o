function verificar(){
  var email = document.getElementById('email').value;
  var descricao = document.getElementById('descricao').value;
  p1.innerHTML=`E-mail: ${email}`;
  p2.innerHTML=`Descrição: ${descricao}`;

  if(email == "" || descricao == ""){
    card.innerHTML=`
            <p class="text-danger text-center card-text">Campo vazio, por favor verifique todos os campos!</p>`
  }
  else{
      card.innerHTML=`
              <p class="text-success text-center card-text">Dados enviados!</p>`
  }
}

function limpar(){
  p1.innerHTML=`E-mail: `;
  p2.innerHTML=`Descrição: `;
  card.innerHTML=``;
}