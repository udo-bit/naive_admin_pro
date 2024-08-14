<script setup lang="ts">

const route = useRoute()
const router = useRouter()
const path = route.params?.path
if (path) {
  router.replace(`/${path}`)
} else {
  router.replace('/')
}
</script>

<template>

</template>


