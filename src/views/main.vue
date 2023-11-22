<template>
    <section class="maincontents">
        <section class="mainbanner"><img src="/images/mainimg.png" /></section>
        <section class="network">
            <h1 class="maintit">
                새로 나온 도서<span>분야별로 새로 나온 도서를 만나 보세요</span>
            </h1>
            <div class="tapcontent">
                <div class="tap">
                    <b-button variant="tap active">IT 전문서</b-button>
                    <b-button variant="tap">업무 능력, 기타</b-button>
                    <b-button variant="tap">사진 예술</b-button>
                    <b-button variant="tap">데이터 과학</b-button>
                </div>
                <VueSlickCarousel class="mainslider">
                    <div class="rollimg" v-for="(item, index) in Newbooks" :key="index">
                        <span class="imgbox"><img :src="item.imgurl" /></span>
                        <strong v-html="item.name"></strong>
                        <span class="textbox" v-html="item.subdec"></span>
                    </div>
                </VueSlickCarousel>
            </div>
        </section>
        <section class="searchbook">
            <h1 class="maintit">
                도서 검색<span>찾고자 하는 도서명을 검색해 주세요</span>
            </h1>
        </section>
        <section class="bannermenu"></section>
        <section class="notice">
            <h1 class="maintit">공지 사항</h1>
        </section>
    </section>
</template>
<script>
export default {
    data() {
        return {
            Newbooks: [
                {
                    imgurl: "/images/books_image/book01.jpg",
                    name: "Do it! 웹 사이트 따라 만들기",
                    subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹사이트를..."
                },
            ],
        };
    },
};
</script>
