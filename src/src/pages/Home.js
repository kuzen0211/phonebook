import {
  AppTitle,
  Container,
  HeaderWrapper,
  Title,
} from 'components/common.styled';

const Home = () => {
  return (
    <Container>
      <HeaderWrapper>
        <AppTitle>Phonebook</AppTitle>
        <Title>save youre contacts</Title>
      </HeaderWrapper>
    </Container>
  );
};
export default Home;
