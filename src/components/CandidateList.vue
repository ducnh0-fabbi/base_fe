<template>
  <div class="card border-0" id="user-candidate">
    <div class="content mt-3">
      <div class="content_header mb-3">
        <div class="content_header--top">
          <div class="content_header--top-filter margin-bottom-20">
            <p class="font-size-18 font-weight-7 mb-0">{{ $i18n.t('header.filter') }}</p>
          </div>
          <div class="margin-bottom-20 content_header--top__border" />
          <div class="d-flex flex-wrap margin-bottom-20">
            <div class="text-left d-flex flex-column">
              <label for="username" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.username') }}
              </label>
              <input :placeholder="$i18n.t('placeholder.username')" v-model="filter['username']"
                class="content_header__input __job border-radius-14 margin-right-20" />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="company" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.position') }}
              </label>
              <AppSelect :options="LIST_POSITION" :emptyOption="false" :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['position']" @changeValue="onSelect($event, 'position')"
                class="content_header__input border-radius-14 margin-right-20" />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="salary" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.salary') }}
              </label>
              <input :placeholder="$i18n.t('placeholder.salary_min')" v-model="filter['salary_min']"
                class="content_header__input __job border-radius-14 margin-right-20" />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="group" class="font-weight-7 font-size-14">
                &nbsp;
              </label>
              <input :placeholder="$i18n.t('placeholder.salary_max')" v-model="filter['salary_max']"
                class="content_header__input __job border-radius-14 margin-right-20" />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="stage" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.stage') }}
              </label>
              <div class="date-picker-input content_header__input">
                <AppSelect :options="LIST_STAGE" :emptyOption="false" :placeholder="$i18n.t('placeholder.change')"
                  v-model="filter['stage']" @changeValue="onSelect($event, 'stage')"
                  class="content_header__input border-radius-14 margin-right-20" />
              </div>
            </div>
          </div>
          <div class="d-flex flex-wrap">
            <div class="text-left d-flex flex-column">
              <button class="content_header__input border-radius-14 __button">
                <img src="@/assets/images/icon-search.svg" class="margin-right-10" alt="">
                {{ $i18n.t('button.search') }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="content_center">
        <div class="content_center--top">
          <p class="font-size-18 font-weight-7 mb-0">{{ $i18n.t('header.list_user') }}</p>
        </div>
        <div class="content_center--body px-3">
          <table>
            <!-- <thead> -->
              <tr class="p-2">
                <th>{{ $i18n.t('label.username') }}</th>
                <th>{{ $i18n.t('label.position') }}</th>
                <th>Level</th>
                <th>Stage hiện tại</th>
                <th>Người tiếp nhận</th>
                <th>Hành động</th>
              </tr>
            <!-- </thead> -->
            <!-- <tbody> -->
              <tr v-for="candidate in LIST_CANDIDATE" :key="candidate.id">
                <td>{{ candidate.name }}</td>
                <td>{{ candidate.position }}</td>
                <td>{{ candidate.level }}</td>
                <td>{{ candidate.stage }}</td>
                <td>{{ candidate.hr_receive }}</td>
                <td>
                  <div class="d-flex align-items-center justify-content-center text-">
                    <img src="@/assets/images/icon-detail.svg" alt="icon detail">&nbsp;
                    <a href="">Chi tiết</a>
                  </div>
                </td>
              </tr>
            <!-- </tbody> -->
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { LIST_STAGE, LIST_POSITION, LIST_CANDIDATE } from '@/constants/user-candidate';
import AppSelect from '@/components/AppSelect.vue';

const filter = reactive({
  username: null,
  position: null,
  timeStart: null,
  block: null,
  group: null,
  timeEnd: null,
  skill: null,
  level: null,
  priority: null,
});

const onSelect = (data, type) => {
  filter[type] = data;
}

</script>