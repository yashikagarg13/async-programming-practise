$(document).ready(function(){
	var $btn = $("#btn"),
		$list = $("#list"),
		clicks = ASP.csp.chan(),
		msgs = ASP.csp.chan(),
		queuedClick;

	$btn.click(function(evt) {
		if(!queuedClick) {
			queuedClick = ASQ.csp.putAsync(clicks, evt);
			queuedClick.then(function () {
				queuedClick = null;
			});
		}
	});

	ASQ.runner(ASQ.csp.go(sampleClicks), ASQ.csp.go(logClicks));

	function *sampleClicks() {
		while (true) {
			yield ASQ.csp.take(ASQ.csp.timeout(1000));
			yield ASQ.csp.take(clicks);
			yield ASQ.csp.put(msgs, "Clicked!");
		}
	}

	function *logClicks() {
		var msg = yield ASQ.csp.take(msgs);
		$lists.append("<div>" +  msg + "</div>");
	}

});

/*
putAsync returns a promise that is waiting to be resolved


1. when click happens, put click event in clicks channel only if queue is empty
2. set runner to run two processes
3. Process 1 => Puts a msg in msgs channel after a timeout of 1000ms
4. Process 2 => logs a msg whenever msg channel gets a msg.

*/