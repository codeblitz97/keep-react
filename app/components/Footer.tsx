'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname()

  return (
    <footer className={`bg-white shadow-small ${pathname === '/' ? '' : 'hidden'}`}>
      <div className="mx-auto max-w-7xl px-6 py-10 2xl:px-0">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-0">
          <div>
            <Link href="/" className="flex">
              <Image width="113" height="40" src="/images/keep.svg" alt="Keep React" />
            </Link>
            <p className="mt-6 max-w-lg text-body-4 font-normal text-metal-600">
              Keep React is an open-source component library built on Tailwind CSS and React.js. It provides a versatile
              set of pre-designed UI components to build modern web applications.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-body-3 font-medium text-metal-900">Resource</h4>
            <ul className="flex flex-col gap-3 text-body-3 font-normal text-metal-600">
              <li>
                <Link
                  className="inline-block text-body-4 font-normal transition-all duration-300 hover:translate-x-1"
                  href="https://github.com/StaticMania/keep-react"
                  target="_blank">
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block text-body-4 font-normal transition-all duration-300 hover:translate-x-1"
                  href="https://tailwindcss.com"
                  target="_blank">
                  Tailwind CSS
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block text-body-4 font-normal transition-all duration-300 hover:translate-x-1"
                  href="https://keepdesign.io"
                  target="_blank">
                  Figma
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-t-metal-100 py-5 text-center">
        <p className="text-body-4 font-normal text-metal-600">
          &copy;{new Date().getFullYear()} All Rights Reserved by &nbsp;
          <Link href="https://staticmania.com/" target="_blank" className="font-medium">
            StaticMania
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
