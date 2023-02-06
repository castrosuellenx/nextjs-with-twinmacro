import Head from 'next/head';
import tw, { styled } from 'twin.macro';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContent>
        <StyledButton>In Style</StyledButton>
        <br />
        <TailwindButton>In Tailwind Style</TailwindButton>
        <br />
        <ConditionalButton isRed={false}>Conditional Tailwind</ConditionalButton>
      </MainContent>
    </Container>
  )
}

const Container = tw.div`
  flex
  flex-col
  items-center
  justify-center
  min-h-screen
  py-2
`

const MainContent = tw.main`
  flex
  flex-col
  items-center
  justify-center
  w-full
  flex-1
  px-20
  text-center
`

// still works despite importing from twin.macro
const StyledButton = styled.button`
  background: green;
  color: white;
  font-size: 1em;
  text-align: center;
  padding: 0.25em 1em;
  border: 2px solid black;
`

const TailwindButton = tw.button`
  bg-red-500
  hover:bg-red-700
  text-white
  font-bold
  py-2
  px-4
  border
  border-black
  rounded
`

const ConditionalButton = styled.button<{isRed: boolean}>(({ isRed }) => [
  isRed ? tw`bg-red-500 hover:bg-red-700` : tw`bg-blue-500 hover:bg-blue-700`,
  tw`
    text-white
    font-bold
    py-2
    px-4
    border
    border-black
    rounded
  `,
]);
