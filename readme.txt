webpack使用说明

1、如无node，安装node 
2、进入目录，安装package.json中的依赖包
#npm install --save-dev
3、根据需要构建项目
build（生产，打包目录dist）
#npm run build
备注：
生产环境下，如果网站路径直接指到dist，为防止静态文件无法获取请注意修改
publicPath: "/webpack-vuejs/dist/"
为
publicPath: "/"

watch（生产-观察者模式，打包目录dist）
#npm run watch

dev（开发，打包目录dev）
#npm run dev

hot（开发-热替换模式，打包目录dev）
#npm run hot

访问路径：
http://localhost:8080/webpack-dev-server/
或者
http://localhost:8080

