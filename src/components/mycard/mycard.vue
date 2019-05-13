<!-- 最左边的选择框 -->
<template>
	<div class="mycard">
	    <header>
	    	<img :src="user.img" class="avatar"/>
            <div class="user-name">{{ user.name }}</div>
	    </header>
	    <div class="navbar">
            <div @click="jumpItem(0)" class="navbar-item">
                <router-link to="/chat" class="navbar-jump" >
                    <img v-show="!wchat.actives" :src="wchat.normal" class="icon"/>
                    <img v-show="wchat.actives" :src="wchat.active" class="icon"/>
                    <div class="session" :class="{'active': wchat.actives}">{{ wchat.content }}</div>
                </router-link>
            </div>
            <div @click="jumpItem(1)" class="navbar-item">
                <router-link to="/friend" class="navbar-jump" >
                    <img  v-show="!wcontact.actives" :src="wcontact.normal" class="icon"/>
                    <img  v-show="wcontact.actives" :src="wcontact.active" class="icon"/>
                    <div class="session" :class="{'active': wcontact.actives}">{{ wcontact.content }}</div>
                </router-link>
            </div>
            <div @click="jumpItem(2)" class="navbar-item">
                <router-link to="/chat" class="navbar-jump" >
                    <img v-show="!wgroupchat.actives" :src="wgroupchat.normal" class="icon"/>
                    <img v-show="wgroupchat.actives" :src="wgroupchat.active" class="icon"/>
                    <div class="session" :class="{'active': wgroupchat.actives}">{{ wgroupchat.content }}</div>
                </router-link>
            </div>
            <div @click="jumpItem(3)" class="navbar-item">
                <router-link to="/chat" class="navbar-jump" >
                    <img v-show="!wpublicinfo.actives" :src="wpublicinfo.normal" class="icon"/>
                    <img v-show="wpublicinfo.actives" :src="wpublicinfo.active" class="icon"/>
                    <div class="session" :class="{'active': wpublicinfo.actives}">{{ wpublicinfo.content }}</div>
                </router-link>
            </div>
	    </div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
// 会话
import wchatNormal from "../../../static/images/wchat.png";
import wchatActive from "../../../static/images/wchat_active.png";
// 联系人
import wcontactNormal from "../../../static/images/contact.png";
import wcontactActive from "../../../static/images/contact_active.png";
// 群聊
import wgroupChatNormal from "../../../static/images/groupChat.png";
import wgroupChatActive from "../../../static/images/groupChat_active.png";
// 公众号
import wpublicInfoNormal from "../../../static/images/publicInfo.png";
import wpublicInfoActive from "../../../static/images/publicInfo_active.png";

export default {
    data () {
        return {
            wchat: {
                normal: wchatNormal,
                active: wchatActive,
                content: '会话',
                actives: true
            },
            wcontact: {
                normal: wcontactNormal,
                active: wcontactActive,
                content: '联系人',
                actives: false
            },
            wgroupchat: {
                normal: wgroupChatNormal,
                active: wgroupChatActive,
                content: '群聊',
                actives: false
            },
            wpublicinfo: {
                normal: wpublicInfoNormal,
                active: wpublicInfoActive,
                content: '公众号',
                actives: false
            }
        }
    },
    computed: {
        ...mapState([
            'user',
        ])
    },
    methods: {
        // 切换
        jumpItem(state) {
            this.wchat.actives = this.wcontact.actives = this.wgroupchat.actives = this.wpublicinfo.actives = false;
            switch(Number(state)) {
                case 0:
                    this.wchat.actives = true;
                    break;
                case 1:
                    this.wcontact.actives = true;
                    break;
                case 2:
                    this.wgroupchat.actives = true;
                    break;
                case 3:
                    this.wpublicinfo.actives = true;
                    break;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.mycard {
    position: relative;
    width: 100%;
    height: 100%;
    .avatar {
        margin: 1rem 0.8rem 0.8rem 0.8rem;
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 0.25rem;
    }
    .user-name {
        margin-left: 0.8rem;
        color: $white;
        font-size: $levelTwoFontSize;
        width: 2.8rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .navbar {
        margin-top: 3.3rem;
        width: 100%;
        text-align: center;
        .navbar-item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 5rem;
            .navbar-jump {
                text-decoration: none;
            }
            &:hover {
                background: rgba(255, 255, 255, .08);
            }
            .icon {
                width: 1.6rem;
                height: 1.6rem;
            }
            .session {
                font-size: $levelThreeFontSize;
                color: $levelThreeTextColor;
                border: none;
                &.active {
                    color: $textSelectBg;
                }
            }
        }
    }
}

</style>
