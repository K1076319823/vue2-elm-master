<template>
    <div class="balance">
        <div class="one">
          <router-link :to="{path:'/My'}"><span class="glyphicon glyphicon-chevron-left"></span></router-link>
         <b>我的余额</b>
        </div>
      <div class="two">
        <div class="zhong clearfix">
          <div>
            <div class="left">当前余额 <br>
             <span>0.00</span>元</div>
            <div class="right">
              <img src="../../images/description.png" />
            <router-link :to="{path:'/Baspask'}">余额说明</router-link>
            </div>
          </div>
          <button class="btn">提现</button>
        </div>

      </div>
      <div class="there">
        交易明细
        <div class="lu">
          <img src="../../images/no-log.png" />
         <p>暂无明细记录</p>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "Balance"
    }
</script>

<style scoped>
.one{
  text-align: center;
  background-color: blue;
  color:#fff;
  line-height: 2rem;
  font-size:0.8rem;
}
  .one span{
    line-height: 2rem;
    float:left;
    font-size:0.5rem;
  }
  .two{
    background: blue;
    padding-bottom:0.5rem;
  }
  .two .zhong{
    width:96%;
    margin:0 auto ;
    background-color: #fff;
    border-radius: 0.2rem;
    padding:0.4rem;

  }
.left{
  float:left;
  width:50%;

}
.right {
  float: left;
  width: 50%;
  color: blue;
}
.left span{
  font-size:2rem;
}
  .right{
    text-align: right;
  }
  .right img{
    width:0.7rem;
    vertical-align: top;
  }
  .btn{
    width:100%;
    height:2rem;
    background-color: #CCC;
    color: white;
    font-size:0.8rem;
  }
  .there{
    padding:0.4rem;
  }
  .there div{
    padding:3rem 0;
    text-align:center;
  }
.there div img{
  width:9rem;
  margin:0.6rem 0;
}
</style>
