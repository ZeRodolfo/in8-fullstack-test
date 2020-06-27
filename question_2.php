<?php

function smallestDivider($number = 1) {
  if (($number % 2 == 0) && ($number % 3 == 0) && ($number % 10 == 0)) {
    return $number;
  } else {
    return smallestDivider($number + 1);
  }
}


echo smallestDivider();