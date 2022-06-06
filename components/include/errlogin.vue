<template>
   <div class="login-error" v-if="errorStatus">
    <div class="alert alert-danger">
      <div class="show-animation-error">    
        <ul v-if="errorData.email" class="animation-email">
          <li v-for="emailError of errorData.email" :key="emailError">
            {{ emailError }}
          </li>
        </ul>
        <ul v-if="errorData.password" class="animation-password">
          <li v-for="errorPassword of errorData.password" :key="errorPassword">
            {{ errorPassword }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { gsap } from "gsap";
export default {
  data() {
    return {
      errorStatus: false,
      errorData: "",
    };
  },
  created() {
    this.$root.$on("errorLoginData", (errorResponse) => {
      const myPromise = async () => {
        return await new Promise((myResolve, myReject) => {
          this.errorStatus = true;
          this.errorData = errorResponse;
          myResolve(true);
        });
      };
      myPromise().then((v) => {
        var tl = gsap.timeline();
        tl.set(
          [          
            ".animation-email",
            ".animation-password",
            ".login-error",
          ],
          { startAt: { opacity: 0 } },
          "r"
        );

        tl.from(".login-error", { opacity: 0.97, duration: 1, skewX: 16 });
        tl.to(".login-error", { duration: 2, skewX: 6 });      
        tl.to(".animation-email", { opacity: 1, duration: 1 });
        tl.to(".animation-password", { opacity: 1, duration: 1 });
        tl.to(this, { duration: 4, errorStatus: false });
      });
    });
   
  },
async mounted() {
       this.$root.$on('closeLogin',(v) => {        
          this.errorStatus = false;
           
    });
  },
};
</script>
<style scoped>
.errorMain {
  position: relative;
}

/* .animation-name,.animation-email,.animation-password{
     opacity: 0;

} */
.login-error {
  position: fixed;
  top: 62px;
  left: 18px;
  opacity: 0.98;
  z-index: 9999;
}
</style>