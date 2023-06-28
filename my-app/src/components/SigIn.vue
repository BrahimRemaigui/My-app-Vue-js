<template>
  <h1>Sig In </h1>
  <form>
  <label for="">Email</label>
  <input type="text" v-model="email" >

  <label for="">Password</label>
  <input type="Password" v-model="password" >
  <label >Role</label>
  <select v-model="role">
    <option value="devloper"> Web Devloper</option>
    <option value="designer"> Web Designer</option>
  </select>
  <p>Your email is {{ email }}</p>
  <p>Your role is {{ role }}</p>


</form>
</template>

<script>
export default {
data(){
    return{
        email:'',
        password:'',
        role:''
    }
}
}
</script>

<style>
form{
    max-width:420px;
    margin:30px auto;
    background: white;
    text-align: left;
    padding:40px;
    border-radius:10px;

}
label{
    color:#171515;
    display: inline-block;
    margin:25px 0 15px;
    font-size:0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;

}
input{
    display: block;
    padding:10px 6px;
    width:100%;
    box-sizing: border-box;
    border:none ;
    border-bottom: 1px solid #ddd ;
    color:#555;
}
input[type='checkbox']{
    display: inline-block;
    width:16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}

</style>