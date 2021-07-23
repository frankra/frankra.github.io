const template = `
<div class="big-pill">
    <span>{{technicalSkill.name}}</span>
</div>
`

const resumeTechnicalSkillItem = Vue.component('resume-technical-skill-item', {
    props: ['technicalSkill'],
    template
});


export {
    resumeTechnicalSkillItem
}