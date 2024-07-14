import { BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton } from './Commone'
import Marginer from '../Marginer/index'
import { useContext } from 'react'
import { AccountContext } from './accountContext'
const LogIn = () => {

  const {switchToSignup} = useContext(AccountContext)
  return (
    <BoxContainer>
      <FormContainer>
        <Input type='email' placeholder='Email'/>
        <Input type='password' placeholder='Password'/>
      </FormContainer>
        <Marginer direction="vertical" margin={10}/>
        <MutedLink href='#'>Forget Your Password?</MutedLink>
        <Marginer direction="vertical" margin="1.6em"/>
        <SubmitButton type='submit'>Signin</SubmitButton>
        <Marginer direction="vertical" margin="1em"/>
        <MutedLink href='#'>Don`t have an account? <BoldLink href='#'
        onClick={switchToSignup}>Signup</BoldLink></MutedLink>
    </BoxContainer>
  )
}

export default LogIn
