function verificar(){
  var email = document.getElementById('email').value;
  var descricao = document.getElementById('descricao').value;
  var problema = document.getElementById('select').value
  var option = select.options[select.selectedIndex].value;
  if(email == "" || descricao == ""){
    card.innerHTML =`
            <p class="text-danger text-center card-text">Campo vazio, por favor verifique todos os campos!</p>`
  }
  else{
      card.innerHTML =`<p class="text-success text-center card-text">Dados enviados!</p>`
      p1.innerHTML=`<p><b>E-mail:</b> ${email}</p>`;
      p2.innerHTML=`<p><b>Problema:</b> ${option}</p>`;
      p3.innerHTML=`<p><b>Descrição:</b> ${descricao}</p>`;
  }
}

function limpar(){
  p1.innerHTML=`E-mail: `;
  p2.innerHTML=`Problema: `;
  p3.innerHTML=`Descrição: `;
  card.innerHTML=``;
  window.open("dadosRecebidos.html");
}