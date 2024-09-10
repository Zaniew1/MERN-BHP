type TableType = "enterprise" | "department" | "worker" | "training" | "user";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface DatabaseInterface {
  create(table: TableType, data: object): object;
  update(table: TableType, id: number, data: object): void;
  delete(table: TableType, id: number): void;
  findById(table: TableType, id: number): void;
  findMany(table: TableType): void;
}

class Database implements DatabaseInterface {
  private databaseInstance;
  constructor(databaseInstance: DatabaseInterface) {
    this.databaseInstance = databaseInstance;
  }
  public create(table: TableType, data: object) {
    return this.databaseInstance.create(table, data);
  }
  public update() {}
  public delete() {}
  public findById() {}
  public findMany(table: TableType) {
    return this.databaseInstance.findMany(table);
  }
}

class PrismaDatabase implements DatabaseInterface {
  constructor() {}
  public async create(table: TableType, data: object) {
    console.log(table, data);
    const allUsers = await prisma.user.create({
      data: {
        name: "asd",
        email: "pasdasd",
        password: "passwrod",
      },
    });
    return allUsers;
  }
  public update() {}
  public delete() {}
  public findById() {}
  public async findMany(table: TableType) {
    const prismaModel = prisma[table];
  }
}
// id    Int     @id @default(autoincrement())
// name  String
// email String  @unique
// password String
// createdAt DateTime @default(now())
// modifiedAt DateTime @updatedAt
// enterprises Enterprise[]
export const DatabaseInstance = new Database(new PrismaDatabase());
