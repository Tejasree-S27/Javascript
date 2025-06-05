create table st(
    sno int,
    sn varchar(20),
    sa int
);
insert into st values
    (1,"Raju",23),
    (2,"Sam",24),
    (3,"Raj",13),
    (4,"Navs"22),
    (5,"Rekha",13);
update st
    set sa=23
    where sa between 10 and 20;
select * from st;
