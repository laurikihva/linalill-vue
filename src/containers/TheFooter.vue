<template>
  <footer :class="$style.footer">
    <div>
      <ul :class="$style.links">
        <li :class="$style.listItem">
          <a
            :class="$style.link"
            href="https://www.facebook.com/saaremaa.linasedriided?ref=br_rs"
            target="_blank"
            title="Facebook"
          >
            <svg :class="$style.svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path
                d="M16 3.98h2.19V.17a28.3 28.3 0 00-3.2-.17c-3.15 0-5.32 1.99-5.32 5.64V9H6.2v4.27h3.48V24h4.28V13.27h3.34L17.82 9h-3.87V6.06c0-1.23.33-2.08 2.05-2.08z"
              />
            </svg>
          </a>
        </li>
        <li :class="$style.listItem">
          <a :class="$style.link" href="mailto:info@linalill.ee" title="Saada meile kiri">
            <svg :class="$style.svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
              <path
                d="M467 61H45C20.22 61 0 81.2 0 106v300c0 24.72 20.13 45 45 45h422c24.72 0 45-20.13 45-45V106c0-24.72-20.13-45-45-45zm-6.21 30L256.95 294.83 51.35 91H460.8zM30 399.79V112.07L174.48 255.3 30 399.79zM51.21 421l144.57-144.57 50.66 50.22a15 15 0 0021.17-.04L317 277.2 460.79 421H51.2zM482 399.79L338.21 256 482 112.21V399.8z"
              />
            </svg>
          </a>
        </li>
        <li :class="$style.listItem">
          <a :class="$style.link" href="https://www.instagram.com/saaremaalinased/" target="_blank" title="Instagram">
            <svg :class="$style.svg" viewBox="0 0 511 511.9" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path
                d="M510.95 150.5c-1.2-27.2-5.6-45.9-11.9-62.1-6.5-17.2-16.5-32.6-29.6-45.4-12.8-13-28.3-23.1-45.3-29.5-16.3-6.3-34.9-10.7-62.1-11.9C334.65.3 325.95 0 256.45 0s-78.2.3-105.5 1.5c-27.2 1.2-45.9 5.6-62.1 11.9A124.9 124.9 0 0043.45 43c-13 12.8-23.1 28.3-29.5 45.3-6.3 16.3-10.7 34.9-11.9 62.1C.75 177.8.45 186.5.45 256s.3 78.2 1.5 105.5c1.2 27.2 5.6 45.9 11.9 62.1 6.5 17.2 16.6 32.6 29.6 45.4 12.8 13 28.3 23.1 45.3 29.5 16.3 6.3 34.9 10.7 62.1 11.9 27.3 1.2 36 1.5 105.5 1.5s78.2-.3 105.5-1.5c27.2-1.2 45.9-5.6 62.1-11.9 34.4-13.3 61.6-40.5 74.9-74.9 6.3-16.3 10.7-34.9 11.9-62.1 1.2-27.3 1.5-36 1.5-105.5s-.1-78.2-1.3-105.5zm-46.1 209c-1.1 25-5.3 38.5-8.8 47.5-8.6 22.3-26.3 40-48.6 48.6-9 3.5-22.6 7.7-47.5 8.8-27 1.2-35.1 1.5-103.4 1.5s-76.5-.3-103.4-1.5c-25-1.1-38.5-5.3-47.5-8.8a78.77 78.77 0 01-29.4-19.1c-8.5-8.3-15-18.3-19.1-29.4-3.5-9-7.7-22.6-8.8-47.5-1.2-27-1.5-35.1-1.5-103.4s.3-76.5 1.5-103.4c1.1-25 5.3-38.5 8.8-47.5a77.8 77.8 0 0119.2-29.4c8.3-8.5 18.3-15 29.4-19.1 9-3.5 22.6-7.7 47.5-8.8 27-1.2 35.1-1.5 103.4-1.5 68.4 0 76.5.3 103.4 1.5 25 1.1 38.5 5.3 47.5 8.8a78.71 78.71 0 0129.4 19.1c8.5 8.3 15 18.3 19.1 29.4 3.5 9 7.7 22.6 8.8 47.5 1.2 27 1.5 35.1 1.5 103.4s-.3 76.3-1.5 103.3zm0 0"
              />
              <path
                d="M256.45 124.5c-72.6 0-131.5 58.9-131.5 131.5s58.9 131.5 131.5 131.5 131.5-58.9 131.5-131.5-58.9-131.5-131.5-131.5zm0 216.8c-47.1 0-85.3-38.2-85.3-85.3s38.2-85.3 85.3-85.3a85.31 85.31 0 010 170.6zm0 0M423.85 119.3a30.7 30.7 0 11-61.4 0 30.7 30.7 0 0161.4 0zm0 0"
              />
            </svg>
          </a>
        </li>
      </ul>
      <div :class="$style.copyright">&copy; {{ copyright }}</div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheFooter",
  computed: {
    copyright(): string {
      const currentYear: number = new Date().getFullYear();
      return `${currentYear} Remalet OÜ`;
    },
  },
});
</script>

<style lang="scss" module>
.footer {
  display: flex;
  justify-content: center;
  background-color: rgb(232, 238, 244);
  min-height: 150px;
  padding: 2em;

  @media (min-width: $break-sm) {
    min-height: 300px;
    padding: 4em;
  }
}
.links {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 13px;
}
.link {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 45px;
  width: 45px;
  font-size: 1.5em;
  color: #fff;
  transform: translateY(0);
  transition: transform 200ms ease-in-out, background-color 200ms ease-in-out;

  &:hover {
    transform: translateY(-6px);
  }

  .listItem:nth-child(1) & {
    background-color: #7490c3;

    &:hover {
      background-color: #829bc9;
    }
  }

  .listItem:nth-child(2) & {
    background-color: #dcad8b;

    &:hover {
      background-color: #e1b89b;
    }
  }

  .listItem:nth-child(3) & {
    background-color: #9f6890;

    &:hover {
      background-color: #b387a7;
    }
  }

  @media (min-width: $break-sm) {
    width: 55px;
    height: 55px;
  }
}
.svg {
  width: 20px;
  height: 20px;

  @media (min-width: $break-sm) {
    width: 25px;
    height: 25px;
  }
}
.copyright {
  margin-top: 1.5em;
  font-size: 1.2em;
}
</style>
