SELECT compositor, id FROM musicas;

SELECT composicao, tempo FROM musicas WHERE tempo > 240 ; 

SELECT compositor, composicao FROM musicas where id > 47 AND id < 123;

SELECT * FROM musicas WHERE compositor IS NOT NULL AND tempo < 300 AND compositor <> 'Bach';

SELECT composicao, tempo FROM musicas WHERE compositor = 'Bach' OR compositor = 'Mozart';

SELECT * FROM musicas ORDER BY id DESC;

SELECT * FROM musicas ORDER BY tempo DESC;

SELECT * FROM musicas ORDER BY tempo LIMIT 5;

SELECT * FROM musicas ORDER BY tempo DESC LIMIT 10;

SELECT * FROM musicas ORDER BY tempo LIMIT 10 OFFSET 5;

SELECT * FROM musicas LIMIT 10 OFFSET 30;

SELECT * FROM musicas LIMIT 12 OFFSET 60;

SELECT distinct compositor FROM musicas WHERE compositor IS NOT NULL; 

SELECT distinct compositor, composicao FROM musicas; 

SELECT * FROM musicas WHERE compositor LIKE 'Bra%';

SELECT * FROM musicas WHERE ritmo LIKE '%troppo';

SELECT * FROM musicas WHERE composicao ILIKE '%quartet%';

SELECT * FROM musicas WHERE composicao NOT ILIKE '%quintet%';