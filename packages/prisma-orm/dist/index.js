// src/lib/prisma.ts
import { createRequire } from "module";
var require2 = createRequire(import.meta.url ?? __filename);
var { PrismaClient: RequiredPrismaClient } = require2("@prisma/client");
var _PrismaClient = RequiredPrismaClient;
var PrismaClient = class extends _PrismaClient {
};

// src/client.ts
var prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production")
  global.prisma = prisma;
export {
  PrismaClient,
  prisma
};
//# sourceMappingURL=index.js.map