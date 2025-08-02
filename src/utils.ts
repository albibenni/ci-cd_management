import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Gets the path to a specified folder relative to the current module's directory.
 *
 * @param folderName - The name of the folder to get the path for
 * @returns The full path to the specified folder
 *
 * @example
 * ```typescript
 * const templatesPath = getSelectedFolder('templates');
 * // Returns: '/path/to/current/module/directory/templates'
 * ```
 */
export function getSelectedFolder(folderName: string): string {
  const dir = dirname(fileURLToPath(import.meta.url));
  return `${dir}/${folderName}`;
}
