<template>
  <div class="back" @click.self="closeHelloWorld">
    <div class="model" :class="{sale : theme ==='dark'}">
      <slot></slot>
    <div class="action">
      <slot name="links"></slot>
    </div>
      
    </div>
  </div>
</template>
<script>
export default {
  props:['msg','theme'],
  data(){

  },methods:{
    closeHelloWorld(){
      this.$emit('close')
    }
  }
  }

</script>
<style  scoped>
.model.sale{
background: rgb(36, 35, 35);
color: white;

}

.back{
  background: rgb(0, 0, 0,0.5);
  width: 100%;
  height: 100%;
  position: fixed;
}
.model{
  top: 0;
  width: 450px;
  height: 250px;
  margin: 100px auto;
  background: white;
  border-radius:10px ;
}


</style>