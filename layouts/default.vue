<template>
   <main>
        
        <header>
            <MainBar />
        </header>       
            <Nuxt />
   </main>
</template>
<script>

export default {
  components: {
     MainBar:() => import("@/components/mainPage/headerSection/MainBar.vue")   
    }
}
</script>

