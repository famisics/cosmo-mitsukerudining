<script setup>
import { reactive, onMounted } from 'vue';
import Calendar from '@toast-ui/calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

const state = reactive({ calendar: '', date: '' })
// const Calendar = tui.Calendar;
onMounted(() => {
  state.calendar = new Calendar('#calendar', {
    defaultView: 'month',
    useDetailPopup: true,
    timezoneName: 'Asia/Tokyo',
    isReadOnly: true,
    theme: {
      common: {
        backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--bs-body-bg'),
        dayName: {
          color: getComputedStyle(document.documentElement).getPropertyValue('--bs-body-text'),
        },
        saturday: {
          color: 'rgb(120, 200, 255)',
        },
        holiday: {
          color: 'rgb(255, 100, 100)',
        },
      },
      week: {
        nowIndicatorLabel: {
          color: 'rgb(255, 220, 100)',
          border: '1px dashed rgb(255, 220, 100)',
        },
        nowIndicatorToday: {
          border: '1px solid rgb(255, 220, 100)',
        },
        nowIndicatorPast: {
          border: '1px dashed rgb(255, 220, 100)',
        },
        nowIndicatorBullet: {
          backgroundColor: 'rgb(255, 220, 100)',
        },
      },
    },
    week: {
      taskView: false,
      dayNames: ['日', '月', '火', '水', '木', '金', '土'],
    },
    calendars: [
      {
        id: 'cal1',
        name: 'Personal',
        color: '#ffffff',
        backgroundColor: '#007562',
      },
    ],
  });
  state.date = new Date()
  state.date = (state.date.getFullYear()+'-'+('0'+(state.date.getMonth()+1)).slice(-2)+'-'+('0'+state.date.getDate()).slice(-2))
  state.calendar.createEvents([
    {
      id: 'event1',
      calendarId: 'cal1',
      title: 'おにおん食堂',
      start: new Date(state.date+'T17:00:00'),
      end: new Date(state.date+'T18:00:00'),
    },
  ]);
// 
});

</script>
<template>
  <div class="alert m-4 alert-info" role="alert">
    子ども向けみつけるダイニングは<a class="text-body" href="https://cmd-kids.stnfy.com">こちら</a>
  </div>
  <div class="mt-5 container">
    <h2>ホーム</h2>
    <p>デモイベントを 今日({{ state.date }}) の17:00に設定しています</p>
    <div class="btn-group mb-3" role="group" aria-label="基本的な混合スタイルの例">
      <button type="button" class="btn btn-danger" @click="state.calendar.prev()">次</button>
      <button type="button" class="btn btn-warning" @click="state.calendar.today()">今日</button>
      <button type="button" class="btn btn-success" @click="state.calendar.next()">前</button>
    </div>
    <div class="btn-group mb-3 ms-3" role="group" aria-label="基本的な混合スタイルの例">
      <button type="button" class="btn btn-primary" @click="state.calendar.changeView('month')">月</button>
      <button type="button" class="btn btn-primary d-none d-sm-block" @click="state.calendar.changeView('week')">週</button>
      <button type="button" class="btn btn-primary" @click="state.calendar.changeView('day')">日</button>
    </div>
    <div class="_cal_box">
      <div id="calendar" style="height: 800px;"></div>
    </div>
  </div>
</template>

<style scoped>

.ui {
  color: #007562;
}
</style>