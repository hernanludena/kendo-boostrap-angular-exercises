-- Table: restaurantes

-- DROP TABLE restaurantes;

CREATE TABLE restaurantes
(
  codigo serial NOT NULL,
  nombre character varying,
  telefono character varying,
  categoria_id integer,
  CONSTRAINT pk_restaurante PRIMARY KEY (codigo),
  CONSTRAINT fk_categoria FOREIGN KEY (categoria_id)
      REFERENCES categorias (codigo) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE restaurantes
  OWNER TO postgres;


-- Table: categorias

-- DROP TABLE categorias;

CREATE TABLE categorias
(
  codigo serial NOT NULL,
  nombre character varying,
  CONSTRAINT pk_categoria PRIMARY KEY (codigo)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE categorias
  OWNER TO postgres;
