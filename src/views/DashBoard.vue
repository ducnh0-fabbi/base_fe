<template>
  <div class="card border-0 bg-light dashboard-body">
    <div class="card-body">
      <div class="d-flex jutify-content-between mb-3">
        <div class="bg-white mx-3 rounded-3 width-half py-3">
          <p class="fw-bold">Số lượng job mới</p>
          <p class="fw-bold text-danger border-bottom m-3 size-number">{{ qty_new_jobs }}</p>
          <a href="" class="text-decoration-none">Xem chi tiết</a>
        </div>
        <div class="bg-white mx-3 rounded-3 width-half py-3">
          <p class="fw-bold">Số lượng job đang active</p>
          <p class="fw-bold text-success border-bottom m-3 size-number">{{ qty_active_jobs }}</p>
          <a href="" class="text-decoration-none">Xem chi tiết</a>
        </div>
      </div>
      <div class="bg-white mx-3 mb-3 rounded-3">
        <p class="fw-bold border-bottom mx-3 py-3">Số lượng ứng viên theo stage</p>
        <div class="d-flex list-stage">
          <div v-for="(item, index) in qty_candidate_stages" :key="index" class="w20">
            <p class="title">{{ item?.title }}</p>
            <p class="fw-bold p-3 mx-3 my-4 bg-light fs-1 rounded-3 text-primary" :class="{'text-danger': item.isFail}">{{ item?.quantity }}</p>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center bg-white mx-3 p-3 rounded-3 mb-3">
        <div class="prelabel me-2"></div>
        <label class="fw-bold">Lịch phỏng vấn trong hôm nay</label>
      </div>
      <div class="d-flex">
        <div v-for="(interview, id) in interview_schedule_todays" :key="id" class="bg-white mx-3 rounded-3 width-half">
          <div class="d-flex align-items-center justify-content-center pt-3">
            <img v-if="interview.type == 'designer'" src="@/assets/images/icon-designer.svg" alt="icon develop"
              class="mx-2">
            <img v-if="interview.type == 'developer'" src="@/assets/images/icon-developer.svg" alt="icon design"
              class="mx-2">
            <label class="fw-bold">{{ interview.position }}</label>
          </div>
          <p class="fw-bold text-primary mx-3 my-0 size-number">{{ interview.time }}</p>
          <p class="fw-bold text-secondary">{{ interview.candidate }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue';

let qty_new_jobs = ref(12);
let qty_active_jobs = ref(10);
let qty_candidate_stages = reactive([
  {
    title: "Nộp CV",
    quantity: 18,
    isFail: false,
  },
  {
    title: "Pass CV",
    quantity: 15,
    isFail: false,
  },
  {
    title: "Pass phỏng vấn",
    quantity: 10,
    isFail: false,
  },
  {
    title: "Chưa có kế hoạch thử việc",
    quantity: 10,
    isFail: false,
  },
  {
    title: "Sắp hết thử việc",
    quantity: 14,
    isFail: false,
  },
  {
    title: "Fail CV",
    quantity: 3,
    isFail: true,
  },
  {
    title: "Fail phỏng vấn",
    quantity: 5,
    isFail: true,
  },
]);
let interview_schedule_todays = reactive([
  {
    type: "developer",
    position: "Senior Developer",
    time: "09:30",
    candidate: "Nguyễn Văn A"
  },
  {
    type: "designer",
    position: "Graphic Designer",
    time: "16:00",
    candidate: "Võ Văn B"
  },
  {
    type: "developer",
    position: "Junior Developer",
    time: "10:15",
    candidate: "Nguyễn Văn Á"
  },
]);
</script>