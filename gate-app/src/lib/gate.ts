// SHA-256 hash of the access password. To change the password, run in a
// browser console:
//   crypto.subtle.digest("SHA-256", new TextEncoder().encode("newPassword"))
//     .then((b) => console.log(Array.from(new Uint8Array(b)).map((x) => x.toString(16).padStart(2, "0")).join("")))
// and paste the result below. Current password: puf2026
export const GATE_HASH =
  "f85798c0ec58bace04d23d9b36e9bcd68fcd788a92895299d66109a79c090c5f"

export async function sha256(text: string): Promise<string> {
  const data = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest("SHA-256", data)
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

export async function checkGatePassword(value: string): Promise<boolean> {
  const hash = await sha256(value)
  return hash === GATE_HASH
}
