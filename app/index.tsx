import { router } from 'expo-router'; 
import SignIn from '../components/sign-in';

export default function App() {
  return (
    <SignIn navigate={()=>router.push("tabs/index")} />
  );
}
