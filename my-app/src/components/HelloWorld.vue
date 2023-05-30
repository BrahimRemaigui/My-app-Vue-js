<template>
  <div class="back" @click.self="closeHelloWorld">
    <div class="model" :class="{sale : theme ==='none'}">
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
<style  >
.model.sale{
background: rgb(36, 35, 35);
color: white;
}
.model .action{
  margin: 10px;
  padding: 20px ;
}
.model .action a{
  color: #333;
  margin: 3px;
  padding: 10px 20px;
  text-decoration: none;
  border: 1px solid #adacac;
  border-radius:4px ;
}
.model .action a:hover{
  background: #03cfb4;
}

.model h1{
   color: #03cfb4;
   width: fit-content;
  
}
.back{
  background: rgb(0, 0, 0,0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  
}
.model{
  padding: 30px;
  top: 0;
  width: 420px;
  height: 220px;
  margin: 100px auto;
  background: white;
  border-radius:10px ;
  
}


</style>