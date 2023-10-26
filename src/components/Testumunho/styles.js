import tw from "tailwind-styled-components"

export const Card = tw.div`
    bg-gray-300
    shadow-xl 
    p-8 
    rounded-lg 
    m-6 
    overflow-hidden 
    md:flex 
    md:p-0 
    md:h-auto
`

export const Imagem = tw.img`
    rounded-full
    mx-auto
    md:rounded-none
    md:w-72
    m:h-auto
`

export const InfoTestemunho = tw.div`
    pt-5
    text-center
    space-y-4
    md:text-start
    md: md:ps-6
`
export const Texto = tw.div`
    text-lg
    font-semibold
    text-slate-700
`

export const InfoAluno = tw.div`
    font-medium
    pb-2
`

export const NomeAluno = tw.div`
    text-green-500 
    font-bold
`

export const CursoAluno = tw.div`
    text-green-700
    font-bold
`

