import { resumeHeader } from './resume-header.component.js';
import { resumeWorkExperienceItem } from './resume-work-experience-item.component.js';
import { resumeAwardItem } from './resume-award-item.component.js';
import { resumeInitiativeItem } from './resume-initiative-item.component.js';
import { resumeEducationItem } from './resume-education-item.component.js';
import { resumeLanguageItem } from './resume-language-item.component.js';
import { resumeInterestItem } from './resume-interest-item.component.js';

const template = `
<div id="resume" class="cv container">
    <resume-header v-bind:resume="resume"></resume-header>

    <div class="content mb-4 mt-2 ms-3 me-3">
        <div class="section col-sm-6 float-start p-2">
            <div class="block" v-for="experience in resume.experiences">
                <div class="mb-2">
                    <span class="title">WORK EXPERIENCE</span>
                </div>
                <resume-work-experience-item 
                    v-bind:experience="experience">
                </resume-work-experience-item>
            </div>
        </div>

        <div class="section col-sm-6 float-end p-2">
            <div class="block" v-for="award in resume.awards">
                <div class="mb-2">
                    <span class="title">AWARDS</span>
                </div>
                <resume-award-item 
                    v-bind:award="award">
                </resume-award-item>
            </div>
        </div>

        <div class="section col-sm-6 float-end p-2">
            <div class="block" v-for="initiative in resume.initiatives">
                <div class="mb-2">
                    <span class="title">INITIATIVES</span>
                </div>
                <resume-initiative-item 
                    v-bind:initiative="initiative">
                </resume-initiative-item>
            </div>
        </div>

        <div class="section col-sm-6 float-end p-2">
            <div class="block" v-for="education in resume.education">
                <div class="mb-2">
                    <span class="title">EDUCATION</span>
                </div>
                <resume-education-item 
                    v-bind:education="education">
                </resume-education-item>
            </div>
        </div>

        <div class="section col-sm-6 float-end p-2">
            <div class="block" v-for="language in resume.languages">
                <div class="mb-2">
                    <span class="title">LANGUAGES</span>
                </div>
                <ul>
                    <resume-language-item 
                        v-bind:language="language">
                    </resume-language-item>
                </ul>
            </div>
        </div>

        <div class="section col-sm-6 float-end p-2">
            <div class="block" v-for="interest in resume.interests">
                <div class="mb-2">
                    <span class="title">INTERESTS</span>
                </div>
                <div class="d-flex flex-wrap">
                    <resume-interest-item 
                        v-bind:interest="interest">
                    </resume-interest-item>
                </div>
            </div>    
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