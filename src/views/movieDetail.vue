<template>
  <div class="detail">
    <div class="herder">
      <div class="icon">
        <van-icon name="arrow-left" size="25" @click="onClickLeft" />
      </div>
      电影
    </div>
    <header></header>
    <div class="summary">
      <div class="poster">
        <img :src="movieDetail.poster" alt="" />
      </div>
      <div class="info">
        <div class="CN-title">{{ movieDetail.name }}</div>
        <!-- <div class="EN-title">Expend4</div> -->
        <div class="desc">
          <div class="nation">
            首映时间：{{ movieDetail.premiereAt }}
            {{ movieDetail.nation }}
          </div>
          <div class="type">{{ movieDetail.category }}</div>
          <div class="time">片长 : {{ movieDetail.runtime }} 分钟</div>
        </div>
        <div class="mark">
          <div class="wanna">
            <van-icon name="like-o" color="#fff" />
            想看
          </div>
          <div class="watched">
            <van-icon name="star-o" color="#fff" />
            看过
          </div>
        </div>
      </div>
    </div>

    <div class="score">
      <p>电影评分：</p>
      <van-rate
        v-model="movieDetail.grade"
        :size="22"
        color="var(--main-color)"
        void-icon="star"
        void-color="#eee"
        allow-half
        :count="10"
      />
    </div>

    <div class="brief-introduction">
      <detail-slot title="简介" more="更多">
        <p>{{ movieDetail.synopsis }}</p>
      </detail-slot>
    </div>

    <detail-slot title="演职员" more="全部">
      <div class="actors">
        <template v-for="item in movieDetail.actors">
          <div class="iten">
            <div class="actorPhoto">
              <img :src="item.avatarAddress" alt="" />
            </div>
            <div class="actorName">{{ item.name }}</div>
            <div class="actorRole">{{ item.role }}</div>
          </div>
        </template>
      </div>
    </detail-slot>

    <detail-slot title="剧照" more="全部">
      <div class="movieStill">
        <template v-for="img in movieDetail.photos">
          <img :src="img" alt="" />
        </template>
      </div>
    </detail-slot>

    <div class="buyTicketBtn">
      <van-button type="primary" block color="var(--main-color)"
        >选座购票</van-button
      >
    </div>
  </div>
</template>

<script setup>
import detailSlot from "@/components/detail-slot.vue"
import header from "@/components/header.vue"
import { getmovieDetailList } from "@/servies/modules/movieDetail"
import { ref } from "vue"
import { useRoute } from "vue-router"
import { formatDate } from "../utils/format-date"

// //返回首页
const onClickLeft = () => history.back()

//接受movieList传来的的query参数
const router = useRoute()
const filmId = router.query.id

//获取电影详情网络请求
const movieDetail = ref({})
getmovieDetailList(filmId).then(res => {
  movieDetail.value = res.data.film
  movieDetail.value.grade = Number(movieDetail.value.grade) //评分字符串转数字
  res.data.film.premiereAt = formatDate(res.data.film.premiereAt) //格式化日期
})
</script>

<style lang="scss" scoped>
.detail {
  .herder {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    font-size: 18px;
    color: #fff;
    background-color: var(--main-color);

    .icon {
      position: absolute;
      left: 0;
      padding: 5px;
    }
  }

  .summary {
    display: flex;
    padding: 10px;
    .poster {
      img {
        width: 100px;
        height: 140px;
        border-radius: 6px;
      }
    }
    .info {
      margin-left: 8px;
      width: 100%;
      .CN-title {
        margin-bottom: 15px;
        font-size: 20px;
      }
      // .EN-title {
      //   margin-top: 3px;
      //   font-size: 16px;
      // }
      .desc {
        font-size: 13px;
        color: gray;
        .nation {
          margin-bottom: 6px;
        }
        .type {
          margin-bottom: 6px;
        }
        .time {
          margin-bottom: 6px;
        }
      }
      .mark {
        display: flex;
        justify-content: space-between;
        .wanna {
          text-align: center;
          width: 120px;
          height: 33px;
          line-height: 30px;
          border-radius: 8px;
          color: #fff;
          background-color: var(--main-color);
        }
        .watched {
          text-align: center;
          width: 120px;
          height: 33px;
          line-height: 30px;
          border-radius: 8px;

          color: #fff;
          background-color: var(--main-color);
        }
      }
    }
  }

  .score {
    display: flex;

    align-items: center;
    padding: 0 10px;
    p {
      font-size: 14px;
    }
  }

  .actors {
    display: flex;
    overflow-x: auto;
    .iten {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-right: 6px;

      .actorPhoto {
        img {
          width: 80px;
          height: 110px;
          border-radius: 6px;
        }
      }
      .actorName{
        margin-top: 6px;
      }
      .actorRole {
        margin-top: 3px;
        color: gray;
      }
    }
  }

  .movieStill {
    display: flex;
    overflow-x: auto;
    img {
      width: 140px;
      height: 90px;
      margin-right: 6px;
      border-radius: 6px;

    }
  }

  .buyTicketBtn {
    padding: 0 10px 10px 10px;
  }
}
</style>
