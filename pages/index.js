import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>MODU</h1>
      <p>Agente econômico com IA</p>
      <Link href="/chat">Ir para o chat</Link>
    </>
  );
}
