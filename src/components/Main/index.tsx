import * as S from './styles'

const Main = ({
  title = 'Hello World',
  description = 'Complete boilerplate'
}) => (
  <S.Wrapper>
    <S.Logo src="/icon.svg" alt="vercel logo" />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    <S.Ilustration src="/circles.png" alt="vercel logo" />
  </S.Wrapper>
)

export default Main
