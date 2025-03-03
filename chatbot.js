// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => { 
    const chat = await msg.getChat(); //Pegando o chat

    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola|Mano|mano|calmas|quero|mapas|Mapas|Quero|David|explicações|Explicações)/i) && msg.from.endsWith('@c.us')) {

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from, 'Olá, ' + name.split(" ")[0] + ' \n\nSou a *Lilly*, assistente virtual da plataforma *"TODOS OS MAPAS"*. Como posso ajudar você hoje? Por favor, digite uma das opções abaixo:\n\n1 - Quero saber mais sobre os mapas. \n2 - Quais são planos disponíveis? \n3 - Benefícios?\n4 - Como aderir?\n5 - Outras perguntas'); //Primeira mensagem de texto
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(5000); //Delay de 5 segundos
    
        
    }

    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Claro! \n\nNossa plataforma oferece cursos e mapas mentais que você pode acessar a qualquer momento. Basta fazer a compra do curso ou o mapa desejado e começar a estudar. \n\nCom conteúdo 100% elaborado com o que é ensinado em sala de aulas pelos Professores. \n\nAcesso à video-aulas dos mapas explicados de forma atrativa e fácil. \n\nVocê poderá participar de Webinars e agendar explicações particulares. \n\nTudo isso com um preço acessível e com a qualidade que você merece! ');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*COMO FUNCIONA*?\nÉ muito simples.\n\n1º Passo\nFaça seu cadastro para fazer parte do grupo geral de alunos onde são anunciadas as datas e dos eventos online e receba descontos por ser usuário! \n\n2º Passo\nApós fazer o cadastro, volte aqui no whatsApp e escolha o curso/mapa que deseja e o valor. \n\n3º Passo\nApós isso, efectue o pagamento do valor escolhido para os seguintes dados:\n\nBanco: Banco BAI\nConta: 232363153 10 001\nIBAN: 0040 0000 3236 3153 1014 7\n(José David Sakanhe).\n\nOu pelo Express: 934194153 \n\n4º Passo\nEnvie o comprovativo de pagamento para o nosso WhatsApp e aguarde a confirmação do pagamento por parte da nossa equipe. \n\n5º Passo\nApós a confirmação do pagamento, você receberá o link de acesso ao curso/mapa escolhido e poderá começar a estudar!');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para cadastro: https://forms.gle/EuanXNGarHND7oWXA');
    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); // Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*Plano Normal:* 2500 KZS por disciplina/cadeira, inclui todos os mapas mentais da disciplina.\n\n*Plano TOP:* 5000 KZS por disciplina/cadeira, inclui todos os mapas mentais e suas vídeo-aulas respectivamente.\n\n*Plano VIP:* 15.000 KZS por mês, com acesso total à todos os mapas e vídeo-aulas, acompanhamento individual com explicações particulares e acesso ao grupo *VIP* de estudos.');

        await delay(3000); // Delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Por favor, escolha um dos planos para ver as disciplinas disponíveis:\n\nA- Plano Normal\nB - Plano TOP\nC - Plano VIP');
    }

    if (msg.body !== null && msg.body === 'A' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); // Delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Disciplinas disponíveis no *Plano Normal*:\n\nD1-ARQUITETURA DE COMPUTADORES (todos os mapas): *2500 KZS* \n\nD2- CONTABILIDADE GERAL I (todos os mapas): *2500 KZS*\n\nD3- INTRODUÇÃO ÀS ORGANIZAÇÕES E À GESTÃO (todos os mapas): *2500 KZS*');
    }

    if (msg.body !== null && msg.body === 'B' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); // Delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Disciplinas disponíveis no *Plano TOP*:\n\nD1- ARQUITETURA DE COMPUTADORES COM todos os mapas e vídeo-aulas no valor de *5000 KZS*\n\nD2- CONTABILIDADE GERAL I com todos os mapas e vídeo-aulas no valor de *5000 KZS*\n\nD3- INTRODUÇÃO ÀS ORGANIZAÇÕES E À GESTÃO com todos os mapas no valor de *2500 KZS*\n(vídeo-aulas ainda não disponíveis)');
    }

    if (msg.body !== null && msg.body === 'C' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); // Delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Para o *Plano VIP*, após fazer o pagamento e a equipe confirmar, você será adicionado ao grupo *VIP*.');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Usar nossos mapas mentais ajuda você a organizar o seu tempo de estudo, entender o conteúdo em minutos, estudar de forma eficiente e evitar o desespero antes das provas de frequência.\n\nAlém disso, você terá todo o conteúdo do semestre na palma da sua mão!');
        
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para cadastro: https://forms.gle/EuanXNGarHND7oWXA');

    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Você pode aderir aos nossos planos diretamente pelo nosso site ou pelo WhatsApp. \n\n1º Faça o seu cadastro; \n\n2º Volte aqui no whatsApp; \n\n3º Mande um olá de novo para mim e em seguida eu vou te apresentar algumas opções; \n\n4º Escolha a opção 2 para ver os nossos planos disponíveis e escolher o melhor de sua preferência.\n\nApós a adesão, você terá acesso imediato.');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para cadastro: https://forms.gle/EuanXNGarHND7oWXA');
    }
    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); // Delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Se você tiver outras dúvidas ou precisar de mais informações, por favor, fale aqui nesse whatsapp e aguarde uma resposta dos nossos profissionais ou visite nosso site: https://todosmapas.my.canva.site/jos-david-sakanhe');
    }
    if (msg.body !== null && msg.body === 'Obrigado' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); // Delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Fico feliz em poder ajudar! Se precisar de mais alguma coisa, estarei por aqui. Tenha um ótimo dia!');
    }
    if (msg.body !== null && msg.body === 'Obrigada' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); // Delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Fico feliz em poder ajudar! Se precisar de mais alguma coisa, estarei por aqui. Tenha um ótimo dia!');
    }
    
});
