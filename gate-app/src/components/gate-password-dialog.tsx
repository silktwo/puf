import * as React from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { PasswordInput } from "@/components/ui/password-input"
import { checkGatePassword } from "@/lib/gate"

function GatePasswordDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [error, setError] = React.useState("")
  const [checking, setChecking] = React.useState(false)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!value.trim() || checking) return

    setChecking(true)
    const ok = await checkGatePassword(value.trim())
    setChecking(false)

    if (ok) {
      window.location.href = "/home.html"
      return
    }

    setError("Невірний пароль. Спробуйте ще раз.")
    setValue("")
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (!next) {
          setValue("")
          setError("")
        }
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-black text-white ring-white/10 sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="font-light tracking-tight">
            Пароль доступу
          </DialogTitle>
          <DialogDescription className="text-white/50">
            Введіть пароль, щоб перейти на сайт.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-3" onSubmit={handleSubmit}>
          <Label htmlFor="gate-password" className="sr-only">
            Пароль
          </Label>
          <PasswordInput
            id="gate-password"
            autoFocus
            autoComplete="current-password"
            placeholder="••••••••"
            value={value}
            onChange={(event) => {
              setValue(event.target.value)
              setError("")
            }}
          />
          {error ? (
            <p className="text-sm text-red-400" role="alert" aria-live="polite">
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={checking}
            className="mt-1 w-full bg-[#f9ed32] py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#fff685] disabled:opacity-60"
          >
            {checking ? "Перевірка…" : "Увійти"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export { GatePasswordDialog }
