import 'babel-polyfill';
const base = 'http://127.0.0.1:3000/';

const blogAll = async () => {
    try {
        let res = await fetch(base + 'blogs');
        let data = await res.json();
        return {
            ok: true,
            data: data
        }
    } catch (err) {
        return {
            ok: false,
            err: err
        }
    }
}

const blogPage = async (page) => {
    try {
        let fd = new FormData();
        fd.append('page', page);
        let res = await fetch(base + 'blogs_p', {
            method: 'post',
            body: fd
        });
        let data = await res.json();
        return {
            ok: true,
            data: data
        }
    } catch (err) {
        return {
            ok: false,
            err: err
        }
    }
}

const blogHot = async (count = 8) => {
    try {
        let res = await fetch(base + 'blog_hot/' + count);
        let data = await res.json();
        return {
            ok: true,
            data: data
        }
    } catch (err) {
        return {
            ok: false,
            err: err
        }
    }
}

const blogLatest = async (count = 8) => {
    try {
        let res = await fetch(base + 'blog_latest/' + count);
        let data = await res.json();
        return {
            ok: true,
            data: data
        }
    } catch (err) {
        return {
            ok: false,
            err: err
        }
    }
}

const blogOne = async (id) => {
    try {
        let res = await fetch(base + 'blog/' + id);
        let data = await res.json();
        return {
            ok: true,
            data: data
        }
    } catch (err) {
        return {
            ok: false,
            err: err
        }
    }
}

export { blogAll, blogPage, blogHot, blogLatest, blogOne};