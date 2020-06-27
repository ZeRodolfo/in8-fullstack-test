<?php

$statesCode = ['ES', 'MG', 'RJ', 'SP'];
$statesName = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo'];

$reverseStatesName = array_reverse($statesName);
$states = array_combine($statesCode, $reverseStatesName);

foreach ($states as $code => $state) {
  echo "$code - $state \n";
}
