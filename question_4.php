<?php

function getMultiple($number, $multiple)
{
  return $number + $multiple;
}

function naturalMultiples($total)
{
  $sum = 0;
  $lastMultiple3 = 0;
  $lastMultiple5 = 0;

  $multples = [];
  while (true) {
    $multiple3 = getMultiple($lastMultiple3, 3);
    $multiple5 = getMultiple($lastMultiple5, 5);
    $newValue = 0;

    if ($multiple3 < $multiple5) {
      $lastMultiple3 = $multiple3;
      $newValue = $multiple3;
    } elseif ($multiple3 == $multiple5) {
      $lastMultiple3 = $multiple3;
      $lastMultiple5 = $multiple5;
      $newValue = $multiple5;
    } else {
      $lastMultiple5 = $multiple5;
      $newValue = $multiple5;
    }

    if ($newValue < $total) {
      $newTotal = $sum + $newValue;
      $multples[] =  $newValue;
      $sum = $newTotal;
    } else {
      break;
    }
  };

  return ['total' => $sum, 'values' => $multples];
}

$lower = 1000;
$result = naturalMultiples(1000);
$values = implode($result['values'], ', ');
$total = $result['total'];

echo "Números naturais inferiores a $lower: $values \n";
echo "Somando esses múltiplos obtemos o valor: $total";
