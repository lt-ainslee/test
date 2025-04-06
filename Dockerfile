# 使用官方Nginx镜像作为基础
FROM nginx:alpine

# 删除默认的Nginx配置
RUN rm -rf /etc/nginx/conf.d/*

# 将项目文件复制到容器中
COPY . /usr/share/nginx/html

# 复制自定义Nginx配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露80端口
EXPOSE 80

# 启动Nginx
CMD ["nginx", "-g", "daemon off;"]
