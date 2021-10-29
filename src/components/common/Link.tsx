import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { ReactNode } from 'react'
import {
  Link as ChackraLink,
  LinkProps as ChackraLinkProps,
} from '@chakra-ui/react'

export interface LinkProps extends NextLinkProps {
  chackraLink?: ChackraLinkProps
  children?: ReactNode
}

export const Link = ({ ...props }: LinkProps) => {
  const { chackraLink, children } = props
  const nextLinkProps = {
    ...props,
    chackraLink: undefined,
    children: undefined,
  }
  return (
    <NextLink {...nextLinkProps} passHref>
      <ChackraLink {...chackraLink}>{children}</ChackraLink>
    </NextLink>
  )
}

Link.defaultProps = {
  chackraLink: {},
}

export default Link
