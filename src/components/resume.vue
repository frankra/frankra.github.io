<script setup>
import resume from "../../data/resume/resume.json";
defineProps({
  resume: resume
})
</script>

<template>
  <div>
    <!-- Header -->
    <div class="text-center">
      <h2 class="text-uppercase mb-0">{{ resume.name }}</h2>
      <h4 class="fw-normal mb-0">{{ resume.role }}</h4>
      <div class="d-flex justify-content-center mx-auto gap-4">
        <p>{{ resume.phone }}</p>
        <p>{{ resume.email }}</p>
        <p>{{ resume.linkedinUrl }}</p>
        <p>{{ resume.location }}</p>
      </div>
    </div>

    <!-- Summary -->
    <h4 class="text-center fw-normal pt-4">Summary</h4>
    <hr class="mt-2 mb-2" />
    <p>{{ resume.description }}</p>

    <!-- Experience -->
    <h4 class="text-center fw-normal pt-4">Experience</h4>
    <hr class="mt-2 mb-2" />
    <div>
      <div class="mb-4" v-for="experience in resume.experiences" :key="experience.role">
        <div class="d-flex justify-content-between">
          <p class="mb-0 text-accent-lg">{{ experience.company }}</p>
          <p class="mb-0">{{ experience.location }}</p>
        </div>
        <div class="d-flex justify-content-between">
          <p class="mb-0 text-accent-md">{{ experience.role }}</p>
          <p class="mb-0">{{ experience.from }} - {{ experience.to }}</p>
        </div>
        <div>
          <span v-for="(skill, index) in experience.skills" :key="skill">
            {{ skill }}<span v-if="index < experience.skills.length - 1">, </span>
          </span>
        </div>
        <!-- <p>{{ experience.description }}</p> -->
        <ul class="ps-4">
          <li v-for="activity in experience.activities" :key="activity.description">
            {{ activity.description }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Education -->
    <h4 class="text-center fw-normal pt-4">Education</h4>
    <hr class="mt-2 mb-2" />
    <div>
      <div v-for="education in resume.education" :key="education.title">
        <div class="d-flex justify-content-between">
          <p class="mb-0">{{ education.institution }}</p>
          <p class="mb-0">{{ education.location }}</p>
        </div>
        <div class="d-flex justify-content-between">
          <p class="mb-0">{{ education.title }}</p>
          <p class="mb-0">{{ education.from }} - {{ education.to }}</p>
        </div>
        <ul class="ps-4">
          <li v-for="activity in education.activities" :key="activity.description">
            {{ activity.description }}
          </li>
        </ul>
      </div>
    </div>
  </div>


</template>

<style scoped></style>
