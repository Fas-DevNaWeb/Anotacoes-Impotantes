Adicioando Chave SSH
   
      Abra o terminal de sua preferencia,(bash ou zsh).E siga os seguintes passos

      1° - ssh-keygen -t ed25519 -C "your_email@example.com"
      2° - Enter a file in which to save the key (/home/YOU/.ssh/id_ALGORITHM):[Precione Enter]
      3° - Enter passphrase (empty for no passphrase): [Type a passphrase] (Crie uma senha)
      4° - Enter same passphrase again: [Confirme a senha]
      5° - eval "$(ssh-agent -s)"
           Agent pid 59566 Vai gerar esse número

      (Se você criou sua chave com um nome diferente ou está adicionando uma chave existente 
      que tenha outro nome, substitua id_ed25519 no comando pelo nome do arquivo de chave privada)
      6° - ssh-add ~/.ssh/id_ed25519
      Isso vai gerar um código, copie e cole esse código no git hub no local da chave SSH.Adicione
      também um nome para seu pac.

      7° - Como achar o local de inserir a chave Gerada.
           No canto superior direito, clique na sua Foto,
           vai até settings,
           No canto superior esquerdo procure por: SSH end GPG Keys
           Ney ssh key  


      Adicione uma Identidade para o historico de commits ficar registrado em seu nome.
      
      git config --global user.name "Seu nome"
      git config --global user.email "seuemail@exemplo.br"