##参考
-[gitbook](https://git-scm.com/book/zh/v2)

# 起步
	
# git 是分布式版本控制系统
# git 的诞生
 2005 linux 开发了 git , 2008年 github 上线
# github 的使用
	1. 配置
		``` bash
		$ git config --global user.name "yourname"
		$ git config --global user.email "youremail"
		```
	2. 创建SSH Key
		ssh-keygen -t rsa -C "email" 
		然后到 C:\Users\XXX\.ssh copy id_rsa.pub,
		最后在 github -》Account -》 settings SSH Keys
	3. 在 github 创建 项目 然后 git clone 
	4. git add.