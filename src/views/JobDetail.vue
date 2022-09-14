<template>
  <div id="jobdetail">
    <div class="jobdetail">
      <div class="jobdetail__header">
        <div class="jobdetail__header-left">
          <img :src="backicon" class="jobdetail__header-left backicon" />
          <img :src="greenrectangle" class="jobdetail__header-left greenrec" />
          <span>Thông tin job</span>
        </div>
        <div v-if="isAdmin" class="jobdetail__header-right">
          <img :src="editicon" />
          <img :src="delicon" />
        </div>
      </div>
      <div class="jobdetail__header2">
        <div class="jobdetail__header2-left">
          <img :src="orangerectangle" />
          <span>Ứng viên</span>
        </div>
        <div v-if="!isRHR" class="jobdetail__header2-right">
          <img :src="addicon" />
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content__left">
        <div class="content__left header">
          <h1>Junior Front-end Developer</h1>
          <p>Fabbi JSC - F1 - SE1</p>
          <hr />
        </div>
        <div class="content__left status">
          <div class="content__left-number">
            <p>Số lượng</p>
            <h1>{{ status.number }}</h1>
          </div>
          <div class="content__left-prioritized">
            <p>Mức độ ưu tiên</p>
            <h1 :class="status.prioritized=== 'Gấp' ? 'text-danger':''">{{ status.prioritized }}</h1>
          </div>
          <div class="content__left-dayrequest">
            <p>Ngày request</p>
            <h1>{{ status.dayrequest }}</h1>
          </div>
          <div class="content__left-dayonboard">
            <p>Ngày onboard</p>
            <h1>{{ status.dayonboard }}</h1>
          </div>
          <div class="content__left-status1">
            <p>Trạng thái</p>
            <h1>{{ status.status }}</h1>
          </div>
        </div>
        <hr />
        <div class="content__title">
          <span>Mô tả công việc</span>
        </div>
        <div class="content__left body">
          <p>Front-end Developer responsibilities include:</p>
          <li>
            Using markup languages like HTML to create user-friendly web pages
          </li>
          <li>Maintaining and improving website</li>
          <li>Optimizing applications for maximum speed</li>
          <p>Responsibilities:</p>
          <li>
            Using markup languages like HTML to create user-friendly web pages
          </li>
          <li>Maintaining and improving website</li>
          <li>Optimizing applications for maximum speed</li>
          <li>Design mobile-based features</li>
          <li>
            Collaborate with back-end developers and web designers to improve
            usability
          </li>
          <li>
            Get feedback from, and build solutions for, users and customers
          </li>
          <li>Write functional requirement documents and guides</li>
          <li>Create quality mockups and prototypes</li>
          <li>Help back-end developers with coding and troubleshooting</li>
          <li>Ensure high quality graphic standards and brand consistency</li>
          <li>Stay up-to-date on emerging technologies</li>
          <p>Requirements and skills:</p>
          <li>Proven work experience as a Front-end developer</li>
          <li>Hands on experience with markup languages</li>
          <li>Experience with JavaScript, CSS and jQuery</li>
          <li>Familiarity with browser testing and debugging</li>
          <li>
            In-depth understanding of the entire web development process
            (design, development and deployment)
          </li>
          <li>Understanding of layout aesthetics</li>
          <li>Knowledge of SEO principles</li>
          <li>
            Familiarity with software like Adobe Suite, Photoshop and content
            management systems
          </li>
          <li>An ability to perform well in a fast-paced environment</li>
          <li>Excellent analytical and multitasking skills</li>
          <li>BSc degree in Computer Science or relevant field</li>
        </div>
      </div>
      <div class="content__right">
        <div
          v-for="(item, index) in list"
          :key="index"
          class="content__right--list"
        >
          <img :src="item.img" />
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import backicon from "../assets/images/back.svg";
import editicon from "../assets/images/edit.svg";
import delicon from "../assets/images/del.svg";
import addicon from "../assets/images/addicon.svg";
import avatar1 from "../assets/images/avatar1.svg";
import avatar2 from "../assets/images/avatar2.svg";
import avatar3 from "../assets/images/avatar3.svg";
import avatar4 from "../assets/images/avatar4.svg";
import orangerectangle from "../assets/images/orangerectangle.svg";
import greenrectangle from "../assets/images/greenrectangle.svg";
export default {
  components: {},
  data() {
    return {
      backicon,
      greenrectangle,
      orangerectangle,
      editicon,
      addicon,
      delicon,
      isRHR: true,
      isAdmin:true,
      status: {
        number: "2",
        prioritized: "Gấp",
        dayrequest: "21/08/2022",
        dayonboard: "10/09/2022",
        status: "Active",
      },
      list: [
        {
          name: "Nguyễn Văn A",
          img: avatar1,
        },
        {
          name: "Nguyễn Văn A",
          img: avatar2,
        },
        {
          name: "Nguyễn Văn A",
          img: avatar3,
        },
        {
          name: "Nguyễn Văn A",
          img: avatar4,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
@use "../assets/style/abstracts/colors" as *;
#jobdetail {
  text-align: left;
  background-color: $WHITE_F5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  .jobdetail {
    width: 100%;
    display: flex;
    flex-direction: row;
    &__header {
      width: 70%;
      padding: 20px 13px 20px 34px;
      background: $WHITE;
      border-radius: 14px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      &-left {
        display: flex;
        flex-direction: row;
        &.backicon {
          margin-right: 16px;
          cursor: pointer;
        }
        &.greenrec {
          margin-right: 10px;
        }
        & > span {
          font-weight: bold;
          font-size: 16px;
          line-height: 20px;
          color: $BLACK_05;
          margin: auto;
        }
      }
      &-right {
        & > img {
          cursor: pointer;
          margin-left: 16px;
        }
      }
    }
    &__header2 {
      width: 30%;
      padding: 20px 16px 20px 16px;
      background: $WHITE;
      border-radius: 14px;
      margin-left: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      &-left {
        & > img {
          margin-right: 10px;
        }
        & > span {
          font-weight: bold;
          font-size: 16px;
          line-height: 20px;
          color: $BLACK_05;
          margin: auto 0;
        }
      }
      &-right{
        & > img {
            cursor: pointer;
        }
      }
    }
  }
  .content {
    display: flex;
    flex-direction: row;
    &__title {
      padding: 13px 34px;
      background: $GRAY_EE;
    }
    ::-webkit-scrollbar {
      width: 7px;
      background: $WHITE;
      border-radius: 3.5px;
      height: 73px;
      overflow: hidden;
    }
    ::-webkit-scrollbar-thumb {
      background: $GRAY_D9;
      border-radius: 10px;
    }
    &__left {
      width: 70%;
      background: $WHITE;
      border-radius: 14px;
      margin-top: 6px;
      padding: 0;
      &.header {
        width: 100%;
        padding: 0 34px;
        & > h1 {
          font-weight: 700;
          font-size: 50px;
          line-height: 61px;
          color: $BLUE_3C;
          padding-top: 10px;
        }
        & > p {
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          color: $GRAY_71;
        }
        & > hr {
          border: 1px solid #e1e1e1;
          margin: 20px 0;
        }
      }
      &.status {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 34px;
      }
      &-number,
      &-prioritized,
      &-dayrequest,
      &-dayonboard,
      &-status1 {
        margin-right: 21px;
        & > p {
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          color: $GRAY_94;
          text-align: center;
          margin-bottom: 8px;
        }
        & > h1 {
          font-weight: 700;
          font-size: 24px;
          line-height: 29px;
          color: $BLUE_3C;
          text-align: center;
          margin-bottom: 0;
        }
      }
      &.body {
        padding: 0 34px;
        max-height: 430px;
        overflow-y: scroll;
        width: 100%;
        & > p {
          margin: 14px 0 0 0;
          font-weight: bold;
        }
      }
      & > hr {
        margin: 20px 34px;
        border: 1px solid #e1e1e1;
      }
    }
    &__right {
      width: 30%;
      margin-top: 6px;
      padding: 16px;
      margin-left: 20px;
      background: $WHITE;
      border-radius: 14px;
      &--list {
        margin-bottom: 16px;
        & > img {
          margin-right: 16px;
        }
        & > span {
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          color: $BLUE_1E;
        }
      }
    }
  }
}
</style>
