<script setup>
import resume from "../../data/resume/resume.json";
defineProps({
  resume: resume
})

function toBold(text) {
  return text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
}
</script>

<template>
  <div class="resume">
    <!-- Header -->
    <div class="text-center">
      <div class="title fw-bold text-uppercase mb-1">{{ resume.name }}</div>
      <div class="text-accent-lg fw-normal mb-1">{{ resume.role }}</div>
      <div class="d-flex justify-content-center mx-auto gap-4">
        <p>{{ resume.phone }}</p>
        <p>{{ resume.email }}</p>
        <p>{{ resume.linkedinUrl }}</p>
        <p>{{ resume.location }}</p>
      </div>
    </div>

    <!-- Summary -->
    <div class="text-center text-accent-lg fw-normal pt-5">Summary</div>
    <hr class="mt-2 mb-2" />
    <p v-html="toBold(resume.description)"></p>

    <!-- Experience -->
    <div class="text-center text-accent-lg fw-normal pt-5">Experience</div>
    <hr class="mt-2 mb-2" />
    <div>
      <div class="section mb-4" v-for="experience in resume.experiences" :key="experience.role">
        <div class="d-flex justify-content-between">
          <p class="text-accent-lg">{{ experience.company }}</p>
          <p>{{ experience.location }}</p>
        </div>
        <div class="d-flex justify-content-between">
          <p class="text-accent-md">{{ experience.role }}</p>
          <p>{{ experience.from }} - {{ experience.to }}</p>
        </div>
        <div>
          <span v-for="(skill, index) in experience.skills" :key="skill">
            {{ skill }}<span v-if="index < experience.skills.length - 1">, </span>
          </span>
        </div>
        <!-- <p>{{ experience.description }}</p> -->
        <ul class="ps-4">
          <li v-for="activity in experience.activities" :key="activity.description">
            <p v-html="toBold(activity.description)"></p>
          </li>
        </ul>
      </div>
    </div>

    <!-- Education -->
    <div class="text-center text-accent-lg fw-normal pt-5">Education</div>
    <hr class="mt-2 mb-2" />
    <div>
      <div v-for="education in resume.education" :key="education.title">
        <div class="d-flex justify-content-between">
          <p class="text-accent-lg">{{ education.institution }}</p>
          <p>{{ education.location }}</p>
        </div>
        <div class="d-flex justify-content-between">
          <p class="text-accent-md">{{ education.title }}</p>
          <p>{{ education.from }} - {{ education.to }}</p>
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

<style scoped>
.resume {
  color: #545454;
}

.resume p {
  margin-bottom: 0;
}

.title {
  color: #000;
  font-size: 1.6rem;
  line-height: 1.6rem;
}

.text-accent-lg {
  color: #000;
  font-size: 1.2rem;
  line-height: 1.2rem;
}

.text-accent-md {
  color: #000;
  font-size: 1.1rem;
  line-height: 1.1rem;
}

.section {
  break-inside: avoid;
}

@media print {
  .resume {
    font-size: 8pt;
    color: #434343;
  }

  .text-accent-lg {
    font-size: 11pt !important;
    line-height: 11pt !important;
  }

  .text-accent-md {
    font-size: 10pt !important;
    line-height: 10pt !important;
  }
}

@media screen {
  .resume {
    margin-top: 50px
  }
}

@media (min-width: 960px) {
  .resume {
    width: 960px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 300px;
  }
}
</style>
