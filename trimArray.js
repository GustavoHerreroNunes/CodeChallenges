const trimArray = (arr, n, m) => {
	m = !m ? arr.length : (m*-1);
	return arr.slice(n, m);
}