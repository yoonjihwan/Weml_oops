	<?
		$fp_data = fopen("../CutyCapt/uml_jsonconn.json", "r");
		while($file = fgets($fp_data,1024)){
			$jsondata .= $file;
		}
		//echo nl2br($jsondata);
		fclose($fp_data);

		$fp_conn = fopen("../CutyCapt/uml_jsonconn.json", "r");
		while($file = fgets($fp_conn,1024)){
			$jsonconn .= $file;
		}
		//echo nl2br($jsonconn);
		fclose($fp_conn);

		$fp_member = fopen("../CutyCapt/uml_jsonmember.json", "r");
		while($file = fgets($fp_member,1024)){
			$jsonmember .= $file;
		}
		//echo nl2br($jsonconn);
		fclose($fp_member);
	?>
<html charset="euc-kr">
<head>
	<script>
		var load_class = '<?=nl2br($jsondata)?>';
		var load_conn = '<?=nl2br($jsonconn)?>';
		var load_member = '<?=nl2br($jsonmember)?>';
	</script>

	<meta charset="euc-kr" name="keywords" content="jqueryui graph, jqueryui diagram,jqueryui chart, jqueryui flowchart,javascript graph, javascript diagram,javascript chart, javascript flowchart,jquery graph, jquery diagram,jquery chart, jquery flowchart" />

	<title>:: Oops Tools - Diagram Designer ::</title>
	<script src="./js/jquery-1.6.2.min.js"></script>
	<link rel="stylesheet" href="./css/jquery.ui.all.css">
	<script src="./js/jquery.ui.core.min.js"></script>
	<script src="./js/jquery.ui.widget.min.js"></script>
	<script src="./js/jquery.ui.mouse.min.js"></script>
	<script src="./js/jquery.ui.draggable.min.js"></script>
	<script src="./js/jquery.ui.resizable.min.js"></script>
	<script src="./js/jquery.ui.droppable.min.js"></script>
	<script src="./js/jquery.ui.button.min.js"></script>
	<script src="./js/jgraphui_print.js"></script>
	<script src="./js/wz_jsgraphics.js"></script>
	<link rel="stylesheet" href="./css/diagram.css">
	<link rel="stylesheet" href="./css/demos.css">
	<link rel="stylesheet" href="./css/Tool_layout.css">
	<!--<link rel="stylesheet" href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" />-->

</head>
			<script language="javascript">
	$(document).ready(function(){
			var diagram = new Diagram(
					{
					'xPosition':50, 
					'yPosition':0, 
					'width':1000, 
					'height':580,
					'imagesPath': '/tool/images/',
					'connectionColor': '#AA0000'
					});	
					$("#oops_canvas").html(diagram.fromJSON());
		
	});
		</script>	
<body id="ground" style="background-color:#FFF">
<div class="container">
	<div id="oops_canvas">
	
	</div>
</div>
</body>
</html>

<?
	unlink("../CutyCapt/temp.txt");
?>