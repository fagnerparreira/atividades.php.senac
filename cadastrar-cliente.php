<?php

$servidor = 'localhost';
$user = 'root';
$password = '123456';
$banco = 'livraria';

$conexao = mysqli_connect($servidor,$user,$password,$banco) or
die('Não foi possível conectar: '. mysqli_error($conexao));

$sqlInserir = "INSERT INTO cliente (nome,cpf) VALUES (";
$sqlInserir .= "'{$_POST['nome']}'";
$sqlInserir .= "'{$_POST['cpf']}')";

$resultado = mysqli_query($conexao,$sqlInserir);

if(!$resultado){
  die('Erro: '.mysqli_error($conexao));
}else {
  echo 'Seu cadastro foi feito com sucesso!';
}



?>