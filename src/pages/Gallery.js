/**
 * Created by GennadySX on @2020
 */

import React from "react";
import {images} from "../json/images";
import $ from 'jquery'


import ModalSlider from "../components/modal";
export default class Gallery extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            slider: false,
            image: ''
        }
    }

    componentDidMount() {
        const _ = this
        $('.bg-wp').click(function() {
            _.setState({slider: true, image: $(this).attr('src')}, () => {
                $('#modal-btn').trigger('click')
            })
        })
    }


    render() {
        return (
            <>
            <div className='container'>
                <div className="d-flex gallery-box justify-content-between">
                    <img className={'col-6 bg-wp bg-f'} src={images[0].img} alt=""/>
                    <div className="col-6 gallery-additional-box d-flex justify-content-between flex-wrap">
                        <img className={'bg-wp'} src={images[1].img} alt=""/>
                        <img className={'bg-wp'} src={images[2].img} alt=""/>
                        <img className={'bg-wp'} src={images[3].img} alt=""/>
                        <img className={'bg-wp'} src={images[4].img} alt=""/>
                    </div>
                </div>
            </div>
                <ModalSlider />
            </>
        );
    }
}