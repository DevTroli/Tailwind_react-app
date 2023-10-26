import {
  Card,
  Imagem,
  InfoTestemunho,
  Texto,
  InfoAluno,
  NomeAluno,
  CursoAluno
} from './styles'

export const Testemunho = () => {
  return (
    <Card>
      <Imagem
        src="https://placeholder.com/128x128?text=Foto-Pablo-Troli"
        alt="Aluno EBAC"
      />
      <InfoTestemunho>
        <Texto>
          &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellendus reprehenderit est harum corporis at maxime accusamus ut
          molestias dolorem nobis, nam voluptatum. Omnis veritatis rerum impedit
          quam ducimus est quasi.&quot;
        </Texto>
        <InfoAluno>
          <NomeAluno>Pablo Troli</NomeAluno>
          <CursoAluno>Aluno EBAC</CursoAluno>
        </InfoAluno>
      </InfoTestemunho>
    </Card>
  )
}
