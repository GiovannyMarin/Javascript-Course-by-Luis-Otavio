function rand(min = 1000, max = 3000) {
	const num = Math.random() * (max - min) + min;
	return Math.floor(num);
}

function f1(callback) {
	setTimeout(function () {
		console.log("f1", rand());
		if (callback) callback();
	}, rand());
}
function f2(callback) {
	setTimeout(function () {
		console.log("f2", rand());
		if (callback) callback();
	}, rand());
}
function f3(callback) {
	setTimeout(function () {
		console.log("f3", rand());
		if (callback) callback();
	}, rand());
}

//callback exemplo 1

f1(function () {
	f2(function () {
		f3(function () {
			console.log("ola mundo");
		});
	});
});

//callback exemplo 2

f1(f1Callback);

function f1Callback() {
	f2(f2Callback);
}

function f2Callback() {
	f3(f3callback);
}

function f3callback() {
	console.log("oi");
}
