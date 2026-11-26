# Rifa de Verão | Equipe 7 Capitães

Site da rifa: o público consulta os números disponíveis e é levado ao Instagram da equipe para comprar. O administrador entra em `/admin.html` com e-mail e senha para registrar vendas e exportar o CSV.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | Página pública (prêmios, informações, quadro de números) |
| `admin.html` | Área do administrador (login, vendas, exportar CSV) |
| `config.js` | **Único arquivo que você edita**: chaves, preços, datas, prêmios |
| `supabase-setup.sql` | Cria o banco de dados com as regras de segurança |
| `style.css`, `logo.png`, `favicon.png` | Visual |

Como funciona: o site é estático (hospedagem gratuita) e os dados ficam no **Supabase** (banco de dados gratuito na nuvem). O público só consegue ver *quais* números foram vendidos; nome e contato dos compradores só aparecem para quem está logado como admin.

---

## Passo a passo para colocar no ar

### 1. Criar o banco de dados (Supabase)
1. Acesse **supabase.com**, crie uma conta e clique em **New project**.
2. Dê um nome (ex.: `rifa-7capitaes`), crie uma senha do banco (guarde-a) e escolha a região **South America (São Paulo)**. Plano **Free**.
3. Aguarde o projeto ficar pronto (1 a 2 minutos).

### 2. Criar as tabelas e as regras de segurança
1. No menu lateral, abra **SQL Editor** > **New query**.
2. Abra o arquivo `supabase-setup.sql`, copie todo o conteúdo, cole no editor e clique em **Run**. Deve aparecer "Success".

### 3. Criar o login do administrador
1. Menu **Authentication** > **Users** > **Add user** > **Create new user**.
2. Informe o e-mail e uma senha forte, e marque **Auto Confirm User**. Esse será o login do admin da 7 Capitães.
3. Ainda em **Authentication**, abra **Sign In / Providers** (ou *Settings*) e **desative "Allow new users to sign up"**. Assim ninguém além de você pode criar contas.

### 4. Copiar as chaves para o site
1. No Supabase, abra **Project Settings** > **API Keys** e copie a **Publishable key** (começa com `sb_publishable_`). Se o projeto for antigo e só tiver a chave `anon`, ela também funciona.
2. Copie também a **Project URL** (algo como `https://xxxx.supabase.co`), em **Project Settings** > **Data API** (ou no botão **Connect**).
3. Abra o `config.js` e cole nos campos `SUPABASE_URL` e `SUPABASE_KEY`.

Essa chave pode ficar pública: a proteção dos dados é feita pelas regras do passo 2. **Nunca** use a chave `secret` / `service_role` no site.

### 5. Publicar o site (GitHub Pages, gratuito)
1. Crie uma conta em **github.com** e um repositório **público** novo (ex.: `rifa-7capitaes`).
2. Clique em **Add file** > **Upload files**, arraste **todos os arquivos desta pasta** e clique em **Commit changes**.
3. Vá em **Settings** > **Pages**, em *Branch* escolha `main` e a pasta `/ (root)`, e salve.
4. Em cerca de 1 minuto o site estará em `https://SEU-USUARIO.github.io/rifa-7capitaes/`.
   - Página pública: o endereço acima
   - Admin: o mesmo endereço + `admin.html`

Alternativa sem conta no GitHub: **Cloudflare Pages** ou **Netlify** (opção "Deploy manually"/"Drop") aceitam arrastar a pasta pronta.

### 6. Testar antes de divulgar
1. Abra `admin.html`, entre com o e-mail e senha do passo 3.
2. Registre uma venda de teste (ex.: número 1, nome "Teste", contato "000").
3. Abra a página pública (em outra aba): o número 1 deve aparecer riscado.
4. Clique em **Exportar CSV** e confira o arquivo.
5. Clique em **Desfazer** na venda de teste.

---

## Uso no dia a dia

- **Registrar venda**: no admin, digite os números (`12, 15, 20-23`) ou toque nos números do quadro, preencha nome e contato e salve. Vale também para vendas de vários números de uma vez.
- **Corrigir erro**: use **Editar** (nome/contato) ou **Desfazer** (devolve o número ao site).
- **Lotes de 100**: automático. Quando os 100 do lote atual estiverem vendidos, o site passa a mostrar os próximos 100 (101 a 200, etc.).
- **Exportar CSV**: botão no admin. O arquivo usa `;` como separador e abre direto no Excel em português, com acentos corretos.
- **Definir datas, prêmios ou textos**: edite o `config.js` (no GitHub, abra o arquivo, clique no lápis, altere e confirme com **Commit changes**). O site atualiza em cerca de 1 minuto. Enquanto `DATA_SORTEIO` e `PERIODO_VENDAS` estiverem vazios, o site mostra "A definir".
- **Mudar a quantidade total de números**: `TOTAL_NUMEROS` no `config.js`.

## Cuidados para a rifa ficar semanas no ar

1. **Pausa do Supabase gratuito**: projetos gratuitos podem ser pausados após cerca de 7 dias sem nenhuma atividade. Com visitas ao site isso não costuma acontecer, mas se ocorrer, entre no painel do Supabase e clique em **Restore project** (os dados não são apagados).
2. **Backup**: exporte o CSV regularmente (por exemplo, uma vez por semana) e guarde no Drive da equipe. No Supabase, em **Table Editor** > `numeros`, também dá para exportar.
3. **Senha do admin**: compartilhe apenas com quem registra vendas. Para trocar ou criar outro admin, use **Authentication** > **Users**.
4. **Dados pessoais**: nomes e contatos dos compradores ficam só no banco e são visíveis apenas no admin. Use esses dados somente para a rifa.
5. **Dois admins ao mesmo tempo**: se dois números iguais forem registrados juntos, o sistema bloqueia o segundo e avisa. Nunca há venda duplicada.
6. **Domínio próprio** (opcional): GitHub Pages permite apontar um domínio (ex.: `rifa7capitaes.com.br`) em **Settings** > **Pages** > **Custom domain**.

## Problemas comuns

| Sintoma | Causa provável |
|---|---|
| Faixa vermelha "Modo demonstração" | `config.js` ainda sem a URL e a chave do Supabase |
| "Não foi possível carregar os números" | Chave/URL incorretas, projeto pausado, ou o SQL do passo 2 não foi executado |
| "E-mail ou senha incorretos" | Usuário não criado/confirmado no passo 3 |
| Admin entra mas a lista não carrega | Política de segurança não criada (rode o SQL novamente) |
