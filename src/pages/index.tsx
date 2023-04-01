//Next components
import Head from 'next/head';

//Components
import { Text } from '@/components/Text/Text';

//Hooks
import { useCount } from '@/context/Count';

export default function Home() {
  const { count, setCount } = useCount();

  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <meta
          name="description"
          content="A marketplace powered by NextJS, TypeScript, GraphQL, unit tests, end to end tests and much more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Text>Boilerplate</Text>
        <div data-test="count-number">{ count }</div>
        <button data-test="count-button" onClick={() => setCount(count + 1)}>Click</button>
      </main>
    </>
  );
}
