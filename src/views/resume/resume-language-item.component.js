const template = `
<div class="language-item mb-4">
    <ul>
        <li>
            <span>{{language.name}} ({{language.proficiency}})</span>
        </li>
    </ul>
</div>
`

const resumeLanguageItem = Vue.component('resume-language-item', {
    props: ['language'],
    template
});


export {
    resumeLanguageItem
}