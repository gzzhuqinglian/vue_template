<template>
    <div v-show="visible" class="container flex flex_justify_content_center align_items_center">
        <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div> 
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                visible: false
            }
        }
    }
</script>

<style lang="less" scoped>
    .container {
        position: fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
    }
    .spinner {
        div {
            display:inline-block;
            width: 30px;
            height: 30px;
            background-color: #e52f17;
            border-radius: 50%;
            animation: bouncedelay 1.4s infinite ease-in-out
        }
        .bounce1 {
            animation-delay: -0.32s;
        }
        .bounce2 {
            animation-delay: -0.16s;
        }
        .bounce3 {
            animation-delay: 0s;
        }
    }

    @keyframes bouncedelay {
        0%,80%,100% {
            transform:scale(0.0)
        }
        40% {
            transform: scale(1.0)
        }
    }
</style>

