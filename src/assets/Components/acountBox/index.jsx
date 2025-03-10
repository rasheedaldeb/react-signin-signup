import styled from "styled-components"
import LogIn from "./LogIn";
import { motion } from "framer-motion";
import { useState } from "react";
import { AccountContext } from "./accountContext";
import SignUp from "./SignUp";

const BoxContainer = styled.div`
    width: 280px;
    min-height : 550px;
    display:flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`;
const TopContainer = styled.div`
    width:100%;
    height: 250px;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`
const BackDrop = styled(motion.div)`
    width:160%;
    height: 550px;
    position: absolute;
    display:flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(60deg);
    top: -290px;
    left:-70px;
    background: rgb(241,196,15);
    background: linear-gradient
    (58deg, rgba(241,196,15,1) 0%,
    rgba(243,172,18,1) 20%);

`
const HeaderContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;

`
const HeaderText = styled.h2`
    font-size:30px;
    font-weight: 600;
    line-height:1.24;
    color:#fff;
    z-index:10;
`
const SmallText = styled.h5`
    color:#fff;
    font-weight:500;
    font-size:11px;
    z-index:10;
    margin-top:8px;
`
const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8em;
`
const backDropVariants = {
    expended:{
        width:"233%",
        height:"1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    colapsed:{
        width:"160%",
        height:"550px",
        borderRadius: "50%",
        transform:"rotate(60deg)"
    }
}
const expendingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30
}
export const AccountBox = ()=>{
    const [isExpended, setisExpended] = useState(false)
    const [active, setactive] = useState("signin")
    const playExpendingAnimation = ()=>{
        setisExpended(true)
        setTimeout(()=>{
            setisExpended(false)
        }, expendingTransition.duration * 1000 - 1500)
    }
    const switchToSignup = ()=>{
        playExpendingAnimation()
        setTimeout(()=>{
            setactive("signup")
        }, 400)
    }
    const switchToSignin = ()=>{
        playExpendingAnimation()
        setTimeout(()=>{
            setactive("signin")
        }, 400)
    }
    const contextValue = {switchToSignup, switchToSignin}
    return( 
        <AccountContext.Provider value={contextValue}>
    <BoxContainer>
        <TopContainer>
            <BackDrop initial={false}
            animate={isExpended ? "expended" : "collapsed"}
            variants={backDropVariants}
            transition={expendingTransition}
            />
            {active=== "signin" && <HeaderContainer>
                <HeaderText>Welcom</HeaderText>
                <HeaderText>Back</HeaderText>
                <SmallText>Please sign-in To Continue!</SmallText>
            </HeaderContainer>}
            {active=== "signup" && <HeaderContainer>
                <HeaderText>Create</HeaderText>
                <HeaderText>Account</HeaderText>
                <SmallText>Please sign-up To Continue!</SmallText>
            </HeaderContainer>}
        </TopContainer>
        <InnerContainer>
            {active === "signin" && <LogIn/>}
            {active === "signup" && <SignUp/>}
        </InnerContainer>
    </BoxContainer>
    </AccountContext.Provider>
    )
}