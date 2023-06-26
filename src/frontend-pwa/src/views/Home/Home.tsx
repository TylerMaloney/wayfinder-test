/**
 * @summary The main view for the application
 * @author Dallas Richmond, LocalNewsTV
 */
import { NavButton } from '../../components/appNav';

import {
  Wrapper,
  ButtonWrapper,
  ViewContainer,
  GreetingWrapper,
} from './home.styles';
import location from '/iconography/FindOffice.svg';
import report from '/iconography/ReportColor.svg';
import services from '/iconography/FindServiceColor.svg';

export default function Home() {
  const greetings = [
    'Welcome, what are you looking to do?',
    'Let\'s get started',
    'What are you looking for today?',
    'Connecting citizens to services',
  ];
  const currentGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  return (
    <ViewContainer>
      <Wrapper>
        <GreetingWrapper>{currentGreeting}</GreetingWrapper>
        <ButtonWrapper>
          <NavButton
            path="/location"
            text="Find an Office"
            icon={location}
            hex="#DEF3FB"
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <NavButton
            path="/services"
            text="Find BC Services"
            icon={services}
            hex="#EEE0E9"
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <NavButton
            path="/report"
            text="Report an Event"
            icon={report}
            hex="#FEF2DF"
          />
        </ButtonWrapper>
      </Wrapper>
    </ViewContainer>
  );
}
