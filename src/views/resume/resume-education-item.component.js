const template = `
<div class="education-item item">
    <div class="row">
        <span class="fw-bolder">{{education.title}}</span>
    </div>
    <div class="row">
        <span class="text-secondary">{{education.level}}</span>
    </div>
    <div class="row">
        <div class="col-6">
            <span class="title-secondary">{{education.from}} - {{education.to}}</span>
        </div>
        <div class="col-6 text-end title-secondary">{{education.location}}</div>
    </div>
</div>
`

const resumeEducationItem = Vue.component('resume-education-item', {
    props: ['education'],
    template
});


export {
    resumeEducationItem
}