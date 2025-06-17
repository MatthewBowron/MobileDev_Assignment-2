import { router } from 'expo-router'; 
import SignIn from '../components/sign-in';

export default function LandingPage() {
  return (
    <SignIn navigate={()=>router.push("/(tabs)/")} />
  );
}
