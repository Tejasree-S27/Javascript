create table st(
    sn varchar(20),
    t float,
    h float,
    e float,
    m float,
    sc float,
    su float,
    avg float
);
insert into st values
    ("Raju",65,66,90,75,93,(65+66+90+75+93),(65+66+90+75+93)/5.0),
    ("Sam",65,66,90,75,93,(65+66+90+75+93),(65+66+90+75+93)/5.0),
    ("Raj",65,66,90,75,93,(65+66+90+75+93),(65+66+90+75+93)/5.0),
    ("Ramu",65,66,90,75,93,(65+66+90+75+93),(65+66+90+75+93)/5.0);
update st
    set t=t+10,su=(su+10),avg=(su+10)/5.0
    where sn="Raju";
select * from st;
