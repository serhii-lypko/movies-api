-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);
