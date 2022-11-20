import { Module } from "@nestjs/common";

import { Prisma } from "src/services";

import { AppController } from "./app.controller";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [Prisma],
})
export class AppModule {}
