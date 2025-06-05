create table ic(
    sno smallint,
    sid bigint,
    savg float,
    sper decimal(3,4)
);
insert into ic values(1,234567890,45.789,23455.5678);
select * from ic;
select sno,sid from ic;
select sid from ic
    where sno==0 and savg==45.789;
select sid from ic
    where sno==1 and savg==45.789;
