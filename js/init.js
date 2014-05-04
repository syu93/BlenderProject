$( document ).ready(function(){

		var stage = new createjs.Stage("canvas");
		
		createjs.Touch.enable(stage);

		stage.enableMouseOver(10);
		stage.mouseMoveOutside = true;
		
		var defaultColor = "#000000";
		
		var ball = new createjs.Shape();
		ball.addEventListener("click", handlerClick);
		ball.addEventListener("pressmove", handlerClick);
		ball.graphics.beginFill(defaultColor).drawCircle(0, 0, 30);	
		ball.cursor = "pointer";
		ball.x = 30;
		ball.y = 30;
		
		var rect = new createjs.Shape();
		rect.addEventListener("click", handlerClick);
		rect.addEventListener("pressmove", handlerClick);
		rect.graphics.beginFill(defaultColor).drawRect(0, 0, 80, 60);
		rect.cursor = "pointer";
		rect.x = 65;
		rect.y = 0;

		var roundRect = new createjs.Shape();
		roundRect.addEventListener("click", handlerClick);
		roundRect.addEventListener("pressmove", handlerClick);
		roundRect.graphics.beginFill(defaultColor).drawRoundRect(0, 0, 60, 60, 5);
		roundRect.cursor = "pointer";
		roundRect.x = 0;
		roundRect.y = 65;
		
		var elipse = new createjs.Shape();
		elipse.addEventListener("click", handlerClick);
		elipse.addEventListener("pressmove", handlerClick);
		elipse.graphics.beginFill(defaultColor).drawEllipse(0, 0,40,  60);
		elipse.cursor = "pointer";
		elipse.x = 75;
		elipse.y = 65;
		
/**********************************************************************/	
/**********************************************************************/	
	$("#circle").click(function(){
			var circle = new createjs.Shape();			
			 circle.addEventListener("click", handlerClick);
			 circle.addEventListener("pressmove", handlerClick);
			circle.graphics.beginFill(defaultColor).drawCircle(0, 0, 30);	
			circle.cursor = "pointer";
			circle.x = 200;
			circle.y = 200;
			stage.addChild(circle);
			stage.update();
	});

	$("#rect").click(function(){
			var rect = new createjs.Shape();			
			rect.addEventListener("click", handlerClick);
			rect.addEventListener("pressmove", handlerClick);
			rect.graphics.beginFill(defaultColor).drawRect(0, 0, 30, 30);	
			rect.cursor = "pointer";
			rect.x = 200;
			rect.y = 200;
			stage.addChild(rect);
			stage.update();
	});
	
/**********************************************************************/	
/**********************************************************************/	

	stage.addChild(ball);
	stage.addChild(rect);
	stage.addChild(roundRect);
	stage.addChild(elipse);

/**********************************************************************/	
/**********************************************************************/	

	function handlerClick(event) {
	var t = event.target;
			
			if($("#tools").html() == "clear")
			{				
				t.graphics.clear();
			}

	stage.on("pressmove", function(evt) {
		var target = evt.target;
		/**********/
		// Bring the target on top
		var o = evt.target;
		o.parent.addChild(o);
		o.offset = {x:o.x-evt.stageX, y:o.y-evt.stageY};
		/**********/
		
			if($("#tools").html() == "move")
			{
				target.x = (evt.stageX);
				target.y = (evt.stageY);
			}

			if($("#tools").html() == "rotate")
			{
				target.skewX = evt.rawY/2;
				target.skewY = evt.rawY/2;		
			}

			if($("#tools").html() == "scale")
			{
				target.scaleX = evt.rawX/80;
				target.scaleY = evt.rawY/80;
			}
			
		});
		stage.update();
	}
	
/**********************************************************************/	
/**********************************************************************/	
	stage.update();
	
	$("canvas").click(function(){
		if($("#tools").html()=="")
		{
			alert("You need to select a tool before!");
		}
	});
	
	$("#clear").click(function(){
		$("#tools").html("clear");
	});
	
	$("#move").click(function(){
		$("#tools").html("move");
	});
	
	$("#rotate").click(function(){
		$("#tools").html("rotate");
	});

	$("#scale").click(function(){
		$("#tools").html("scale");
	});
/**********************************************************************/	
/**********************************************************************/	
	$("#cur_col").html(defaultColor);
	$("#color1").click(function(){
		defaultColor="#ff0000";
		// $("#c1").html(defaultColor);
		$("#cur_col").html(defaultColor);
	});
	$("#color2").click(function(){
		defaultColor="#3d3d3d";
		// $("#c2").html(defaultColor);
		$("#cur_col").html(defaultColor);
	});
	$("#color3").click(function(){
		defaultColor="#CCCCCC";
		// $("#c3").html(defaultColor);
		$("#cur_col").html(defaultColor);
	});
});