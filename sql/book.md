创建数据库 create database dd;

如果没有dd创建数据库 create database if not exists dd;

删除数据库 drop database dd;

如果有dd删除数据库dd drop  database if exists dd;

创建表 - 联合主键
CREATE TABLE userinfo ( uid INT, uname VARCHAR ( 20 ), gender TINYINT(1),birthday TIMESTAMP,PRIMARY KEY(uid,uname));

重命名表 rename table user to userinfo;

数据类型  https://www.runoob.com/mysql/mysql-data-types.html

查看结构 desc userinfo;

修改表结构
  添加字段  
    追加 =》 alter table userinfo add qq varchar(20);
    添加到首位 =》alter table userinfo add wechat varchar(50) first;
    添加到指定位置 =》alter table userinfo add email varchar(50) after phone;

  修改字段名称 => alter table userinfo change qq oicq varchar(20);
  修改字段类型 => alter table userinfo modify oicq varchar(4);
  修改字段顺序 => alter table userinfo modify oicq varchar(4)  after phone;
  销毁字段 alter table userinfo drop wechat;

清空表 TRUNCATE TABLE userinfo


主键约束 -> 唯一 不能为空
  创建表同时设置主键 -> CREATE TABLE list ( uid INT PRIMARY KEY, uname VARCHAR ( 20 ));
  后期设置 -> alter table userinfo add CONSTRAINT PK_UID primary key ( uid );
  主键自增 -> CREATE TABLE list (uid INT PRIMARY KEY auto_increment, uname VARCHAR ( 20 );

唯一约束 -> 可以为空 不能重复
  alter table userinfo add CONSTRAINT UQ_id UNIQUE(id);


字段非空约束
    CREATE TABLE list (
      uid INT PRIMARY KEY auto_increment,
      uname VARCHAR ( 20 ) NOT NULL,
      gender bit ( 1 ) DEFAULT 1 
    );

参照完整性

  一张表的莫哥字段取值参考另一个表的字段
  外键约束
  
  ALTER TABLE userinfo ADD CONSTRAINT FK_ID FOREIGN KEY (cid) REFERENCES list (uid);