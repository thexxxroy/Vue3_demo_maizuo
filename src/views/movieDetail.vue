<template>
  <div class="detail">
    <div class="herder">
      <div class="icon">
        <van-icon name="arrow-left" size="25" @click="onClickLeft" />
      </div>
      电影
    </div>

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
import { getmovieDetailList } from "@/servies/modules/movieDetail"
import { ref } from "vue"
import { useRoute } from "vue-router"
import { formatDate } from "../utils/format-date"

//返回首页
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
    color: #fff;
    height: 44px;
    font-size: 17px;
    background-color: var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .icon {
      padding: 5px;
      position: absolute;
      left: 0;
    }
  }

  .summary {
    display: flex;
    padding: 10px;
    .poster {
      img {
        width: 100px;
        height: 138px;
      }
    }
    .info {
      margin-left: 8px;
      width: 100%;
      .CN-title {
        font-size: 22px;
      }
      // .EN-title {
      //   margin-top: 3px;
      //   font-size: 16px;
      // }
      .desc {
        margin-top: 6px;
        font-size: 12px;
        color: gray;
        .nation {
          margin-bottom: 3px;
        }
        .type {
          margin-bottom: 3px;
        }
      }
      .mark {
        display: flex;
        width: 100%;
        margin-top: 8px;
        // background-color: #fff;
        justify-content: space-between;
        font-size: 15px;
        // padding: 5px;
        .wanna {
          border-radius: 8px;
          width: 120px;
          height: 33px;
          // margin-right: 20px;
          line-height: 30px;
          text-align: center;
          color: #fff;
          background-color: var(--main-color);
        }
        .watched {
          border-radius: 8px;
          width: 120px;
          height: 33px;
          line-height: 30px;
          text-align: center;
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

    text-align: center;

    .iten {
      padding-right: 8px;
      .actorPhoto {
        img {
          width: 80px;
          height: 110px;
        }
      }

      .actorRole {
        color: gray;
      }
    }
  }

  .movieStill {
    display: flex;
    overflow-x: auto;
    img {
      padding-right: 8px;
      width: 140px;
      height: 90px;
    }
  }

  .buyTicketBtn {
    padding: 0 10px 10px 10px;
  }
}
</style>
