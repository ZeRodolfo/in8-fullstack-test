<?php

class Calculator
{
  private $value_1;
  private $value_2;
  private $value_3;

  public function __construct()
  {
    $this->value_1 = 0.0;
    $this->value_2 = 0.0;
    $this->value_3 = 0.0;
  }

  public function setValue1($value): self
  {
    $this->value_1 = $value;

    return $this;
  }

  public function getValue1(): ?float
  {
    return $this->value_1;
  }

  public function setValue2($value): self
  {
    $this->value_2 = $value;

    return $this;
  }

  public function getValue2(): ?float
  {
    return $this->value_2;
  }


  public function setValue3($value): self
  {
    $this->value_3 = $value;

    return $this;
  }

  public function getValue3(): ?float
  {
    return $this->value_3;
  }

  public function multiply()
  {
    return $this->value_1 * $this->value_2 * $this->value_3;
  }
}

$calculator = new Calculator();
$calculator->setValue1(2.2)->setValue2(2)->setValue3(2);

$resume = [];
$resume['Value 1'] = $calculator->getValue1();
$resume['Value 2'] = $calculator->getValue2();
$resume['Value 3'] = $calculator->getValue3();
$resume['Resultado da Multiplicação'] = $calculator->multiply();

foreach ($resume as $key => $value) {
  echo "$key: $value \n";
}
