import Fade from 'react-reveal/Fade';
import Heading from 'components/common/Heading/Heading';
import Paragraph from 'components/common/Paragraph/Paragraph';
import React from 'react';
import { media } from 'utils';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: white;
  padding: 6.6vmax 6vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.tablet`
    min-height: 66vh;
    padding: 6.6vmax 25%;
  `}
`;

const StyledHeading = styled(Heading)`
  ${media.tablet`
    font-size: 2.8rem;
  `}
`;

const AboutSection = () => (
  <StyledWrapper id="Intro">
    <Fade duration={2000}>
      <StyledHeading>
        Cześć, nazywam się Maciej Dzik i 1,5 roku temu postanowiłem zostać Front-end Developerem.
      </StyledHeading>
      <Paragraph>
        Pod koniec 2018 roku w końcu uległem namowom kolegów ze programowanie jest jak układanie
        puzzli i powinienem spróbować. Początkiem mojej przygody z programowaniem był 3 miesięczny
        kurs Pythona w szkole programowania Codecool który ukończyłem w kwietniu 2019 roku. W lipcu
        2019 roku zacząłem systematyczną naukę po stronie front-endu. Ukończyłem intensywny
        9-miesięczny kurs programowania pod opieką indywidualnego mentora – Bootcamp Web Developer
        Plus w Kodilla. Mam też za sobą kilka ciekawych kursów na platformie Eduweb, Udemy, oraz
        niezlicznoną ilość godzin lektury Stack Overflow :). Cały czas ćwiczę i rozwijam swoje
        umiejętności - szczególnie w JavaScript i React. Wiedzę mogę poprzeć licznymi projektami.
        Aktualnie szukam pierwszej pracy w IT.
      </Paragraph>
    </Fade>
  </StyledWrapper>
);

export default AboutSection;
