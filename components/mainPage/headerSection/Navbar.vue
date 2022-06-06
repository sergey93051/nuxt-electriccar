<template>
    <!-- Navbar Start -->
    <div class="container-fluid p-0">
      <nav
        class="
          navbar navbar-expand-lg
          bg-light
          navbar-light
          py-3 py-lg-0
          px-lg-5
        ">
        <a href="index.html" class="navbar-brand ml-lg-3">
          <h1 class="m-0 display-5 text-uppercase text-primary">
            <i class="fa fa-truck mr-2"></i>Faster
          </h1>
        </a>
        <button
          type="button"
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-between px-lg-3"
          id="navbarCollapse"
        >
          <div class="navbar-nav m-auto py-0">
            <a href="index.html" class="nav-item nav-link">Home</a>
            <a href="about.html" class="nav-item nav-link">About</a>
            <a href="service.html" class="nav-item nav-link">Service</a>
            <a href="price.html" class="nav-item nav-link">Price</a>
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                >Pages</a
              >
              <div class="dropdown-menu rounded-0 m-0">
                <a href="blog.html" class="dropdown-item">Blog Grid</a>
                <a href="single.html" class="dropdown-item">Blog Detail</a>
              </div>
            </div>
            <a href="contact.html" class="nav-item nav-link">Contact</a>
          </div>
           <div class="navbar-nav m-1 p-3">
                <button type="button"  v-on:click="login();" :disabled="isRegister === true"  class="btn btn-primary py-2 px-4 d-none d-lg-block login" >Login</button>
           </div>
           <div class="navbar-nav m-1 p-3">
               <button type="button" v-on:click="register()" :disabled="isLogin === true" class="btn btn-primary py-2 px-4 d-none d-lg-block registr" >Register</button>
           </div>
        </div>
      </nav>
    </div>    
</template>
<script>
   export default {
         data() {
           return {
               isRegister:false,
               isLogin:false,
           }
         },
         methods: {
             register(){ 
                this.isRegister = true;                    
                this.$root.$emit('isRegister', this.isRegister);              
                               
             },
             login(){   
                    this.isLogin = true;
                    this.$root.$emit('isLogin',this.isLogin);
             }            
      },
      created(){
          this.$root.$on('closeRegistr',(value)=>{
                  this.isRegister = false;             
                  
          });
            this.$root.$on('closeLogin',(value)=>{
                  this.isLogin = false;   
                 
          });

      },  
   }
</script>
<style scoped> 
    .registr{
      position: relative;
      right: 27px;
      z-index:9998;
    }   
     .navbar-brand {
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
 }
 
.navbar-light .navbar-nav .nav-link {
    padding: 30px 15px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #1F1F2E;
    outline: none;
}
.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link.active {
    color: #FFFFFF;
    background: #FF4800;
}
a:hover {
    color: #b33200;
    text-decoration: underline;
}
.btn-primary {
    color: #fff;
    background-color: #FF4800;
    border-color: #FF4800;
}
.text-primary {
    color: #FF4800 !important;
}
</style>