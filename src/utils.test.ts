import { describe, it, expect } from "vitest";
import { getSelectedFolder } from "./utils.js";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

describe("getSelectedFolder", () => {
  it("should return the correct path for a given folder name", () => {
    const folderName = "test-folder";
    const result = getSelectedFolder(folderName);

    const expectedDir = dirname(fileURLToPath(import.meta.url));
    const expected = `${expectedDir}/${folderName}`;

    expect(result).toBe(expected);
  });

  it("should handle folder names with special characters", () => {
    const folderName = "folder-with-dashes";
    const result = getSelectedFolder(folderName);

    const expectedDir = dirname(fileURLToPath(import.meta.url));
    const expected = `${expectedDir}/${folderName}`;

    expect(result).toBe(expected);
  });

  it("should handle nested folder paths", () => {
    const folderName = "nested/folder/path";
    const result = getSelectedFolder(folderName);

    const expectedDir = dirname(fileURLToPath(import.meta.url));
    const expected = `${expectedDir}/${folderName}`;

    expect(result).toBe(expected);
  });

  it("should handle empty string folder name", () => {
    const folderName = "";
    const result = getSelectedFolder(folderName);

    const expectedDir = dirname(fileURLToPath(import.meta.url));
    const expected = `${expectedDir}/`;

    expect(result).toBe(expected);
  });
});

