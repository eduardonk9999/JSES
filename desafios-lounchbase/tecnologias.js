const usuarios = [
  { nome: "Carlos", tecnologias: ["CSS", "HTML" ] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];


for (let usuario of usuarios) {
  console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}

// Busca por tecnologia
function checaSeUsuarioUsaCSS(usuario) {
  for (let tecnologia of usuario.tecnologias) {
      if (tecnologia == 'CSS') return true
  }

  return false
}

for(var i = 0; i < usuarios.length; i++){
  //console.log(`${usuarios[i].nome}, trabalha com ${usuarios[i].tecnologias}`);

  const usuarioTrabalhaComCSS =  checaSeUsuarioUsaCSS(usuarios[i]);

  if(usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  }

  
}
