<template>
  <div class="back">
    <div class="model" :class="{sale : theme ==='dark'}">
      <h1>Helo to page of brahim</h1>
      <p>i'm learning the vue js with css there is tools of frentend devloper</p>
    </div>
  </div>
</template>
<script>
export default {
  props:['msg','theme']
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