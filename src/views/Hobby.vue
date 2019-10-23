<template>
    <div>
        <p>2.请选择您的兴趣爱好</p>
        <input type="checkbox" name="1" value="看书" v-model="hobby" @click="save"/>看书
        <input type="checkbox" name="1" value="游泳" v-model="hobby" @click="save"/>游泳
        <input type="checkbox" name="1" value="跑步" v-model="hobby" @click="save"/>跑步
        <input type="checkbox" name="1" value="爬山" v-model="hobby" @click="save"/>爬山

        <div id="body">
            <p @click="doClick()">下一步</p>
            <p @click="doClick1()">上一步</p>
            <p @click="rest">重置</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Hobby",

        data(){
            return {
                hobby:[],
            }
        },
        methods:{
            doClick(){

                this.$router.push('/Description');
            },
            doClick1(){

                this.$router.push('/');
            },
            save(event){
                let checkboxVal=event.target.value;

                this.$store.commit('addHobby',checkboxVal)
                console.log(this.$store.state.hobby)
            },
            rest(){
                this.hobby=[]
                this.$store.commit('del')
            }
        }
    }
</script>

<style scoped>
    #body p{ color: rgba(0,55,247,0.53); font-size: 20px; font-weight: bolder;display:inline-block;width: 100px}
</style>