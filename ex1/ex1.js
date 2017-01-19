function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************
// The old-n-busted callback way

const responses = {};
var filenames = ["file1", "file2", "file3"];

function getFile(file) {
	fakeAjax(file, function(text){

		if (!responses[file]) {
			responses[file] = text;
		}

		for(var i=0; i<filenames.length; i++) {
			if (filenames[i] in responses) {
				if (responses[filenames[i]] != true) {
					output(responses[filenames[i]]);
					responses[filenames[i]] = true;
				}
			} else {
				return;
			}
		}

		output("Complete!");

		/*if (responses["file1"]) {
			output(responses["file1"]);
			if (responses["file2"]) {
				output(responses["file2"]);
				if (responses["file3"]) {
					output(responses["file3"]);
				}
			}
		}*/
	});
}

// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");
