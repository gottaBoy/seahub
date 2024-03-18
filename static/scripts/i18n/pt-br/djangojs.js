

'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    const v = (n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;
    if (typeof v === 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  const newcatalog = {
    "(If left blank, owner will be admin)": "(se deixado em branco, o propriet\u00e1rio ser\u00e1 o administrador)",
    "(current notification)": "(notifica\u00e7\u00e3o atual)",
    "(current version)": "(vers\u00e3o atual)",
    "1 month ago": "1 mes atr\u00e1s",
    "1 week ago": "1 semana atr\u00e1s",
    "3 days ago": "3 dias atr\u00e1s",
    "A file with the same name already exists in this folder.": "Um arquivo com o mesmo nome j\u00e1 existe nesta pasta",
    "About": "Sobre",
    "About Us": "Sobre",
    "Accept": "Aceitar",
    "Accepted": "Aceito",
    "Accepter": "Aceitador.",
    "Access Log": "Registro de acesso",
    "Actions": "A\u00e7\u00f5es",
    "Activated": "Ativado",
    "Active": "Ativo",
    "Active Users": "Usu\u00e1rios ativos",
    "Activities": "Atividades",
    "Add": "Adicionar",
    "Add Admins": "Incluir Administradores",
    "Add Library": "Adicionar  biblioteca",
    "Add Member": "Adicionar Membro",
    "Add Terms and Conditions": "Adicionar Termos e Condi\u00e7\u00f5es",
    "Add User": "Adicionar Usu\u00e1rio",
    "Add admin": "Incluir administrador",
    "Add auto expiration": "Adicionar auto expira\u00e7\u00e3o",
    "Add institution": "Adicionar Institui\u00e7\u00e3o",
    "Add new notification": "Adicionar nova notifica\u00e7\u00e3o",
    "Add password protection": "Adicionar prote\u00e7\u00e3o por senha",
    "Add user": "Incluir usu\u00e1rios",
    "Added": "Adicionado",
    "Added user {user}": "Usu\u00e1rio adicionado {user}",
    "Admin": "Administrador",
    "Admin Logs": "Logs do Administrador",
    "Admins": "Administradores",
    "All": "Todos",
    "All Groups": "Todos os grupos",
    "All Notifications": "Todas as notifica\u00e7\u00f5es",
    "All Public Links": "Todos links p\u00fablicos",
    "All file types": "Todos os tipos de arquivos",
    "Allow new user registrations. Uncheck this to prevent anyone from creating a new account.": "Permitir novos registros de usu\u00e1rios. Desmarque isto para prevenir qualquer de criar uma nova conta.",
    "An integer that is greater than or equal to 0.": "Um n\u00famero inteiro que seja maior ou igual a 0.",
    "Anonymous User": "Usu\u00e1rio an\u00f4nimo",
    "Are you sure you want to clear trash?": "Voc\u00ea tem certeza que deseja limpar a lixeira?",
    "Are you sure you want to delete %s ?": "Voc\u00ea tem certeza que deseja excluir %s ?",
    "Are you sure you want to delete the selected user(s) ?": "Voc\u00ea tem certeza que quer excluir o(s) usu\u00e1rio(s) selecionado(s)?",
    "Are you sure you want to restore this library?": "Tem certeza que deseja recuperar essa biblioteca?",
    "Are you sure you want to unlink this device?": "Voc\u00ea tem certeza que deseja desconectar este dispositivo?",
    "Audio": "\u00c1udio",
    "Avatar": "Avatar",
    "Avatar:": "Avatar:",
    "Back": "Voltar",
    "Broken (please contact your administrator to fix this library)": "Danificado (por favor contate seu administrador para consertar esta biblioteca)",
    "Can not copy directory %(src)s to its subdirectory %(des)s": "N\u00e3o \u00e9 poss\u00edvel copiar o diret\u00f3rio %(src)s para o subdiret\u00f3rio %(des)s",
    "Can not move directory %(src)s to its subdirectory %(des)s": "N\u00e3o \u00e9 poss\u00edvel mover o diret\u00f3rio %(src)s para o subdiret\u00f3rio %(des)s",
    "Cancel": "Cancelar",
    "Cancel All": "Cancelar Todos",
    "Change": "Alterar",
    "Change Password": "Trocar senha",
    "Change Password of Library {placeholder}": "Alterar senha da Biblioteca {placeholder}",
    "Clean": "Limpo",
    "Clear": "Limpo",
    "Clear Trash": "Limpar Lixeira",
    "Clear files in trash and history\uff1a": "Limpar lixeira e historico :",
    "Clients": "Clientes",
    "Close": "Fechar",
    "Community Edition": "Edi\u00e7\u00e3o da Cominudade",
    "Confirm Password": "Confirme a senha",
    "Contact Email": "E-mail de contato",
    "Contact Email:": "E-mail de contato:",
    "Copy": "Copiar",
    "Copy selected item(s) to:": "Copiar itens selecionados para:",
    "Count": "Contar",
    "Create": "Criar",
    "Create Group": "Criar Grupo",
    "Created": "Criado",
    "Created At": "Criado em",
    "Created group {group_name}": "Grupo Criado {group_name}",
    "Created library": "Biblioteca criada",
    "Creator": "Criador",
    "Current Connected Devices": "Dispositivos Conectados Neste Momento",
    "Current Library": "Biblioteca atual",
    "Current Path: ": "Caminho atual:",
    "Current Version": "Vers\u00e3o Atual",
    "Current path: ": "Caminho atual:",
    "Custom file types": "Customizar tipos de arquivo",
    "Database": "Base de Dados",
    "Date": "Data",
    "Default": "Padr\u00e3o",
    "Delete": "Excluir",
    "Delete Account": "Excluir Conta",
    "Delete Group": "Excluir Grupo",
    "Delete Institution": "Excluir Institui\u00e7\u00e3o",
    "Delete Library": "Excluir Biblioteca",
    "Delete Member": "Excluir Membro",
    "Delete Notification": "Excluir notifica\u00e7\u00e3o",
    "Delete Organization": "Excluir organiza\u00e7\u00e3o",
    "Delete Time": "Excluir hora",
    "Delete User": "Excluir Usu\u00e1rio",
    "Delete files from this device the next time it comes online.": "Excluir arquivos deste dispositivo da pr\u00f3xima vez em que ele estiver online.",
    "Deleted": "Exclu\u00eddo",
    "Deleted Time": "Excluir hora",
    "Deleted directories": "Diret\u00f3rios exclu\u00eddos",
    "Deleted files": "Arquivos exclu\u00eddo",
    "Deleted group {group_name}": "Grupo exclu\u00eddo {group_name}",
    "Deleted library": "Biblioteca exclu\u00edda",
    "Deleted library {library_name}": "Biblioteca exclu\u00edda {library_name}",
    "Deleted user {user}": "Usu\u00e1rio exclu\u00eddo {user}",
    "Description": "Descri\u00e7\u00e3o",
    "Description is required": "Descri\u00e7\u00e3o \u00e9 obrigat\u00f3ria",
    "Desktop": "Desktop",
    "Details": "Detalhes",
    "Device": "Dispositivo",
    "Device Name": "Nome do Dispositivo",
    "Devices": "Dispositivos",
    "Directory": "Diret\u00f3rio",
    "Disable Two-Factor Authentication": "Desabilitar Autentica\u00e7\u00e3o de 2 fatores",
    "Document convertion failed.": "A convers\u00e3o falhou",
    "Documents": "Documentos",
    "Don't keep history": "N\u00e3o manter hist\u00f3rico",
    "Don't replace": "N\u00e3o Substituir",
    "Download": "Download",
    "Edit": "Editar",
    "Edit succeeded": "Editado com sucesso",
    "Email": "E-mail",
    "Enable Two-Factor Authentication": "Habilitar Autentica\u00e7\u00e3o de 2 fatores",
    "Enable two factor authentication": "Habilitar Autentica\u00e7\u00e3o de 2 fatores",
    "Encrypt": "Criptografar",
    "Encrypted library": "Biblioteca encriptada",
    "Error": "Erro",
    "Errors": "Erros",
    "Exit System Admin": "Sair da Administra\u00e7\u00e3o",
    "Expiration": "Expira\u00e7\u00e3o",
    "Expired": "Expirado",
    "Export Excel": "Exportar para Excel",
    "Failed": "Falha",
    "Failed to copy %(name)s": "Falha ao copiar %(name)s",
    "Failed. Please check the network.": "Falha. Por favor, verifique a rede.",
    "Favorites": "Favoritos",
    "File": "Arquivo",
    "File Upload": "Carregamento de Arquivo",
    "File Uploading...": "Carregando Arquivo...",
    "File download is disabled: the share link traffic of owner is used up.": "O download do arquivo foi desativado: o  tr\u00e1fego do  link compartilhado se esgotou.",
    "Files": "Arquivos",
    "Folder": "Pasta",
    "Folder Permission": "Permiss\u00e3o da Pasta",
    "Folders": "Pastas",
    "Force user to change password when account is newly added or reset by admin": "for\u00e7ar a mudan\u00e7a de senha quando novas contas forem adicionadas ou resetadas pelo Administrador. ",
    "Force user to use a strong password when sign up or change password.": "for\u00e7ar usu\u00e1rio a usar senha forte quando estiver se cadastrando ou mudando a senha.",
    "Freeze user account when failed login attempts exceed limit.": "Congelar conta do usu\u00e1rio ap\u00f3s as tentativas falhadas excederem limite.",
    "Generate": "Gerar",
    "Grid": "Grid",
    "Group": "Grupo",
    "Group Permission": "Permiss\u00e3o de Grupo",
    "Groups": "Grupos",
    "Guest": "Convidado",
    "Handled": "Gerenciado",
    "Help": "Ajuda",
    "Hide": "Ocultar",
    "History": "Hist\u00f3rico",
    "History Setting": "Configura\u00e7\u00f5es do Hist\u00f3rico",
    "IP": "IP",
    "If turn on, the desktop clients will not be able to sync a folder outside the default Seafile folder.": "Se ligado, os clientes desktop n\u00e3o poder\u00e3o sincronizar com uma pasta fora da pasta padr\u00e3o do Seafile.",
    "If you don't have any device with you, you can access your account using backup codes.": "Se voc\u00ea n\u00e3o tiver nenhum dispositivo contigo, voc\u00ea pode acessar a sua conta utilizando c\u00f3digos de backup",
    "Image": "Imagem",
    "Images": "Imagens",
    "Import Members": "Importar Membros",
    "Import users": "Importar usu\u00e1rios",
    "In all libraries": "Em todas as bibliotecas",
    "Inactive": "Inativo",
    "Info": "Informa\u00e7\u00e3o",
    "Input file extensions here, separate with ','": "Digite as extens\u00f5es de arquivos aqui, separado por ','",
    "Institutions": "Institui\u00e7\u00f5es",
    "Internal Server Error": "Erro interno do servidor",
    "Invalid destination path": "Caminho de destino inv\u00e1lido",
    "Invitations": "Convites",
    "Invite Time": "Tempo do Convite",
    "Invited at": "Convidado por",
    "Inviter": "Convidador.",
    "It is required.": "Obrigatorio",
    "Keep full history": "Manter hist\u00f3rico completo",
    "LDAP": "LDAP",
    "LDAP(imported)": "LDAP(imported)",
    "Language": "Idioma",
    "Language Setting": "Configura\u00e7\u00e3o de Idioma",
    "Last Access": "\u00daltimo Acesso",
    "Last Login": "Ultimo Login",
    "Last Update": "\u00daltima atualiza\u00e7\u00e3o",
    "Leave Share": "Permitir compartilhamento",
    "Libraries": "Bibliotecas",
    "Library": "Biblioteca",
    "Library Type": "Tipo da Biblioteca",
    "Limits": "Limites",
    "Link": "Link",
    "Linked Devices": "Dispositivos Conectados",
    "Links": "Links",
    "List": "Lista",
    "Lock": "Trava",
    "Log out": "Sair",
    "Logs": "Logs",
    "Manage Members": "Gerenciar Membros",
    "Mark all read": "Marcar todas lidas",
    "Member": "Membro",
    "Members": "Membros",
    "Message": "Mensagem",
    "Message (optional):": "Mensagem (opcional):",
    "Mobile": "Dispositivo M\u00f3vel",
    "Modification Details": "Detalhes de modifica\u00e7\u00e3o",
    "Modified": "Alterado",
    "Modified files": "Arquivos modificados",
    "Modifier": "Modificado",
    "Month:": "M\u00eas:",
    "More": "Mais",
    "More operations": "Mais operac\u00f5es",
    "Move": "Mover",
    "Move selected item(s) to:": "Mover itens selecionados para:",
    "My Groups": "Meus grupos",
    "My Libraries": "Minhas Bibliotecas",
    "Name": "Nome",
    "Name is required": "Nome requerido",
    "Name is required.": "\u00c9 necess\u00e1rio fornecer nome.",
    "Name should not include '/'.": "O Nome n\u00e3o pode incluir \"/\".",
    "Name(optional)": "Nome(opcional)",
    "New": "Novo",
    "New Excel File": "Novo Arquivo Excel",
    "New File": "Novo Arquivo",
    "New Folder": "Nova Pasta",
    "New Group": "Novo Grupo",
    "New Library": "Nova biblioteca",
    "New Markdown File": "Novo Arquivo Markdown",
    "New Password": "Nova Senha",
    "New Password Again": "Nova senha de novo",
    "New PowerPoint File": "Novo Arquivo PowerPoint",
    "New Word File": "Novo Arquivo Word",
    "New directories": "Novos diret\u00f3rios",
    "New files": "Novos arquivos",
    "New password is too short": "A nova senha \u00e9 muito curta",
    "New passwords don't match": "A nova senha e sua confirma\u00e7\u00e3o n\u00e3o s\u00e3o iguais",
    "Next": "Pr\u00f3ximo",
    "No": "N\u00e3o",
    "No connected devices": "Nenhum dispositivo conectado",
    "No groups": "Nenhum grupo",
    "No libraries": "Nenhuma biblioteca",
    "No members": "Nenhum membro",
    "No result": "Sem resultado",
    "No sync errors": "Sem erros de sincroniza\u00e7\u00e3o",
    "None": "Nenhum",
    "Note: Settings via web interface are saved in database table (seahub-db/constance_config). They have a higher priority over the settings in config files.": "Nota: As configura\u00e7\u00f5es via interface web s\u00e3o salvas na tabela da base dedados (seahub-db/constance_config). Elas tem uma prioridade superior \u00e0s configura\u00e7\u00f5es nos arquivos de configura\u00e7\u00e3o.",
    "Notification": "Notifica\u00e7\u00e3o",
    "Notification Detail": "Detalhe da notifica\u00e7\u00e3o",
    "Notifications": "Notifica\u00e7\u00f5es",
    "Number of days that keep user sign in.": "N\u00famero de dias para manter conectado",
    "Number of groups": "N\u00famero de grupos",
    "Off": "Desligado",
    "Old Password": "Antiga senha",
    "On": "Ligado",
    "Only keep a period of history:": "Mantenha apenas o per\u00edodo do hist\u00f3rico:",
    "Open via Client": "Abrir atrav\u00e9s do cliente Desktop",
    "Operation": "Opera\u00e7\u00e3o",
    "Operation succeeded.": "Opera\u00e7\u00e3o bem sucedida.",
    "Operations": "Opera\u00e7\u00f5es",
    "Organization": "Organiza\u00e7\u00e3o",
    "Organization Admin": "Administra\u00e7\u00e3o da Organiza\u00e7\u00e3o",
    "Organizations": "Organiza\u00e7\u00f5es",
    "Other Libraries": "Outras bibliotecas",
    "Out of quota.": "Sem cota dispon\u00edvel.",
    "Owner": "Propriet\u00e1rio",
    "Owner can use admin panel in an organization, must be a new account.": "O propriet\u00e1rio pode usar o painel administrativo em uma organiza\u00e7\u00e3o, precisar de uma nova conta.",
    "Packaging...": "Empacotando...",
    "Password": "Senha",
    "Password again": "Informe a senha novamente",
    "Password is too short": "Senha muito curta",
    "Password:": "Senha:",
    "Passwords don't match": "Senhas n\u00e3o coincidem",
    "Permission": "Permiss\u00e3o",
    "Permission denied": "Permiss\u00e3o negada",
    "Permission:": "Permiss\u00e3o:",
    "Platform": "Plataforma",
    "Please check the network.": "Por favor ",
    "Please enter 1 or more character": "Por favor  digite 1 ou mais caracteres",
    "Please enter a new password": "Entre com a nova senha",
    "Please enter days": "Por favor, informe os dias",
    "Please enter password": "Por favor insira a senha",
    "Please enter the new password again": "Por favor entre com a nova senha novamente",
    "Please enter the old password": "Entre com a senha atual",
    "Please enter the password again": "Por favor insira a senha novamente",
    "Please input at least an email.": "Por favor, insira pelo menos um e-mail.",
    "Previous": "Anterior",
    "Professional Edition": "Edi\u00e7\u00e3o Profissional",
    "Profile": "Perfil",
    "Profile Setting": "Configurar perfil",
    "Read-Only": "Somente Leitura",
    "Read-Only library": "Biblioteca no modo somente leitura",
    "Read-Write": "Leitura-Escrita",
    "Read-Write library": "Biblioteca no modo leitura-escrita",
    "Really want to delete your account?": "Voc\u00ea realmente deseja excluir essa conta?",
    "Refresh": "Atualizar",
    "Remove": "Remover",
    "Rename": "Renomear",
    "Rename File": "Renonear Arquivo",
    "Rename Folder": "Renomear Pasta",
    "Renamed or Moved files": "Arquivos renomeados ou movidos",
    "Replace": "Substituir",
    "Replace file {filename}?": "Substituir arquivo {filename}?",
    "Replacing it will overwrite its content.": "Substitu\u00ed-lo ir\u00e1 sobreescrever seu conte\u00fado.",
    "Reset Password": "Resetar senha",
    "ResetPwd": "Restaurar senha",
    "Restore": "Restaurar",
    "Restore Library": "Restaurar Biblioteca",
    "Result": "Resultado",
    "Revoke Admin": "Administrador revogado",
    "Role": "Papel",
    "Saving...": "Salvando...",
    "Seafile": "Seafile",
    "Search": "Pesquisar",
    "Search files in this library": "Pesquisar arquivos nessa biblioteca",
    "Search groups": "Procurar grupos",
    "Select a group": "Selecionar um grupo",
    "Select groups": "Selecionar grupos",
    "Select libraries to share": "Selecione bibliotecas para compartilhar",
    "Send": "Enviar",
    "Send activation Email after user registration.": "Enviar Email de Ativa\u00e7\u00e3o ap\u00f3s registro do usu\u00e1rio.",
    "Send to:": "Enviar para:",
    "Sending...": "Enviando\u2026",
    "Server Version: ": "Vers\u00e3o do Servidor:",
    "Set Admin": "Definir Administrador",
    "Set Quota": "definir cota",
    "Set to current": "Definir como atual",
    "Set user name": "Defina o nome do usu\u00e1rio",
    "Settings": "Configura\u00e7\u00e3o",
    "Share": "Compartilhar",
    "Share Admin": "Compartilhar Administrador",
    "Share From": "Compartilhamento de",
    "Share Link": "Link compartilhado",
    "Share Links": "Links compartilhados",
    "Share To": "Compartilhar com",
    "Share existing libraries": "Compartilhar bibliotecas existentes",
    "Share to group": "Compartilhar com grupo",
    "Share to user": "Compartilhar com usuario",
    "Shared By": "Compartilhado por",
    "Shared Links": "Links compartilhados",
    "Shared by: ": "Compartilhado por:",
    "Shared with all": "Compartilhado com todos",
    "Shared with groups": "Compartilhado com grupos",
    "Shared with me": "Compartilhado comigo",
    "Show": "Mostrar",
    "Show Codes": "Exibir C\u00f3digos",
    "Side Nav Menu": "Menu de Navega\u00e7\u00e3o Lateral",
    "Size": "Tamanho",
    "Space Used": "Espa\u00e7o utilizado",
    "Space Used / Quota": "Espa\u00e7o utilizado / cota",
    "Star": "Marcar",
    "Status": "Estado",
    "Storage Used": "Espa\u00e7o Utilizado",
    "Submit": "Enviar",
    "Success": "Sucesso",
    "Successfully changed library password.": "Senha da biblioteca alterada com sucesso.",
    "Successfully copied %(name)s and %(amount)s other items.": "%(name)s and %(amount)s outros items.copiados com sucesso",
    "Successfully copied %(name)s and 1 other item.": "%(name)s  copiado com sucesso e  1 outro items",
    "Successfully copied %(name)s.": " %(name)s. copiados com sucesso",
    "Successfully deleted 1 item": "Sucesso ao excluir 1 item.",
    "Successfully deleted 1 item.": "Item exclu\u00eddo com sucesso.",
    "Successfully moved %(name)s and %(amount)s other items.": "%(name)s e %(amount)s outros items.copiados com sucesso",
    "Successfully moved %(name)s and 1 other item.": "%(name)s e  1 outro item.copiados com sucesso",
    "Successfully moved %(name)s.": "Movidos com sucesso %(name)s.",
    "Successfully reset password to %(passwd)s for user %(user)s.": "Reiniciada com sucesso a senha para %(passwd)s para o usu\u00e1rio %(user)s.",
    "Successfully restored 1 item.": "Sucesso ao restaurar 1 item. ",
    "Successfully revoke the admin permission of %s": "A permiss\u00e3o de administrador do usu\u00e1rio %s foi revogada com sucesso",
    "Successfully sent to {placeholder}": "Enviado com sucesso para {placeholder}",
    "Successfully set %s as admin.": "%s foi definido como administrador com sucesso",
    "Successfully set library history.": "Hist\u00f3rico da biblioteca atualizado com sucesso.",
    "Successfully transferred the group.": "Grupo transferido com sucesso.",
    "Successfully transferred the library.": "Biblioteca transferida com sucesso.",
    "Successfully unshared library {placeholder}": "Sucesso ao descompartilhar biblioteca {placeholder}",
    "Sync": "Sincronizar",
    "System": "Sistema",
    "System Admin": "Administrador do sistema",
    "System Info": "Informa\u00e7\u00f5es do Sistema",
    "Template": "Template",
    "Terms and Conditions": "Termos e Condi\u00e7\u00f5es",
    "Text": "Texto",
    "Text files": "Arquivo texto",
    "The URL of the server, like https://seafile.example.com or http://192.168.1.2:8000": "A URL do servidor, exemplo: https://seafile.example.com ou http://192.168.1.2:8000",
    "The internal URL for downloading/uploading files. Users will not be able to download/upload files if this is not set correctly. If you config Seafile behind Nginx/Apache, it should be SERVICE_URL/seafhttp, like https://seafile.example.com/seafhttp .": "A URL interna para download/upload de arquivos. Os usu\u00e1rios n\u00e3o  poder\u00e3o fazer download/upload de arquivos se ela n\u00e3o estiver configurada corretamente. Se voc\u00ea configurar Seafile por tr\u00e1s de Nginx/Apache, ela dever\u00e1 ser SERVICE_URL/seafhttp, como, por exemplo: https://seafile.example.com/seafhttp .",
    "The least number of characters an account password should include.": "O menor n\u00famero de caracteres que uma senha de uma conta deve incluir.",
    "The least number of characters an encrypted library password should include.": "O menor n\u00famero de caracteres que uma senha de biblioteca deve incluir.",
    "The level(1-4) of an account password's strength. For example, '3' means password must have at least 3 of the following: num, upper letter, lower letter and other symbols": "O n\u00edvel(1-4) da for\u00e7a da senha de uma conta. Por exemplo, '3' significa que a senha deve ter pelo menos 3 dos seguintes itens: n\u00famero, letra mai\u00fascula, letra min\u00fascula e outros s\u00edmbolos",
    "The maximum number of failed login attempts before showing CAPTCHA.": "O n\u00famero m\u00e1ximo de tentativas falhadas de login antes de mostrar CAPTCHA.",
    "The owner of this library has run out of space.": "O propriet\u00e1rio desta biblioteca est\u00e1 sem espa\u00e7o.",
    "The password will be kept in the server for only 1 hour.": "A senha ser\u00e1 mantida no servidor por apenas 1 hora.",
    "This library is password protected": "Esta biblioteca esta protegida com senha",
    "This operation will not be reverted. Please think twice!": "Essa opera\u00e7\u00e3o n\u00e3o ser\u00e1 revertida. Favor verifique duas vezes!",
    "Time": "Hora",
    "Tip: 0 means default limit": "Dica: 0 significa limite padr\u00e3o",
    "Tip: a snapshot will be generated after modification, which records the library state after the modification.": "Dica: um snapshot ser\u00e1 gerado ap\u00f3s cada modifica\u00e7\u00e3o, registrando o estado da biblioteca ap\u00f3s a modifica\u00e7\u00e3o.",
    "Tip: you can search by keyword in name.": "Dica: Voc\u00ea pode pesquisar por palavra-chave no nome.",
    "Tools": "Ferramentas",
    "Total Devices": "Total de Dispositivos",
    "Total Users": "Total de usu\u00e1rios",
    "Traffic": "Tr\u00e1fego",
    "Transfer": "Transferir",
    "Transfer Group": "Transferir Grupo",
    "Transfer Library": "Tranferir Biblioteca",
    "Transferred group {group_name} from {user_from} to {user_to}": "Grupo transferido {group_name} de {user_from} para {user_to}",
    "Transferred library {library_name} from {user_from} to {user_to}": "Biblioteca transferida {library_name} de {user_from} para {user_to}",
    "Trash": "Lixeira",
    "Two-Factor Authentication": "Autentica\u00e7\u00e3o de 2 fatores",
    "Two-factor authentication is not enabled for your account. Enable two-factor authentication for enhanced account security.": "Autentica\u00e7\u00e3o de 2 fatores n\u00e3o est\u00e1 habilitada para sua conta. Habilite esse tipo de autentica\u00e7\u00e3o para aumentar a seguran\u00e7a da sua conta.",
    "Type": "Tipo",
    "Unknown": "Desconhecido",
    "Unlink": "Desvincular",
    "Unlink device": "Desconectar dispositivo",
    "Unlock": "Destravar",
    "Unshare": "Descompartilhar",
    "Unshare Library": "Descompartilhar Biblioteca",
    "Unstar": "Desmarcar",
    "Update": "Atualizar",
    "Update Terms and Conditions": "Atualizar Termos e Condi\u00e7\u00f5es",
    "Upgrade to Pro Edition": "Atualizar para Edi\u00e7\u00e3o Profissional",
    "Upload": "Enviar arquivo",
    "Upload Files": "Enviar arquivos",
    "Upload Folder": "Pasta de Upload",
    "Upload Link": "Enviar Link",
    "Upload Links": "Enviar Links",
    "Upload file": "Enviar arquivo",
    "Used:": "Utilizado:",
    "User": "Usu\u00e1rio",
    "User Permission": "Permiss\u00e3o de Usuario",
    "Username:": "Nome de usu\u00e1rio:",
    "Users": "Usu\u00e1rios",
    "Version": "Vers\u00e3o",
    "Version Number": "N\u00famero da Vers\u00e3o",
    "Video": "V\u00eddeos",
    "View": "Ver",
    "View Snapshot": "Ver inst\u00e2ntanea",
    "View profile and more": "Visualizar perfil",
    "Virus File": "Arquivo Infectado",
    "Virus Scan": "Verifica\u00e7\u00e3o de V\u00edrus",
    "Visits": "Visitas",
    "Wrong password": "Senha incorreta",
    "Yes": "Sim",
    "You can also add a user as a guest, who will not be allowed to create libraries and groups.": "Voc\u00ea tamb\u00e9m pode adicionar um usu\u00e1rio como convidado, que n\u00e3o poder\u00e1 criar bibliotecas e grupos.",
    "You can use this field at login.": "Voc\u00ea pode usar este campo no login.",
    "Your notifications will be sent to this email.": "Suas notifica\u00e7\u00f5es ser\u00e3o enviadas para este e-mail.",
    "ZIP": "ZIP",
    "activate after registration": "Ativar depois de registro.",
    "all": "todos",
    "all members": "Todos os membros",
    "allow new registrations": "Permitir novos registros.",
    "days": "dias",
    "icon": "\u00edcone",
    "keep sign in": "Manter conectado",
    "library password minimum length": "comprimento m\u00ednimo da senha de biblioteca",
    "locked": "Travado",
    "name": "nome",
    "password minimum length": "comprimento m\u00ednimo da senha.",
    "password strength level": "n\u00edvel de for\u00e7a de uma senha.",
    "send activation email": "Enviar email de ativa\u00e7\u00e3o.",
    "shared by:": "Compartilhado por:",
    "starred": "marcado",
    "to": "para",
    "unstarred": "desmarcar",
    "you can also press \u2190 ": "voc\u00ea pode tamb\u00e9m pressionar \u2190 ",
    "{placeholder} Folder Permission": "{placeholder} Permiss\u00e3o da Pasta",
    "{placeholder} History Setting": "{placeholder} Configura\u00e7\u00e3o do Hist\u00f3rico"
  };
  for (const key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      const value = django.catalog[msgid];
      if (typeof value === 'undefined') {
        return msgid;
      } else {
        return (typeof value === 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      const value = django.catalog[singular];
      if (typeof value === 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      let value = django.gettext(context + '\x04' + msgid);
      if (value.includes('\x04')) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      let value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.includes('\x04')) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "j \\d\\e F \\d\\e Y \u00e0\\s H:i",
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S",
      "%d/%m/%Y %H:%M:%S.%f",
      "%d/%m/%Y %H:%M",
      "%d/%m/%y %H:%M:%S",
      "%d/%m/%y %H:%M:%S.%f",
      "%d/%m/%y %H:%M",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j \\d\\e F \\d\\e Y",
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y",
      "%d/%m/%y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 0,
    "MONTH_DAY_FORMAT": "j \\d\\e F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d/m/Y H:i",
    "SHORT_DATE_FORMAT": "d/m/Y",
    "THOUSAND_SEPARATOR": ".",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F \\d\\e Y"
  };

    django.get_format = function(format_type) {
      const value = django.formats[format_type];
      if (typeof value === 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }
};

