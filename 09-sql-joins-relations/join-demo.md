```sql
CREATE TABLE actors(
id SERIAL PRIMARY KEY,
name VARCHAR(30),
gender VARCHAR(1)  
);

INSERT INTO actors(name, gender)
VALUES('Tom Hanks', 'M'), ('Natalie Portman', 'F'), ('Christian Bale', 'M'), ('Jennifer Lawrence', 'F'), ('Dakota Fanning', 'F'), ('Daniel Day-Lewis', 'M');

SELECT * FROM actors WHERE gender='M';

SELECT * FROM actors WHERE gender='F';

CREATE TABLE movies(
id SERIAL PRIMARY KEY,
title VARCHAR(40),
year INTEGER,
actor_id INTEGER REFERENCES actors(id)
);

INSERT INTO movies(title, year, actor_id)
VALUES('Big', 1988, 1),
('A League of Their Own', 1992, 1),
('Sleepless in Seattle', 1993, 1),
('Forrest Gump', 1994, 1),
('Toy Story', 1995, 1),
('Cast Away', 2000, 1),
('Captain Phillips', 2013, 1),
('Black Swan', 2010, 2),
('V for Vendetta', 2005, 2),
('American Hustle', 2013, 4),
('The Dark Knight', 2008, 3),
('Batman Begins', 2005, 3),
('American Psycho', 2000, 3),
('The Machinist', 2004, 3),
('Hunger Games', 2012, 4),
('Hunger Games 2', 2013, 4),
('Hunger Games 3', 2014, 4),
('Hunger Games 4', 2015, 4),
('Passengers', 2016, 4),
('I am Sam', 2001, 5),
('Sweet Home Alabama', 2002, 5),
('War of the Worlds', 2005, 5),
('Lincoln', 2012, 6),
('There Will Be Blood', 2007, 6),
('Gangs of New York', 2002, 6),
('The Last of the Mohicans', 2002, 6)
;

SELECT * FROM movies WHERE year>2000;

SELECT * FROM movies WHERE year<2000;

SELECT * FROM actors
INNER JOIN movies
ON actors.id=movies.actor_id;

SELECT * FROM actors
INNER JOIN movies
ON actors.id=movies.actor_id
WHERE year>2002;

SELECT actors.name, movies.title FROM actors
INNER JOIN movies
ON actors.id=movies.actor_id
WHERE actors.name='Daniel Day-Lewis';

SELECT actors.name, movies.title, movies.year FROM actors
INNER JOIN movies
ON actors.id=movies.actor_id
WHERE actors.name='Daniel Day-Lewis';

SELECT actors.name, movies.title, movies.year FROM actors
INNER JOIN movies
ON actors.id=movies.actor_id
WHERE actors.name='Tom Hanks'
ORDER BY movies.year DESC;

DROP TABLE movies;
DROP TABLE actors;
```