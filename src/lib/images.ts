import fs from 'node:fs';
import path from 'node:path';

/** True when the photo exists in /public. Checked on the server at build time. */
export function photoExists(src: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', src));
  } catch {
    return false;
  }
}

/**
 * Whether a photo slot is shown.
 * Production: only when the file exists, so a visitor never sees an empty block and the
 * section switches to its text-only layout.
 * Development: always, so you can see where each photo goes.
 */
export function slotVisible(src: string): boolean {
  return photoExists(src) || process.env.NODE_ENV !== 'production';
}
