import 'fetch-polyfill';

export function xfetch(url,params={}){
	return new Promise(async function(resolve,reject){
		let body = new FormData();
		let headers = new Headers();
		if (params.body) {
			for(let i in params.body){
				body.append(i,params.body[i]);
			}
		} 
		if (params.headers) {
			for(let i in params.headers){
				headers.append(i,params.headers[i]);
			}
		}
		let res = await fetch(url,{
			method: params.method?params.method:'get',
			body: params.body?body:null,
			headers: params.headers?headers:null
		});
		if (res.ok) {
			resolve(res);
		} else {
			reject(res);
		}
	})
}

export async function applyToken(user){
	try {
		let res = await xfetch('http://zmhjy.xyz/oauth/token',{
			method:'post',
			body:{
				grant_type: 'password',
				client_id: 4,
				client_secret: 'VUwJC96Fop7g6nc60HoeC7SoNmHMmNgyzXB5aNCl',
				username: user.email,
				password: user.pass,
			}
		})
		let json = await res.json()
		localStorage.token=JSON.stringify(json);
		return  { ok:true };
	} catch(e) {
		return { ok:false,message:'用户名密码错误' };
	}	
}

export async function refreshToken(){
		let refresh_token = JSON.parse(localStorage.token).refresh_token;
		let res = await xfetch('http://zmhjy.xyz/oauth/token',{
			method: 'post',
			body: {
				grant_type: 'refresh_token',
				refresh_token: refresh_token,
				client_id: 4,
				client_secret: 'VUwJC96Fop7g6nc60HoeC7SoNmHMmNgyzXB5aNCl',
			},
		});
		if (res.ok) {
			var json = await res.json()
			localStorage.token=JSON.stringify(json);
		} else {
			return res.statusText;
		}
}

export async function checkUser(){
	if(localStorage.token){
		try {
			let token = JSON.parse(localStorage.token);
			let auth_token = token.token_type+' '+token.access_token;
			let res = await xfetch('http://zmhjy.xyz/api/user',{
				headers: {
					Accept: "application/json",
					Authorization: auth_token
				}
			})
			let json = await res.json();
			localStorage.user=JSON.stringify(json);
			return {ok:true};
		} catch(e) {
			localStorage.user = '';
			localStorage.token = '';
			return {ok:false,error:'用户信息获取失败'};
		}
	}
}

export async function registerCode(email){
	let res = await xfetch('http://zmhjy.xyz/api/registerCode',{
		method: 'post',
		body: { email:email },
	});
	let json = await res.json();
	return json;
}

export async function regCdCheck(email,code){
	let res = await xfetch('http://zmhjy.xyz/api/codeCheck',{
		method: 'post',
		body: {
			email: email,
			code: code,
		},
	});
	let json = await res.json();
	return json;
}

export async function signUp(register){
	let res = await fetch('http://zmhjy.xyz/api/signup',{
		method: 'post',
		body: {
			email: register.email,
			code: register.code,
			password: register.pass,
		},
	});
	let json = await res.json();
	return json;
}