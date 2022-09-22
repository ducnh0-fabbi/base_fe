<template>
  <div id="job" class="">
    <div class="tab">
      <button
        :class="action ? '' : 'active'"
        class="tab__active"
        @click="active"
      >
        Active
      </button>
      <button
        :class="action ? 'active' : ''"
        class="tab__inactive"
        @click="active"
      >
        Inactive
      </button>
    </div>
    <div class="search">
      <div class="search__header">
        <h1>Bộ lọc dữ liệu</h1>
        <hr />
      </div>
      <div class="search__body">
        <div class="search__body container">
          <p>Tên job</p>
          <input
            type="text"
            placeholder="Nhập tên job"
            v-model="filter['job']"
            @input="handleChange"
          />
        </div>
        <div class="search__body container">
          <label for="company">Công ty</label>
          <AppSelect
            :options="LIST_COMPANIES"
            :emptyOption="false"
            :placeholder="$i18n.t('placeholder.change')"
            v-model="filter['company']"
            @changeValue="onSelect($event, 'company')"
            class="border-radius-14 margin-right-20"
          />
        </div>
        <div class="search__body container">
          <label for="block">Khối</label>
          <AppSelect
            :options="LIST_BLOCKS"
            :emptyOption="false"
            :placeholder="$i18n.t('placeholder.change')"
            v-model="filter['block']"
            @changeValue="onSelect($event, 'block')"
            class="border-radius-14 margin-right-20"
          />
        </div>
        <div class="search__body container">
          <label for="unit">Bộ phận</label>
          <AppSelect
            :options="LIST_UNITS"
            :emptyOption="false"
            :placeholder="$i18n.t('placeholder.change')"
            v-model="filter['unit']"
            @changeValue="onSelect($event, 'unit')"
            class="border-radius-14 margin-right-20"
          />
        </div>
        <div class="search__body container">
          <p>Thời gian bắt đầu</p>
          <a-date-picker
            class="f-height w-100 h-100 border-radius-14"
            format="DD/MM/YYYY"
            placeholder="DD/MM/YYYY"
            v-model:value="filter['startDay']"
            :allowClear="false"
            :showToday="false"
            :inputReadOnly="true"
          >
            <template #suffixIcon>
              <img
                src="@/assets/images/akar-icons_calendar.svg"
                height="18"
                width="18"
              />
            </template>
          </a-date-picker>
        </div>
      </div>
      <div class="search__body container">
        <p>Thời gian kết thúc</p>
        <div class="search__body container-div">
          <a-date-picker
            class="f-height w-100 h-100 border-radius-14 padding-8"
            format="DD/MM/YYYY"
            placeholder="DD/MM/YYYY"
            v-model:value="filter['endDay']"
            :allowClear="false"
            :showToday="false"
            :inputReadOnly="true"
          >
            <template #suffixIcon>
              <img
                src="@/assets/images/akar-icons_calendar.svg"
                height="18"
                width="18"
              />
            </template>
          </a-date-picker>
          <button @click="search">
            Tìm kiếm
            <img
              class="search__body container--searchicon"
              src="@/assets/images/searchicon.svg"
            />
          </button>
        </div>
      </div>
    </div>
    <div class="listjob">
      <div class="listjob__header">
        <h1>Danh sách jobs</h1>
        <router-link to="add-job">
          <div class="listjob__header addjob">
            <img src="@/assets/images/btnAdd.svg" />
            <p>Thêm job</p>
          </div>
        </router-link>
      </div>
      <div class="listjob__body">
        <div class="listjob__body header">
          <p class="listjob__body header--job">Tên job</p>
          <p class="listjob__body header--company">Công ty</p>
          <p class="listjob__body header--block">Khối</p>
          <p class="listjob__body header--unit">Bộ phận</p>
          <p class="listjob__body header--numberneed">Số lượng yêu cầu</p>
          <p class="listjob__body header--numberhave">Số lượng đã tuyển</p>
          <p class="listjob__body header--startday">Thời gian bắt đầu</p>
          <p class="listjob__body header--endday">Thời gian kết thúc</p>
          <p class="listjob__body header--action">Hành động</p>
        </div>
        <div
          v-for="(item, index) in listjob"
          :key="index"
          class="listjob__body body"
          :class="key === index && isShow ? 'focus' : ''"
          @click="showMenu(index)"
        >
          <!-- <router-link
            to="job-detail"
            class="d-flex justify-content-space-between max-width-1500 w-100"
          > -->
            <p class="listjob__body body--job margin-bottom-0">
              {{ item.job }}
            </p>
            <p class="listjob__body body--company margin-bottom-0">
              {{ item.company }}
            </p>
            <p class="listjob__body body--block margin-bottom-0">
              {{ item.block }}
            </p>
            <p class="listjob__body body--unit margin-bottom-0">
              {{ item.unit }}
            </p>
            <p class="listjob__body body--numberneed margin-bottom-0">
              {{ item.numberNeed }}
            </p>
            <p class="listjob__body body--numberhave margin-bottom-0">
              {{ item.numberHave }}
            </p>
            <p class="listjob__body body--startday margin-bottom-0">
              {{ item.startDay }}
            </p>
            <p class="listjob__body body--endday margin-bottom-0">
              {{ item.endDay }}
            </p>
          <!-- </router-link> -->
          <div class="listjob__body">
            <div
              class="listjob__body body--actionicon"
              :class="key === index && isShow ? 'bg-blue' : ''"
            >
              <img
                src="@/assets/images/threedot.svg"
                @click="showMenu(index)"
              />
            </div>
            <div
              v-if="key === index && isShow"
              class="p-absolute padding-15 border-radius-14 menu"
            >
              <router-link to="job-detail">
                <div class="d-flex flex-direction-row cursor-pointer menu__hover">
                  <img src="@/assets/images/file-Filled.svg" class="margin-right-9"/>
                  <span>Chi tiết</span>
                </div>
              </router-link>
              <hr />
              <div class="d-flex flex-direction-row cursor-pointer menu__hover">
                <img src="@/assets/images/editicon.svg" class="margin-right-9"/>
                <span>Chỉnh sửa</span>
              </div>
              <hr />
              <div class="d-flex flex-direction-row cursor-pointer menu__hover">
                <img src="@/assets/images/delicon.svg" class="margin-right-9"/>
                <span>Xóa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import { LIST_COMPANIES, LIST_BLOCKS, LIST_UNITS } from "@/constants/job";
