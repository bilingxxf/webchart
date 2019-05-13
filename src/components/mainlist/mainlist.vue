<template>
	<div class="msglists">
        <!-- 数据列表 -->
        <div class="sessionlist">
            <div class="list-item" :class="{'active': index == activeIndex }" v-for="(item, index) in sessionlists" @click="selectSession(index)" :key="index">
                <div class="item-left">
                    <img :src="user.img" class="item-avatar">
                </div>
                <div class="item-right">
                    <div class="item-name">{{ item.name }}<span class="parentheses">( </span><span class="dot"></span> <span class="is-line">在线 )</span></div>
                    <div class="recent-chatinfo">{{ item.info }}</div>
                </div>
                <div class="item-data">
                    <span class="info-num">20</span>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data () {
        return {
            sessionlists: [
                {
                    name: '王健康',
                    info: '指定登录： 018-2'
                },
                {
                    name: '王健康',
                    info: '指定登录： 018-2'
                },
                {
                    name: '王健康',
                    info: '指定登录： 018-2'
                },
                {
                    name: '王健康',
                    info: '指定登录： 018-2'
                },
                {
                    name: '王健康',
                    info: '指定登录： 018-2'
                },
                {
                    name: '王健康',
                    info: '指定登录： 018-2'
                },
                {
                    name: '王健康',
                    info: '指定登录： 018-2'
                },
                {
                    name: '王健康',
                    info: '指定登录： 018-2'
                },
                {
                    name: '王健康',
                    info: '指定登录： 018-2'
                },
                {
                    name: '王健康',
                    info: '指定登录： 018-2'
                }
            ],
            activeIndex: 0
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
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/base.scss';
.msglists {
    width: 18rem;
    display: flex;
    overflow: hidden;
    .sessionlist::-webkit-scrollbar {
        width: 0rem;
        height: 0rem;
    }
    .sessionlist::-moz-scrollbar {
        width: 0rem;
        height: 0rem;
    }
    .sessionlist {
        width: 100%;
        height: 44rem;
        overflow-y: auto;
        overflow-x: hidden;
        &::-webkit-scrollbar-thumb {
            background-color: #CCC9C7;
            border-radius: 0.5rem;
            -webkit-box-shadow: inset 1px 1px 0 rgba(0,0,0,.1);
        }
        &::-moz-scrollbar-thumb {
            background-color: #CCC9C7;
            border-radius: 0.5rem;
            -moz-box-shadow: inset 1px 1px 0 rgba(0,0,0,.1);
        }
        &:hover::-webkit-scrollbar {
            width: 0.5rem;
            height: 0.5rem;
            float: right;
        }
        &:hover::-moz-scrollbar {
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
                position: relative;
                left: 0.25rem;
                background: $white;
                box-shadow: 1px 1px 0.5rem rgba(137, 137, 135, .45);
                border-radius: 0.2rem;
            }
            &:hover {
                background: #F1F1F1;
            }
            .item-right {
                display: flex;
                flex-direction: column;
            }
            .item-data {
                height: 100%;
                position: absolute;
                left: 15.35rem;
                top: 1.75rem;
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
                .parentheses {
                    margin-left: 0.2rem;
                    color: $levelThreeTextColor;
                }
                .is-line {
                    color: $levelThreeTextColor;
                }
                .dot {
                    display: inline-block;
                    width: 0.5rem;
                    height: 0.5rem;
                    border-radius: 0.25rem;
                    background: $greenBg;
                }
            }
            .recent-chatinfo {
                font-size: $levelTwoFontSize;
                color: $levelThreeTextColor;
            }
        }
    }
}
</style>
