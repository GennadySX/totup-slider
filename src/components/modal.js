/**
 * Created by GennadySX on @2020
 */

import React from "react";
import Swiper from "swiper";

import {images} from "../json/images";

export default class ModalSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }


    componentDidMount() {

    }

    swipeUp() {
        new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
    }

    openModal() {
        this.setState({show: true}, () => this.swipeUp())
    }


    handleClose() {
       this.setState({show: false})
    }

    render() {
        return (
            <>
                <button id="modal-btn" className={'d-none'} onClick={() => this.openModal()}>showIt</button>
                <div className={`modal-sx ${this.state.show}`}>
                    <div className="swiper-box col-12 d-flex justify-content-center">
                        <div className="swiper-container">
                            <span
                                onClick={() => this.handleClose()}
                                className="float-right close-btn">&times;</span>
                            <div className="swiper-wrapper ">
                                {images.map((image, index) =>
                                    <img src={image.img} className={"swiper-slide slider-img"}/>
                                )}
                            </div>
                            <div className="swiper-button-next">
                                <img src={'./img/next.png'} alt=""/>
                            </div>
                            <div className="swiper-button-prev">
                                <img src={'./img/prev.png'} alt=""/>
                            </div>
                        </div>
                            <div className="swiper-pagination"></div>
                    </div>
                </div>
            </>
        )
    }
}