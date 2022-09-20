export const state = {
  listJobs: {
    jobOpens: [
      {
        name: "Junior Front-end Developer",
        company: "Fabbi JSC - F1 - SE1",
        status: "Gấp",
        time_request: "21/08/2022",
        time_onboard: "21/08/2022",
        amount: "2",
        men_request: "Luong KAM",
        type: 1,
        id: 1,
      },
      {
        name: "Junior Front-end Developer",
        company: "Fabbi JSC - F1 - SE1",
        status: "Gấp",
        time_request: "21/08/2022",
        time_onboard: "21/08/2022",
        amount: "2",
        men_request: "Luong KAM",
        type: 1,
        id: 2,
      },
    ],
    jobPendings: [
      {
        name: "Junior Front-end Developer",
        company: "Fabbi JSC - F1 - SE1",
        status: "Gấp",
        time_request: "21/08/2022",
        time_onboard: "21/08/2022",
        amount: "2",
        men_request: "Luong KAM",
        type: 2,
        id: 3,
      },
      {
        name: "Junior Front-end Developer",
        company: "Fabbi JSC - F1 - SE1",
        status: "Gấp",
        time_request: "21/08/2022",
        time_onboard: "21/08/2022",
        amount: "2",
        men_request: "Luong KAM",
        type: 2,
        id: 4,
      },
    ],
    jobDoings: [
      {
        name: "Junior Front-end Developer",
        company: "Fabbi JSC - F1 - SE1",
        status: "Gấp",
        time_request: "21/08/2022",
        time_onboard: "21/08/2022",
        amount: "2",
        men_request: "Luong KAM",
        type: 3,
        id: 5,
      },
      {
        name: "Junior Front-end Developer",
        company: "Fabbi JSC - F1 - SE1",
        status: "Gấp",
        time_request: "21/08/2022",
        time_onboard: "21/08/2022",
        amount: "2",
        men_request: "Luong KAM",
        type: 3,
        id: 6,
      },
    ],
    jobDones: [
      {
        name: "Junior Front-end Developer",
        company: "Fabbi JSC - F1 - SE1",
        status: "Gấp",
        time_request: "21/08/2022",
        time_onboard: "21/08/2022",
        amount: "2",
        men_request: "Luong KAM",
        type: 4,
        id: 7,
      },
    ],
  },
  listjob: [
    {
      id: 1,
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
      id: 2,
      job: "Junior developer",
      company: "Fabbi JSC",
      block: "F1",
      unit: "Bộ phận phát triển số 1",
      numberneed: "2",
      numberhave: "1/2",
      startday: "20/08/2022",
      endday: "20/09/2022",
    },
    {
      id: 3,
      job: "Senior developer",
      company: "Fabbi Japan",
      block: "F2",
      unit: "Bộ phận phát triển số 2",
      numberneed: "2",
      numberhave: "1/2",
      startday: "19/08/2022",
      endday: "19/09/2022",
    },
    {
      id: 4,
      job: "Senior developer",
      company: "Fabbi JSC",
      block: "F2",
      unit: "Bộ phận phát triển số 1",
      numberneed: "2",
      numberhave: "1/2",
      startday: "19/08/2022",
      endday: "20/09/2022",
    },
  ],
  jobstatus: {
    number: "2",
    prioritized: "Gấp",
    dayrequest: "21/08/2022",
    dayonboard: "10/09/2022",
    status: "Active",
  },
  listEmployee: [
    {
      name: "Nguyễn Văn A",
      img: require("@/assets/images/avatar1.svg"),
    },
    {
      name: "Nguyễn Văn A",
      img: require("@/assets/images/avatar2.svg"),
    },
    {
      name: "Nguyễn Văn A",
      img: require("@/assets/images/avatar3.svg"),
    },
    {
      name: "Nguyễn Văn A",
      img: require("@/assets/images/avatar4.svg"),
    },
  ],
};

export const getters = {
  listJobs: (state) => state.listJobs,
  listjob: (state) => state.listjob,
  jobstatus: (state) => state.jobstatus,
  listEmployee: (state) => state.listEmployee,
};
