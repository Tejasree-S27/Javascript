create table employee(
    ename varchar(20),
    eid int,
    eaccup varchar,
    ephno bigint,
    edjoin date,
    esal int
);
insert into employee(ename,eid,eaccup,ephno,edjoin,esal) 
values("Ashok",'22','Manager','9030176874','2023-09-06','50000');
select * from employee;
