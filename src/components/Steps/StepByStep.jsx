import React from 'react';

import { List } from './StepByStep'

export default function StepByStep() {
  return (
      <List>
            <li>
              <strong>Escolha uma tarefa</strong> que você precisa fazer.
            </li>

            <li>
             <strong> Ajuste o alarme do timer</strong> (Pomodoro) para 25 minutos.
            </li>

            <li>
              <strong>Trabalhe na tarefa</strong> até o alarme soar.
            </li>
            
            <li>
              <strong>Faça um intervalo</strong> de aproximadamente cinco minutos.
            </li>
            <li>
             <strong>Repita</strong>  os quatro passos acima. A cada quatro Pomodoros, faça uma pausa mais longa.
            </li>
      </List>
  )
}