<template>
<div>
  <ul>
    <li v-for="user in users">{{ user.name }}</li>
  </ul>
</div>
</template>
<style lang="postcss">

</style>
<script>
export default {
  data(){
    return {
      Contents: [],
      loading: true,
      errored: false,
    }
  },
  methods: {

  },
  created(){
    Vue.axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data.bpi;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  mounted(){
    
  },
}
</script>


