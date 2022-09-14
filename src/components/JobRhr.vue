<template>
  <div id="job-rhr">
    <div class="header d-flex justify-content-between">
      <div class="header__left font-size-16 d-flex justify-content-between">
        <div 
          class="header__left--button h-100 d-flex align-items-center justify-content-center" 
          :class="activeTab === TAB_ACTIVE  ? 'active' : ''"
          @click="changeTab(TAB_ACTIVE)"
        >
          {{ $i18n.t('button.active') }}
        </div>
        <div 
          class="header__left--button h-100 d-flex align-items-center justify-content-center"
          :class="activeTab === TAB_INACTIVE  ? 'active' : ''"
          @click="changeTab(TAB_INACTIVE)"
        >
          {{ $i18n.t('button.inactive') }}
        </div>
      </div>
      <div class="header__right">
        <button class="header__right-export font-size-14">
          <img src="@/assets/images/icon-export.svg" class="margin-right-13" alt="">
          {{ $i18n.t('button.export') }}
        </button>
      </div>
    </div>
    <div class="content">
      <div class="content_header">
        <div class="content_header--top">
          <div class="content_header--top-filter margin-bottom-20">
            <p class="font-size-18 font-weight-7 mb-0">{{ $i18n.t('header.filter') }}</p>
          </div>
          <div class="margin-bottom-20 content_header--top__border" />
          <div class="d-flex flex-wrap margin-bottom-20">
            <div class="text-left d-flex flex-column">
              <label for="job" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.job') }}
              </label>
              <input
                :placeholder="$i18n.t('placeholder.job')"
                v-model="filter['job']"
                class="content_header__input __job border-radius-14 margin-right-20"
              />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="company" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.company') }}
              </label>
              <AppSelect
                :options="LIST_COMPANIES"
                :emptyOption="false"
                :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['company']"
                @changeValue="onSelect($event, 'company')"
                class="content_header__input border-radius-14 margin-right-20"
              />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="block" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.block') }}
              </label>
              <AppSelect
                :options="LIST_COMPANIES"
                :emptyOption="false"
                :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['block']"
                @changeValue="onSelect($event, 'block')"
                class="content_header__input border-radius-14 margin-right-20"
              />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="group" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.group') }}
              </label>
              <AppSelect
                :options="LIST_COMPANIES"
                :emptyOption="false"
                :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['group']"
                @changeValue="onSelect($event, 'group')"
                class="content_header__input border-radius-14 margin-right-20"
              />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="time_start" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.time_start') }}
              </label>
              <div class="date-picker-input content_header__input">
                <a-date-picker
                  class="f-height w-100 h-100 border-radius-14"
                  format="YYYY/MM/DD"
                  placeholder="YYYY/MM/DD"
                  v-model:value="filter['timeStart']"
                  :allowClear="false"
                  :showToday="false"
                  :inputReadOnly="true"
                >
                  <template #suffixIcon>
                    <img src="@/assets/images/calendar.svg" height="18" width="18"/>
                  </template>
                </a-date-picker>
              </div>
            </div>
          </div>
          <div class="d-flex flex-wrap">
            <div class="text-left d-flex flex-column  margin-right-20">
              <label for="time_end" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.time_end') }}
              </label>
              <div class="date-picker-input content_header__input">
                <a-date-picker
                  class="f-height w-100 h-100 border-radius-14"
                  format="YYYY/MM/DD"
                  placeholder="YYYY/MM/DD"
                  v-model:value="filter['timeEnd']"
                  :allowClear="false"
                  :showToday="false"
                  :inputReadOnly="true"
                >
                  <template #suffixIcon>
                    <img src="@/assets/images/calendar.svg" height="18" width="18"/>
                  </template>
                </a-date-picker>
              </div>
            </div>
            <div class="text-left d-flex flex-column">
              <label for="skill" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.skill') }}
              </label>
              <AppSelect
                :options="LIST_COMPANIES"
                :emptyOption="false"
                :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['skill']"
                @changeValue="onSelect($event, 'skill')"
                class="content_header__input border-radius-14 margin-right-20"
              />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="level" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.level') }}
              </label>
              <AppSelect
                :options="LIST_COMPANIES"
                :emptyOption="false"
                :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['level']"
                @changeValue="onSelect($event, 'level')"
                class="content_header__input border-radius-14 margin-right-20"
              />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="priority" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.priority') }}
              </label>
              <AppSelect
                :options="LIST_COMPANIES"
                :emptyOption="false"
                :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['priority']"
                @changeValue="onSelect($event, 'priority')"
                class="content_header__input border-radius-14 margin-right-20"
              />
            </div>
            <div class="text-left d-flex flex-column margin-top-22">
              <button class="content_header__input border-radius-14 __button">
                <img src="@/assets/images/icon-search.svg" class="margin-right-10" alt="">
                {{ $i18n.t('button.search') }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="content_center margin-top-10">
        <p class="font-size-18 font-weight-7 mb-0 text-left">{{ $i18n.t('header.list_job') }}</p>
        <div class="content_center-list-job d-flex justify-content-between text-left">
          <div class="content_center-list-job__div">
            <div class="d-flex justify-content-between align-items-center content_center-list-job__div-header margin-bottom-12">
              <div class="d-flex align-items-center">
                <div class="border __new"></div>
                <p class="mb-0 font-size-15 font-weight-5">Open</p>
              </div>
              <div class="amount">
                {{listJobs.jobOpens.length}}
              </div>
            </div>
            <div class="content_center-list-job__div-detail" @drop="drop($event, STATUS_JOB_OPEN)" @dragover.prevent>
              <template v-for="(jobOpen, index) in listJobs.jobOpens" :key="index">
                <JobDetail draggable="true" @dragstart="drag($event, index, STATUS_JOB_OPEN)" :job="jobOpen" :class="index <= listJobs.jobOpens.length - 1 ? 'margin-bottom-12' : ''"/>
              </template>
            </div>
          </div>
          <div class="content_center-list-job__div">
            <div class="d-flex justify-content-between align-items-center content_center-list-job__div-header margin-bottom-12">
              <div class="d-flex align-items-center">
                <div class="border __pending"></div>
                <p class="mb-0 font-size-15 font-weight-5">Pending</p>
              </div>
              <div class="amount">
                {{listJobs.jobPendings.length}}
              </div>
            </div>
            <div class="content_center-list-job__div-detail"  @drop="drop($event, STATUS_JOB_PENDING)" @dragover.prevent>
              <template v-for="(jobPending, index) in listJobs.jobPendings" :key="index">
                <JobDetail draggable="true" @dragstart="drag($event, index, STATUS_JOB_PENDING)" :job="jobPending" :class="index <= listJobs.jobPendings.length - 1 ? 'margin-bottom-12' : ''"/>
              </template>
            </div>
          </div>
          <div class="content_center-list-job__div">
            <div class="d-flex justify-content-between align-items-center content_center-list-job__div-header margin-bottom-12">
              <div class="d-flex align-items-center">
                <div class="border __doing"></div>
                <p class="mb-0 font-size-15 font-weight-5">Doing</p>
              </div>
              <div class="amount">
                {{listJobs.jobDoings.length}}
              </div>
            </div>
            <div class="content_center-list-job__div-detail"  @drop="drop($event, STATUS_JOB_DOING)" @dragover.prevent>
              <template v-for="(jobDoing, index) in listJobs.jobDoings" :key="index">
                <JobDetail draggable="true" @dragstart="drag($event, index, STATUS_JOB_DOING)" :job="jobDoing" :class="index <= listJobs.jobDoings.length - 1 ? 'margin-bottom-12' : ''"/>
              </template>
            </div>
          </div>
          <div class="content_center-list-job__div">
            <div class="d-flex justify-content-between align-items-center content_center-list-job__div-header margin-bottom-12">
              <div class="d-flex align-items-center">
                <div class="border __done"></div>
                <p class="mb-0 font-size-15 font-weight-5">Done</p>
              </div>
              <div class="amount">
                {{listJobs.jobDones.length}}
              </div>
            </div>
            <div class="content_center-list-job__div-detail"  @drop="drop($event, STATUS_JOB_DONE)" @dragover.prevent>
              <template v-for="(jobDOne, index) in listJobs.jobDones" :key="index">
                <JobDetail draggable="true" @dragstart="drag($event, index, STATUS_JOB_DONE)" :job="jobDOne" :class="index <= listJobs.jobDones.length - 1 ? 'margin-bottom-12' : ''"/>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { reactive, ref, computed } from 'vue';
  import { TAB_ACTIVE, TAB_INACTIVE, LIST_COMPANIES, STATUS_JOB_OPEN, STATUS_JOB_PENDING, STATUS_JOB_DOING, STATUS_JOB_DONE } from '@/constants/job';
  import AppSelect from '@/components/AppSelect.vue';
  import JobDetail from '@/components/JobDetail.vue';
  import { useStore } from 'vuex';

  let activeTab = ref(TAB_ACTIVE);

  const filter = reactive({
    company:  null,
    job: null,
    timeStart: null,
    block: null,
    group: null,
    timeEnd: null,
    skill: null,
    level: null,
    priority: null,
  });

  const store = useStore();

  const listJobs = computed(() => store.getters['job/listJobs']);

  const changeTab = (tab) => {
    if (activeTab.value != tab) {
      activeTab.value = tab
    }
  }

  const onSelect = (data, type) => {
    filter[type] = data;
  }

  // eslint-disable-next-line no-unused-vars
  const drag = (event, index, type) => {
    event.dataTransfer.dropEffect = 'move';
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('itemIndex', index);
    event.dataTransfer.setData('type', type);
  }

  const drop = (event, type) => {
    const itemIndex = event.dataTransfer.getData('itemIndex');
    const typeItem = event.dataTransfer.getData('type');
    if (typeItem !== type) {
      const item = listJobs.value[typeItem][itemIndex];
      listJobs.value[type].push(item);
      listJobs.value[typeItem].splice(itemIndex, 1);
    }
  }

</script>
