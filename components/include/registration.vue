<template>
  <div class="main-registr" v-if="isRegistrShow">
    <div class="form">
      <form class="form-horizontal">
        <fieldset>
          <div id="legend">
            <legend class="">Register</legend>
          </div>
          <div class="control-group">
            <!-- Username -->
            <label class="control-label" for="username">Username</label>
            <div class="controls">
              <input type="text" id="username" name="username" placeholder="" class="input-xlarge" v-model="username" />
              <p class="help-block">
                Username can contain any letters or numbers, without spaces
              </p>
            </div>
          </div>
          <div class="control-group">
            <!-- E-mail -->
            <label class="control-label" for="email">E-mail</label>
            <div class="controls">
              <input type="text" id="email" name="email" placeholder="" class="input-xlarge" v-model="email" />
              <p class="help-block">Please provide your E-mail</p>
            </div>
          </div>
          <div class="control-group">
            <!-- Password-->
            <label class="control-label" for="password">Password</label>
            <div class="controls">
              <input v-model="password" type="password" id="password" name="password" placeholder=""
                class="input-xlarge" />
              <p class="help-block">Password should be at least 4 characters</p>
            </div>
          </div>
          <div class="control-group">
            <!-- Button -->
            <div class="controls">
              <button class="btn btn-danger" @click="closeRegistr">close</button>
              <button class="btn btn-success" @click="signUp" type="button">Register</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>
<script>
import { gsap } from 'gsap';

export default {
  async fetch() {

    await this.$store.dispatch('sanctum/csrfToken');
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      isRegistrShow: false,
      form: ".form",
      sUrl: process.env.serverHttp,
    
    };
  },
  computed: {
    users() {
      return this.$store.getters['users/users']
    }
  },
  created() {

  },
  mounted() {
    // console.log(this.$store.getters['sanctum/getToken'])
    this.$root.$on('isRegister', (isRegistr) => {
      const myPromise = async () => {
        return await new Promise((myResolve, myReject) => {

          this.isRegistrShow = isRegistr;
          myResolve(isRegistr);

        });
      }
      myPromise().then((v) => {
        var tl = gsap.timeline();
        // tl.set(this.form,{ startAt:{ x:0} },"r")
        tl.from(this.form, { x: 480, opacity: 0.95, duration: 2, ease: "none" }, "r");
        // tl.to(this, { startAt: { isRegistrShow:value}},"isfrom" );
      });

    });
  },
  methods: {
    async closeRegistr(e) {

      e.preventDefault();

      this.$root.$emit("closeRegistr", true);
      var tl = gsap.timeline();
      // tl.set(this.form,{ startAt:{ x:0} },"r")
      if (await tl.to(this.form, { x: 500, duration: 2, display: 'none' }, "r")) {
        this.isRegistrShow = false;

      }

    },
    
    async signUp() {

      if (this.$store.getters['sanctum/getToken'] == 204) {

          try{
              const response = await this.$axios.post(this.sUrl + '/api/register', {
                "name": this.username,
                "email": this.email,
                 "password": this.password
            })
            console.log(response)

            }catch(error){  
         
                  if(error.response.status==422){                 

                          this.$root.$emit('errorData',error.response.data.errors)
                   }
                  
            }
            
         }
      }
    },
  };
</script> 

<style scoped>
.main-registr {
  position: relative;
  top: 0px;
  display: flex;
  justify-content: flex-end;
  z-index: 9999;

}

.form {
  position: fixed;
  background: white;
  padding: 25px;
  border: 0.5px solid gray;
  top: 47px;
  right: 2px;
  opacity: 0.98;
  border-radius: 5px;
}
</style>
