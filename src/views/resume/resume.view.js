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
                <div class="mb-2 title">
                    <span>WORK EXPERIENCE</span>
                </div>
                <resume-work-experience-item 
                    v-bind:experience="experience">
                </resume-work-experience-item>
            </div>
        </div>

        <div class="section col-sm-6 float-end p-2">
            <div class="block" v-for="award in resume.awards">
                <div class="mb-2 title">
                    <span>AWARDS</span>
                </div>
                <resume-award-item 
                    v-bind:award="award">
                </resume-award-item>
            </div>
        </div>

        <div class="section col-sm-6 float-end p-2">
            <div class="block" v-for="initiative in resume.initiatives">
                <div class="mb-2 title">
                    <span>INITIATIVES</span>
                </div>
                <resume-initiative-item 
                    v-bind:initiative="initiative">
                </resume-initiative-item>
            </div>
        </div>

        <div class="section col-sm-6 float-end p-2">
            <div class="block" v-for="education in resume.education">
                <div class="mb-2 title">
                    <span>EDUCATION</span>
                </div>
                <resume-education-item 
                    v-bind:education="education">
                </resume-education-item>
            </div>
        </div>

        <div class="section col-sm-6 float-end p-2">
            <div class="block" v-for="language in resume.languages">
                <div class="mb-2 title">
                    <span>LANGUAGES</span>
                </div>
                <ul>
                    <resume-language-item 
                        v-bind:language="language">
                    </resume-language-item>
                </ul>
            </div>
        </div>

        <div class="section col-sm-6 float-end p-2">
            <div class="block" >
                <div class="mb-2 title">
                    <span>INTERESTS</span>
                </div>
                <div class="d-flex flex-wrap">
                    <resume-interest-item 
                        v-for="interest in resume.interests"
                        v-bind:interest="interest">
                    </resume-interest-item>
                </div>
            </div>    
        </div>
    </div>
</div>
`;


//src: https://www.papersizes.org/a-sizes-in-pixels.htm
const A4_PAGE_HEIGHT_MAP_PER_PPI = {
    // ppi : height in px
    ppi_72: 595,
    ppi_96: 794,
    ppi_150: 1240,
    ppi_300: 2480,
    ppi_600: 4960,
    ppi_720: 5953,
    ppi_1200: 9921
}

const APP_HEADER_HEIGHT_PX = 56;

const BLOCK_TITLE_DIV_SELECTOR = '.block .title';

const PAGE_HEADER_AREA_SCAN_HEIGHT_PX = 230; //shia_la_beouf_magic.gif

const resumeView = Vue.component('resume-view', {
    template,
    data: function () {
        return {
            resume: {
                experiences: []
            }
        }
    },
    methods: {
        getAllTitles() {
            return [...document.querySelectorAll(BLOCK_TITLE_DIV_SELECTOR)];
        },
        isTitleDivAfterPageBreak(titleDiv){
            const pageHeightForThisDevice = this.getPrintPageHeightForThisDevice();
            const boundingRect = titleDiv.getBoundingClientRect();
            const elementCurrentY = boundingRect.y + window.pageYOffset;
            const approxPageNumber = Math.round((elementCurrentY - document.firstChild.clientTop) / pageHeightForThisDevice);
            const scanStart = (approxPageNumber * pageHeightForThisDevice) + APP_HEADER_HEIGHT_PX;
            const scanEnd = scanStart + PAGE_HEADER_AREA_SCAN_HEIGHT_PX;
            if (elementCurrentY >= scanStart && elementCurrentY <= scanEnd) {
                return true;
            } else {
                return false;
            }
        },
        getAllTitlesAfterPageBreak() {
            return this.getAllTitles()
                .filter(titleDiv => this.isTitleDivAfterPageBreak(titleDiv))
                .map(titleDiv => titleDiv.firstChild);
        },
        addTitlesAfterPageBreakForPrinting(event) {
            this.getAllTitlesAfterPageBreak().forEach(title => {
                title.style.display = 'block';
            });
        },
        removeTitlesAddedForPrinting(event) {
            this.getAllTitlesAfterPageBreak().forEach(title => {
                title.style.display = 'none';
            });
        },
        getMonitorPPI() {
            const elem = document.createElement('div');
            elem.style.width = '1in';
            document.body.appendChild(elem);
            const ppi = elem.offsetWidth;
            document.body.removeChild(elem);
            return ppi;
        },
        getPrintPageHeightForThisDevice() {
            return A4_PAGE_HEIGHT_MAP_PER_PPI[`ppi_${this.getMonitorPPI()}`];
        },
        getDocumentHeight() {
            //get <HTML> height
            return document.firstChild.clientHeight;
        },
        getPrintPageCount() {
            return Math.round(this.getDocumentHeight() / this.getPrintPageHeightForThisDevice());
        },
        async loadResume() {
            const request = await fetch('/data/json/resume-data.json');
            const resume = await request.json();

            this.resume = resume;
        }
    },
    created: async function () {
        window.addEventListener('beforeprint', this.addTitlesAfterPageBreakForPrinting);
        window.addEventListener('afterprint', this.removeTitlesAddedForPrinting);

        await this.loadResume();
    },
    destroyed() {
        window.removeEventListener('beforeprint', this.addTitlesAfterPageBreakForPrinting);
        window.removeEventListener('afterprint', this.removeTitlesAddedForPrinting);
    }
});


export {
    resumeView
}