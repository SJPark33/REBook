<template>
  <div class="card" :style="elStyle">
    <div class="content">
      <h2 class="title">{{ book.book.title }}</h2>
      <p class="rate">★ 5.0</p>
      <p class="copy">
        {{ book.review }}
      </p>
      <BookModal :book="book" :src="src" />
    </div>
  </div>
</template>

<script>
import BookModal from "./BookModal.vue";
import bookdata from "@/assets/bookdata/bookdata.json";

export default {
  name: "BookHover",
  props: {
    book: {
      type: Object,
    },
  },
  data() {
    return {
      bookdata: bookdata,
      src: null,
    };
  },
  components: {
    BookModal,
  },
  created() {
    var temp = this.bookdata.filter((data) => {
      return data.isbn.includes(this.book.book.isbn);
    });
    this.src = temp[0].book_image_path;
  },
  computed: {
    elStyle() {
      return {
        "background-image": `url(${this.src})`,
      };
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Cardo:400i|Rubik:400,700&display=swap");
:root {
  --d: 700ms;
  --e: cubic-bezier(0.19, 1, 0.22, 1);
  --font-sans: "Rubik", sans-serif;
  --font-serif: "Cardo", serif;
}

* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
}

.card {
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  /* padding: 1rem; */
  width: 220px;
  text-align: center;
  color: whitesmoke;
  background-color: whitesmoke;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1);
  background-size: cover;
  background-position: center;
}
@media (min-width: 600px) {
  .card {
    height: 300px;
  }
}
.card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 0 0;
  transition: transform calc(700ms * 1.5) var;
  pointer-events: none;
}
.card:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  pointer-events: none;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.009) 11.7%,
    rgba(0, 0, 0, 0.034) 22.1%,
    rgba(0, 0, 0, 0.072) 31.2%,
    rgba(0, 0, 0, 0.123) 39.4%,
    rgba(0, 0, 0, 0.182) 46.6%,
    rgba(0, 0, 0, 0.249) 53.1%,
    rgba(0, 0, 0, 0.32) 58.9%,
    rgba(0, 0, 0, 0.394) 64.3%,
    rgba(0, 0, 0, 0.468) 69.3%,
    rgba(0, 0, 0, 0.54) 74.1%,
    rgba(0, 0, 0, 0.607) 78.8%,
    rgba(0, 0, 0, 0.668) 83.6%,
    rgba(0, 0, 0, 0.721) 88.7%,
    rgba(0, 0, 0, 0.762) 94.1%,
    rgba(0, 0, 0, 0.79) 100%
  );
  transform: translateY(-50%);
  transition: transform calc(700ms * 2) cubic-bezier(0.19, 1, 0.22, 1);
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 300px;
  padding: 1rem;
  transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 1;
  background-color: #345656;
}
.content > * + * {
  margin-top: 1rem;
}

.title {
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1;
  text-shadow: 2px 2px 2px gray;
  margin-bottom: 0;
}

.rate {
  color: yellow;
  margin: 0;
}

.copy {
  font-family: var(--font-serif);
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.35;
  /* 자르기 */
  max-height: 11em;
  white-space: normal;
  text-align: left;
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}

@media (hover: hover) and (min-width: 600px) {
  .card:after {
    transform: translateY(0);
  }

  .content {
    /* content Y축 이동 */
    transform: translateY(calc(100% - 4.5rem));
  }
  .content > *:not(.title):not(.rate) {
    opacity: 0;
    transform: translateY(1rem);
    transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1),
      opacity 700ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  .card:hover,
  .card:focus-within {
    align-items: center;
  }
  .card:hover:before,
  .card:focus-within:before {
    transform: translateY(-4%);
  }
  .card:hover:after,
  .card:focus-within:after {
    transform: translateY(-50%);
  }
  .card:hover .content,
  .card:focus-within .content {
    transform: translateY(12%);
  }
  .card:hover .content > *:not(.title),
  .card:focus-within .content > *:not(.title) {
    opacity: 1;
    transform: translateY(0);
    transition-delay: calc(700ms / 8);
  }

  .card:focus-within:before,
  .card:focus-within:after,
  .card:focus-within .content,
  .card:focus-within .content > *:not(.title) {
    transition-duration: 0s;
  }
}
</style>
