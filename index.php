<?php
  $url = $_GET["link"];
  $html = file_get_contents($url);
  $dom = new DOMDocument('1.0', 'UTF-8');
  $dom->loadHtml($html);
  $xPath = new DOMXPath($dom);
  $body = $xPath->query('/html/body')->item(0);
  echo $body;
?>