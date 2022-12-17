const template = `
<div class="item pb-3">
    <div class="row cv-text-big fw-bold">
        <span>{{experience.role}}</span>
    </div>
    <div class="row cv-text-big">
        <span>{{experience.company}}</span>
    </div>
    <div class="row cv-text-secondary cv-text-normal fst-italic">
        <div class="col-6">
            <span class="">{{experience.from}} - {{experience.to}}</span>
        </div>
        <div class="col-6 text-end">{{experience.location}}</div>
    </div>
    <div class="row cv-text-secondary cv-text-normal fst-italic mt-1">
        <span>{{experience.description}}</span>
    </div>
    <ul>
        <li v-for="activity in experience.activities" class="cv-text-normal mt-1">
            <span>{{activity.description}}</span>
        </li>
    </ul>
</div>
`

const resumeWorkExperienceItem = Vue.component('resume-work-experience-item', {
    props: ['experience'],
    template
});


export {
    resumeWorkExperienceItem
}