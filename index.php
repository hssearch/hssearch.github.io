<?php
/*getmurata.php*/
require_once("dataget.php");
$data = data_get($GET['url']);
header("Access-Control-Allow-Origin: *");
print $data;