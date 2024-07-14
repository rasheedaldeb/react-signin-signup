import styled from 'styled-components';
import './App.css'
import { AccountBox } from './assets/Components/acountBox'
function App() {
  const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
  return (
    <>
    <AppContainer>
    <AccountBox/>
    </AppContainer>
    </>
  )
}

export default App
