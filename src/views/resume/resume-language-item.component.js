const template = `
<li class="cv-text-normal">
    <span>{{language.name}} ({{language.proficiency}})</span>
</li>
`

const resumeLanguageItem = Vue.component('resume-language-item', {
    props: ['language'],
    template
});


export {
    resumeLanguageItem
}