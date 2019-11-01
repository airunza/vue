<template>
  <div class="phone">
    <div id="bg-op">
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
          <p style="color:#222222; font-weight:bold;" @click="admin">首页</p>
          <p style="margin-left:0.21rem;" @click="about">关于我们</p>
        </div>
      </div>
      <!-- 视频背景 -->
      <div class="video_bg">
        <video
          autoplay
          loop
          muted
          style="opacity: 1;"
          id="aikevideo"
          playsinline
          webkit-playsinline="true"
          poster="https://playboom.oss-cn-beijing.aliyuncs.com/video/%E6%89%8B%E6%9C%BA%E7%AB%AF%E5%BC%80%E5%B1%8F%E5%8A%A8%E5%9B%BE.gif"
        >
          <source
            src="https://playboom.oss-cn-beijing.aliyuncs.com/video/%E5%BA%8F%E5%88%97%2001_1.mp4"
            type="video/mp4"
          />
        </video>
        <!-- 背景文字 -->
        <div class="video-title">
          <div class="title">
            <h3>
              美式
              <br />STEAM探索课
            </h3>
            <p>家庭订阅式</p>
          </div>
          <div class="nav">
            <span>动手能力</span>
            <span>STEAM</span>
            <span>北美外教</span>
          </div>
        </div>
      </div>
      <!-- 12个月 -->
      <div class="month">
        <div class="cont">
          <div>
            <img src="./assets/01.png" alt />
            <p>全年12期</p>
          </div>
          <div>
            <img src="./assets/02.png" alt />
            <p>12个主题</p>
          </div>
          <div style="margin:0;">
            <img src="./assets/03.png" alt />
            <p>每月到家</p>
          </div>
        </div>
      </div>
      <!-- 轮播图 -->
      <div class="cont-carouse">
        <!-- 轮播 -->
        <div class="swiper-container1">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item,index) in this.list"
              :key="index"
              @click="swiperClick(item.id)"
            >
              <div class="swiper-img">
                <img v-lazy="item.img" alt v-show="item.id !=2" />
                <img v-lazy="item.img" alt v-show="item.id ==2" class="tiyan" />
                <div class="swiper-cont" v-if="item.id!=2">
                  <p class="swiper-title">{{item.etitle}}</p>
                  <p>
                    <b>{{index+1}}.</b>
                    {{item.title}}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <!-- 视频介绍 -->
      <div class="video-gs">
        <video controls poster="./assets/video_cover_1.4c757712.png">
          <source
            src="https://playboom.oss-cn-beijing.aliyuncs.com/video/video_123.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <!-- 标题 -->
      <div class="steam_title">
        <div class="cont">
          <span></span>
          <h3>奥巴马亲自站台STEAM</h3>
          <p>美国全面普及STEAM教育</p>
        </div>
      </div>
      <div class="steam_img">
        <img src="./assets/74.png" alt />
      </div>
      <!-- 3~6岁 -->
      <div class="old_steam">
        <div class="old_top">
          <img src="./assets/webwxgetmsgimg-1 copy@2x.png" alt />
          <div>
            <h3>
              3～6岁大脑发育的
              <br />关键期
            </h3>
            <!-- <p>美国全面普及STEAM教育</p> -->
          </div>
        </div>
        <div class="old_img">
          <img src="./assets/857.png" alt />
          <div>
            <p>让孩子“动手”是促进大脑发育最有效的方式</p>
            <!-- <p>％90的大脑发育，在5岁前已经完成。</p> -->
          </div>
        </div>
      </div>
      <!-- 标题 -->
      <div class="steam_title">
        <div class="cont">
          <span></span>
          <h3>专注力培养</h3>
          <p>沉浸式体验，专注力持续时间更长</p>
        </div>
      </div>
      <div class="steam_img2">
        <img src="./assets/54.png" alt />
      </div>
      <!-- 地道口语 -->
      <div class="ky_steam">
        <div class="steam_title yanse">
          <div class="cont">
            <span></span>
            <h3>地道口语家中学</h3>
            <p>北美外教，带着孩子在家里做实验</p>
          </div>
        </div>
        <div class="ky_img">
          <img src="./assets/165332487 3 copy@2x.png" alt />
        </div>
      </div>
      <!-- 哈佛教研团队 -->
      <div class="steam_title" style="margin-top:1.54rem;">
        <div class="cont">
          <span></span>
          <h3>哈佛教研团队</h3>
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
      <div class="img-t">
        <div>
          <img v-lazy="item.img" alt v-for="(item,index) in imgUrl" :key="index" />
        </div>
      </div>
      <!-- 底部 -->
      <div class="bottom_bar" id="bar">
        <img src="./assets/10.png" alt />
        <div class="title">
          <h3>让孩子爱上学习</h3>
          <div @click="tiyan">
            <span>
              <b>¥39.9 </b>  <i>¥399</i>限时体验
             
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹窗 -->
    <div class="alert" v-show="show==true">
      <img src="./assets/弹窗.png" alt class="alert-img" />
      <div @click="time">
        <span>¥39.9限时抢购</span>
      </div>、
      <img src="./assets/关闭 2.png" alt class="guan" @click="guan" />
    </div>
  </div>
