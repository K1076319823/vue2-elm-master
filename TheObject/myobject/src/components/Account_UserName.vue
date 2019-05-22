<template>
  <!-- 修改用户名 -->
  <div>
    <header class="header text-center">
        <span class="pull-left clearfix">
          <router-link :to="{path:'/Account'}">
<img src="../../images/左箭头.png"/>
          </router-link>
        </span>修改用户名
    </header>
    <div style="padding: 0.6rem;">
      <input type="text"
             style="width: 100%;height: 1.8rem;background:rgb(235, 235, 235);font-size: 0.7rem;padding-left: 0.2rem;outline: none"
             placeholder="输入用户名" v-model="Input" @input="SetMsg" :style="{border:BorderColor}">
      <p style="margin: 0.4rem 0;" :style="{fontsize:FontSize},{color:FontColor}">用户名只能修改一次 (5-24字符之间)</p>
      <button class="btn"
              style="display: inline-block;width: 100%;height: 2rem;background:rgb(49, 144, 232);font-size: 0.8rem;outline: none;" :style="{color:BtnColor}"
              @click="under()" :disabled="pointer">确认修改
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Account_UserName",
    data() {
      return {
        Input: '',
        BorderColor: '1px solid rgba(0,0,0,0.1)',
        FontColor: 'gray',
        FontSize: '0.3rem',
        pointer: '',   // 禁止点击
        BtnColor: '#c9dada'
      }
    },
    methods: {
      under(put) {
        put = this.Input
        this.$store.state.Input = put

        this.$router.push({
          path: '/Account'
        })
      },
      SetMsg() {

        let Inputlength = this.Input.length
        if (Inputlength <= 5 ) {
          this.BorderColor = '1px solid red',
            this.FontColor = 'red',
            this.FontSize = '0.5rem',
          this.pointer = true

        } else if (Inputlength > 24) {
          this.BorderColor = '1px solid red',
            this.FontColor = 'red',
            this.FontSize = '0.5rem',
          this.pointer = true,
            this.BtnColor = '#c9dada'
        } else {
          this.BorderColor = '1px solid rgba(0,0,0,0.1)',
            this.FontColor = 'gray',
            this.FontSize = '0.3rem',
            this.BtnColor = 'white',
            this.pointer = false
        }
      }
    }
  }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 2rem;
    background-color: rgb(49, 144, 232);
    line-height: 2rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: white;

  }

  .header img {
    width: 0.8rem;
    height: 0.8rem;
  }
</style>
