import { Controller, Body, Query, Get, Post, Delete } from "@nestjs/common";

import { User, Movie } from "./types";

import { Prisma } from "src/services";

@Controller()
export class AppController {
  constructor(private prisma: Prisma) {}

  @Get("/user")
  async getUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  @Post("/user")
  async createUser(@Body() user: Omit<User, "id">): Promise<User> {
    return await this.prisma.user.create({
      data: user,
    });
  }

  @Delete("/user")
  async deleteUsers(@Query("id") id: string): Promise<void> {
    await this.prisma.user.findMany({
      where: {
        id,
      },
    });
  }

  @Get("/movie")
  async getMovies(): Promise<Movie[]> {
    return await this.prisma.movie.findMany();
  }

  @Post("/movie")
  async createMovie(@Body() movie: Omit<Movie, "id">): Promise<Movie> {
    return await this.prisma.movie.create({
      data: movie,
    });
  }
}
