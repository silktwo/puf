import * as React from "react"
import { Eye, EyeOff } from "lucide-react"

import { cn } from "@/lib/utils"

function PasswordInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  const [visible, setVisible] = React.useState(false)

  return (
    <div className="relative flex items-center">
      <input
        type={visible ? "text" : "password"}
        className={cn(
          "w-full border-0 border-b border-white/20 bg-transparent py-2 pr-8 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#f9ed32]",
          className
        )}
        {...props}
      />
      <button
        type="button"
        tabIndex={-1}
        onClick={() => setVisible((v) => !v)}
        className="absolute right-0 flex items-center justify-center text-white/40 transition-colors hover:text-white"
        aria-label={visible ? "Сховати пароль" : "Показати пароль"}
      >
        {visible ? (
          <EyeOff className="size-4" aria-hidden="true" />
        ) : (
          <Eye className="size-4" aria-hidden="true" />
        )}
      </button>
    </div>
  )
}

export { PasswordInput }
