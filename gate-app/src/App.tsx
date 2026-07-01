import { PufLogo } from "@/components/puf-logo"
import { GatePasswordDialog } from "@/components/gate-password-dialog"

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black font-light text-white">
      <main className="flex min-h-screen flex-col items-center justify-center px-6">
        <div className="w-full max-w-xl">
          <PufLogo className="w-full" />
          <div className="mt-6 flex items-center justify-between text-sm text-white/60">
            <a
              href="mailto:info@p-u-f.com"
              className="transition-colors hover:text-white"
            >
              info@p-u-f.com
            </a>
            <a
              href="tel:+380956509426"
              className="transition-colors hover:text-white"
            >
              +380 95 650 94 26
            </a>
          </div>
        </div>
      </main>

      <GatePasswordDialog>
        <button
          type="button"
          aria-label="Ввести пароль доступу"
          className="fixed bottom-10 right-[-16px] h-9 w-28 bg-[#f9ed32] transition-colors hover:bg-[#fff685]"
        />
      </GatePasswordDialog>
    </div>
  )
}

export default App
