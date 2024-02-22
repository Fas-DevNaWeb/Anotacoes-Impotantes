Sobre ZSH
    ZSH é um terminal, Shell Diferente.Segue os comandos de como instalar:

    
Comandos	                                                               Quando usar?
ls	                                                        Lista arquivos e diretórios
cd .	                                     É usado para referenciar o diretório atual
cd ..	                                   Muda para o diretório-pai do diretório atual
cd <nome do diretório>	                                   Muda para um outro diretório
echo $SHELL	                                           Para verificar a versão so shell

sudo apt update	                                      Para atualizar a lista de pacotes 
                                                      disponíveis nos repositórios de 
                                                      software configurados em seu 
                                                      sistema
clear	                                                       Limpa a tela do terminal
sudo apt install zsh -y	                                            Para instalar o ZSH
zsh --version	                                             Para saber a versão do ZSH
whereis zsh	                                        Para saber onde o ZSH foi instalado
sudo usermod -s /usr/bin/zsh $(whoami)	        Para definir o ZSH como shell principal

sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"	Para instalar o “Oh My ZSH”
