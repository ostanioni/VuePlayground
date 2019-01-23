<template>
<table class="katex">
  <thead></thead>
  <tr>
    <td id="el">
      <katex-element expression="\textcolor{blue}{\LARGE{\lfloor} \bf x \scriptstyle x}"/>
      x
      <katex-element expression="\rfloor"/>
    </td>
    <td id="el2">
      <katex-element expression="\LARGE{\lceil} \bold{x}"/>
      x
      <katex-element expression="\rceil"/>
    </td>
    <td id="el3">
      <katex-element expression="\lg \bf N"/>
    
    </td>
  </tr>
  <tr>
    <katex-element expression="\bf F_N"/>
  </tr>
  <tr>
    <katex-element expression="\scriptstyle \large{H_N}"/>
  </tr>
  <tr>
    <katex-element expression="\scriptstyle \large{e = 2.71828 \dots}"/>
  </tr>
</table>
</template>
<script>
import katex from 'katex';
export default {
  name: "TheTableOfFunction",
  data(){
    return {
      KaTeX: katex.render,
      rawHtml: ''
    }
  },
  mounted: function(){
        // this.KaTeX("c = \\pm\\sqrt{a^2 + b^2}", document.getElementById("el"), { throwOnError: true })
       //  this.KaTeX("\\left(\\LARGE{AB}\\right)", document.getElementById("el2"), { throwOnError: true })
        // let html = this.KaTeX.renderToString("c = \\pm\\sqrt{a^2 + b^2}", { throwOnError: false });
        // el.innerHTML = html;
  },
}
</script>
<style lang="postcss" scoped>
.katex { font-size: 1.1em; }
</style>


