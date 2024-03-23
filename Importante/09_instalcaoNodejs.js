Instalação no sistema Linux 🐧

Etapa 1 💻: Instalação do curl
1. Configurando a instalação
Se você usa Linux, precisa atualizar seu sistema. Para isso, abra o terminal do seu computador e 
execute o comando abaixo:

Copiar
sudo apt update && sudo apt upgrade
2. Instale o curl
Para isso, execute o comando abaixo:

Copiar
sudo apt install curl
3. Verifique a versão do curl
Para isso, execute o comando abaixo:

Copiar
curl --version
Pronto! 🥳 Agora, com o curl preparado, é hora de instalar o nvm.

Etapa 2💻: Instalação do nvm
1. Execute o comando para instalar o nvm
Para instalar o nvm, execute o comando abaixo:

Copiar
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
2. Verifique a versão do nvm
Para conseguir utilizar o nvm, reinicie seu terminal e rode o comando abaixo para verificar 
a versão instalada:

Copiar
nvm -v
3. Escolha a versão do nvm a ser instalada
O comando abaixo instala a versão mais recente do nvm.

Copiar
nvm install --lts
Espere que tudo seja concluído e vá para o diretório home. Caso não saiba como fazer isso, execute
o seguinte comando:

Copiar
cd ~
Você vai precisar editar o arquivo bash_profile, que executa cada vez que você abre o seu terminal. Para isso, execute o comando abaixo:

Copiar
nano .bash_profile
Esse comando abrirá o arquivo dentro do terminal.

Dentro do arquivo bash_profile, cole o seguinte código abaixo:

Copiar
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

Instalação do Node Termina aqui ......




(Opcional) Alternando entre versões do Node
Para instalar outra versão, basta digitar o comando anterior e alterar o campo --lts para o 
número da versão desejada. Neste curso utilizamos a versão LTS do Node.

Verifique a versão do npm instalada
Ao instalar o nvm, você também instala o npm (Node Package Manager), que é um gerenciador de 
pacotes que te ajuda a instalar diversos pacotes de código para auxiliar no desenvolvimento.

Para checar a versão instalada do npm, execute o comando abaixo:

Copiar
npm -v
Você pode entender mais sobre o npm acessando sua documentação

Transite entre versões
Caso queira transitar entre as versões instaladas, basta digitar em seu terminal nvm use <versão
 desejada>, por exemplo:

Copiar
nvm use 16
ou

Copiar
nvm use --lts
Para configurar a versão LTS do Node como padrão, execute o seguinte comando:

Copiar
nvm alias default node
Após a execução do comando, feche e abra o terminal novamente.

Para saber mais sobre o nvm, acesse sua documentação aqui

