import 'fetch-polyfill';

export async function applyToken(user){
		let data = new FormData();
		data.append('grant_type', 'password');
		data.append('client_id', 4);
		data.append('client_secret', 'VUwJC96Fop7g6nc60HoeC7SoNmHMmNgyzXB5aNCl');
		data.append('username', user.email);
		data.append('password', user.pass);
		let res = await fetch('http://laravel.cc/oauth/token',{
			method: 'post',
			body: data,
		});
		if (res.status==200) {
			var json = await res.json()
			localStorage.token=JSON.stringify(json);
		} else {
			return res.statusText;
		}
}

export async function refreshToken(){
		let refresh_token = JSON.parse(localStorage.token).refresh_token;
		let data = new FormData();
		data.append('grant_type', 'refresh_token');
		data.append('refresh_token', refresh_token);
		data.append('client_id', 4);
		data.append('client_secret', 'VUwJC96Fop7g6nc60HoeC7SoNmHMmNgyzXB5aNCl');
		let res = await fetch('http://laravel.cc/oauth/token',{
			method: 'post',
			body: data,
		});
		if (res.status==200) {
			var json = await res.json()
			localStorage.token=JSON.stringify(json);
		} else {
			return res.statusText;
		}
}

export async function checkUser(){
	if(localStorage.token){
		let token = JSON.parse(localStorage.token)
		let auth_token = token.token_type+' '+token.access_token;
		let headers = new Headers();
		headers.append("Accept", "application/json")
		headers.append('Authorization', auth_token)
		let res = await fetch('http://laravel.cc/api/user',{
			headers: headers
		})
		let json = await res.json();
		if (json.id) {
			localStorage.user = JSON.stringify(json);
			return true;
		}else{
			localStorage.user = '';
			localStorage.token = '';
			return false;
		}
	}
}

export async function registerCode(email){
	let data = new FormData();
	data.append('email', email);
	let res = await fetch('http://laravel.cc/api/registerCode',{
		method: 'post',
		body: data,
	});
	let json = await res.json();
	return json;
}

export async function regCdCheck(email,code){
	let data = new FormData();
	data.append('email', email);
	data.append('code', code);
	let res = await fetch('http://laravel.cc/api/codeCheck',{
		method: 'post',
		body: data,
	});
	let json = await res.json();
	return json;
}

export async function signUp(register){
	let data = new FormData();
	data.append('email', register.email);
	data.append('code', register.code);
	data.append('password', register.pass);
	let res = await fetch('http://laravel.cc/api/signup',{
		method: 'post',
		body: data,
	});
	let json = await res.json();
	return json;
}