<template>
    <div v-show="visible" class="container flex flex_justify_content_center align_items_center">
       <div class="toast">
           <i>

           </i>
           <div class="text">
               {{message}}
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: '消息提示',
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

        .toast {
            background-color: rgba(0,0,0,0.7);
            max-width: 80%;
            color:#fff;
            text-align: center;
            box-sizing: border-box;
            transition: all 0.3s linear;
            padding: 10px;
            border-radius: 5px;
            .icon {
                font-size: 56px;
                text-align: center;
                display: block;
            }
            .text {
                font-size: 14px;
                text-align: center;
                display: block;
                color:#fff;
            }
        }
    }
</style>

