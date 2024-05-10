# Atividade-Front-Date
Atividade feita em sala do dia 09/05 .

Explicação das funções usadas no código JS:

transformarDate(): nesta função foi separado, da resposta do usuário a data, inserida no input do tipo text, em: dia, mês e ano, através do .splice, dataVerif é criada para armazenar e retornar o new Date no formato (ano/mês/dia), sendo um formado válido.

verificarData(): ao pegar o formato válido da função transformarDate(), iremos verificar se todas as partes de uma data estão corretas, retornando em formato booleano.

verificarDataMaior(): apenas pega o formato valido de Date e retorna em valor booleano se a data inicial e antecessora da data final.

calcularIntervalo(): é transformado em milissegundos as datas através do Date.parse, após tirar a diferença (lembrando que já foi verificado a data antecessora)  é feita uma adição com os dias, os dias de acordo com o mês e os dias de com os anos (lembrando que  -1970 é para definir o marco 0 da data).

dataAtual(): como a varável data do tipo Date extraímos dela o dia, mês, ano, hora e minuto, da seguinte forma: com Stirng() converte o número em um texto, .getDate() pega o dia do mês, .getMonth() +1, pega o mês(sendo que inicia em 0 por isso o +1), .getHours() pega as horas e getMinutes() os minutos, com .padStart(2 , '0') coloca o 0 a frente de um número q for único, já que os dias assim como os meses, horas e minutos, possuem no máximo 2 dígitos, por fim, getFullYear(), pega o ano completo(4 digitos). Desta forma é retornado a data no formato  "dd/mm/aaaa hh:mm".
