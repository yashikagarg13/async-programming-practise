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

function getFile(file) {
	return new Promise(function(resolve, reject) {
		fakeAjax(file, resolve);
	});
}

// request all files at once in "parallel"
var promise1 = getFile("file1");
var promise2 = getFile("file2");
var promise3 = getFile("file3");


promise1.then(function (t1) {
	output(t1);
	return promise2;
}).then(function (t2) {
	output(t2);
	return promise3;
}).then(function(t3) {
	output(t3);
	output("Complete!");
});