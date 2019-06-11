create table grupo
(
    id_grupo    int(20) auto_increment
        primary key,
    nome        varchar(45) not null,
    description varchar(75) null
);

create table receita
(
    id_receita int(45) auto_increment
        primary key,
    nome       varchar(45)  not null,
    descricao  varchar(100) not null
);

create table usuario
(
    id_user int(45) auto_increment
        primary key,
    email   varchar(45) not null,
    pass    varchar(45) not null
);

create table alimentos
(
    id_alimento      int(45) auto_increment
        primary key,
    id_user          int(45)     not null,
    id_grupo         int(20)     not null,
    nome             varchar(45) not null,
    proteina         float       not null,
    carboidrato      float       not null,
    valor_energetico float       not null,
    constraint FK_30
        foreign key (id_grupo) references grupo (id_grupo),
    constraint FK_57
        foreign key (id_user) references usuario (id_user)
);

create index fkIdx_30
    on alimentos (id_grupo);

create index fkIdx_57
    on alimentos (id_user);

create table imc
(
    id_imc     int(45) auto_increment
        primary key,
    id_user    int(45)                             not null,
    valor_imc  float                               not null,
    created_at timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    constraint FK_63
        foreign key (id_user) references usuario (id_user)
);

create index fkIdx_63
    on imc (id_user);

create table ingredientes
(
    id_alimento     int(45) not null,
    id_ingredientes int(45) auto_increment
        primary key,
    id_receita      int(45) not null,
    constraint FK_80
        foreign key (id_alimento) references alimentos (id_alimento),
    constraint FK_83
        foreign key (id_receita) references receita (id_receita)
);

create table combinacao
(
    id_combinacao   int(45) auto_increment
        primary key,
    nome            varchar(45) not null,
    id_ingredientes int(45)     not null,
    descricao       varchar(45) not null,
    constraint FK_93
        foreign key (id_ingredientes) references ingredientes (id_ingredientes)
            on delete cascade
);

create index fkIdx_93
    on combinacao (id_ingredientes);

create index fkIdx_80
    on ingredientes (id_alimento);

create index fkIdx_83
    on ingredientes (id_receita);

