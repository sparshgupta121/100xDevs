-- CreateTable
CREATE TABLE "Account" (
    "accuntno" SERIAL NOT NULL,
    "ownername" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "aadharno" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("accuntno")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_accuntno_key" ON "Account"("accuntno");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
