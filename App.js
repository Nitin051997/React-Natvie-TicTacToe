import { StatusBar } from 'react-native';
import { UserInterface } from './Components/UI';

export default function App() {
  return (
    <>
    <StatusBar hidden={false}/>
    <UserInterface/>
    </>
 );
}