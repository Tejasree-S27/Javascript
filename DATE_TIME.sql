create table DT(
    d date,
    t time,
    dt datetime,
    ts timestamp,
    y year
);
insert into DT(d,t,dt,ts,y)
    values('2025-06-06','12:15:56','2025-06-06 12:15:56','2025-06-06 12:15:56','2025');
select * from DT;
