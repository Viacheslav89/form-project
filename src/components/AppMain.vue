<template>
    <div class="main">
        <header class="main__header">
            <AppToolBar />
        </header>
        <main class="main__main">
            <AppFormEdit />
        </main>

        
    </div>
</template>



<script setup lang="ts">
import AppToolBar from './AppToolBar.vue';
import AppFormEdit from './AppFormEdit.vue';

</script>



<style scoped lang="scss">
.main {

    &__header {
        padding: 0;
        margin: 0;
    }

    &__main {
        padding: 0;
        margin: 0;
        // background-color: rgb(184, 184, 184);
        min-height: 1000px;
    }
}

</style>