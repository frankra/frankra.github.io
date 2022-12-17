const template = `
<div class="item pb-2">
    <div class="row cv-text-big cv-text-body fw-bold">
        <span>{{award.title}}</span>
    </div>
    <div class="row cv-text-secondary cv-text-normal fst-italic">
        <div class="col-6">
            <span>{{award.date}} ({{award.institution}})</span>
        </div>
        <div class="col-6 text-end">{{award.location}}</div>
    </div>
    <ul>
        <li class="cv-text-normal mt-1">
            <span>{{award.description}}</span>
        </li>
    </ul>
</div>
`

const resumeAwardItem = Vue.component('resume-award-item', {
    props: ['award'],
    template
});


export {
    resumeAwardItem
}