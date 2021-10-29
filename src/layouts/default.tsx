import { chakra } from '@chakra-ui/react'
import { Footer } from '@/components/common/Footer'
import { Header } from '@/components/common/Header'

export default function DefaultLayout({ children }: any) {
  const headerHeight = 16
  const footerHeight = 8
  return (
    <>
      <Header height={headerHeight} />
      <chakra.main paddingTop={headerHeight} paddingBottom={footerHeight}>
        {children}
      </chakra.main>
      <Footer height={footerHeight} />
    </>
  )
}
