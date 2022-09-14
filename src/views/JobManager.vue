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
              :value="job"
              @input="handleChange"
            />
          </div>
          <div class="search__body container">
            <label for="company">Công ty</label>
            <select v-model="company">
              <option disabled value="">Lựa chọn</option>
              <option>Fabbi JSC</option>
              <option>Saab</option>
              <option>Mercedes</option>
              <option>Audi</option>
            </select>
          </div>
          <div class="search__body container">
            <label for="company">Khối</label>
            <select v-model="block">
              <option disabled value="">Lựa chọn</option>
              <option>F1</option>
              <option>F2</option>
            </select>
          </div>
          <div class="search__body container">
            <label for="company">Bộ phận</label>
            <select v-model="unit">
              <option disabled value="">Lựa chọn</option>
              <option>Bộ phận phát triển số 1</option>
              <option>Bộ phận phát triển số 2</option>
            </select>
          </div>
          <div class="search__body container">
            <p>Thời gian bắt đầu</p>
            <input type="text" placeholder="DD/MM/YYYY" v-model="startday" />
            <img :src="calenderIcon" />
          </div>
        </div>
        <div class="search__body container">
          <p>Thời gian kết thúc</p>
          <div>
            <input type="text" placeholder="DD/MM/YYYY" v-model="endday" />
            <img :src="calenderIcon" />
            <button @click="search">
              Tìm kiếm
              <img class="search__body container--searchicon" :src="searchicon" />
            </button>
          </div>
        </div>
      </div>
      <div class="listjob">
        <div class="listjob__header">
          <h1>Danh sách jobs</h1>
          <div class="listjob__header addjob">
            <img :src="btnAdd" />
            <p>Thêm job</p>
          </div>
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
            :class="key === index ? 'focus' : ''"
            @click="onFocus(index)"
          >
            <p class="listjob__body body--job">{{ item.job }}</p>
            <p class="listjob__body body--company">{{ item.company }}</p>
            <p class="listjob__body body--block">{{ item.block }}</p>
            <p class="listjob__body body--unit">{{ item.unit }}</p>
            <p class="listjob__body body--numberneed">{{ item.numberneed }}</p>
            <p class="listjob__body body--numberhave">{{ item.numberhave }}</p>
            <p class="listjob__body body--startday">{{ item.startday }}</p>
            <p class="listjob__body body--endday">{{ item.endday }}</p>
            <p class="listjob__body body--action">
              <img v-if="!action" :src="actionIcon" @click="showAction" />
              <img v-if="action" :src="actionactive" @click="hideAction" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import calenderIcon from "../assets/images/akar-icons_calendar.svg";
  import actionIcon from "../assets/images/action.svg";
  import actionactive from "../assets/images/actionactive.svg";
  import btnAdd from "../assets/images/btnAdd.svg";
  import searchicon from "../assets/images/searchicon.svg";
  export default {
    components: {},
    data() {
      return {
        calenderIcon,
        actionIcon,
        actionactive,
        btnAdd,
        searchicon,
        key: -1,
        job: "",
        company: "",
        block: "",
        unit: "",
        startday: "",
        endday: "",
        action: false,
  
        listjob: [
          {
            job: "Senior developer",
            company: "Fabbi JSC",
            block: "F1",
            unit: "Bộ phận phát triển số 1",
            numberneed: "2",
            numberhave: "1/2",
            startday: "19/08/2022",
            endday: "20/09/2022",
          },
          {
            job: "Junior developer",
            company: "Fabbi JSC",
            block: "F1",
            unit: "Bộ phận phát triển số 1",
            numberneed: "2",
            numberhave: "1/2",
            startday: "19/08/2022",
            endday: "20/09/2022",
          },
          {
            job: "Senior developer",
            company: "",
            block: "",
            unit: "",
            numberneed: "",
            numberhave: "",
            startday: "",
            endday: "",
          },
          {
            job: "Senior developer",
            company: "Fabbi JSC",
            block: "F1",
            unit: "Bộ phận phát triển số 1",
            numberneed: "2",
            numberhave: "1/2",
            startday: "19/08/2022",
            endday: "20/09/2022",
          },
        ],
        new: [],
      };
    },
    methods: {
      active() {
        if (this.action == true) this.action = false;
        else this.action = true;
      },
      onFocus(e) {
        this.key = e;
      },
      handleChange(e) {
        this.job = e.target.value;
      },
      search() {
        const searchJob = this.job;
        const searchCompany = this.company;
        const searchBlock = this.block;
        const searchUnit = this.unit;
        const searchStartDay = this.startday;
        const searchEndDay = this.endday;
        const array = this.listjob.filter(function (el) {
          return (
            el.job.match(searchJob) &&
            el.company.match(searchCompany) &&
            el.block.match(searchBlock) &&
            el.unit.match(searchUnit) &&
            el.startday.match(searchStartDay) &&
            el.endday.match(searchEndDay)
          );
        });
        this.listjob = array;
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  @import '../assets/style/pages/jobs.scss';
  </style>
  