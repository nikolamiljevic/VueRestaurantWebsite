<template>
    <carousel
    :per-page="1"
    :paginationEnabled="false"
    >
        <slide v-for="(slide,index) in slides" :key="index">
            <div class="slider_bck"
                :style="{'background':`url(${slide.bck})`}"
            >
            <div class="container slider-container">
                <div class="text">
                    <div>{{slide.text}}</div>
                </div>
                <div class="image">
                    <img :src="slide.img">
                </div>
            </div>

            </div>
        </slide>
    </carousel>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel';
import slideBck from '../../assets/images/slide_bck.jpg';
import slideBck2 from '../../assets/images/slide_bck2.jpg';

import pizzaOne from '../../assets/images/pizza_one.png';
import pizzaTwo from '../../assets/images/pizza_three.png';

export default {
    data(){
        return {
            slides:[
                {
                    text:'20% OFF ON ALL PIZZAS',
                    bck:slideBck,
                    img:pizzaOne
                },
                 {
                    text:'BUY ONE GET ONE FREE',
                    bck:slideBck2,
                    img:pizzaTwo
                }
            ]
        }
    },
    components:{
        Carousel,
        Slide
    }
}
</script>