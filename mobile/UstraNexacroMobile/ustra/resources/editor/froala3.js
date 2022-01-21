function queryParams(url) {
	url = url || window.location.search;
		
	var match,
		pl     = /\+/g,  // Regex for replacing addition symbol with a space
		search = /([^&=]+)=?([^&]*)/g,
		decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
		query  = url.substring(1);
  
	urlParams = {};
	while (match = search.exec(query)) {
	   urlParams[decode(match[1])] = decode(match[2]);
	}
	
	return urlParams;
}