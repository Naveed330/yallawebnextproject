import React from "react";
import Image from "next/image";
import Drinkbg from '../app/Assets/HomePageAssets/Drinkbg.png';
import drinkbottle from '../app/Assets/HomePageAssets/drinkbottle.png';
import animationone from '../app/Assets/HomePageAssets/animationone.png'
import animationtwo from '../app/Assets/HomePageAssets/animationtwo.png'
import animationthree from '../app/Assets/HomePageAssets/animationthree.png'
import animationfour from '../app/Assets/HomePageAssets/animationfour.png'
import './homePageStyle.css'
import HomePageNav from "./HomePageNav";

function HeroSectionCarousal() {
    return (
        <>
            <HomePageNav />
            <div className="heroSectionSlider">
                <Image src={Drinkbg} alt="Drink background" layout="responsive" objectFit="cover" />
                <Image src={drinkbottle} alt="Drink bottle" className="drinkbottle" layout="intrinsic" />

                <div className="animations">
                    <Image src={animationone} alt="animationone" className="animation one" />
                    <Image src={animationtwo} alt="animationtwo" className="animation two" />
                    <Image src={animationthree} alt="animationthree" className="animation three" />
                    <Image src={animationfour} alt="animationfour" className="animation four" />
                    <Image src={animationfour} alt="animationfour" className="animation five" />
                </div>
            </div>

        </>);
}

export default HeroSectionCarousal;