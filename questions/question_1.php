<?php

/*
  * Arrays
  *
  * Tendo os arrays ['ES', 'MG', 'RJ', 'SP'] e ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo'], 
  * percorra os vetores dados e crie um outro com a seguinte estrutura: ['ES'=>'Espírito Santo', 'MG'=>'Minas Gerais', 
  * 'RJ'=>'Rio de Janeiro', 'SP'=>'São Paulo']. Depois de criado terceiro vetor, leia-o e imprima em cada linha a 
  * chave de cada posição e seu respectivo valor separados por "-".
*/

$statesCode = ['ES', 'MG', 'RJ', 'SP'];
$statesName = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo'];

$reverseStatesName = array_reverse($statesName);
$states = array_combine($statesCode, $reverseStatesName);

foreach ($states as $code => $state) {
  echo "$code - $state \n";
}