import AppSelect from "@/components/AppSelect.vue";
import { useStore } from "vuex";
import dayjs from "@/plugins/dayjs";
const filter = reactive({
  job: "",
  company: "",
  block: "",
  unit: "",
  numberNeed: "",
  numberHave: "",
  startDay: "",
  endDay: "",
});

const store = useStore();

const listjob = computed(() => store.getters["job/listjob"]);
let filterCompany = "";
let filterBlock = "";
let filterUnit = "";
let filterStartDay = "";
let filterEndDay = "";
let isShow = ref(true);
let key = ref(-1);
let action = ref(false);
const active = () => {
  if (action.value == true) action.value = false;
  else action.value = true;
};
const showMenu = (e) => {
  key.value = e;
  isShow.value = !isShow.value;
};

const onSelect = (data, type) => {
  filter[type] = data;
  switch (type) {
    case "company":
      filterCompany = LIST_COMPANIES.find((item) => item.id === data).name;
      break;
    case "block":
      filterBlock = LIST_BLOCKS.find((item) => item.id === data).name;
      break;
    case "unit":
      filterUnit = LIST_UNITS.find((item) => item.id === data).name;
      break;
  }
};

const search = () => {
  if (filter["startDay"] !== "") {
    filterStartDay = dayjs(filter["startDay"]).format("DD/MM/YYYY");
  }
  if (filter["endDay"] !== "") {
    filterEndDay = dayjs(filter["endDay"]).format("DD/MM/YYYY");
  }
  const array = listjob.value.filter(function (el) {
    return (
      el.job.match(filter["job"]) &&
      el.company.match(filterCompany) &&
      el.block.match(filterBlock) &&
      el.unit.match(filterUnit) &&
      el.startDay.match(filterStartDay) &&
      el.endDay.match(filterEndDay)
    );
  });
  if (
    !filter["job"] ||
    !filterCompany ||
    !filterBlock ||
    !filterUnit ||
    !filterStartDay ||
    !filterEndDay
  )
    for (let i = 0; i < listjob.value.length; i++) {
      listjob.value.splice(i);
    }
  for (let i = 0; i < array.length; i++) {
    listjob.value.push(array[i]);
  }
};
</script>
