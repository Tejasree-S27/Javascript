create table st(
    sn varchar(20),
    t int,
    h int,
    e int,
    m int,
    sc int,
    su int,
    avg float
);
insert into st values
    ("Raju",65,66,90,75,93,(65+66+90+75+93),(65+66+90+75+93)/5),
    ("Sam",65,66,90,75,93,(65+66+90+75+93),(65+66+90+75+93)/5),
    ("Raj",65,66,90,75,93,(65+66+90+75+93),(65+66+90+75+93)/5),
    ("Ramu",65,66,90,75,93,(65+66+90+75+93),(65+66+90+75+93)/5);
update st
    set t=t+10
    where sn="Raju";
select * from st;
