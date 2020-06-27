<?php

/*
  * Função recursiva
  *
  * Crie uma função recursiva para descobrir o menor número inteiro divisível 
  * por 2, 3 e 10 ao mesmo tempo. Quando encontrá-lo, imprima-o na tela.
*/

function smallestDivider($number = 1) {
  if (($number % 2 == 0) && ($number % 3 == 0) && ($number % 10 == 0)) {
    return $number;
  } else {
    return smallestDivider($number + 1);
  }
}


echo smallestDivider();