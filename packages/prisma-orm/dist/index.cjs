"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  PrismaClient: () => PrismaClient,
  prisma: () => prisma
});
module.exports = __toCommonJS(src_exports);

// src/lib/prisma.ts
var import_module = require("module");
var import_meta = {};
var require2 = (0, import_module.createRequire)(import_meta.url ?? __filename);
var { PrismaClient: RequiredPrismaClient } = require2("@prisma/client");
var _PrismaClient = RequiredPrismaClient;
var PrismaClient = class extends _PrismaClient {
};

// src/client.ts
var prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production")
  global.prisma = prisma;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PrismaClient,
  prisma
});
//# sourceMappingURL=index.cjs.map