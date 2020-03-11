import Heading from 'components/common/Heading/Heading';
import Paragraph from 'components/common/Paragraph/Paragraph';
import React from 'react';
import drums from 'assets/drums.JPG';
import { media } from 'utils';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: white;
  min-height: 800px;
  width: 100%;
  padding: 6.6vmax 6vw;

  ${media.tablet`
    min-height: 66vh;
    padding: 3vmax 25%;
  `}
`;

const StyledImg = styled.img`
  width: 100%;
  margin: 10px auto;
  object-fit: contain;
`;

const StyledImageWrapper = styled.div`
  width: 100%;
`;

const QuoteSection = () => (
  <StyledWrapper id="About">
    <Heading>O mnie</Heading>
    <StyledImageWrapper>
      <StyledImg src={drums} />
    </StyledImageWrapper>
    <Paragraph>
      Od urodzenia byłem nerdem, jednak moja samodyscyplina i skupienie początkowo skierowało się ku
      perkusji. Przez ostatnich 10 lat pracowałem jako muzyk. Grałem z topowymi artystami jak m.in
      Agnieszka Chylińska, Kasia Stankiewicz oraz byłem nominowany do Polskich Nagród Perkusyjnych.
      Jednak 2 lata temu poczułem ze wystarczy juz tego rock&apos;n&apos;rolla i postanowiłem
      skierować swoje skupienie na naukę programowania. To był najlepszy wybór mojego życia :)
    </Paragraph>
    <Paragraph>
      Lata gry w zespołach nauczyły mnie pracy w teamie, z drugiej strony tysiące godzin spędzone
      ćwicząc na bębnach wyrobiły charakter i upartość w dążeniu do celu którą obecnie codziennie
      wykorzystuje ucząc się programowania.
    </Paragraph>
  </StyledWrapper>
);

export default QuoteSection;
