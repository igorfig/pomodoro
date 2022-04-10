import { Container } from './styles'; 

export function Instructions() {
  return (
    <Container>
      <div>
        <h2>Qual a finalidade desta aplicação?</h2>
        <hr />
        <p>
          Este aplicativo é um temporizador online e personalizável. O objetivo
          deste aplicativo é simples, ajudá-lo a manter foco para uma melhor
          realização de suas tarefas, sejam elas trabalhos ou estudos, se
          inspirando na técnica pomodoro. Saiba mais sobre esta técnica em
          <a
            target="_blank"
            rel="noreferrer"
            href="https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro"
          >
            <strong> Wikipedia.</strong>
          </a>
        </p>
      </div>

      <div>
        <h2>O que é a técnica Pomodoro?</h2>
        <hr />
        <p>
          A técnica pomodoro foi criado por pelo italiano Francesco Cirillo no
          final dos anos 80, que procurava uma forma de aumentar sua
          produtividade nos estudos e trabalho. A técnica deriva seu nome da
          palavra italiana pomodoro (tomate), como referência ao popular
          cronômetro gastronômico na forma dessa fruta. A técnica utiliza um
          cronômetro para dividir a realização de uma tarefa em pequenos
          intervalos, tradicionalmente de 5 minutos a cada 25 minutos, nos 25
          minutos deve ser mantido o foco total na tarefa, após o cronômetro
          disparar deve-se descansar por 5 minutos, sendo um ciclo de 4 etapas,
          na fim do ciclo é dado um descanso mais longo de 15 minutos.
        </p>
      </div>
      <div>
        <h2>Como usar a técnica Pomodoro?</h2>
        <hr />
        <ol>
            <li>Escolha uma tarefa que você precisa fazer. <a href="https://onday.vercel.app/" target="_blank" rel="noreferrer"><strong>Get It Done!</strong></a></li>
            <li>Ajuste o alarme do temporizador (Pomodoro) para 25 minutos.</li>
            <li>Trabalhe na tarefa até o alarme soar.</li>
            <li>Faça um intervalo de aproximadamente cinco minutos.</li>
            <li>Repita  os quatro passos acima. A cada quatro Pomodoros, faça uma pausa mais longa.</li>
            <li>É possível alterar as preferências na janela de configurações do temporizador.</li>
        </ol>
      </div>
    </Container>
  );
}
