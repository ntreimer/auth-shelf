
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL 
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);

INSERT INTO "item" ("description", "image_url", "user_id")
VALUES 'toaster', 'https://media-exp1.licdn.com/dms/image/C4E03AQEh25ZMxpcCDA/profile-displayphoto-shrink_400_400/0/1538924666180?e=1623888000&v=beta&t=NLfjoHiavIOptCTAohSpyRpCjgn9_UbwsvPgq_8VseE', 1 ;