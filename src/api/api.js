import 'fetch-polyfill';

export const xfetch = function(url,params){
	return new Promise(async function(resolve,reject){
		let _pa = {};
		_pa['body'] = new FormData();
        _pa['headers'] = new Headers();

        if (!params) { return; }

        if (typeof params.method === 'string') {
            _pa['method'] = params.method;
        }
        if (typeof params.headers === 'object') {
            for(let i in params.headers){
                _pa['headers'].append(i,params.headers[i]);
            }
        }
		if (typeof params.body === 'object') {
			for(let i in params.body){
                _pa['body'].append(i,params.body[i]);
			}
		}

		let _params = {};
		for (let key of Object.keys(params)){
        	_params[key] = _pa[key];
		}


		let res = await fetch(url, _params);
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
			let json = await res.json()
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