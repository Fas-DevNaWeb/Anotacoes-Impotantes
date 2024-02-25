Comandos do GIT

  1° - git clone + (url do github) -> baixa o repositório para seu computador.
  2° - git commit -m "Sobre o que se trata o commit" -> Cria uma nova versão do seu codigo
  3° - git branch -> Branch é o nome dado a uma versão do seu código, quando você cria um 
       repósitório ele ja vem com uma branch iniciada como mai. É nessa branch que fica o inicio 
       do seu Projeto. A partir dela você pode fazer uma cópia e ir incrementando seu projeto, até 
       que tudo estege pronto e você a inclua na sua branch principal main.
       O -comando git branch mostra as branch que existe no seu repositório.

  4° - git checkout -b + (Nome da branch que você que criar) -> Cria uma nova branch com nome que 
       você criou. É uma cópia da branch main(principal).A partir dai você trabalha na nova branch
       até quando achar necessário.Quando tudo estiver concluido você uni essa branch a branch principal.
  
  5° - git checkout  + (nome da branch que você que acessar) -> Sai da branch onde você se encontra, e entra 
  na branch que você quer acessar.

  6° - git merge -> Uni as branch atualizando, as branchs unidas ficarão iguais, até que você continue em uma delas
       OBS: É ideal que você atualiza a main, mergeando as outras branchs nela.
  7° - git branch -D + (nome da branch) -> Deleta a branch especificada.A

  8° - Pull Request -> Significa subir uma branch qua ainda não tem no gitHub.
       git push --set-upstream origin + (nome da branch)

  10 - git pull -> Verifica se a atualizações a serem baixadas entre o gitHub e seu repositório localStorage. Sempre 
       que iniciar um projeto o ideal é dar um git pull, para verificar se não a divergencia entre o repositório local
       e o repositório do gitHub.