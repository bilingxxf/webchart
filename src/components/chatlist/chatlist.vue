<template>
	<div class="msglists">
        <!-- 数据列表 -->
        <div v-show="false" class="head" @click="active = !active;">
            <img v-show="active" class="direction" :src="direction.right" />
            <img v-show="!active" class="direction" :src="direction.down" />
            <span class="title">联系人</span>
        </div>
        <div v-show="!active" class="sessionlist">
            <div class="list-item" :class="{'active': index == activeIndex }" v-for="(item, index) in sessionlists" @click="selectSession(index)" :key="index">
                <div class="item-left">
                    <img :src="user.img" class="item-avatar">
                </div>
                <div class="item-right">
                    <div class="item-name">{{ item.name }}</div>
                    <div class="recent-chatinfo">{{ item.info }}</div>
                </div>
                <div class="item-data">
                    <div class="time"> 7:00AM</div>
                    <span class="info-num">20</span>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import downImg from '../../../static/images/down.png';
import rightImg from '../../../static/images/right.png';
export default {
    data () {
        return {
            sessionlists: [
                {
                    name: '王健康',
                    info: '人的本质是一段时间'
                },
                {
                    name: '王健康',
                    info: '人的本质是一段时间'
                },
                {
                    name: '王健康',
                    info: '人的本质是一段时间'
                },
                {
                    name: '王健康',
                    info: '人的本质是一段时间'
                },
                {
                    name: '王健康',
                    info: '人的本质是一段时间'
                },
                {
                    name: '王健康',
                    info: '人的本质是一段时间'
                },
                {
                    name: '王健康',
                    info: '人的本质是一段时间'
                },
                {
                    name: '王健康',
                    info: '人的本质是一段时间'
                },
                {
                    name: '王健康',
                    info: '人的本质是一段时间'
                },
                {
                    name: '王健康',
                    info: '人的本质是一段时间'
                },
               {
                    name: '王健康',
                    info: '人的本质是一段时间'
                },
                {
                    name: '王健康',
                    info: '人的本质是一段时间'
                },
                {
                    name: '王健康',
                    info: '人的本质是一段时间'
                },
               {
                    name: '王健康',
                    info: '人的本质是一段时间'
                },
                {
                    name: '王健康',
                    info: '人的本质是一段时间'
                },
                {
                    name: '王健康',
                    info: '人的本质是一段时间'
                },
            ],
            direction:{
                down: downImg,
                right: rightImg
            },
            activeIndex: 0,
            active: false
        }
    },
    computed: {
        ...mapState([
            'user',
        ])
    },
    methods: {
        selectSession(index) {
            this.activeIndex = index;
        }
    },
    filters: {
    },
    components: {
    },
    mounted() {
    },
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/base.scss';
.msglists {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .head {
        display: flex;
        align-items: center;
        height: 2rem;
    }
    .direction {
        margin: 0 0.6rem;
    }
    .title {
        color: $levelTwoTextColor;
        font-size: $levelTwoFontSize;
    }
    .sessionlist::-webkit-scrollbar {
        width: 0rem;
        height: 0rem;
    }
    .sessionlist {
        width: 100%;
        height: 49rem;
        overflow-y: auto;
        &::-webkit-scrollbar-thumb {
            background-color: #CCC9C7;
            border-radius: 0.5rem;
            -webkit-box-shadow: inset 1px 1px 0 rgba(0,0,0,.1);
        }
        &:hover::-webkit-scrollbar {
            width: 0.5rem;
            height: 0.5rem;
            float: right;
        }
        .list-item {
            position: relative;
            display: flex;
            align-items: center;
            width: 100%;
            height: 5rem;
            background: $white;
            &:nth-last-of-type(1) {
                margin-bottom: 30px;
            }
            &.active {
                background: #e3e3e3;
            }
            &:hover {
                background: #F1F1F1;
            }
            .item-right {
                display: flex;
                flex-direction: column;
            }
            .item-data {
                position: absolute;
                left: 14.35rem;
                top: 1.35rem;
                height: 100%;
                text-align: center;
                box-sizing: border-box;
                .time {
                    margin-bottom: 0.75rem;
                    font-size: $baseFont;
                    color: $levelThreeTextColor;
                }
                .info-num {
                    background: #FF5151;
                    font-size: $levelThreeFontSize;
                    height: auto;
                    border-radius: 50%;
                    color: $white;
                    padding: 0.2rem;
                }
            }
            .item-avatar {
                margin: 0 0.6rem;
                width: 2.8rem;
                height: 2.8rem;
                border-radius: 0.25rem;
            }
            .item-name {
                margin-bottom: 0.6rem;
                font-size: $levelOneFontSize;
                color: $levelOneTextColor;
            }
            .recent-chatinfo {
                font-size: $levelTwoFontSize;
                color: $levelThreeTextColor;
            }
        }
    }
}
</style>
