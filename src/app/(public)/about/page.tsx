import { localPaths } from '@utils/localPaths'
import Link from 'next/link'

export default function About() {
  return (
    <main className="flex flex-col flex-wrap justify-evenly items-center min-h-[90vh] md:justify-center lg:justify-evenly">
      <section className="mb-7 text-center lg:mb-0 2xl:text-left">
        <h2 className="text-4xl font-bold mb-2.5">
          Transformando entretenimento em estudo.
        </h2>
        <p className="text-xl text-justify">
          Este projeto nasceu a partir das minhas experiências e opiniões, assim
          como das experiências dos meus amigos, sobre filmes, séries e todo
          tipo de conteúdo que assistimos juntos. Aqui você encontrará
          comentários, notas e, é claro, algumas opiniões duvidosas. Aproveite
          essa diversidade e explore nossa forma de entretenimento!
        </p>
        <Link href={localPaths.HOME}>
          <button
            type="button"
            className="py-2.5 px-7 font-bold mt-5 md:py-5 lg:py-4 bg-primary text-"
          >
            Conferir conteúdo
          </button>
        </Link>
      </section>
      <section className="text-center 2xl:text-left">
        <div className="mb-2.5">
          <h2 className="text-4xl font-bold mb-2.5">
            Por que o projeto existe?
          </h2>
          <small>
            <q>
              Eu, como usuário não consigo interagir com o site, e isso me
              estressa! Como vou levar isso a sério? As críticas nem são
              profundas como a de um verdadeiro amante da cultura cult 😡🤬 -
              Você.
            </q>
          </small>
        </div>
        <p className="text-xl">
          Este projeto foi criado com o objetivo de tornar mais fácil a busca e
          o armazenamento de filmes, séries e outros conteúdos que eu assisto
          junto com meus amigos. Além de ser uma oportunidade para desenvolver
          minhas habilidades como programador, ele também resolve dois problemas
          que surgem quando assistimos algo em grupo: lembrar o que já vimos e
          decidir o que vamos assistir a seguir (e também evitar assistir algo
          ruim de novo).
        </p>
      </section>
    </main>
  )
}
