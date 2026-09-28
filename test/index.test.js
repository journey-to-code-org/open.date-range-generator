import test from "node:test";import assert from "node:assert/strict";import{dateRange}from"../src/index.js";
test("daily range",()=>assert.deepEqual(dateRange("2026-01-01","2026-01-03").map(d=>d.toISOString().slice(0,10)),["2026-01-01","2026-01-02","2026-01-03"]));
test("exclusive end",()=>assert.equal(dateRange("2026-01-01","2026-01-03",{inclusive:false}).length,2));
