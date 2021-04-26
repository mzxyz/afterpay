import React, {useState} from 'react';
import Barcode from "react-native-barcode-builder";

import {
    StyledScrollView, 
    Container, 
    AmountContainer, 
    StyledText, 
    TopContainer, 
    ButtonContainer, 
    SeparatorLine,
    BarCodeInfoContainer,
} from './styles';
import Button from './components/button';
import Colors from '../../../theme/colors';
import prompts from './prompts';

const InStorePage = () => {
    const [showCode, setShowCode] = useState(false);

    const renderPaymentButtons = () => (
        <ButtonContainer>
            <Button 
                title={prompts.ceateBarcode} 
                color={Colors.tint} 
                iconName={'cached'} 
                iconColor={'black'} 
                onPress={() => setShowCode(true)} 
            />
            <Button 
                title={prompts.scanQRcode} 
                titleColor={Colors.blue} 
                iconName={'qr-code'} 
                iconColor={Colors.blue} 
                onPress={() => {}} 
            />
        </ButtonContainer>
    );

    const renderBarCodeInfo = () => (
        <>
            <ButtonContainer>
                <Button 
                    title={prompts.calculatePayment} 
                    titleColor={Colors.blue} 
                    onPress={() => setShowCode(false)} 
                />
            </ButtonContainer>
            <BarCodeInfoContainer>
                <StyledText fontSize={13} fontWeight={'600'} marginBottom={-10}>{prompts.barcodeDescription}</StyledText>
            </BarCodeInfoContainer>
            <SeparatorLine />
            <BarCodeInfoContainer>
                <StyledText fontSize={13} fontWeight={'600'} marginTop={10}>{'Expires in 09:58'}</StyledText>
                <Barcode value="Hello World" format="CODE128" />
                <StyledText fontSize={20} fontWeight={'600'} letterSpacing={3} marginTop={5}>{'82647975'}</StyledText>
                <StyledText fontSize={13} fontWeight={'600'} marginTop={20} color={Colors.blue}>{prompts.scanQRInstead}</StyledText>
            </BarCodeInfoContainer>
        </>
    );

    return (
        <StyledScrollView>
            <Container>
                <TopContainer>
                    <StyledText fontSize={13}>{prompts.spendAmount}</StyledText>
                    <StyledText fontSize={13} fontWeight={'bold'}>{' up to'}</StyledText>
                </TopContainer>
                <AmountContainer>
                    <StyledText fontSize={30} fontWeight={'bold'} letterSpacing={2}>{'$600.'}</StyledText>
                    <StyledText fontSize={20} fontWeight={'bold'} letterSpacing={2} marginBottom={2}>{'00'}</StyledText>
                </AmountContainer>
                <SeparatorLine />
                {!showCode && renderPaymentButtons()}
                {showCode && renderBarCodeInfo()}
            </Container>
        </StyledScrollView>
    );
};

export default InStorePage;
