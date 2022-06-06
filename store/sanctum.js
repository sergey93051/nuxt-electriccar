export const state = () => ({
    token: []
  })
  
  export const mutations = {
    newToken(state, sanctumToken) {
      state.token = sanctumToken;
    }
  }
  
  export const actions = {
    async csrfToken({commit}) {
      var response = '';
      try{
         response = await this.$axios.get(process.env.serverHttp + '/sanctum/csrf-cookie');      
       }
      catch{
        console.error('the connection to the server was incorrect'); 
        response = '419'
      }
       commit('newToken', response.status)
    }
  }
  
  export const getters = {
         getToken(state){
             return  state.token;
         }
  }