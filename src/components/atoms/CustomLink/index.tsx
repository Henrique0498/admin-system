import { useRouter } from 'next/router'
import Link from 'next/link'

interface CustomLinkProps {
  children: React.ReactNode
  href: string
  className?: string
  activeClass?: string
}

const CustomLink = ({
  children,
  className,
  activeClass,
  href
}: CustomLinkProps) => {
  const router = useRouter()

  return (
    <Link href={href}>
      <a
        className={`
          ${className ?? ''}
          ${router.asPath === href ? activeClass : ''}
        `}
      >
        {children}
      </a>
    </Link>
  )
}

export default CustomLink
