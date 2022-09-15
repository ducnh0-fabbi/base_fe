<template>
    <div id="jobdetail">
      <div class="jobdetail">
        <div class="jobdetail__header">
          <div class="jobdetail__header-left">
            <router-link to="job-manager">
              <img src="@/assets/images/back.svg" class="jobdetail__header-left backicon" />
            </router-link>
            <img src="@/assets/images/greenrectangle.svg" class="jobdetail__header-left greenrec" />
            <span>Thông tin job</span>
          </div>
          <div v-if="isAdmin" class="jobdetail__header-right">
            <img src="@/assets/images/edit.svg" />
            <img src="@/assets/images/del.svg" />
          </div>
        </div>
        <div class="jobdetail__header2">
          <div class="jobdetail__header2-left">
            <img src="@/assets/images/orangerectangle.svg" />
            <span>Ứng viên</span>
          </div>
          <div v-if="!isRHR" class="jobdetail__header2-right">
            <img src="@/assets/images/addicon.svg" />
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
              <h1 :class="status.prioritized === 'Gấp' ? 'text-danger' : ''">
                {{ status.prioritized }}
              </h1>
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
  <script setup>
  import { computed } from "vue";
  import { useStore } from "vuex";
  
  const store = useStore();
  const status = computed(() => store.getters["job/jobstatus"]);
  const list = computed(() => store.getters["job/listEmployee"]);
  
  let isAdmin = true;
  let isRHR = true;
  </script>
  
  