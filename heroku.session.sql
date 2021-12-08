-- Criar a tabela 

-- CREATE TABLE noticias(
--     id_noticia SERIAL PRIMARY KEY,
--     titulo VARCHAR(100) NOT NULL,
--     conteudo TEXT NOT NULL,
--     data_criacao TIMESTAMP WITHOUT TIME ZONE DEFAULT (NOW() AT TIME ZONE 'utc+3')
-- )

-- Inserir Noticias 

-- INSERT INTO noticias(
--     titulo, 
--     conteudo
--     ) VALUES (
--         'Noticia de Futebol', 
--         'O Brasil finalmente conseguiu o hexacampeonato depois de sonhar por 50 anos'
--     );

-- Seleciona todos os registros e colunas

-- SELECT * FROM noticias;

-- Filtrar colunas

-- SELECT * FROM noticias WHERE id_noticia = 2;

--Ordenar os registros selecionados
-- SELECT * FROM noticias ORDER BY id_noticia DESC;
-- SELECT * FROM noticias ORDER BY id_noticia ASC;

--Atualizar registros
--  UPDATE noticias SET titulo = 'Noticia educacional' WHERE id_noticia = 1;
        
-- SELECT * FROM noticias;

--deletar registros

-- DELETE FROM noticias WHERE id_noticia = 1;

-- SELECT * FROM noticias;