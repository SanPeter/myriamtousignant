<template>
    <div id="content" class="clearfix">
        <PressItem v-for="link in links" :key="link.id" :link="link"></PressItem>
    </div>   
</template>

<script>
export default {
    props: {
        links: {
            type: Array,
            required: true
        }
    }
}
</script>