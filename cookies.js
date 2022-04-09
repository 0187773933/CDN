function set_cookie( name , value , days ) {
	let expire_date = new Date();
	expire_date.setTime( expire_date.getTime() + ( days*24*60*60*1000 ) );
	document.cookie = `${name}=${value.toString()}; expires=${expire_date.toUTCString()}; path=/; SameSite=None; Secure`;
}
function get_cookie( name ) {
	let cookies = document.cookie.split( ";" );
	for ( let i = 0; i < cookies.length; ++i ) {
		let key_value = cookies[ i ].split( "=" );
		if ( key_value[ 0 ].trim() === name ) {
			return key_value[ 1 ];
		}
	}
	return false;
}
function erase_cookie( name ) {
	document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function set_cookie_object( name , object , days ) {
	let expire_date = new Date();
	expire_date.setTime( expire_date.getTime() + ( days*24*60*60*1000 ) );
	let object_base64 = window.btoa( JSON.stringify( object ) );
	document.cookie = `${name}=${object_base64}; expires=${expire_date.toUTCString()}; path=/; SameSite=None; Secure`;
}
function get_cookie_object( name ) {
	let cookies = document.cookie.split( ";" );
	for ( let i = 0; i < cookies.length; ++i ) {
		let key_value = cookies[ i ].split( "=" );
		if ( key_value[ 0 ].trim() === name ) {
			return JSON.parse( window.atob( key_value[ 1 ] ) );
		}
	}
	return false;
}
function erase_cookie_object( name ) {
	document.cookie = `${name}=${window.btoa( JSON.stringify( {} ) )}; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}