import { router } from 'expo-router'; 
import SignIn from '../components/signIn/sign-in';

export default function LandingPage() {
  return (
    <SignIn navigate={()=>router.push("/(tabs)/")} />
  );
}
