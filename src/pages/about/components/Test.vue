<template>
  <div class="phone">
    <!-- 头部导航 -->
    <div class="header">
      <div class="header-left">
        <img src="./assets/Page 1 Copy@2x.png" alt />
        <div>
          <h3>小怪艾克</h3>
          <p>Monster Ike</p>
        </div>
      </div>
      <div class="header-right">
        <p @click="admin">首页</p>
        <p style="margin-left:0.21rem; color:#222222; font-weight:bold;" @click="about">关于我们</p>
      </div>
    </div>
    <!-- 视频介绍 -->
    <div class="video-gs">
      <video controls poster="./assets/WechatIMG44.png">
        <source
          src="https://playboom.oss-cn-beijing.aliyuncs.com/video/%E5%AE%A3%E4%BC%A0%E7%89%87%EF%BC%8860mbps%EF%BC%89.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <!-- 标题 -->
    <div class="steam_title">
      <div class="cont">
        <span></span>
        <h3>小怪艾克的使命</h3>
        <p>让孩子科学、快乐地长大，成为更好的自己</p>
      </div>
    </div>
    <!-- 标题 -->
    <div class="steam_title" style="margin-top:0.5rem;">
      <div class="cont">
        <span></span>
        <h3>小怪艾克发展历程</h3>
      </div>
    </div>
    <!-- 发展历程 -->
    <div class="content">
      <div>
        <h4>王应运，黄娟夫妇</h4>
        <p>
          改革开放后第一批海归学前教育专家，引进欧美教育理念与教师队伍。
        </p>
      </div>
      <div>
        <h4>2008年</h4>
        <p>
        在北京创立“孩子的故事”国际幼儿园，全国覆盖10家校区，国际学生约占10%，是国际幼儿园著名品牌。
        </p>
      </div>
         <div>
        <h4>十年</h4>
        <p>
          海外机构合作与积累的教育成果，不应仅仅局限在幼儿园围墙之内
        </p>
      </div>
         <div>
        <h4>2015年</h4>
        <p>
        创办小怪艾克品牌，一经上线，迅速成为妈妈圈内的爆品，让更多的孩子爱上了学习！
        </p>
      </div>
    </div>
    <!-- 哈佛教研团队 -->
    <div class="steam_title" style="margin-top:1rem;">
      <div class="cont">
        <span></span>
        <h3>中美加 研发团队</h3>
      </div>
    </div>
    <!-- 教师 -->
    <div class="teacher">
      <div class="teacher_img">
        <img src="./assets/2.png" alt />
        <h3>夏天纯</h3>
        <h4>课程与活动设计</h4>
        <div>
          <p>哈佛大学早期教育专业硕士，</p>
          <p>美国范德堡大学儿童认知心理学学士。</p>
        </div>
      </div>
      <div class="teacher_img">
        <img src="./assets/3.png" alt />
        <h3>马慧明</h3>
        <h4>研发总监</h4>
        <div>
          <p>小怪艾克产品研发总监，</p>
          <p>天津师范大学学前教育专业本硕连读。</p>
          <p>曾任英国著名哈罗供血早期教育中心等</p>
          <p>国际教育机构教师课程设计助理。</p>
        </div>
      </div>
    </div>
    <div class="teacher">
      <div class="teacher_img">
        <img src="./assets/1.png" alt />
        <h3>Juan Huang</h3>
        <h4>首席教育家</h4>
        <div>
          <p>2003年毕业于加拿大</p>
          <p>Concordia University，</p>
          <p>儿童发展硕士。</p>
          <p>历任加拿大蒙特利尔市政厅幼儿园、</p>
          <p>Little Learner等机构园长，</p>
          <p>全球教育家协会北美幼教分会主席。</p>
        </div>
      </div>
      <div class="teacher_img">
        <img src="./assets/4.png" alt />
        <h3>Michael Sharpe</h3>
        <h4>首席北美外教</h4>
        <div>
          <p>加拿大籍，</p>
          <p>卡尔加里大学心理学学士，</p>
          <p>前清华大学附属中学资深外教老师。</p>
          <p>拥有TESL证书和,</p>
          <p>18年国际幼儿园ESLj教学经验</p>
        </div>
      </div>
    </div>
    <!-- 关于我们 -->
    <div class="guanzhu">
      <div @click="download">
        <img src="./assets/Page 1 Copy@2x.png" alt="">
        <p>下载小怪艾克</p>
      </div>
      <div>
        <img src="./assets/WechatIMG208.jpeg" alt="">
        <p>关注小怪艾克</p>
      </div>
    </div>
    <!-- 公司 -->
    <div class="company">
      <img src="./assets/Page 1 Copy@2x.png" alt="">
      <h3>玩加网络科技有限公司</h3>
      <p>公司地址：北京市望京soho塔2 B 1803</p>
      <p>服务热线：400-666-1023</p>
      <p>加入我们：<a href="mailto:wangsongtao@playplus.cn">wangsongtao@playplus.cn</a></p>
    </div>
  </div>
</template>

<script>
import Interface from "../../../utils/interface";
import { Share } from "../../../utils/WechatApi";
window.onload = function() {
  Share({
    title: "小怪艾克家庭STEAM美式启蒙",
    desc: "让孩子爱上学习",
    logo: "http://www.playstory.cn/logo.71ba063f.png"
  });
};
export default {
  name: "Hello-Parcel",
  data() {
    return {};
  },
  methods:{
    download(){
      window.location.href="https://a.app.qq.com/o/simple.jsp?pkgname=cn.playstory.playplus"
    },
     admin() {
      window.location.href =
        "http://www.playstory.cn/t/";
    },

     about() {
      window.location.href =
        "http://www.playstory.cn/about/";
    },

  },
  mounted() {}
};
</script>

<style lang="less">
@import "./style.less";
</style>


