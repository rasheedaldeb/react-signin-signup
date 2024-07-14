import { BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton } from './Commone'
    import Marginer from '../Marginer/index'
import { useContext } from 'react'
import { AccountContext } from './accountContext'
    const SignUp = () => {
        const {switchToSignin} = useContext(AccountContext)
        return (
        <BoxContainer>
            <FormContainer>
            <Input 
            type='text' name='fullName' placeholder='Full Name' 
            />
            <Input
            type='email' name='email' placeholder='Email'
            />
            <Input 
            type='password' name='password' placeholder='Password'
            />
            <Input 
            type='password' name='confirmPassword' placeholder=' Confirm Password' 
            />
            <Marginer direction="vertical" margin="1.6em"/>
            <SubmitButton type='submit'>Signup</SubmitButton>
            </FormContainer>
            <Marginer direction="vertical" margin="1em"/>
            <MutedLink href='#'>Alredy have an account? <BoldLink href='#'
            onClick={switchToSignin}>Signin</BoldLink>
            </MutedLink>
        </BoxContainer>
        )
    }
    
    export default SignUp