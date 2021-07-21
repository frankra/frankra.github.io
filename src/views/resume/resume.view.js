import { resumeHeader } from './resume-header.component.js';
import { resumeWorkExperienceItem } from './resume-work-experience-item.component.js';
import { resumeAwardItem } from './resume-award-item.component.js';
import { resumeInitiativeItem } from './resume-initiative-item.component.js';
import { resumeEducationItem } from './resume-education-item.component.js';
import { resumeLanguageItem } from './resume-language-item.component.js';
import { resumeInterestItem } from './resume-interest-item.component.js';
import { resumeSoftSkillItem } from './resume-soft-skill-item.component.js';

const template = `
<div id="resume" class="cv container">
    <div id="overlay" class="print-overlay no-print"></div>
    <resume-header v-bind:resume="resume"></resume-header>

    <div class="content pb-4 ps-3 pe-3">
        <div class="section col-sm-6 float-start ps-2 pe-2 pb-2">
            <div class="block" v-for="experience in resume.experiences">
                <div class="title">
                    <span>WORK EXPERIENCE</span>
                </div>
                <resume-work-experience-item 
                    v-bind:experience="experience">
                </resume-work-experience-item>
            </div>
        </div>

        <div class="section col-sm-6 float-end ps-2 pe-2 pb-2">
            <div class="block" v-for="award in resume.awards">
                <div class="title">
                    <span>AWARDS</span>
                </div>
                <resume-award-item 
                    v-bind:award="award">
                </resume-award-item>
            </div>
        </div>

        <div class="section col-sm-6 float-end ps-2 pe-2 pb-2">
            <div class="block" v-for="initiative in resume.initiatives">
                <div class="title">
                    <span>INITIATIVES</span>
                </div>
                <resume-initiative-item 
                    v-bind:initiative="initiative">
                </resume-initiative-item>
            </div>
        </div>

        <div class="section avoid-break-inside col-sm-6 float-end ps-2 pe-2 pb-2">
            <div class="block">
                <div class="title">
                    <span>LANGUAGES</span>
                </div>
                <ul>
                    <resume-language-item 
                        v-for="language in resume.languages"
                        v-bind:language="language">
                    </resume-language-item>
                </ul>
            </div>
        </div>

        <div class="section avoid-break-inside col-sm-6 float-end ps-2 pe-2 pb-2">
            <div class="block" v-for="education in resume.education">
                <div class="title">
                    <span>EDUCATION</span>
                </div>
                <resume-education-item 
                    v-bind:education="education">
                </resume-education-item>
            </div>
        </div>


        <div class="section col-sm-6 float-end ps-2 pe-2 pb-2">
            <div class="block" >
                <div class="title">
                    <span>SOFT SKILLS</span>
                </div>
                <div class="d-flex flex-wrap pt-2">
                    <resume-soft-skill-item 
                        v-for="softSkill in resume.softSkills"
                        v-bind:softSkill="softSkill">
                    </resume-soft-skill-item>
                </div>
            </div>    
        </div>

        <div class="section col-sm-6 float-end ps-2 pe-2 pb-2">
            <div class="block" >
                <div class="title">
                    <span>INTERESTS</span>
                </div>
                <div class="d-flex flex-wrap pt-2">
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
    ppi_72: 842,
    ppi_96: 1123,
    ppi_150: 1754,
    ppi_300: 3508,
    ppi_600: 7016,
    ppi_720: 8419,
    ppi_1200: 14032
}

const APP_HEADER_HEIGHT_PX = 56;

const BLOCK_DIV_SELECTOR = '.block';
const BLOCK_TITLE_SPAN_SELECTOR = 'div.title span';
const DEFAULT_PRINT_PAGE_WIDTH_PX = 794;
const FOOTER_APPROX_HEIGHT_PX = 30;

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
        getAllBlocks() {
            return [...document.querySelectorAll(BLOCK_DIV_SELECTOR)];
        },
        /**
         * Calculates if the block will move to the next printable page due to the css `page-brea-inside: avoid`
         * rule.
         */
        willBlockBreakIntoNextPage(block) {
            const printablePageHeightForThisDevice = this.getPrintPageHeightForThisDevice();
            const boundingRect = block.getBoundingClientRect();
            const blockCurrentY = boundingRect.y + window.pageYOffset - APP_HEADER_HEIGHT_PX;
            const blockCurrentHeight = boundingRect.height;
            const blockStartsAtPage = Math.floor(blockCurrentY / printablePageHeightForThisDevice);
            const blockEndsAtPage = Math.floor((blockCurrentY + blockCurrentHeight) / printablePageHeightForThisDevice);

            if (blockStartsAtPage != blockEndsAtPage) {
                return true;
            } else {
                return false;
            }
        },
        /**
         * 
         * @returns element[]
         */
        makeTitleVisibleOnBlocksShiftedToNextPage() {
            return this.getAllBlocks().forEach(block => {
                if (this.willBlockBreakIntoNextPage(block)) {
                    const title = block.querySelector(BLOCK_TITLE_SPAN_SELECTOR);
                    title.style.display = 'block';
                }
            });
        },
        prepareForPrinting(event) {
            this.showOverlay();
            this.defineCSSBeforePrinting();
            this.addFootersForPrinting();
            this.makeTitleVisibleOnBlocksShiftedToNextPage();
        },
        resetAfterPrinting(event) {
            location.reload();
        },
        defineCSSBeforePrinting() {
            //Mirror the same rules as in the @media print and @page css rules so that the JS calculation works
            document.querySelector('html').style.width = `${DEFAULT_PRINT_PAGE_WIDTH_PX}`;
            const resumeContainer = document.querySelector('div#resume.container');
            resumeContainer.style.margin = '0px!important';
            resumeContainer.style.padding = '0px!important';
            resumeContainer.style['max-width'] = 'unset';
        },
        showOverlay() {
            document.querySelector('#overlay').style.display = 'block';
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
        addFootersForPrinting() {
            const pageCount = this.getPrintPageCount();
            if (pageCount > 1) {
                const resumeContainer = document.querySelector('div#resume.container');
                for (let page = 1; page <= pageCount; page++) {
                    const template = document.createElement('template');
                    template.innerHTML = `
                        <div class="print-footer">
                            <span class="text-secondary">Page ${page} of ${pageCount}</span>
                        </div>
                    `.trim();
                    const footerElement = template.content.firstChild;

                    resumeContainer.append(footerElement);
                    footerElement.style.top = `${(page * this.getPrintPageHeightForThisDevice()) - FOOTER_APPROX_HEIGHT_PX}px`;
                }
            }
        },
        async loadResume() {
            const request = await fetch('/data/resume/frankra.json');
            const resume = await request.json();

            this.resume = resume;
        }
    },
    created: async function () {
        window.addEventListener('beforeprint', this.prepareForPrinting);
        window.addEventListener('afterprint', this.resetAfterPrinting);

        await this.loadResume();
    },
    destroyed() {
        window.removeEventListener('beforeprint', this.prepareForPrinting);
        window.removeEventListener('afterprint', this.resetAfterPrinting);
    }
});


export {
    resumeView
}