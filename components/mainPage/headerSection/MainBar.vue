<template>
  <section>
      <IncludeRegistration />
      <IncludeLogin />
      <IncludeErrtempl />
     <TopsBar />     
    <!-- Navbar -->
     <Navbar />
    <!-- Header Start -->
    <div class="jumbotron jumbotron-fluid mb-5">
      <div class="container text-center py-5">
        <h1 class="text-primary mb-4">Best Electric Cars</h1>
        <h1 class="text-white display-3 mb-5">Servise</h1>
        <div class="mx-auto" style="width: 100%; max-width: 600px">
          <div class="input-group">
            <input
              type="text"
              class="form-control border-light"
              style="padding: 30px"
              placeholder="Tracking Id"
            />
            <div class="input-group-append">
              <button class="btn btn-primary px-3">Track & Trace</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Header End -->
  </section>
</template>
<style scoped>
   .jumbotron {
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(~/static/img/header.jpg);
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
   }
   .text-primary {
    color: #FF4800 !important;
    }
    .btn-primary {
    color: #fff;
    background-color: #FF4800;
    border-color: #FF4800;
}
    .form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
    .input-group {
    position: relative !important;
    display: flex !important;
    flex-wrap: wrap !important;
    align-items: stretch !important;
    width: 100% !important;
}
</style>
<script>
export default {
  data(){
      return {
           services:'Logistics Services',           
        }
  },
  name: "MainBar",
  components: {
    TopsBar:() => import("@/components/mainPage/headerSection/TopsBar.vue"),
    Navbar:() => import("@/components/mainPage/headerSection/Navbar.vue")
  },
};
</script>

