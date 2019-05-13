<template>
	<div class="content">
        <header>
            <div class="columns-show" v-for="(item, index) in phrase" @click="selectOperation(index)" :key="index">
                <span :class="{'active': index == active}" class="label">{{ item.title }}</span>
                <span v-if="index == active" class="line"></span>
            </div>
        </header>
        <!--列表数据 -->
        <div class="list">
            <div v-if="active == 0" class="phras-list">
                <p @dblclick="copy" v-for="(item, index) in phraslist" :class="{'active': copysuccess}" class="copy-btn" :data-clipboard-text="item.content" :key="index">{{ item.name }}  {{ item.content }}</p>
            </div>
        </div>
	</div>
</template>

<script>
import Clipboard from "clipboard";
export default {
    data() {
        return {
            phrase: [
                {
                    title: '常用语'
                },
                {
                    title: '自动回复'
                }
            ],
            active: 0,
            copysuccess: false,
            phraslist: [
                {
                    name: '小红',
                    content: '你可不可以给我发个红包包包包包包包包包'
                },
                {
                    name: '小绿',
                    content: '幸会幸会幸会幸会'
                }
            ]

        }
    },
    methods: {
        selectOperation(index) {
            this.active = index;
        },
        copy() {
        let clipboard = new Clipboard(".copy-btn");
            clipboard.on("success", e => {
                clipboard.destroy();
                console.log('chenggong');
                this.copysuccess = true;
            });
            clipboard.on("error", e => {
                clipboard.destroy();
                this.copysuccess = false;
            });
        }
    },
    components: {
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/base.scss';
.content {
    header {
        display: flex;
        padding-top: 3.35rem;
        width: 100%;
        height: 5rem;
        border-bottom: $border;
        box-sizing: border-box;
        .columns-show {
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            .label {
                font-size: $levelOneFontSize;
                color: $levelTwoTextColor;
                &.active {
                    color: $textSelectBg;
                }
            }
            .line {
                margin-top: 0.5rem;
                height: 0.2rem;
                width: 1rem;
                background: #4CAFDB;
            }
        }
    }
    .list {
        width: 100%;
        height: 100%;
        p {
            color: $levelThreeTextColor;
            font-size: $levelThreeFontSize;
            &:hover {
                background: $levelThreeBg;
                opacity: 0.45;
                color: $white;
            }
        }
    }
    .success {
        background: #0A7AFF!important;
    }
}
</style>
