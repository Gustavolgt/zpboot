import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Center, Text } from '@chakra-ui/react'

const Aulagratis = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('https://app.monetizze.com.br/r/BDT1548377?src=fluxo407')
  }
    , [])
  return (
    <Center w='100%' minH='100vh'>
      <Text>Aguarde...</Text>
    </Center>
  )
}

export default Aulagratis;