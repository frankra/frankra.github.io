const template = `
<div class="initiative-item item">
    <div class="row">
        <span>{{initiative.title}}</span>
    </div>
    <div class="row">
        <span class="text-secondary">{{initiative.date}}, {{initiative.institution}}</span>
    </div>
    <ul>
        <li>
            <span>{{initiative.description}}</span>
        </li>
    </ul>
</div>
`

const resumeInitiativeItem = Vue.component('resume-initiative-item', {
    props: ['initiative'],
    template
});


export {
    resumeInitiativeItem
}