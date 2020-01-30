import React from 'react';

import {TextContainer, FirstLine, LeftFloat, RightFloat, PlusButton, Type, StarsNum, ReviewsNum, Title, Price} from '../styles/ItemInformationStyles.js';

const ItemInformation = ({recommendation}) => {
    const hasPlusButton = recommendation.plusStatus;
    return (   
        <TextContainer>
            <FirstLine> 
                <LeftFloat>
                    {hasPlusButton ? <PlusButton> PLUS </PlusButton> : ''} 
                    <Type> {recommendation.typeOfListing} · {`${recommendation.numOfBeds} beds `}</Type>
                </LeftFloat>
                <RightFloat>
                    <img src='https://airbnb-recommendation-photos.s3-us-west-1.amazonaws.com/red-star.png' alt="star" height="10" width="12"/>
                    <StarsNum>{`${recommendation.numOfStars}`}</StarsNum> 
                    <ReviewsNum>{`(${recommendation.numOfReviews})`}</ReviewsNum>
                </RightFloat>
            </FirstLine>
            <Title>{`${recommendation.title}`} </Title>
            <Price> <strong> {`$${recommendation.pricePerNight}`} </strong> {`/ night`} </Price>
        </TextContainer>
    )
}

export default ItemInformation;