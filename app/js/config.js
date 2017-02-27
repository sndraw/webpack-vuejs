/**
 * Created by sn on 2017/2/26.
 */

const Config = {
    vue: {
        devtools: false
    },
    apiUrl: ('https:' == document.location.protocol ? 'https:' : 'http:') + "//www.github.com",
    urlsEnum: {
        rank: '/webfront/rank'
    }
};
module.exports = Config;