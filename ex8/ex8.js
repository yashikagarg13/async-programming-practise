$(document).ready(function(){
	var $btn = $("#btn"),
		$list = $("#list"),

		/*clicks = ASQ.react.of();
		timer = ASQ.react.of();

	$btn.click(function(evt){
		clicks.push(evt);
	});

	setInterval(function() {
		timer.push();
	}, 1000)

	var msgs = ASQ.react.all(clicks, timer);

	msgs.val(function() {
		$list.append($("<div>Clicked</div>"));
	});*/


		clicks = ASQ.react.of(),
		msgs = ASQ.react.of(),
		latest;

		$btn.click(function(evt) {
			clicks.push(evt);
		});

		setInterval(function() {
			if (latest) {
				msgs.push("Clicked!");
				latest = null
			}
		}, 1000);


		msgs.val(function (msg) {
			$list.append($("<div>" + msg + "</div>"));
		});
});
