import Link from "next/link"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <>
      <nav className="fixed inset-x-0 top-0 backdrop-blur-md bg-gray-100/50 dark:bg-gray-950/50 transition-colors z-50">
        <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
          <Link className="flex items-center gap-2 text-lg font-medium" href="#">
            <span className="sr-only">Tour App</span>
          </Link>
          <nav className="flex items-center gap-4">
          <Link href='/'><Button>Home</Button></Link>
          <Link href='/about'><Button>about</Button></Link>
          <Link href='/join'><Button>Join Us as Guide</Button></Link>
          <Link href='/tourguide'><Button>Tour Guides</Button></Link>
          <Link href='/register'><Button>Registeration</Button></Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button size="icon" variant="outline">
              <SearchIcon className="w-4 h-4" />
              <span className="sr-only">Search</span>
            </Button>
            <Button size="icon" variant="outline">
            <UserIcon className="w-4 h-4" />
            </Button>
            <div>
              <div>
                <div>
                  <div>

                  </div>
                  <div />
                  <div>
                    <LogOutIcon className="mr-2 h-4 w-4" />
                  </div>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <footer className="fixed inset-x-0 bottom-0 backdrop-blur-md bg-gray-100/50 dark:bg-gray-950/50 transition-colors z-50">
        <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Made with ❤️ by Maidenless Community</p>
          <nav className="flex items-center gap-4">
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </>
  )
}






function LogOutIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
