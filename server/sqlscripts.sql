DROP DATABASE IF EXISTS manga_db;
CREATE DATABASE manga_db;
USE manga_db;

CREATE TABLE users
(
    id         INTEGER PRIMARY KEY NOT NULL,
    username   VARCHAR(50)         NOT NULL UNIQUE,
    password   VARCHAR(50)         NOT NULL,
    email      VARCHAR(50)         NOT NULL UNIQUE,
    created_at TIMESTAMP           NOT NULL DEFAULT NOW()
);

CREATE TABLE posts
(
    id         INTEGER PRIMARY KEY NOT NULL,
    user_id    INTEGER             NOT NULL,
    content    TEXT                NOT NULL,
    likes      INTEGER             NOT NULL DEFAULT 0,
    created_at TIMESTAMP           NOT NULL DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE comments (
    id         INTEGER PRIMARY KEY NOT NULL,
    post_id    INTEGER             NOT NULL,
    user_id    INTEGER             NOT NULL,
    content    TEXT                NOT NULL,
    created_at TIMESTAMP           NOT NULL DEFAULT NOW(),
    FOREIGN KEY (post_id) REFERENCES posts (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE likes (
    user_id    INTEGER   NOT NULL,
    post_id    INTEGER   NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (user_id, post_id),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (post_id) REFERENCES posts (id)
);
