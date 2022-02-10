<template>
  <div>
    <a v-for="(link, i) in topLinks" :key="i" :href="link.href">
      {{ link.text }}
    </a>
  </div>
</template>

<script>
export default {
  name: "NavMenu",

  data: () => ({
    topLinks: [
      {
        text: "Home",
        href: "/",
      },
      {
        text: "Exercises",
        href: "/Exercises",
      },
    ],
  }),
};
</script>
