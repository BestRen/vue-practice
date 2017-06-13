<template>
    <div>
        <div v-text="msg"></div>
        <img :src="img">
        <input id="demo_input" type="file" name="pic" accept="image/*" v-on:change="updata">
    </div>
</template>
<script>
class edit {
    updata(e) {
        let setImg;
        const reader = new FileReader()
        const file = e.target.files[0]
        const img = document.createElement('img')
        reader.onload = () => {
            img.onload = () => {
                setImg = (image, size) => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext("2d");
                    if (img.height > size) {
                        canvas.width = size
                        canvas.height = img.width / img.height * size
                    } else {
                        canvas.width = img.height
                        canvas.height = img.width
                    }
                    ctx.drawImage(image, 0, 0, img.width, image.height, 0, 0, canvas.height, canvas.width)
                    this.img = canvas.toDataURL("image/png", 0.8)
                }
                setImg(img, 500);
            }
            img.src = reader.result
        };
        reader.readAsDataURL(file);
    }
}
let util = new edit();
export default {
    data() {
        return {
            img: ''
        }
    },
    methods: {
        updata: util.updata
    },
    computed: {
        msg() {
            return 'FileReader!!'
        }
    }
}
</script>