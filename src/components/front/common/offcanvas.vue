<template>
<div class="offcanvas" :class="{ active: isActive }">
<div class="offcanvas-bar" :class="{ active: isActive }">


</div>
</div>
</template>
<script>
export default {
    props: ['active'],
    data:function(){
        return {
            isActive:false,
        }
    },
    watch:{
        'active':function(){
            this.isActive = this.active;
            if (this.active==true) {
                this.$el.addEventListener('click',()=>{
                    this.$emit('isActive',false)
                });
            }
        }
    },
    mounted:function(){

    }

}
</script>
<style lang="sass" scoped>
.offcanvas {
    position:fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
    width:100%;
    z-index:999;
    background: rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease-in-out;
    transform:translate(-100%);

    &.active {
        transform:translate(0);
    }


}

.offcanvas-bar{
    @extend .offcanvas;

        background: #333;
        width:50%;

}




</style>