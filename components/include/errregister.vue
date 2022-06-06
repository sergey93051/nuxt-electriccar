<template>
  <div class="registr-error" v-if="errorStatus">
    <div class="alert alert-danger">
      <div class="show-animation-error">
        <ul v-if="errorData.name" class="animation-name">
          <li v-for="nameError of errorData.name" :key="nameError">
            {{ nameError }}
          </li>
        </ul>
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
    this.$root.$on("errorData", (errorResponse) => {
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
            ".animation-name",
            ".animation-email",
            ".animation-password",
            ".registr-error",
          ],
          { startAt: { opacity: 0 } },
          "r"
        );

        tl.from(".registr-error", { opacity: 0.97, duration: 1, skewX: 16 });
        tl.to(".registr-error", { duration: 2, skewX: 6 });
        tl.to(".animation-name", { opacity: 1, duration: 1 });
        tl.to(".animation-email", { opacity: 1, duration: 1 });
        tl.to(".animation-password", { opacity: 1, duration: 1 });
        tl.to(this, { duration: 4, errorStatus: false });
      });
    });
   
  },
async mounted() {
       this.$root.$on('closeRegistr',(v) => {        
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
.registr-error {
  position: fixed;
  top: 62px;
  left: 18px;
  opacity: 0.98;
  z-index: 9999;
}
</style>