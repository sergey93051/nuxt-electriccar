<template>
  <div class="main-login" v-if="isloginShow">
    <div class="form" >
      <form class="form-horizontal">
        <fieldset>          
          <div class="control-group">
            <!-- E-mail -->
            <label class="control-label" for="email">E-mail</label>
            <div class="controls">
              <input
                type="text"
                id="email"
                name="email"
                placeholder=""
                class="input-xlarge"
                v-model="email"
              />
              <p class="help-block">Please provide your E-mail</p>
            </div>
          </div>
          <div class="control-group">
            <!-- Password-->
            <label class="control-label" for="password">Password</label>
            <div class="controls">
              <input
               v-model="password"
                type="password"
                id="password"
                name="password"
                placeholder=""
                class="input-xlarge"
              />
              <p class="help-block">Password should be at least 4 characters</p>
            </div>
          </div>
          <div class="control-group">
            <!-- Button -->
            <div class="controls">
              <button class="btn btn-danger" @click="closeLogin">close</button>
              <button class="btn btn-success" @click="signIn" type="button">Login</button>
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
      username:"",
      email:"",
      password:"",
      isloginShow: false,
      form:".form",
      sUrl:process.env.serverHttp,
    };
  },
  computed:{
     users() {
      return this.$store.getters['users/users']
    }
  },
  created(){
           
  },
  mounted() { 
        // console.log(this.$store.getters['sanctum/getToken'])
         this.$root.$on('isLogin', (isLogin) => { 
              const myPromise = async () => {
                  return await new Promise((myResolve, myReject)  => {                       
                             
                                 this.isloginShow = isLogin;
                                 myResolve(isLogin);   
                                                  
                  });
              }
              myPromise().then((v) => {
                    var tl = gsap.timeline();               
                    // tl.set(this.form,{ startAt:{ x:0} },"r")
                    tl.from(this.form, { x:480,opacity:0.95,duration:2,ease:"none"},"r");
                    // tl.to(this, { startAt: { isRegistrShow:value}},"isfrom" );
              }); 
          
          });         
  },
  methods: {    
      async closeLogin(e){
           e.preventDefault();
           this.$root.$emit('closeLogin',true);
          var tl = gsap.timeline();               
          // tl.set(this.form,{ startAt:{ x:0} },"r")
          const animation = await tl.to(this.form, { x:500,duration:2,display:'none'},"r");        

          if(animation){
              this.isloginShow = false;
          }       
     
       },

      async signIn(){
           
             if (this.$store.getters['sanctum/getToken']==204) {                 
                  try{
                
                  var response = await this.$axios.$post(this.sUrl+'/api/login',{                   
                      "email":this.email,
                      "password":this.password                     
                   }); 

                 
                  }catch(error){
                       if(error.response.status==422){
                          this.$root.$emit('errorLoginData',error.response.data.errors)
                        }
                  }
                
              }           
       }
  },
};
</script>

<style scoped>

.main-login{
     position: relative;
     top: 0px;
     display: flex;
     justify-content: flex-end;
     z-index: 9999;
    
}
.form{
    position: fixed;
    background: white;
    padding: 25px;
    border: 0.5px solid gray;
    top: 47px;
    right:2px;
    opacity:0.98;
    border-radius: 5px;
}
</style>
