create table employee(
    eid int,
    en char(10),
    eo varchar(20),
    ep int,
    ed date,
    es float
    );
insert into employee values
(101,"prem","CSE[DEAN]",9393979863,'1980-09-23',345000),
(102,"praveen","CSE[Hod]",8093979863,'1989-09-26',250000),
(103,"prakash","CSE[prof]",9398804083,'1994-11-30',25000),
(101,"prem","CSE[stu]",92348906,'1965-06-22',495000);
update employee
set es=((es * 10)/100)+es;
select * from employee
