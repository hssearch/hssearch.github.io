<head>
  <link rel="preload" href="safari-reader.min.css" as="style" crossorigin>
  <meta content="4233600" http-equiv="expires"/>
  <link rel="stylesheet" href="safari-reader.min.css">
</head>
<?php
  mb_language('Japanese');
  $url = $_GET["link"];
  $html = file_get_contents($url);
  $domains = explode("/",$url);
  $domain = $domains[0]."//".$domains[2];
  $html = mb_convert_encoding($html, 'utf-8', 'auto');
  $html = str_replace("'/","'".$domain."/",$html);
  $html = str_replace('"/','"'.$domain."/",$html);
  $htmls = explode("<body", $html);
  $htmls = (explode("/body>", $htmls[1]))[0];
  echo $htmls;
?>