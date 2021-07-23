const template = `
<div class="item">
    <div class="row cv-text-big">
        <span class="fw-bolder">{{education.title}}</span>
    </div>
    <div class="row cv-text-normal cv-text-secondary fst-italic">
        <span class="">{{education.level}} - {{education.institution}}</span>
    </div>
    <div class="row cv-text-info cv-text-normal fst-italic">
        <div class="col-6">
            <span>{{education.from}} - {{education.to}}</span>
        </div>
        <div class="col-6 text-end">{{education.location}}</div>
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