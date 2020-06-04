/**
 * Created by GennadySX on @2020
 */

import React from "react";
import {images} from "../json/images";
import $ from 'jquery'


import ModalSlider from "../components/modal";

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: false,
            image: '',
            selected: 0
        }
    }

    componentDidMount() {
        const _ = this
        $('.bg-wp').click(function () {
            _.setState({slider: true, selected: $(this).attr('id'), image: $(this).attr('src')}, () => {
                $('#modal-btn').trigger('click')
                console.log('state is', _.state)
            })
        })
    }


    render() {
        return (
            <>
                <div className='container'>
                    <div className="d-flex gallery-box justify-content-between">
                        <img className={'col-6 bg-wp bg-f'} src={images[0].img} id={'0'} alt=""/>
                        <div className="col-6 gallery-additional-box d-flex justify-content-between flex-wrap">
                            <img className={'bg-wp'} src={images[1].img} id={'1'} alt=""/>
                            <img className={'bg-wp'} src={images[2].img} id={'2'} alt=""/>
                            <img className={'bg-wp'} src={images[3].img} id={'3'} alt=""/>
                            <img className={'bg-wp'} src={images[4].img} id={'4'} alt=""/>
                        </div>
                    </div>
                </div>
                <div className='container mb-4'>
                    <div className="d-flex gallery-box justify-content-between">
                        <img className={'col-6 bg-wp bg-f'} src={images[5].img} id={'5'} alt=""/>
                        <div className="col-6 gallery-additional-box d-flex justify-content-between flex-wrap">
                            <img className={'bg-wp'} src={images[6].img} id={'6'} alt=""/>
                            <img className={'bg-wp'} src={images[7].img} id={'7'} alt=""/>
                            <img className={'bg-wp'} src={images[8].img} id={'8'} alt=""/>
                            <img className={'bg-wp'} src={images[9].img} id={'9'} alt=""/>
                        </div>
                    </div>
                </div>
                <ModalSlider selected={this.state.selected}/>
            </>
        );
    }
}