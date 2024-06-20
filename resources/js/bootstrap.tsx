import axios from 'axios';
import markdownit from 'markdown-it';
import frontmatter from 'markdown-it-front-matter'
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.md = markdownit()
    .use(frontmatter, function(fm: string) {
       console.log(fm)
    });
