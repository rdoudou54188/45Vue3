<template>
    <div >
        <p>1.请问您的性别是：</p>
        <input type="radio" name="sex" value="男" v-model="choose" @click="save"/><span>男</span>
        <input type="radio" name="sex" value="女" v-model="choose" @click="save"/><span>女</span>
        <input type="radio" name="sex" value="保密" v-model="choose" @click="save"/><span>保密</span>
        <div id="body">
        <p @click="doClick()">下一步</p>
        <p @click="rest()">重置</p>
        </div>
    </div>
    <!--<div id="body">-->
        <!--<p>下一步</p>-->
        <!--<p>重置</p>-->
    <!--</div>-->
</template>

<script>
    export default {
        name: "Sex",
        data(){
            return {
                checked1:false,
                choose:"男"
            }
        },
        methods:{
            doClick(){
                this.$router.push('/Hobby');
            },
            rest(){
                  this.choose="男"
            },
            save (event) {
                let radioVal = event.target.value;
                this.$store.commit('addsex',radioVal)
                console.log(this.$store.state.sex);
            }
        }
    }
</script>

<style scoped>
    #body p{ color: rgba(0,55,247,0.53); font-size: 20px; font-weight: bolder;display:inline-block;width: 100px}
</style>