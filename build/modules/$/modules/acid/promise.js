//make a promise
$.promise = function (array, name, fun) {
	if (!fun) {
		return _promised(array, name);
	}
	return _promise(array, name, fun);
};
$.promises = {};