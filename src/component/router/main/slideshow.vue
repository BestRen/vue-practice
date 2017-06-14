<template>
    <div>
        <div v-text="msg"></div>
        <div class="">
            <img class="mySlides" src="http://fakeimg.pl/100/?text=01">
            <img class="mySlides" src="http://fakeimg.pl/100/?text=02">
            <img class="mySlides" src="http://fakeimg.pl/100/?text=03">
            <img class="mySlides" src="http://fakeimg.pl/100/?text=04">
    
            <button class="w3-button w3-black w3-display-left" v-on:click="plusDivs(-1)">&#10094;</button>
            <button class="w3-button w3-black w3-display-right" v-on:click="plusDivs(1)">&#10095;</button>
        </div>
    </div>
</template>
<script>


export default {
    data() {
        return {
            slideIndex: 1
        }
    },
    created() {
        // this.showDivs(this.slideIndex);
    },
    mounted() {
        // showDivs(n) {
        let i;
        let x = document.getElementsByClassName("mySlides");
        console.log('x: ', x.length);

        if (n > x.length) { this.slideIndex = 1 }
        if (n < 1) { this.slideIndex = x.length };
        for (let i = 0; i < x.length; i++) {

            x[i].style.display = "none";
        }
        x[this.slideIndex - 1].style.display = "block";
        console.log('this.slideIndex: ', this.slideIndex);
        // }
    },
    computed: {
        msg() {
            return 'Slideshow!!'
        }
    },
    methods: {
        plusDivs(getData) {

            this.showDivs(this.slideIndex += getData);
        }
    }
}
</script>