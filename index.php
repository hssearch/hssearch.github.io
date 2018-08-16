<?php
  mb_language('Japanese');
  $url = $_GET["link"];
  $html = file_get_contents($url);
  $html = mb_convert_encoding($html, 'utf8', 'auto');
  $tidy = tidy_parse_string($html);
  $body = $tidy->Body();
  echo $body->value;
?>
<link rel="stylesheet" href="safari-reader.min.css">