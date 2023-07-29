<template>
  <h1>Sig In </h1>
  <form @submit.prevent="handSu">
  <label for="">Email</label>
  <input type="text" v-model="email" >

  <label for="">Password</label>
  <input type="Password" v-model="password" >
  <div v-if="passwordError" class="error">{{ passwordError }}</div>
  <label >Role</label>
  <select v-model="role">
    <option value="devloper"> Web Devloper</option>
    <option value="designer"> Web Designer</option>
  </select>
  <div class="terme">
    <input type="checkbox" required v-model=terms>
    <label>accept terms and conditiions </label>
  </div>
  <label>Your Skills</label>
  <div class =skills>
    <input type="text" v-model=teamSkils @keyup=addSkill>
  </div>
  <div v-for="skill in skills" :key ="skill" class="pill">
  <span @click="deleteSkills(skill)">{{ skill }}</span>
  </div>
  <br>
  <label>Your Nationalities</label>
  <div class="Nationality ">
    <input type="checkbox" value="Algeria" v-model=sexe>
    <label>Algeria </label>
    <input type="checkbox" value="Tunisia" v-model=sexe>
    <label>Tunisia </label>
    <input type="checkbox" value="French" v-model=sexe>
    <label>French </label>
  </div>
  <div class="submit">
    <button>Create Account</button>
  </div>

</form>
<p>Your email is {{ email }}</p>
  <p>Your role is {{ role }}</p>
  <p>Terms is {{ terms }}</p>
  <p>Your Nationalies are  {{ sexe }}</p>
</template>

<script>
export default {
data(){
    return{
        email:'',
        password:'',
        role:'',
        terms:false,
        sexe:[],
        teamSkils:"",
        skills:[],
        passwordError:''
    }
},methods:{
 addSkill(e) {
  if(e.key==='.'&& this.teamSkils){
    if(!this.skills.includes(this.teamSkils))
    this.skills.push(this.teamSkils)
    this.teamSkils=''
  }
 },
 deleteSkills(skills){
 this.skills = this.skills.filter((item)=> {return skills!==item})
 },
 handSu(){
 this.passwordError =this.password.length>5 ? '' : 'password mast be at least 6 char long'

}
 
}
}
</script>

<style>
*{
text-transform: uppercase;
}
form{
    max-width:620px;
    margin:30px auto;
    background: rgb(175, 165, 165);
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
input,select {
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
    margin: 0 13px 0 0;
    position: relative;
    top: 2px;
    background: blue;
}
.pill{
display: inline-block;
margin: 20px 10px 0 0;
padding :6px 12px;
background: #eee;
border-radius: 20px;
font-size:12px;
letter-spacing: 1px;
font-weight: bold;
color: #777;
cursor:pointer;
}
 button{
  background: #0b6dff;
  border:0;
  padding: 10px 20px;
  margin-top: 20px;
  color:white;
  border-radius: 20px;
}
.submit{
  text-align: center;
}
.error{
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}


</style>