</template>

<script>
import Interface from "../../../utils/interface";
import { Share } from "../../../utils/WechatApi";
// import Swiper from "swiper";
// import "swiper/dist/css/swiper.css";
import animate from "animate.css";
import $ from "jquery";
window.onload = function() {
  Share({
    title: "小怪艾克家庭STEAM美式启蒙",
    desc: "让孩子爱上学习",
    logo: "http://www.playstory.cn/logo.71ba063f.png"
  });
};
$(function() {
  $(window).scroll(function() {
    //为了保证兼容性，这里取两个值，哪个有值取哪一个
    //scrollTop就是触发滚轮事件时滚轮的高度
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    // console.log("滚动距离" + scrollTop);
    if (scrollTop >= 800) {
      $("#bar").addClass("animated fadeIn");
      $("#bar").css("display", "block");
    }
  });
  $("body").trigger("touchstart");
  $("body").on("touchstart", function() {
    var bofang = document.getElementById("aikevideo");
    console.log(bofang);
    bofang.play();
    // console.log("用户手指触摸到屏幕...");
  });
  $("body").on("touchmove", function() {
    console.log(1);
  });
  var mySwiper = new Swiper(".swiper-container1", {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    slidesPerView: "auto",
    autoplay: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    centeredSlides: true,
    spaceBetween: 5,
    // 如果需要分页器
    pagination: {
      el: ".swiper-pagination"
      // dynamicBullets:'true'
    }
  });
});

export default {
  name: "Hello-Parcel",
  data() {
    return {
      show: false,
      list: [
        {
          id: "4",
          title: "色彩王国",
          etitle: "Kingdom of Colors",
          img: require("./assets/img/1.png")
        },
        {
          id: "5",
          title: "身体的秘密",
          etitle: "Secrets of Our Body",
          img: require("./assets/img/2.png")
        },
        {
          id: "6",
          title: "丛林深处",
          etitle: "Deep in the Jungle",
          img: require("./assets/img/3.png")
        },
        {
          id: "15",
          title: "春夏秋冬",
          etitle: "Four Seasons",
          img: require("./assets/img/4.png")
        },
        {
          id: "16",
          title: "伟大的发明",
          etitle: "Our Great Inventions",
          img: require("./assets/img/5.png")
        },
        {
          id: "17",
          title: "穿越时空",
          etitle: "Travel through time",
          img: require("./assets/img/6.png")
        },
        {
          id: "18",
          title: "城市街区",
          etitle: "Town and City",
          img: require("./assets/img/7.png")
        },

        {
          id: "19",
          title: "我们的家",
          etitle: "Around the House",
          img: require("./assets/img/8.png")
        },
        {
          id: "20",
          title: "航海计划",
          etitle: "Exploring the Ocean",
          img: require("./assets/img/9.png")
        },

        {
          id: "21",
          title: "物质三态",
          etitle: "Three States of Matter",
          img: require("./assets/img/10.png")
        },
        {
          id: "22",
          title: "数学帮帮忙",
          etitle: "Math Helps Us",
          img: require("./assets/img/11.png")
        },
        {
          id: "23",
          title: "太空漫步",
          etitle: "Taking A Walk in Space",
          img: require("./assets/img/12.png")
        },
        {
          id: "2",
          title: "小怪艾克美式百科启蒙体验课",
          etitle: "",
          img: require("./assets/img/体验课 2.png")
        }
      ],
      imgUrl: [
        {
          img: require("./assets/001.png")
        },
        {
          img: require("./assets/7.png")
        },
        {
          img: require("./assets/8.png")
        },
        {
          img: require("./assets/002.png")
        },
        {
          img: require("./assets/003.png")
        },
        {
          img: require("./assets/证书.png")
        },
        {
          img: require("./assets/报告.png")
        },
        {
          img: require("./assets/004.png")
        }
      ]
    };
  },
  methods: {
    admin() {
      window.location.href =
        "http://www.playstory.cn/t";
    },
    swiperClick(item) {
      if (item == 2) {
        window.location.href =
          "https://app.playplus.cn/playboom/wechat/course/distribute/?template_id=11&usercode=50073";
      } else {
        window.location.href =
          "https://app.playplus.cn/playboomuat/h5/share/experiments/?id=" +
          item;
      }

      // console.log(item.id)
    },
    about() {
      window.location.href =
        "http://www.playstory.cn/about/";
    },
    tiyan() {
      this.show = true;
      $("#bg-op").addClass("bg-op");
    },
    guan() {
      this.show = false;
      $("#bg-op").removeClass("bg-op");
    },
    time() {
      window.location.href =
        "https://app.playplus.cn/playboom/wechat/course/distribute/?template_id=11&usercode=50073";
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang="less">
@import "./style.less";
// @import "./assets/animate.css";
</style>


