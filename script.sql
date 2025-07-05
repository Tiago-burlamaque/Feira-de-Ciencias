CREATE DATABASE feira_de_ciencias;

USE feira_de_ciencias;

CREATE TABLE cadastro(
	id_cadastro INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    nota INT NOT NULL,
    professor_aluno VARCHAR(45) NOT NULL
);
SELECT * FROM cadastro;
DROP TABLE cadastro;

-- mysql://root:OnQZJHFMGHUkwHfdmlFgYBkoblfdNIIy@switchyard.proxy.rlwy.net:14127/railway