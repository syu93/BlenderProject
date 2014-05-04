 <html>
	<head>
		<script src="js/jquery-1.11.0.min.js"></script>
		<script src="js/easejs/easeljs-0.7.1.min.js"></script>
		<script src="js/tweenjs/tweenjs-0.5.1.min.js"></script>
		<script src="js/init.js"></script>
		
		<script>
		
		</script>
	</head>
	<body>
	<input type="button" id="circle" value="New Circle">
	<input type="button" id="rect" value="New Rectangle">
	<div>
		<input type="button" id="color1" value="color1"><span id="c1"></span>
		<br>
		<input type="button" id="color2" value="color2"><span id="c2"></span>
		<br>
		<input type="button" id="color3" value="color3"><span id="c3"></span>
		<br>
		<span>Current Color : </span>
		<span id="cur_col"></span>
	<div>
		<canvas id="canvas" width="1240" height="500" style="border:solid black 1px;">
			
		</canvas>
		<br>
		<input type="button" id="move" value="Move">
		&nbsp;
		<input type="button" id="rotate" value="Rotate">
		&nbsp;
		<input type="button" id="scale" value="Scale">
		&nbsp;
		<input type="button" id="clear" value="Clear">
		<br>
		<span id="tools"></span>
		<br>
		<span>Coordonn&eacute;es : </span><span id="logStage"></span>
		<br>
		<span>Coordonn&eacute;es : </span><span id="logRaw"></span>
	</body>
 </html>