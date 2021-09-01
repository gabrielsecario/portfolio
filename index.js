function mudarconteudo(param){
    parametro = param
    if(parametro == "sobre"){
        document.getElementById("txt1").innerHTML = "Olá! Meu nome é <b>Gabriel Secario Teixeira</b>, tenho 22 anos e moro em Poá - SP<br>Atualmente moro com a minha mãe, estou estudando para conquistar minha independência financeira."
        document.getElementById("titulo").innerHTML = "Sobre mim"
    } else if(parametro == "hobbies"){
        document.getElementById("txt1").innerHTML = "Meu principal hobby/passatempo é jogar, principalmente jogos online e competitivos. <br> Além de jogar, gosto muito de escutar música, assistir séries/lives e ler (embora não tenha lido muito há algum tempo)"
        document.getElementById("titulo").innerHTML = "Hobbies"
    } else if(parametro == "exp"){
        document.getElementById("txt1").innerHTML = "Trabalhei como atendente de telemarketing por pouco mais de um ano, atendendo tanto SAC quanto suporte técnico de banda larga. <br> Além dessa minha experiência registrada em carteira, já trabalhei como atendente voluntáriou <br> Trabalhei como monitor de Algoritmos por dois semestres na faculdade (Fatec Itaquaquecetuba) e, atualmente, trabalho como autônomo fazendo manutenção de computadores."
        document.getElementById("titulo").innerHTML = "Experiência Profissional"
    } else if(parametro == "formacao"){
        document.getElementById("txt1").innerHTML = "Ensino médio completo: E. E. Profº Elias Zugaib; <br> Curso de pacote Office: Escola Romafla de Informática <br> Curso de Hardware: Escola Romafla de Informática <br> Técnico em informática: Etec de Poá; <br> Tecnólogo em Gestão de Tecnologia da Informação (cursando o 5º de seis semestres) <br>"
        document.getElementById("titulo").innerHTML = "Formação"
    } else if(parametro == "estudos"){
        document.getElementById("txt1").innerHTML = "Estou cursando o Web Moderno, curso oferecido pela Cod3r através da plataforma da Udemy <br> Participei da Maratona do 0 ao código - II Edição da Kenzie Academy no dia 14/08/21, onde obtive uma base de HTML e CSS <br> Embora não tenha curso ou certificado, tenho uma certa facilidade para entender inglês"
        document.getElementById("titulo").innerHTML = "Estudos complementares"
    } else if(parametro == "meta"){
        document.getElementById("txt1").innerHTML = "Minha meta atual é conseguir me inserir no mercado de TI.<br> A princípio, conseguir um estágio na área de desenvolvimento e me tornar um DEV competente <br> Podendo, assim, investir ainda mais nos meus estudos e almejar metas ainda maiores."
        document.getElementById("titulo").innerHTML = "Metas"
    }
}
