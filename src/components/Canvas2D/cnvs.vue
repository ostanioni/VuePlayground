<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>
<script>
export default {
  // el: '#tutorial',
  name:'cnvs',
  data(){
    return {

    }
  }
  ,
  created: ()=>{}
  ,
  mounted: function CnvsInit() {
      var canvas = document.getElementById('tutorial');
      if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        // drawing code here
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 55, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 55, 50);

        ctx.strokeRect(50,50,50,50);
      } else {
      // canvas-unsupported code here
      }
    }
  ,
  methods:{
    
  }  
}
</script>
<style lang="sass" scoped>

</style>


