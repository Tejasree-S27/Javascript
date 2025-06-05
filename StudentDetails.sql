create table student(
    sid int,
    sname varchar(20),
    sdob date,
    sjoining year,
    sph bigint,
    saddress varchar(30)
);
insert into student(sid,sname,sdob,sjoining,sph,saddress)
    values(3001,"Sam",'27-9-2004',2008,9335752186,"Hyd"),
    (3002,"Ram",'24-4-2003',2007,9643252186,"TN"),
    (3003,"Raj",'24-2-2001',2005,9033472186,"Blgr"),
    (3004,"Santosh",'12-3-1999',2003,9538965326,"AP"),
    (3005,"Ramu",'29-8-2005',2009,9123452186,"Delhi");
select * from student;
