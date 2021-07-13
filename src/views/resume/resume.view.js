import { resumeHeader } from './resume-header.component.js';
import { resumeWorkExperienceItem } from './resume-work-experience-item.component.js';
import { resumeAwardItem } from './resume-award-item.component.js';
import { resumeInitiativeItem } from './resume-initiative-item.component.js';
import { resumeEducationItem } from './resume-education-item.component.js';
import { resumeLanguageItem } from './resume-language-item.component.js';

const template = `
<div id="resume" class="cv container">
    <resume-header v-bind:resume="resume"></resume-header>

    <div class="content">
        <div class="section pt-4 ps-4 pe-4 pb-2">
            <div class="mb-2">
                <span class="title">WORK EXPERIENCE</span>
            </div>
            <resume-work-experience-item 
                v-for="experience in resume.experiences"
                v-bind:experience="experience">
            </resume-work-experience-item>
        </div>

        <div class="section pt-4 pr-4 pl-4 pb-2">
            <div class="mb-2">
                <span class="title">AWARDS</span>
            </div>
            <resume-award-item 
                v-for="award in resume.awards"
                v-bind:award="award">
            </resume-award-item>
        </div>

        <div class="section pt-4 pr-4 pl-4 pb-2">
            <div class="mb-2">
                <span class="title">INITIATIVES</span>
            </div>
            <resume-initiative-item 
                v-for="initiative in resume.initiatives"
                v-bind:initiative="initiative">
            </resume-initiative-item>
        </div>

        <div class="section pt-4 pr-4 pl-4 pb-2">
            <div class="mb-2">
                <span class="title">EDUCATION</span>
            </div>
            <resume-education-item 
                v-for="education in resume.education"
                v-bind:education="education">
            </resume-education-item>
        </div>

        <div class="section pt-4 pr-4 pl-4 pb-2">
        <div class="mb-2">
            <span class="title">LANGUAGES</span>
        </div>
        <resume-language-item 
            v-for="language in resume.languages"
            v-bind:language="language">
        </resume-language-item>
    </div>
    </div>
</div>
`

const resumeView = Vue.component('resume-view', {
    template,
    data: function () {
        return {
            resume: {
                experiences: []
            }
        }
    },
    created: async function () {
        const request = await fetch('/data/json/resume-data.json');
        const resume = await request.json();

        this.resume = resume;
    }
});


export {
    resumeView
}