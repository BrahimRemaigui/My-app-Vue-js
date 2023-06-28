<template>
<div>
    <button @click.left="ShowModel" class="Butt">{{ showWord }}</button>
    <div v-show="showModel">
    <HelloWorld theme="dark" @close="ShowModel">
      <template  v-slot:links>
          <a href="#">sign up now</a>
          <a href="#">more info</a>

      </template>
      <h1>{{ msg }}</h1>
      <p>i'm learning the vue js with css there is tools of frentend devloper</p>
    
    </HelloWorld>
    </div>

    <button @click="ShowModel2" class="Butt">Sig In </button>
    <div v-show="model2">
     <Sigin></Sigin>
    </div>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Sigin from './components/SigIn.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,Sigin
  },
  data(){
    return{
      showModel : false,
      model2: false,
      showWord:'Click to show Model',
      msg:"Welcome to Your Vue.js App"
    }
  },methods:{
    ShowModel(){
      this.showModel=!this.showModel;
      if(this.showModel==true)
        this.showWord='Click to hide Model'
      else
      this.showWord='Click to show Model'
    },
    ShowModel2(){
      this.model2=!this.model2;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.Butt{
  width: fit-content;
  padding: 10px 20px;
  background: #03cfb4;;
  border:3px solid #03cfb4; ;
  border-radius:10px;
  font-weight: 600;margin-bottom: 20px;
  font-size:16px ;
  transition: 0.5s;
  margin-left: 10px;
}
.Butt:hover{
  transform: scale(1.1) rotate(4deg);

}
</style>
