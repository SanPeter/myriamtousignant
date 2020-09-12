<template>
    <div class="post category-presse-2 clearfix">	
        <div class="press-icon"><img :src="link.icon"/></div>	
        <a :href="link.href">{{link.text}}</a>			
    </div>    
</template>

<script>
export default {
    props: {
        link : {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.category-presse-2 {
    min-height:0!important;
}

.category-presse-2 a {
    margin:0 0 0.5em 0;
    line-height:30px;
}

.press-icon {
    float:left;
    margin-right:10px;
}
</style>