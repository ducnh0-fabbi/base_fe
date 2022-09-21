<template>
  <div id="candidate-detail">
    <div class="d-flex justify-content-between mx-2 header mb-1">
      <div class="bg-white mx-3 mt-3 rounded-3 card card__left">
        <div class="d-flex align-items-center px-3 py-2">
          <a href="/users" class="button border-0 bg-white"><img src="@/assets/images/icon-back2.svg" alt="back button"></a>
          <div class="prelabel prelabel__success m-2"></div>
          <label class="fw-bold fs-6" for="">{{ $i18n.t('header.user_detail') }}</label>
        </div>
      </div>
      <div class="bg-white me-3 mt-3 rounded-3 card card__right">
        <div class="d-flex align-items-center px-3 py-2 mt-2">
          <label class="prelabel prelabel__warning me-2"></label>
          <label class="fw-bold fs-6" for="">{{ $i18n.t('header.recruitment_flow') }}</label>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between mx-2 body">
      <div class="bg-white mx-3 rounded-3 card card__left">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex mx-4 mt-4">
            <img src="@/assets/images/icon-user.svg" alt="avatar" class="rounded-circle me-2 bg-secondary" width="75"
              height="75">
            <div class="ms-3">
              <div class="d-flex align-items-center justify-content-between">
                <p class="fw-bold fs-2 text-primary mb-0">{{ DETAIL_INFO.name }}</p>
              </div>
              <div class="d-flex align-items-center text-left label">
                <label>Ứng viên FABBI</label>
                <div class="mx-2 dot rounded"></div>
                <label>{{DETAIL_INFO.level}}</label>
              </div>
            </div>
          </div>
          <button class="text-right btn btn-outline-success me-5">Pass CV</button>
        </div>

        <div class="d-flex align-items-center mx-4 py-4 border-bottom">
          <img class="me-3" src="@/assets/images/icon-pdf-file.svg" alt="pdf">
          <a class="me-3" href="#">
            CV-nguyenvana.pdf
          </a>
          <a href="" class="bg-light border rounded-5 py-1 px-2">
            <img src="@/assets/images/icon-down.svg" alt="download">
          </a>
        </div>
        <div class="p-4">
          <div class="row">
            <div class="col-6 text-left">
              <label class="label" for="gender">{{ $i18n.t('label.gender') }}</label>
              <p class="value">{{ DETAIL_INFO.gender }}</p>
            </div>
            <div class="col-6 text-left">
              <label class="label" for="date_of_birth">{{ $i18n.t('label.date_of_birth') }}</label>
              <p class="value">{{ DETAIL_INFO.date_of_birth }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-6 text-left">
              <label class="label" for="phone_number">{{ $i18n.t('label.phone_number') }}</label>
              <p class="value">{{ DETAIL_INFO.phone_number }}</p>
            </div>
            <div class="col-6 text-left">
              <label class="label" for="school">{{ $i18n.t('label.school') }}</label>
              <p class="value">{{ DETAIL_INFO.school }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-6 text-left">
              <label class="label" for="email">{{ $i18n.t('label.email') }}</label>
              <p class="value">{{ DETAIL_INFO.email }}</p>
            </div>
            <div class="col-6 text-left">
              <label class="label" for="skype">Skype</label>
              <p class="value">{{ DETAIL_INFO.skype }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-6 text-left">
              <label class="label" for="foreign">{{ $i18n.t('label.foreign') }}</label>
              <p class="value">{{ DETAIL_INFO.language }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-6 text-left">
              <label class="label" for="basic_experience">{{ $i18n.t('label.basic_experience') }}</label>
              <p class="value">{{ DETAIL_INFO.level }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-6 text-left">
              <label class="label" for="salary_present">{{ $i18n.t('label.salary_present') }}</label>
              <p class="value">{{ formatPrice(DETAIL_INFO.salary_present) }}</p>
            </div>
            <div class="col-6 text-left">
              <label class="label" for="salary_desire">{{ $i18n.t('label.salary_desire') }}</label>
              <p class="value">{{ formatPrice(DETAIL_INFO.salary_desire) }}</p>
            </div>
          </div>
        </div>
        <div class="px-4 py-2 bg-label">
          <div class="row text-left">
            <div class="col-12 fw-bold fs-6">
              Nhận xét phỏng vấn
            </div>
          </div>
        </div>
        <div class="p-4">
          <div v-for="comment in DETAIL_INFO.comments" :key="comment.id" class="comment text-left">
            <p class="fw-bold fs-6 mb-0">{{comment.user}}</p>
            <p class="label mb-0">{{comment.create_at}}</p>
            <p>{{comment.content}}</p>
            <a href="#" class="d-flex align-items-center border-top border-bottom py-2 text-black mb-3">
              <img class="me-2" src="@/assets/images/icon-comment.svg" alt="">
              <label for="comment">{{ $i18n.t('button.comment') }}</label>
            </a>
          </div>
        </div>
      </div>
      <div class="bg-white me-3 rounded-3 card card__right">
        <div class="d-flex align-items-center px-3 py-2 my-4 ml-center">
          <div class="circle circle__check rounded-4">
            <img src="@/assets/images/icon-check.svg" alt="">
            <div class="ms-2 mt-2 line line__success"></div>
          </div>
          <label class="ms-4 fw-bold fs-6">Nộp CV</label>
        </div>
        <div class="d-flex align-items-center px-3 py-2 my-4 ml-center">
          <div class="circle circle__check rounded-4">
            <img src="@/assets/images/icon-circle-white.svg" alt="">
            <div class="ms-2 mt-2 line"></div>
          </div>
          <label class="ms-4 fw-bold fs-6">Test</label>
        </div>
        <div class="d-flex align-items-center px-3 py-2 my-4 ml-center">
          <div class="circle rounded-4">
            <img src="@/assets/images/icon-circle-white.svg" alt="">
            <div class="ms-2 mt-2 line"></div>
          </div>
          <label class="ms-4 fw-bold fs-6">Phỏng vấn</label>
        </div>
        <div class="d-flex align-items-center px-3 py-2 my-4 ml-center">
          <div class="circle rounded-4">
            <img src="@/assets/images/icon-circle-white.svg" alt="">
            <div class="ms-2 mt-2 line"></div>
          </div>
          <label class="ms-4 fw-bold fs-6">Offering</label>
        </div>
        <div class="d-flex align-items-center px-3 py-2 my-4 ml-center">
          <div class="circle rounded-4">
            <img src="@/assets/images/icon-circle-white.svg" alt="">
            <div class="ms-2 mt-2 line"></div>
          </div>
          <label class="ms-4 fw-bold fs-6">Pre-onboard</label>
        </div>
        <div class="d-flex align-items-center px-3 py-2 my-4 ml-center">
          <div class="circle rounded-4">
            <img src="@/assets/images/icon-circle-white.svg" alt="">
          </div>
          <label class="ms-4 fw-bold fs-6">Thử việc</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { DETAIL_INFO } from '@/constants/user-detail';
const formatPrice = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}
</script>