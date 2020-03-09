import { Fade } from 'react-reveal';
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
    padding: 6.6vmax 22%;
  `}
`;

const StyledHeading = styled(Heading)`
  ${media.tablet`
    font-size: 2.8rem;
  `}
`;

const SomethingSection = () => (
  <StyledWrapper>
    <Fade>
      <StyledHeading>
        Alejandra Cruz grew up by the beach, but you won’t mistake her songs for breezy summertime
        fare.
      </StyledHeading>
      <Paragraph>
        She writes from the point of view of outcasts and <br />
        misfits, bringing a new perspective and incisive <br />
        wit to her tales of relationships gone wrong. With <br />
        a smoky voice trained on jazzclassics and a <br />
        stacked backing band, she combines a vintage <br />
        sound with modern material to thrilling effect.
      </Paragraph>
    </Fade>
  </StyledWrapper>
);

export default SomethingSection;
