<script setup>
import { reactive, ref } from 'vue'
let _chat_first = true;
if(window.innerWidth < 768) {
  _chat_first = false
}

const state = reactive({ tab: 'all', card: true, chat: _chat_first, ctrl: true })
function _tab(e) {
  if(state.tab==e) {
    state.card = !state.card
  } else {
    state.card = true
  }
  state.tab = e
}
function _chathidden() {
  if(window.innerWidth < 768) {
    state.chat = !state.chat
    state.ctrl = !state.ctrl
  } else {
    state.chat = !state.chat
    state.ctrl = true
  }
}
// chat ctrl
// const says = ref([
//   { user: '安田 静恵', msg: 'きっといい忘れたと思うんだけど、', datetime: '9月8日 17:01' },
//   { user: '安田 静恵', msg: '来週も来られると思う？', datetime: '9月8日 17:01' },
//   { user: '$', msg: 'そう思います', datetime: '9月8日 17:24' },
//   { user: '$', msg: 'わたしは予定がわからないけれど', datetime: '9月8日 17:25' },
//   { user: '安田 静恵', msg: 'そう', datetime: '9月8日 17:25' },
//   { user: '安田 静恵', msg: 'きっと池田さんもきてくれるわ', datetime: '9月8日 17:25' },
//   { user: '$', msg: 'わかりました', datetime: '9月8日 17:27' },
//   { user: '$', msg: 'また来週、', datetime: '9月8日 17:31' },
//   { user: '$', msg: '鈴音も一緒に誘ってみます', datetime: '9月8日 17:31' },
// ])
const says = ref([
  { user: '安田 静恵', msg: '至急連絡です！金曜日に来てくださるスタッフの方が二名ほど足りないのですがどなたかお越しいただけますか？', datetime: '9月8日 17:01' },
  { user: '$', msg: '私行けます！', datetime: '9月8日 18:00' },
  { user: '$', msg: '何時頃に行けばいいですか？', datetime: '9月8日 18:01' },
  { user: '安田 静恵', msg: '５時頃にお願いします！', datetime: '9月8日 18:10' },
  { user: '安田 静恵', msg: '言い忘れていたと思うんですけど、', datetime: '9月8日 18:10' },
])
</script>
<template>
  <!-- <div class="alert alert-warning m-3" role="alert">state.tab : {{ state.tab }}<br>state.card : {{ state.card }}</div> -->
  <div class="m-3">
    <div class="row chat_container">
      <div class="col-lg-4 col-md-6" v-if="state.ctrl">
        <div class="btn-group d-flex w-100" role="group">
          <button type="button" @click="_tab('all')" class="btn _btncard btn-info flex-fill">すべて</button>
          <button type="button" @click="_tab('proc')" class="btn _btncard btn-warning flex-fill">未対応</button>
          <button type="button" @click="_tab('warn')" class="btn _btncard btn-danger flex-fill">緊急</button>
        </div>
        <div v-if="state.card" @click="_chathidden()">
          <div class="card mt-2" v-if="state.tab === 'all'">
            <ul class="list-group">
              <button class="list-group-item list-group-item-action d-flex justify-content-between _pp"><div><img src="@/assets/demo/uid/icondemo.jpg">すべ太郎</div><span class="badge bg-danger rounded-pill m-2">1</span></button>
              <button class="list-group-item list-group-item-action d-flex justify-content-between _pp active"><div><img src="@/assets/demo/uid/icondemo.jpg">安田 静恵</div></button>
              <button class="list-group-item list-group-item-action d-flex justify-content-between _pp"><div><img src="@/assets/demo/uid/icondemo.jpg">池田 花子 - 金曜おにおん食堂</div></button>
              <button class="list-group-item list-group-item-action d-flex justify-content-between _pp"><div><img src="@/assets/demo/uid/icondemo.jpg">玉葱 食之助</div></button>
            </ul>
          </div>
          <div class="card mt-2" v-if="state.tab === 'proc'">
            <ul class="list-group">
              <button class="list-group-item list-group-item-action d-flex justify-content-between _pp"><div><img src="@/assets/demo/uid/icondemo.jpg">末太郎</div><span class="badge bg-danger rounded-pill m-2">10</span></button>
              <button class="list-group-item list-group-item-action d-flex justify-content-between _pp active"><div><img src="@/assets/demo/uid/icondemo.jpg">安田 静恵</div></button>
              <button class="list-group-item list-group-item-action d-flex justify-content-between _pp"><div><img src="@/assets/demo/uid/icondemo.jpg">玉葱 食之助 - 金曜おにおん食堂</div><span class="badge bg-danger rounded-pill m-2">12</span></button>
            </ul>
          </div>
          <div class="card mt-2" v-if="state.tab === 'warn'">
            <ul class="list-group">
              <button class="list-group-item list-group-item-action d-flex justify-content-between _pp"><div><img src="@/assets/demo/uid/icondemo.jpg">みつけるダイニング運営</div><span class="badge bg-danger rounded-pill m-2">14</span></button>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-8 col-md-6 p-4 pt-4" style="position: relative;" v-if="state.chat">
        <button type="button" class="btn-close" @click="_chathidden()"></button>
        <div class="chat" v-for="item in says">
          <div class="msg me" v-if="item.user==='$'">
            <p class="serif">{{ item.msg }}</p>
            <p class="time">{{ item.datetime }}</p>
          </div>
          <div class="msg to" v-else>
            <p class="user">{{ item.user }}</p>
            <p class="serif">{{ item.msg }}</p>
            <p class="time">{{ item.datetime }}</p>
          </div>
          </div>
        <div class="ctrl mt-4 d-flex">
          <textarea class="form-control border-secondary border-2" style="height: 65px;resize: none;"></textarea>
          <button class="btn btn-primary ms-2" style="width: 70px; height: 65px;">送信</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
._btncard {
  width: calc(100% / 3);
}
.btn-close {
  position: absolute;
  top: 1em;
  right: 1em;
}
.chat .me {
  text-align: right;
}
.msg {
  margin: 1em 0;
}
.msg p {
  margin: 0;
}
.msg .user {
  color: var(--bs-info);
  font-size: .9em;
}
.msg .serif {
  color: var(--bs-emphasis-color);
}
.msg .time {
  color: var(--bs-secondary-color);
  font-size: .8em;
  line-height: 1;
}
.chat_container {
  margin: 0 auto;
  max-width: 1200px;
}
/* ひとえらび */
._pp {
  padding: 0;
  height: 4em;
}
._pp img {
  width: 4em;
  height: 4em;
  object-fit: cover;
  margin-right: 10px;
}
</style>