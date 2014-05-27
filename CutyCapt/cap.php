<?php
//$in_url = 'http://' . $_REQUEST['url']; // !!INSECURE!! In production, make sure to sanitize this input!
//$in_url = 'http://210.118.34.36/Drawing/Tool_Capture.php?data='.$_REQUEST['jsondata'].'&conn='.$_REQUEST['jsonconn'];
$in_url = 'http://210.118.34.36/Drawing/Tool_Capture.php';
//$in_url = 'http://210.118.34.17/samsung/index.php';

$dir = "CutyCapt";
chmod($dir, 0777);
chdir($dir);
$fp_data = fopen("./jsondata.json", "w+");
$fp_conn = fopen("./jsonconn.json", "w+");
fwrite($fp_data, $_REQUEST['jsondata']);
fwrite($fp_conn, $_REQUEST['jsonconn']);
fclose($fp_data);
fclose($fp_conn);

$id = $_REQUEST['userid'];
$filename =  $_REQUEST['name'] ."_".$id."_".date("YmdHis",time()). '.png'; // Will probably need to normalize filename too, this is just an illustration
// First check the file does not exist, if it does exist skip generation and reuse the file
// This is a super simple caching system that will help to reduce the resource requirements
if(!file_exists($filename)) {
	 //@exec('');
   putenv("DISPLAY=:0");
  // $res = post_request($in_url, $data);
  @exec('./CutyCapt --url=' . $in_url . ' --min-width=1000 --min-height=580 --js-can-open-windows=on --method=post --print-backgrounds=on --js-can-access-clipboard=on --plugins=on --java=on --javascript=on --private-browsing=on --delay=3000 --body-base64=on --body-string=on --out=' . './Thumbnail/' . $filename);
  //@exec('IECapt.exe ' . escapeshellarg($in_url) . ' ' . escapeshellarg($filename));

}

// Second check if the file exists, either from a previous run or from the above generation routine
if(file_exists($filename)) {
  header('Content-type: image/png');
  print file_get_contents($filename);
} else {
  header('Status: 500 Internal Server Error');
}
?>
