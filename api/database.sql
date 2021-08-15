CREATE TABLE games(
    id SERIAL PRIMARY KEY,
    name VARCHAR(127)
);

CREATE TABLE tetris(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    game_id INTEGER,
    FOREIGN KEY (game_id) REFERENCES games_list(id)
);

CREATE TABLE player(
    id SERIAL PRIMARY KEY,
    nickname VARCHAR(80),
    reg_date DATE,
    playing_time INTEGER
);





--    SELECT p.name, s.best_value
--    FROM score as s
--      INNER JOIN person as p ON p.id = u.user_id
--    ORDER BY s.best_value DESC
--    LIMIT 10;
