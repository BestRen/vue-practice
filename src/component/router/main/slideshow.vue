<template>
    <div>
        <div v-text="msg"></div>
        <div class="slide-show">
            <img v-for="item in imgArray" v-bind:class="item.class" v-bind:src="item.src">
            <button class="arrow-left" v-on:click="arrowLeft(-1)">&#10094;</button>
            <button class="arrow-right" v-on:click="arrowRight(1)">&#10095;</button>
        </div>
    </div>
</template>
<script>


export default {
    data() {
        return {
            slideIndex: 0,
            imgArray: [{
                index: 1,
                class: 'mySlides active',
                src: 'http://fakeimg.pl/100/?text=01'
            }, {
                index: 2,
                class: 'mySlides',
                src: 'http://fakeimg.pl/100/?text=02'
            }, {
                index: 3,
                class: 'mySlides',
                src: 'http://fakeimg.pl/100/?text=03'
            }, {
                index: 4,
                class: 'mySlides',
                src: 'http://fakeimg.pl/100/?text=04'
            }]
        }
    },
    created() { },
    mounted() { },
    computed: {
        msg() {
            return 'Slideshow!!'
        }
    },
    methods: {
        arrowLeft(getIndex) {
            if (this.slideIndex === 0) {
                this.slideIndex = 3;
                this.imgArray[0].class = 'mySlides';
                this.imgArray[this.slideIndex].class = 'mySlides active';
            } else {
                this.imgArray[this.slideIndex].class = 'mySlides';
                this.slideIndex -= 1;
                this.imgArray[this.slideIndex].class = 'mySlides active';
            }
        },
        arrowRight(getIndex) {
            if (this.slideIndex === (this.imgArray.length - 1)) {
                this.slideIndex = 0;
                this.imgArray[this.imgArray.length - 1].class = 'mySlides';
                this.imgArray[this.slideIndex].class = 'mySlides active';
            } else {
                this.imgArray[this.slideIndex].class = 'mySlides';
                this.slideIndex += 1;
                this.imgArray[this.slideIndex].class = 'mySlides active';
            }
        }
    }
}
</script>