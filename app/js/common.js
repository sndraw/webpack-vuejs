/**
 * vue配置
 * Created by sn on 2017/2/26.
 */
const Common = {
    // 浅拷贝
    simpleClone: function (p) {
        var c = {};
        for (var i in p) {
            if (p.hasOwnProperty(i)) {
                c[i] = p[i];
            }
        }
        return c;
    },
    // 深拷贝
    deepClone: function (p, c) {
        var c = c || {};
        for (var i in p) {
            if (typeof p[i] == 'object') {
                c[i] = (p[i].constructor === Array ) ? [] : {};
                deepClone(p[i], c[i]);
            } else {
                if (p.hasOwnProperty(i)) {
                    c[i] = p[i];
                }
            }
        }
        return c;
    },
    countObj: function (o) {
        var count = 0;
        for (var i in o) {
           if(o.hasOwnProperty(i)){
               count++;
           }
        }
        return count;
    }

};
export default Common;
