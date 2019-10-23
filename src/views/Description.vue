<template>
    <div>
    <p>3.请介绍一下你自己</p>
    <textarea v-model="description1" rows="10" cols="20">
    </textarea>
        <div id="body">
            <p @click="doClick()">上一步</p>
            <button type="submit" @click="save" style="background-color: transparent; border: none;">提交</button>
            <p @click="rest()">重置</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Description",

        data(){
            return {
                description1:'',
            }
        },
        methods:{
            doClick(){
                this.$router.push('/Hobby');
            },
            save(){
                this.$store.commit('addDescription',this.description1)
                this.$router.push('/Result')
            },
            rest(){
                this.description1='';
            }
        }
    }
</script>

<style scoped>
    #body p{ color: rgba(0,55,247,0.53); font-size: 20px; font-weight: bolder;display:inline-block;width: 100px}
    #body button{ color: rgba(0,55,247,0.53); font-size: 20px; font-weight: bolder;display:inline-block;width: 100px}
</style>