/**
 * @summary A reusable that creates a splash screen for the app
 * @author Dallas Richmond
 */
import logo from '/bc-logo-vertical.svg';
import Spinner from '../Spinner/Spinner';
import {
  SplashScreenWrapper,
  Image,
} from './splashscreen.styles';

export default function SplashScreen() {
  return (
    <SplashScreenWrapper>
      <Image src={logo} alt="BC Gov logo" />
      <Spinner />
    </SplashScreenWrapper>
  );
}
