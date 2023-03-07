DROP DATABASE IF EXISTS manga_db;
CREATE DATABASE manga_db;
USE manga_db;

CREATE TABLE users (
                       id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                       username VARCHAR(50) NOT NULL UNIQUE,
                       password VARCHAR(255) NOT NULL,
                       email VARCHAR(50) NOT NULL UNIQUE,
                       created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE collective (
                            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                            name VARCHAR(50) NOT NULL,
                            description VARCHAR(255),
                            privacy_level ENUM('public', 'private') DEFAULT 'public',
                            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE collective_member (
                                   user_id INT NOT NULL,
                                   collective_id INT NOT NULL,
                                   PRIMARY KEY (user_id, collective_id),
                                   FOREIGN KEY (user_id) REFERENCES users(id),
                                   FOREIGN KEY (collective_id) REFERENCES collective(id)
);
CREATE TABLE posts (
                       id INTEGER PRIMARY KEY NOT NULL,
                       user_id INTEGER NOT NULL,
                       title VARCHAR(255) NOT NULL,
                       content TEXT NOT NULL,
                       author VARCHAR(50) NOT NULL,
                       created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                       FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE comments (
                          id INTEGER PRIMARY KEY NOT NULL,
                          post_id INTEGER NOT NULL,
                          user_id INTEGER NOT NULL,
                          content TEXT NOT NULL,
                          created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                          FOREIGN KEY (post_id) REFERENCES posts(id),
                          FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE post_likes (
                            post_id INT NOT NULL,
                            user_id INT NOT NULL,
                            PRIMARY KEY (post_id, user_id),
                            FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
                            FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE comment_likes (
                               comment_id INT NOT NULL,
                               user_id INT NOT NULL,
                               PRIMARY KEY (comment_id, user_id),
                               FOREIGN KEY (comment_id) REFERENCES comments(id) ON DELETE CASCADE,
                               FOREIGN KEY (user_id) REFERENCES users(id)
);

-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'codeup';
-- flush privileges;
