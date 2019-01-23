<template>
<div>
  <pre class="code_C" @contextmenu="(e)=>e.preventDefault()">
  #include &lt;stdio.h&gt;
  int main(int argc, char *argv[]) {
    printf("Hello from C component!");
  }
  </pre>
</div>
</template>
<script>
export default {
  name: "C",
  data(){
    return {

    }
  }  
}
</script>
<style lang="postcss" scoped>
.code_C {
  font-family: monospace;
  font-size: 1.5rem;
}
</style>


