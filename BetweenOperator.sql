create table st(
    sno int,
    sn varchar(20),
    sa int
);
insert into st values
    (1,"Raju",30),
    (2,"Sam",24),
    (3,"Raj",33),
    (4,"Navs",19),
    (5,"Rekha",22);
update st
    set sa=23
    where sa between 20 and 25;
select * from st;
